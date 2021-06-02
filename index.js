const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
let doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));


const text =
"客戶訂單\n<Not Specified>\n對客戶非常重要\n可以部分發貨\n請運送至少333件物品\n1月5日前發貨\nTaiwan";

doc
  .font('./fonts/NotoSansCJK-Regular.ttc', 'NotoSansCJKjp-Regular')
  .fontSize(11)
  .text(text, 100, 100);

doc.end();


// // Create a document
// doc = new PDFDocument();

// // Pipe its output somewhere, like to a file or HTTP response
// // See below for browser usage
// doc.pipe(fs.createWriteStream('output2.pdf'));


// const text2 =
// "客戶訂單\n對客戶非常重要\n可以部分發貨\n請運送至少333件物品\n1月5日前發貨\nTaiwan\n<Not Specified>";

// doc
//   .font('./fonts/NotoSansCJK-Regular.ttc', 'NotoSansCJKjp-Regular')
//   .fontSize(11)
//   .text(text2, 100, 100);

// doc.end();


// // Create a document
// doc = new PDFDocument();

// // Pipe its output somewhere, like to a file or HTTP response
// // See below for browser usage
// doc.pipe(fs.createWriteStream('output3.pdf'));

// let y = 100;

// for (const txt of text.split('\n')) {
//     doc
//         .font('./fonts/NotoSansCJK-Regular.ttc', 'NotoSansCJKjp-Regular')
//         .fontSize(11)
//         .text(txt, 100, y);
//     y += 18;
// }

// doc.end();

