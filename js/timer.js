
const timer = document.querySelector('.timer__time')
const deadline = '31 March 2022'

let interval 

const updateClock = () => {
	const date = new Date().getTime()
	const dateDeadline = new Date(deadline).getTime()
	const timeRemaining = (dateDeadline - date) / 1000

	const hours = Math.floor(timeRemaining / 60 / 60)
	const minutes = Math.floor((timeRemaining / 60) % 60)
	const seconds = Math.floor(timeRemaining % 60)

	const day = Math.floor(hours / 24)

	const fHours = hours < 10 ? '0' + hours : hours
	const fMinutes = minutes < 10 ? '0' + minutes : minutes
	const fSeconds = seconds < 10 ? '0' + seconds : seconds

	timer.textContent = `${fHours}:${fMinutes}:${fSeconds}`

	if (timeRemaining <= 0) {
		clearInterval(interval)
		timer.textContent = `00:00:00`
	}

	if (hours >= 24) {
		timer.textContent = `${day}d:${fMinutes}:${fSeconds}`
	}
}
updateClock();
interval = setInterval(updateClock, 500)

