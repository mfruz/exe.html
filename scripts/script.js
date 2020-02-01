function load() {
	document.getElementById("prompt").value = '';

	display();

	let prompt = document.getElementById("prompt");

	if(document.activeElement === prompt) {
		checkPrompt();
	}
}

function display() {
	var divHistory = document.getElementById("history");
}

function checkPrompt() {
	document.getElementById("prompt").addEventListener('keydown', function(event) {
		let key = event.which || event.keyCode;
		if(key == 13) {
			event.preventDefault();

			const message = document.getElementById("prompt").value;

			addPromptEntry(message);
			document.getElementById("prompt").value = '';
		}
	});
}

// adds a prompt entry formatted as : >> Query
function addPromptEntry(message) {
	if(!message) return;

	let history = document.getElementById("history");

	// create message from user
	const messageDiv = document.createElement('div');
	messageDiv.setAttribute('class', 'query');
	messageDiv.innerHTML += message;

	history.appendChild(messageDiv);
	history.scrollTop = history.scrollHeight;

	let tarot = "tarot";

	if( message.search(tarot) != -1 ) {
		const responseDiv = document.createElement( 'div' );
		responseDiv.setAttribute( 'class', 'response' );
		responseDiv.innerHTML = 'Tu veux jouer au tarot ?';

		setTimeout(() => {
			history.appendChild( responseDiv );
			history.scrollTop = history.scrollHeight;
		}, 1000);
	}
}
