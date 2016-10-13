var $ = require('jQuery');
var Handlebars = require('handlebars');
var jHandlebars = require('./plugin.js');

/*
  we want to use 
 */
var context = {};
jQuery('#target-container').template('#template-id', context);
