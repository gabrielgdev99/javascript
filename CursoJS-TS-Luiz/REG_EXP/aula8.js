import { html2 } from "./base.js";

// $1 $2 $3 <- Retrovisores
// : -> Ignora o retrovisor do grupo

//console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));
console.log(
  html2.replace(/(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, "$1 HAHA $4 HAHA $5")
);
