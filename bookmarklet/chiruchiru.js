var d = $('<textarea/>').css({
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'width': "100%",
    'background': 'white',
    'border': '1px solid #bbb',
    'padding': '20px',
    'z-index': 2000
});
var price = "";
try {
    price = $('.c-basicdata01').text().match(/￥(\d+)（税抜）/)[1];
} catch (e) {}
var price = "";
try {
    price = $('.c-basicdata01').text().match(/￥(\d+)（税込）/)[1];
} catch (e) {}
var contents = [$(".c-basicdata01 dt:contains('ISBN')").next().text(), "'" +
    $(".c-basicdata01 dt:contains('発売日')").next().text(),
    $('h1.title').text(),
    $(".c-basicdata01 dt:contains('出版社')").next().text(), "", "", "", price
];
d.val(contents.join("\t"));
$('body').append(d);
void(0);
