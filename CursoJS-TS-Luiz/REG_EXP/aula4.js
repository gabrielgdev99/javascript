import { html } from "./base.js";

console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g)); //greddy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //non-greddy
