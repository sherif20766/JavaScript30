const inputs = document.querySelectorAll(".controls input")


function updator(){
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", updator));
inputs.forEach(input => input.addEventListener("mousemove", updator));