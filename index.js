import fs from 'fs';



// function parse(input) {
//   return input
//   .replace(/```(\w+)(.+?)```/gs, '<pre><code class="language-$1">$2</code></pre>')
//   .replace(/```(.+?)```/gs, '<pre><code>$1</code></pre>')
//   .replace(/`([^`]+)`/g, '<code>$1</code>')
//   // .replace(/(\*\*(.+?)\*\*)/g, '<b>$1</b>')
//   // .replace(/(_(.+?)_)/g, '<i>$1</i>')
//   // .replace(/(__(.+?)__)/g, '<u>$1</u>')
//   // .replace(/(~~(.+?)~~)/g, '<s>$1</s>')
//   // .replace(/(\[(.*?)\]\((.*?)\))/g, '<a href="$3">$2</a>')
// }

import parser from './parser.js';


var md = fs.readFileSync('test.md', 'utf8');

// console.log(md.match(/```(\w+)\r/))
console.log(parser(md));