import { cpfs, ips } from "./base.js";

console.log(cpfs);

console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

console.log(ips);

const ipRegExp = /(25[0-5])/g;

for (let i = 0; i <= 300; i++) {
  const ip = `${i}.${i}.${i}.${i}`;
  console.log(ip, ip.match(ipRegExp));
}
