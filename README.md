### split-limit
splits a String into into limited length of substrings, but keep last substring unsplit

> splits a String object into an array of strings by separating the string into substrings.
> but unlike String.prototype.split(), the last substring will be the unsplit remainder,
> and it is more like ruby's split, php's explode/preg_split, golang's strings.SplitN function


### Usage
``` js
var splitLimit = require('split-limit');
var str = 'user-agent: Mozilla/5.0, OS: Mac, Arch:  amd64';

var splited = splitLimit(str, /:\s+/, 2);
// ==> ['user-agent', 'Mozilla/5.0, OS: Mac, Arch:  amd64']
```
Enjoy!
