import Emojipedia from "./emojipedia";

const emjArr = [];

Emojipedia.map((emjL) => {
  return emjArr.push(emjL.meaning.substring(0, 100));
});

console.log(emjArr);
