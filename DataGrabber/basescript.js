var x = new XMLHttpRequest();
x.open("GET", "https://api.hh.ru/vacancies?page=0&per_page=500", true);
x.onload = function (){
	//JSON.parse(x.responseText);
	//alert(x.responseText);
	var text = x.responseText;
	//var text = JSON.stringify(x.responseText, "", 4);;
	//document.write(
	//    '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="text.txt">text.txt</a>'
//)
var BlobBlob = new Blob([text], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	ll.href = ww;
}
x.send(null);

x1 = new XMLHttpRequest();
x1.open("GET", "https://api.hh.ru/vacancies?page=1&per_page=500", true);
x1.onload = function (){
text = x1.responseText;
BlobBlob = new Blob([text], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	l2.href = ww;
}
x1.send(null);

x2 = new XMLHttpRequest();
x2.open("GET", "https://api.hh.ru/vacancies?page=2&per_page=500", true);
x2.onload = function (){
text = x2.responseText;
BlobBlob = new Blob([text], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	l3.href = ww;
}
x2.send(null);

x3 = new XMLHttpRequest();
x3.open("GET", "https://api.hh.ru/vacancies?page=3&per_page=500", true);
x3.onload = function (){
text = x3.responseText;
BlobBlob = new Blob([text], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	l4.href = ww;
}
x3.send(null);

x4 = new XMLHttpRequest();
x4.open("GET", "https://api.hh.ru/vacancies?page=4&per_page=500", true);
x4.onload = function (){
text = x4.responseText;
BlobBlob = new Blob([text], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	l5.href = ww;
}
x4.send(null);



