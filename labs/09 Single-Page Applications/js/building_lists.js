
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

	let books = data.books;

	let titteli = document.createElement('h1');
	document.body.appendChild(titteli);

var list = document.createElement('table');
let headerow = document.createElement('tr');
let headers = ["title", "year", "isbn", "authors"];

for (let k=0;k<headers.length;k++){
	let header = document.createElement('th');
	header.innerHTML = headers[k];
	headerow.appendChild(header);
}
list.appendChild(headerow);

for (var i=0; i < books.length; i++) {
	let row = document.createElement('tr');


	let kirja = [books[i].title, books[i].year, books[i].isbn, books[i].authors];

	for (let j=0;j<kirja.length;j++) {

		let column = document.createElement('td');
		column.innerHTML = kirja[j];
		row.appendChild(column);

	}
	list.appendChild(row);

}
document.body.appendChild(list);

let rivit = document.querySelectorAll('tr');
for (let l=1;l<rivit.length;l++) {
	rivit[l].addEventListener('click', function () {
		document.querySelector('h1').innerHTML = books[l-1].title;
	});
}

