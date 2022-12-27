const palindrome = (str) => {

      

  let start = str[0];
  let end = str[str.length - 1];
  let middle = str.slice(1, str.length - 1);

  if (str.length == 2) {
    if (str[0] == str[1]) {
      return `${original} is a palindrome`;
    }
  } else if (str.length == 1) {
    return `${original} is a palindrome`;
  } else {
    if (start == end) {
      return palindrome(middle);
    }
  }
};

console.log(palindrome("text"));
console.log(palindrome("texet"));
