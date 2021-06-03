// this file is not transpiled, so must use commonjs

// register babel to transpile before our tests run
require("@babel/register")();

// disable webpack features that mocha does not understand
// from the import index.js file
require.extensions[".css"] = function () {};
