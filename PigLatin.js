/*++++++++++++++++++++++++++++++++++++++++++++++++++
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. 
Leave punctuation marks untouched.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*++++++++++++++++++++++++++++++++++++++++++++++++++*/

function pigIt(str) {
  let arr = str.split(" ");
  let end = "ay";
  let last = "";
  let other = "";

  let letters = /[a-zA-Z]/;

  for (let i = 0; i < arr.length; i++) {
    if (letters.test(arr[i])) {
      if (arr[i].length < 2) {
        arr[i] = `${arr[i]}${end}`;
      } else {
        last = `${arr[i][0]}${end}`;
        other = arr[i].slice(1, arr[i].length);
        arr[i] = `${other}${last}`;
      }
    }
  }

  return arr.join(" ");
}

console.log(pigIt("Hello world !"));