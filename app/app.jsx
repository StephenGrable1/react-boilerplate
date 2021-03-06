'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

window.onload = () => {
  ReactDOM.render(
    <yourComponent/>,document.getElementById('app')
    );
};
