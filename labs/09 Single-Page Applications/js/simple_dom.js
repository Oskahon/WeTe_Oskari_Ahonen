	//console.log('page loaded');

console.log(document);

document.querySelector('#userForm input[type="text"]').onkeyup = function(){
	let name = document.querySelector('#userForm input[type="text"]');
	document.querySelector('h1').innerHTML = name.value;
};
document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	let email = document.querySelector('#userForm input[type="email"]');
	document.querySelectorAll('p')[0].innerHTML = email.value;
};

document.querySelector('#userForm input[type="password"]').onkeyup = function(){
	let password = document.querySelector('#userForm input[type="password"]');
	document.querySelectorAll('p')[1].innerHTML = password.value;
};


function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}