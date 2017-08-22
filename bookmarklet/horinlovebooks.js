var d = $('<textarea/>').css({
  'position':'fixed',
  'top': 0,
  'left': 0,
  'width': "100%",
  'background': 'white',
  'border': '1px solid #bbb',
  'padding': '20px',
  'z-index': 2000
});

var d = document.createElement('textarea')
d.style.position = 'fixed';
d.style.top = 0;
d.style.left = 0;
d.style.width = '100%';
d.style.background = 'white';
d.style.border = '1px solid #bbb';
d.style.padding = '20px';
d.style.zIndex = 2000;



---

var tbl = document.getElementsByTagName("table").item(1);
var rows = tbl.rows.length;
var cols = tbl.rows[1].cells.length;
var value1 = tbl.rows[3].cells[1].innerText;
var value2 = tbl.rows[2].cells[1].innerText;
var value3 = tbl.rows[4].cells[1].innerText;
var value4 = "";
var value5 = "";
var value6 = tbl.rows[8].cells[1].innerText;

var tbl = document.getElementsByTagName("table").item(3);
var rows = tbl.rows.length;
var cols = tbl.rows[1].cells.length;
var value7 = tbl.rows[1].cells[5].innerText;

var d = document.createElement('textarea');
d.style.width = '100%';
d.style.background = 'white';
d.style.border = '1px solid #bbb';
d.style.padding = '20px';

document.body.insertBefore(d, document.body.firstChild);

var contents = [
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7];
d.textContent = contents.join("\t");

---


var contents = [
document.write(value1 + "\t" ),
document.write(value2 + "\t" ),
document.write(value3 + "\t" ),
document.write(value4 + "\t" ),
document.write(value5 + "\t" ),
document.write(value6 + "\t" ),
document.write(value7 + "\t" )]


d.value(contents.join("\t"));
$('body').append(d);
