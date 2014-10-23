// Custom JS for to do list web app

window.onload = init;

function init(){
		// Creates a variable called button, this targets the add_button id tag.
		var button = document.getElementById("add_button");

		// The button will click then create sticky***
		button.onclick = createSticky;

		//Using the length property of the array/localStorage object to loop
		for (var i = 0; i < localStorage.length; i++){
			//setting the variable key, to the keyed index of the array
			var key = localStorage.key(i);

		// a filter to see if the frist 6 characters of the string are equal to sticky. 
		//eg. with the sticky tag/key	only these will be used.
		if(key.substring(0, 6) == "sticky") {
			var value = localStorage.getItem(key);
			addStickyToDOM(value);
		}
	}
}

	function addStickyToDOM(value) {
		//Getting element 'stickies' from html
		var stickies = document.getElementById("stickies");
		//Creating new elements in the DOM
		var sticky = document.createElement("li");
		var span = document.createElement("span");

		//giving the new span attributes a class of 'sticky' 
		span.setAttribute("class", "sticky");
		//places the variable value within the spam
		span.innerHTML = value;
		//adds new chlid nodes with to the DOM (new items in the list)
		sticky.appendChild(span);
		stickies.appendChild(sticky);
	}

	function createSticky() {
		//creates a variable basied on what we type in the bar.
		var value = document.getElementById("note_text").value;
		//creates a new index number (key) for the local storage, allowing new data to be stored
		var key = "sticky_" + localStorage.length;
		// adds the new key to local storage
		localStorage.setItem(key, value);

		// the value to the DOM
		addStickyToDOM(value);
	}



// end
// }