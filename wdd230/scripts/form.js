const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

const pw = document.querySelector("#pword");
const cpw = document.querySelector("#cpword");
const message = document.querySelector("#formmessage");

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);
cpw.addEventListener("focusout", () => {
	if (pw.value !== cpw.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.display = "block";
		message.style.visibility = "show";
		cpw.style.backgroundColor = "#fff0f3";
		cpw.value = "";
		cpw.focus();
	} else {
		message.style.display = "none";
		cpw.style.backgroundColor = pw.style.backgroundColor;
		cpw.style.color = pw.style.color;
	}
});