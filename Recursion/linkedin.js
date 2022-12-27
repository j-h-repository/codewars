const original =""


const format = (str) => {
  let or = " OR ";
  let newList = [];

  const list = str.split("•");

  for (let i = 0; i < list.length; i++) {
    if (i == list.length - 1) {
      newList.push(list[i].trim());
    } else {
      newList.push(list[i].trim());
      newList.push(or);
    }
  }
  return newList.join(" ");
};

console.log(format(original));
