'use strict';
function calcAge(birthyear) {
  const age = 2037 - birthyear;
  function printAge() {
    const output = `you are ${age}, born in ${birthyear}`;
    console.log(output);
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const firstname = 'amir';
      const str = `oh, and you're a millenial,${firstname}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstname = 'zahra';
calcAge(1991);
