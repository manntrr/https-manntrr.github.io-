const modeButton = document.querySelector("#mode");

modeButton.addEventListener("click", () => {
    const html = document.querySelector(".html");
	if (modeButton.value == "on") {
        modeButton.value = "off";
        html.classList.toggle("dark");
    } else {
        modeButton.value = "on";
        html.classList.toggle("dark");
    }
});