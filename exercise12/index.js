console.log("Hi it is working");
let colors = ["#caf4f4", "#fcffe9", "#fde0d9", "#caefd1", "#3e3c63", "#f7e146", "#6ab7df", "#e2eeee", "#f77455", "#fbf4a0", "#dc374b", "#33af8d"];

let randomColor = colorArray => {
	return colorArray[Math.floor(Math.random()*9)]
}

let boxes = document.getElementsByClassName("box")
for(let elements of boxes){
	elements.style.backgroundColor = randomColor(colors);
}
