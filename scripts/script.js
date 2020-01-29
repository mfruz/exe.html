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
		if(event.keyCode == 13) {
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

	const messageDiv = document.createElement('div');
	messageDiv.setAttribute('class', 'message');

	messageDiv.innerHTML += "<span class='prompt-start'> >> </span>";
	messageDiv.innerHTML += message;

	history.appendChild(messageDiv);
	history.scrollTop = history.scrollHeight;
}