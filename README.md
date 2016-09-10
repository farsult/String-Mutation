# StringMutation

## Features

Use these Array methods on a String. Each method changes original string value.

     - .map()
     - .splice()
     - .indexOf() 
     - .reverse()
     - .pop()
     - .push()
     - .shift()
     - .unshift()
     - .sort()
     - .keys()
     - .countChars()
 
## Installation
Download `string-mutation.js` and include it in your `index.html` file.

## Getting Started
Create a new SM object

```js
SM(/*string*/);
//or
new SM(/*string*/)
```
type `.value` to access the value.

```js
console.log(SM('John Doe').value);
//=>"John Doe"
```

## Methods
**.reverse(position)**

```js
var a = SM("John Doe").reverse("");

console.log(a.value);
//=>"eoD nhoJ"

var a = SM("John Doe").reverse(" ");
//=>"Doe John"
```

**.indexOf(chr[, num])** - returns the index value of the character in a string starting from the left. When there is more than one character in a string specify the second argument (e.g. `1`(st), `2`(nd), ..).

```js
console.log(SM("John Doe").indexOf("o", 2));
//=>6
```

**.countChar(chr)** - finds amount of characters in a string.

```js
console.log(SM("John Doe drinks too much Coffee").countChar("n"));
//=>2
```
All other methods work the same as in an Array

## Example

```js
var a = SM("John Doe").splice(0, 4, "Jane");

console.log(a.value);
//=>"Jane Doe"

var a = SM("John Doe").splice(0, 4, "Jane").pop().pop().push("wane");

console.log(a.value);
//=>"Jane Dwane"

var a = SM("John Doe")
.splice(0, 4, "Jane")
.pop()
.pop()
.push("wane")
.map(function(v){ 
    return "{" + v + "}"; 
});

console.log(a.value);
//=>"{J}{a}{n}{e}{ }{D}{w}{a}{n}{e}"
```


## License
MIT
