/*eslint no-console: ["error", { allow: ["warn", "error", "info", "log"] }] */
/* eslint no-unused-vars: 0 */
const SqlConnect    = require("../controllers/SqlConnect");
const validator     = require("validator");
const Authenication = require("../controllers/StaffAuthenication");
const verify        = Authenication.verify;

module.exports = {
};