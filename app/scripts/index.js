var $ = require('jquery');
var jQuery = require('jquery');
var Handlebars = require('handlebars');
// var jHandlebars = require('./plugin');


// the most basic implementation with alias protection
(function($){

  $.fn.template = function(templateId, contextObj) {
    var source = $(templateId).html();
    var template = Handlebars.compile(source);
    var $html = $(template(contextObj));
    return $(this).append($html);
  };

}(jQuery));


/*
  we want to leverage jquery to make handlebars templates easier
  to use. the goal is below:
 */
var context = {
  heading: "jQuery Template",
  body: "This is all the awesome"
};

$('#target-container').template('#template', context);
