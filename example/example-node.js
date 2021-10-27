/* eslint-disable no-console */
const fs = require('fs');
// FIXME: Incase you have the npm package
// const HTMLtoDOCX = require('html-to-docx');
const HTMLtoDOCX = require('../dist/html-to-docx.umd');

const filePath = './example.docx';
const docx = require('./docx');

const htmlString = `<p style="text-align:center;"><span style="font-family:Arial, Helvetica, sans-serif;font-size:8px;"><i><strong><u>CONTENT</u></strong></i></span></p><p style="text-align:center;">&nbsp;</p><p style="text-align:center;"><span style="font-size:6px;">LAW OFFICES</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:12px;">[Field: Practice Firm Name]</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:6px;">[Field: Practice Firm Description]</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:6px;">[Field: Practice Website]</span><br><span style="font-size:8px;">[Field: Attorney Street Address], [Field: Attorney City], [Field: Attorney State] [Field: Attorney Zipcode]</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:8px;">[Field: Attorney Phone]</span></p><p style="text-align:center;"><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:8px;"><i><strong><u>STYLE GUIDE</u></strong></i></span></p><p style="text-align:center;">&nbsp;</p><p style="text-align:center;"><span style="font-family:Arial, Helvetica, sans-serif;font-size:6px;">ARIAL REGULAR 6PT; SPACING EXPANDED BY 1PT; 2PT BEFORE, 2PT AFTER</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:12px;">[Arial Regular 12pt; Spacing Normal; 2pt Before, 2pt After]</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:6px;">[Arial Regular 6pt; Spacing Expanded by 1pt; 2pt Before, 2pt After]</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:6px;">[Arial Regular 6pt; Spacing Expanded by 1pt; 2pt Before, 2pt After]</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:8px;">[Arial Regular 8pt; Spacing Expanded by 1pt; 2pt Before, 2pt After]</span><br><span style="font-family:Arial, Helvetica, sans-serif;font-size:8px;">[Arial Regular 8pt; Spacing Expanded by 1pt; 2pt Before, 2pt After]</span></p>`;

(async () => {
  const fileBuffer = await HTMLtoDOCX(htmlString, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
  });

  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
    docx.extract('./example.docx').then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log('res', res);
    });
  });
})();
