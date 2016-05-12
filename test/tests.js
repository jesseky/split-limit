"use strict";

var assert = require('assert');
var splitLimit = require('../index');

var str = 'user-agent: Mozilla/5.0, OS: Mac, Arch:  amd64';

describe('RegExp separator: ', function() {
  it('Split with RegExp correctly', function() {
    assert.deepEqual(splitLimit(str, /:\s+/, -1), []);
    assert.deepEqual(splitLimit(str, /:\s+/, 0), []);
    assert.deepEqual(splitLimit(str, /:\s+/, 1), ['user-agent: Mozilla/5.0, OS: Mac, Arch:  amd64']);
    assert.deepEqual(splitLimit(str, /:\s+/, 2), ['user-agent', 'Mozilla/5.0, OS: Mac, Arch:  amd64']);
    assert.deepEqual(splitLimit(str, /:\s+/, 3), ['user-agent', 'Mozilla/5.0, OS', 'Mac, Arch:  amd64']);
    assert.deepEqual(splitLimit(str, /:\s+/, 4), ['user-agent', 'Mozilla/5.0, OS', 'Mac, Arch', 'amd64']);
    assert.deepEqual(splitLimit(str, /:\s+/, 5), ['user-agent', 'Mozilla/5.0, OS', 'Mac, Arch', 'amd64']);
  });
});

describe('String separator: ', function() {
  it('Split with String correctly', function() {
    assert.deepEqual(splitLimit(str, ': ', -1), []);
    assert.deepEqual(splitLimit(str, ': ', 0), []);
    assert.deepEqual(splitLimit(str, ': ', 1), ['user-agent: Mozilla/5.0, OS: Mac, Arch:  amd64']);
    assert.deepEqual(splitLimit(str, ': ', 2), ['user-agent', 'Mozilla/5.0, OS: Mac, Arch:  amd64']);
    assert.deepEqual(splitLimit(str, ': ', 3), ['user-agent', 'Mozilla/5.0, OS', 'Mac, Arch:  amd64']);
    assert.deepEqual(splitLimit(str, ': ', 4), ['user-agent', 'Mozilla/5.0, OS', 'Mac, Arch', ' amd64']);
    assert.deepEqual(splitLimit(str, ': ', 5), ['user-agent', 'Mozilla/5.0, OS', 'Mac, Arch', ' amd64']);
  });
});
