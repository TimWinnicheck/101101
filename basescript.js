var x = new XMLHttpRequest();
x.open("GET", "https://api.hh.ru/vacancies?page=0&per_page=250&salary=35000&only_with_salary=true", true);
x.onload = function (){
    alert(x.responseText);
	JSON.parse(x.responseText);
	alert(x.responseText);
	var text = JSON.stringify(x.responseText, "", 4);;
	//document.write(
	//    '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="text.txt">text.txt</a>'
//)
var BlobBlob = new Blob([text], {type : 'text/plain'});
	ww = URL.createObjectURL(BlobBlob);
	ll.href = ww;
}
x.send(null);
