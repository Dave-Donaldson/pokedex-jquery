webpackJsonp([1],{

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {

  $('.btn').on('click', function () {
    var request = $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/pikachu/",
      method: "GET"

    });

    request.done(function (data) {
      console.log(data);
    });

    request.fail(function (jqXHR, textStatus, error) {
      alert("request failed: " + textStatus + "" + error);
    });
  });
});

/***/ })

},[83]);