/*eslint no-console: ["error", { allow: ["warn", "error", "info", "log"] }] */
const express     = require("express");
const bodyparser  = require("body-parser");
const fileupload  = require("express-fileupload");
const cors        = require("cors");
const bearertoken = require("express-bearer-token");
const path        = require("path");
const mkdirp      = require("mkdirp");
const server = express();

const server_port = process.env.PORT || 5000;

/* ------------------------ Initialize directories ------------------------*/

mkdirp(path.join(__dirname, "assets/files"), (err) => {
    if(err) console.error(`Error occur when creating necessary directories(Error: ${err})`);
    else console.info(`${path.join(__dirname, "assets/files")} directory created.`);
});
mkdirp(path.join(__dirname, "assets/logs"), (err) => {
    if(err) console.error(`Error occur when creating necessary directories(Error: ${err})`);
    else console.info(`${path.join(__dirname, "assets/logs")} directory created.`);
});
mkdirp(path.join(__dirname, "assets/tmp"), (err) => {
    if(err) console.error(`Error occur when creating necessary directories(Error: ${err})`);
    else console.info(`${path.join(__dirname, "assets/tmp")} directory created.`);
});
mkdirp(path.join(__dirname, "assets/pics"), (err) => {
    if(err) console.error(`Error occur when creating necessary directories(Error: ${err})`);
    else console.info(`${path.join(__dirname, "assets/pics")} directory created.`);
});

/* ------------------------ SERVER CONFIGURATION ------------------------*/

// Routes import
const search     = require("./routes/search");
const users      = require("./routes/users");
const staffs     = require("./routes/staffs");
const documents  = require("./routes/documents");
const test       = require("./routes/test");
const keywords   = require("./routes/keywords");
const lecturer   = require("./routes/lecturer");
const curriculum = require("./routes/curriculum");
const course     = require("./routes/course");

// Middleware
server.use(bodyparser.urlencoded({ limit: '10mb', extended: true}));
server.use(bodyparser.json({ limit: '10mb', extended: true}));
server.use(bearertoken());
server.use(cors());
server.use(
    fileupload({
        limits: { fileSize: 10 * 1024 * 1024 /* 10MB */ },
        abortOnLimit: true,
        limitHandler: (res) => {
            return res.json({ status: "File size limit has been reached."});
        },
        useTempFiles: true,
        tempFileDir: __dirname + "/assets/tmp/"
    })
);

// Routes
//server.use("/search", search);
//server.use("/users", users)
server.use("/staffs", staffs);
server.use("/document", documents);
server.use("/keyword", keywords)
server.use("/lecturer", lecturer);
server.use("/curriculum", curriculum);
server.use("/course", course);
server.use("/users", users);
server.use("/test", test);
server.use(
    "/docs",
    express.static(path.join(__dirname, "/assets/files"))
);
server.use(
    "/pics",
    express.static(path.join(__dirname, "/assets/pics"))
);

// return 405 for other routes
server.get("*", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendStatus(405);
});


/* ------------------------ CLIENT CONFIGURATION ------------------------*/
const serveStatic = require('serve-static')

//here we are configuring dist to serve app files
server.use('/', serveStatic(path.join(__dirname, '../dist')))

// this * route is to serve project on different page routes except root `/`
server.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
})

/* ------------------------ RUN SERVER & CLIENT ------------------------- */

server.listen(server_port, () => console.info(`Server started on port : ${server_port}`));
// client.listen(client_port, () => console.info(`Client started on port : ${client_port}`));
