/*
 * Main Javascript file for {{cookiecutter.app_name}}.
 *
 * This file bundles all of your javascript together using webpack.
 */

// JavaScript modules
require("@fortawesome/fontawesome-free");
require("jquery");
require("bootstrap");
// datatables addition
require("jszip");
require("pdfmake");
var $ = require('jquery');
require("datatables.net");
require("datatables.net-bs5");
require("datatables.net-buttons-bs5");
require("datatables.net-colreorder-bs5");
require("datatables.net-datetime");
require("datatables.net-responsive-bs5");
require("datatables.net-searchbuilder-bs5");
require("datatables.net-select-bs5");


require.context(
  "../img", // context folder
  true, // include subdirectories
  /.*/, // RegExp
);

// Your own code
require("./plugins");
require("./script");
