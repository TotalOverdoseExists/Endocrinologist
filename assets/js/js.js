document.addEventListener('DOMContentLoaded', () => {
	const popupButtons = document.querySelectorAll('.js-popupFormToggle')
	const popupForm = document.querySelector('#l-popupForm')
	const popupClose = popupForm.querySelector('button[data-use="close"]')
	const hamburger = document.querySelector('#l-hamburger')
	const menu = document.querySelector('#nav')
	const header = document.querySelector('header')
	const menuLinks = menu.querySelectorAll('a')
	const forms = document.querySelectorAll('form')
	const popupPics = document.querySelectorAll('.js-popupPic')
	const popupPic = document.querySelector('#l-popupPic')
	const popupPicContainer = popupPic.querySelector('#picContainer')
	const popupPicClose = popupPic.querySelector('button[data-use="close"]')
	let currentPic

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

	menuLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault()
			const linkPlace = document.querySelector('[id=' + link.href.split('#')[1] + ']')
			window.scrollTo({
				top: linkPlace.getBoundingClientRect().top + pageYOffset - header.offsetHeight - 25,
				left: 0,
				behavior: 'smooth'
			})
		})
	})

	forms.forEach(form => {
		form.addEventListener('submit', e => {
			e.preventDefault()
		})
	})

	popupPics.forEach(pic => {
		pic.addEventListener('click', e => {
			e.preventDefault()
			popupPic.classList.add('js-popupOpened')
			currentPic = document.createElement('img')
			currentPic.setAttribute('src', pic.getAttribute('href'))
			currentPic.setAttribute('alt', pic.children[0].getAttribute('alt'))
			popupPicContainer.appendChild(currentPic)
		})
	})

	popupPicClose.addEventListener('click', () => {
		popupPic.classList.remove('js-popupOpened')
		popupPicContainer.removeChild(currentPic)
	})
})