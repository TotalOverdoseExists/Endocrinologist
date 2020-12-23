document.addEventListener('DOMContentLoaded', () => {
	const popupButtons = document.querySelectorAll('.js-popupFormToggle')
	const popupForm = document.querySelector('#l-popupForm')
	const popupClose = popupForm.querySelector('button[data-use="close"]')
	const hamburger = document.querySelector('#l-hamburger')
	const menu = document.querySelector('#nav')
	const header = document.querySelector('header')

	popupButtons.forEach(button => {
		button.addEventListener('click', () => {
			popupForm.classList.add('js-popupOpened')
		})
	})
	popupClose.addEventListener('click', () => {
		popupForm.classList.remove('js-popupOpened')
	})

	hamburger.addEventListener('click', () => {
		menu.classList.toggle('js-menuOpened')
		menu.style.top = header.offsetHeight + 'px'
	})
})