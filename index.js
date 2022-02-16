let slideIndex = 0;

let slider = document.getElementById('slider')

let slides = slider.getElementsByClassName('slide')

let slideControl = document.getElementById('slide-control')

let slideControlItems = slideControl.getElementsByClassName('slide-control-item')

let des = document.getElementById('des')

let desWatch = document.getElementById('des-watch')

let productInfo = document.querySelectorAll('.product-info')

let close = document.querySelectorAll('.close')
close.forEach((closeIcon)=>{
	closeIcon.addEventListener('click',()=>{
		productInfo?.forEach((product)=>{
			product.style.left='-100%'
product.style.transition="all 0.3 ease-in-out"

			  })
		
	})
})
des.addEventListener('click',(e)=>{
	productInfo?.forEach((product)=>{
  product.style.left='50%'
product.style.zIndex="999"
product.style.transition="all 0.3 ease-in-out"
	})


})
desWatch.addEventListener('click',(e)=>{
	productInfo?.forEach((product)=>{
  product.style.left='50%'
product.style.zIndex="999"
product.style.transition="all 0.3 ease-in-out"
	})


})




slider.style.marginTop = '-' + slideIndex + '00vh'

setTimeout(() => {
	slideControlItems[slideIndex].classList.add('active')
	slides[slideIndex].classList.add('active')
}, 500)


chooseProduct = (index) => {
	if (index === slideIndex) return

	slideIndex = index

	let currSlideControl = slideControl.querySelector('.slide-control-item.active')
	currSlideControl.classList.remove('active')

	let currSlide = slider.querySelector('.slide.active')
	currSlide.classList.remove('active')

	setTimeout(() => {
		slider.style.marginTop = '-' + slideIndex + '00vh'
		slideControlItems[slideIndex].classList.add('active')
		slides[slideIndex].classList.add('active')
	}, 1500)
	
}

Array.from(slideControlItems).forEach((el, index) => {
	el.onclick = function() {
		chooseProduct(index)
	}
})

let modal = document.getElementById('modal')

let closeBtn = document.getElementById('modal-close')

closeBtn.onclick = () => {
	modal.style.display = 'none'
}

let moreImages = document.getElementsByClassName('more-images-item')

let previewImages = document.getElementsByClassName('img-preview')

Array.from(moreImages).forEach((el) => {
	el.onclick = () => {
		let imgItems = el.parentNode.getElementsByTagName('img')

		Array.from(imgItems).forEach((item, index) => {
			previewImages[index].src = item.src
		})

		let img = el.querySelector('img')
		modal.style.display = 'block'

		let modalContent = modal.querySelector('.modal-content')
		modalContent.src = img.src

		let temp = modalContent.cloneNode(true)
		modalContent.parentNode.replaceChild(temp, modalContent)
	}
})