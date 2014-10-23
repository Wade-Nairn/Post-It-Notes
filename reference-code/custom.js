

localStorage.setItem('sticky_0', 'Pick up dry cleaning');
localStorage.setItem('sticky_1', 'Buy Chicken and Rice');
localStorage.setItem('sticky_2', 'Design cool stuff');

var sticky  = localStorage.getItem('sticky_0'); 
var sticky1 = localStorage.getItem('sticky_1');
var sticky2 = localStorage.getItem('sticky_2');

// alert(sticky1);

for(var i = 0; i < localStorage.length; i++){
	var key = localStorage.key(i);
	var value = localStorage[key];
	alert(value);
}