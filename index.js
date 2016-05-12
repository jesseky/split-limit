/**
 *
 * splits a String object into an array of strings by separating the string into substrings.
 * but unlike String.prototype.split(), the last substring will be the unsplit remainder,
 * and it is more like ruby's split, php's explode/preg_split, golang's strings.SplitN function
 *
 * by jesse<xiangaoji@gmail.com>
 *
 * */
"use strict";

module.exports = splitLimit;

function splitLimit(string, separator, limit) {
  if (typeof string !== 'string') {
    string = '' + string;
  }
  var isReg = Object.prototype.toString.call(separator) === '[object RegExp]';
  var result = [];
  if (typeof limit === 'undefined' || limit === null) {
    return string.split(separator);
  }
  var size = parseInt(limit, 10);
  if (size <= 0) {
    return [];
  }
  if (!isReg) { // separator is string
    var splited = string.split(separator);
    if (size >= splited.length) {
      return splited;
    }
    result = splited.slice(0, size - 1);
    result.push(splited.slice(size - 1).join(separator));
    return result;
  }
  if (!separator.global) { // convert to global match
    separator = new RegExp(separator.source, 'g' + (separator.multiline ? 'm' : '') + (separator.ignoreCase ? 'i' : ''));
  }
  var startPosition = 0;
  var prevMatchedSize = 0;
  string.replace(separator, function(matched, position, all) {
    if (result.length < size - 1) {
      result.push(all.substring(startPosition + prevMatchedSize, position));
      prevMatchedSize = matched.length;
      startPosition = position;
    }
  });
  result.push(string.substring(startPosition + prevMatchedSize));
  return result;
}
