/* eslint no-unused-vars: 0 */
const SqlConnect = require('../controllers/SqlConnect');
const CircularJSON = require('circular-json');
const fs = require('fs');
const Authenication = require("../controllers/StudentAuthenication");
const verify        = Authenication.verify;
const path = require('path');
const validator = require('validator')
const private_key = fs.readFileSync(
  path.resolve(__dirname, "../config/private.key")
);

const cDocument = async (req, res) => {
  const name       = req.body.name !== undefined ? req.body.name : "",
        abstract   = req.body.abstract !== undefined ? req.body.abstract : "",
        students   = req.body.students !== undefined ? req.body.students.split(',') : "",
        commitees  = req.body.commitees !== undefined ? req.body.commitees.split(',') : "",
        keywords   = req.body.keywords !== undefined ? req.body.keywords.split(',') : "",
        course_id  = req.body.courseId !== undefined ? req.body.courseId : "",
        adviser_id = req.body.adviserId !== undefined ? req.body.adviserId : "",
        coadvisers = req.body.coadvisers !== undefined ? req.body.coadvisers.split(',') : "",
        connection  = SqlConnect.makeConnection(),
        privilege   = await verify(req.token, false);
  let result, statement, fileName, newPath, filePath;

  if (!name || !abstract || !commitees || !keywords || !course_id || !adviser_id) {
    console.error(
      `[Bodyparser error] : Can't find neccessary tags in req.body`
    );
    return res.status(400).json({
      success: false,
      message: "Bad Request",
      data   : {}
    });
  }

  if (privilege.pass) {
    // store the file
    if (req.files !== undefined) {
      // if a file has been uploaded
      if (req.files.thesis.truncated === false) {
        // if a file is not larger than 10MB
        if (req.files.thesis.size > 1) {
          // if a file is not less than 0MB
          let fileData = req.files.thesis;
          const extension = fileData.name.substring(
            fileData.name.lastIndexOf('.'),
            fileData.name.length
          );
          // renaming uploaded file to dt right now.
          fileName = `${Date.now()}${extension}`;
          // set a path to storing the file.
          newPath = path.join(__dirname, '../') +
                    "/assets/files/" + fileName;
          // move the temp file to the path where file are stored.
          fileData.mv(newPath, (err) => {
            if (err) {
              fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
              return res.status(400).json({
                success: false,
                message: err.message,
                data: {}
              });
            }
          })
          filePath = `/docs/${fileName}`;
        } else {
          // if the size of file less than 0.
          fs.unlink(req.files.thesis.tempFilePath, err => {console.error(err.message)});
        }
      }
    }
    // need to check the existance of course_id.
    statement = 'SELECT course_id FROM course WHERE course_id LIKE ? LIMIT 1';
    try {
      await connection.connect();
      result = await connection.query(statement, [[ course_id ]]);
    } catch (error) {
      if (!error.fatal) SqlConnect.closeConnection(connection);
      console.error({ code: error.code, msg: error.sqlMessage, sql: error.sql });
      fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
      fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        data   : {}
      });
    }
    // if couse_id doesn't existed.
    if (!result.length) {
      fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
      fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
      return res.status(400).json({
        success: false,
        message: "Wrong course_id.",
        data   : {}
      });
    }
    // need to check file existance for prevent multiple submit.
    statement = 'SELECT * FROM submit WHERE course_id LIKE ? AND student_id LIKE ? LIMIT 1';
    result = undefined;
    try {
      result = await connection.query(statement, [
        course_id,
        privilege.return_json.data.student_id
      ]);
    } catch (error) {
      if (!error.fatal) SqlConnect.closeConnection(connection);
      console.error({ code: error.code, msg: error.sqlMessage, sql: error.sql });
      fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
      fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        data   : {}
      });
    }
    if (result.length) {
      fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
      fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
      return res.status(200).json({
        success: false,
        message: "You already submited.",
        data   : {}
      });
    }
    // need to check existance of all advisers.
    result = undefined;
    statement = 'SELECT COUNT(adviser_id) AS count FROM adviser WHERE'
    const avs_lst = coadvisers === "" ? [adviser_id] : [adviser_id].concat(coadvisers);
    for (const avs_id of avs_lst) {
      if (statement[statement.length - 1] === 'E') statement += " adviser_id = ?";
      else statement += " OR adviser_id = ?";
    }
    try {
      result = await connection.query(statement, avs_lst);
    } catch (error) {
      if (!error.fatal) SqlConnect.closeConnection(connection);
      console.error({ code: error.code, msg: error.sqlMessage, sql: error.sql });
      fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
      fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        data   : {}
      });
    }
    if (result[0].count !== avs_lst.length) {
      fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
      fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
      return res.status(400).json({
        success: false,
        message: "Have some invalid adviser_id.",
        data   : {}
      });
    }

    // need to check existance of all keywords.
    result = undefined;
    statement = 'SELECT COUNT(keyword_id) AS count FROM keyword WHERE'
    for (const id of keywords) {
      if (statement[statement.length - 1] === 'E') statement += " keyword_id = ?";
      else statement += " OR keyword_id = ?";
    }
    try {
      result = await connection.query(statement, keywords);
    } catch (error) {
      if (!error.fatal) SqlConnect.closeConnection(connection);
      console.error({ code: error.code, msg: error.sqlMessage, sql: error.sql });
      fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
      fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        data   : {}
      });
    }
    if (result[0].count !== keywords.length) {
      fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
      fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
      return res.status(400).json({
        success: false,
        message: "Have some invalid keyword_id.",
        data   : {}
      });
    }
    // OPEN TRANSACTION
    try {
      connection.beginTransaction();
      // add new row to document table and get a document_id
      statement = 'INSERT INTO document(name, abstract, file_path, upload_dt, adviser_id, course_id, status) VALUES (?)';
      result = await connection.query(statement, [[
        name, 
        abstract, 
        filePath, 
        new Date().toISOString().slice(0, 19).replace('T', ' '), 
        adviser_id,
        course_id,
        0
      ]]);
      // add new row to commitee table
      if (commitees !== "") {
        statement = 'INSERT INTO commitee(document_id';
        for (let i = 0; i < commitees.length; i++) {
          statement += `, name_${i+1}`;
        }
        statement += ") VALUES(?)";
        await connection.query(statement, [[result.insertId].concat(commitees)]);
      }
      // add new row to coadviser table
      if (coadvisers !== "") {
        statement = 'INSERT INTO coadviser(document_id';
        for (let i = 0; i < coadvisers.length; i++) {
          statement += `, avs_${i+1}`;
        }
        statement += ") VALUES(?)";
        await connection.query(statement, [[result.insertId].concat(coadvisers)]);
      }
      // add new row to keyword_list table
      statement = 'INSERT INTO keyword_list(document_id';
      for (let i = 0; i < keywords.length; i++) {
        statement += `, kid_${i+1}`;
      }
      statement += ") VALUES(?)";
      await connection.query(statement, [[result.insertId].concat(keywords)]);
      // add new row to author_list
      const auts = students === "" ? [privilege.return_json.data.student_id] : 
                                     [privilege.return_json.data.student_id].concat(students);
      statement = 'INSERT INTO author_list(document_id';
      for (let i = 0; i < auts.length; i++) {
        statement += `, std_${i+1}`;
      }
      statement += ") VALUES(?)";
      await connection.query(statement, [[result.insertId].concat(auts)]);
      statement = "INSERT INTO submit VALUES(?)";
      for (const aut of auts) {
        await connection.query(statement, [[aut, course_id]]);
      }
      await connection.commit();
      SqlConnect.closeConnection(connection);
    } catch (err) {
      if (err) {
        await connection.rollback();
        if (!err.fatal) SqlConnect.closeConnection(connection);
        console.error({ code: err.code, msg: err.sqlMessage, sql: err.sql });
        fs.unlink(req.files.thesis.tempFilePath, err => {if (err) console.error(`${err.message}`)});
        fs.unlink(newPath, err => {if (err) console.error(`${err.message}`)});
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
          data   : {}
        });
      }
    }
    // END TRANSACTION
    return res.status(201).json({
      success: true,
      message: "Created",
      data   : {
        document_id: result.insertId
      }
    });
  } else {
    return res.status(privilege.status_code).json(privilege.return_json);
  }
};

const listDocuments = async (req, res) => {
  const statement = `SELECT * FROM document LIMIT ${req.params.limit}`,
        connection = SqlConnect.makeConnection();
  let results;

  if (!validator.isInt(req.params.limit)) {
    return res.status(400).json({
      success: false,
      message: "Bad request.",
      data   : {}
    });
  }

  try {
    await connection.connect();
    results = await connection.query(statement);
    SqlConnect.closeConnection(connection);
  } catch (err) {
      if (!err.fatal) SqlConnect.closeConnection(connection);
      console.error({ code: err.code, msg: err.sqlMessage, sql: err.sql });
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        data   : {}
      });
  }

  return res.status(200).json({
    success: true,
    message: "OK",
    data   : results
  });
};

module.exports = {
    listDocuments,
    cDocument
};