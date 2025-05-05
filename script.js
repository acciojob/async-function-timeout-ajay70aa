//your JS code here. If required.
//your JS code here. If required.
const userInput = document.getElementById("text")
const delay = document.getElementById("delay")
const submitBtn = document.getElementById("btn")
const display = document.getElementById("output")

function wait(ms){
	return new Promise(resolve => setTimeout(resolve, ms))
}
async function handleClick(){
	await wait(Number(delay.value))
	display.textContent = userInput.value
}

submitBtn.addEventListener('click', handleClick)


