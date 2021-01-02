
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
var sum = 0
function ready() {
    const removecartitem = document.getElementsByClassName('.btn-remove');
    
    for(let i = 0; i < removecartitem.length; i++){
        var button = removecartitem[i]
        button.addEventListener('click', removecartitem)
        
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input') 
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChange)
    }
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for(var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
      
        button.addEventListener('click', addToCartClicked)
      
        button.addEventListener('click', () => {
                    sum++
                    document.getElementsByClassName('count')[0].innerText = Number(sum)        
                        
            
        })
        
    }
    
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    
}


function purchaseClicked() {
    window.alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    document.getElementsByClassName('count')[0].innerText = 0
    updatecarttotal()
}
function removecartitem(event){
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.parentElement.remove()
    --sum
    document.getElementsByClassName('count')[0].innerText = Number(sum)  
    
    updatecarttotal()
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) ||  input.value <= 0) {
        input.value = 1
    }
    updatecarttotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('_cardimg')[0].src
    
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updatecarttotal()
}
function addItemToCart(title, price, imageSrc){
    

    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemsNames.length; i++){
       
        if (cartItemsNames[i].innerText == title){
            
            window.alert('This item is already add to the cart')
                        
              
            return           
        }
    }
   
    window.alert('ADD TO CART!')
    // window.alert('This Item add to cart!')
    var cartRowContents = `
    <div class="cart-item cart-column">
    
    <img class="cart-item-image" style="height: 100px; width: 100px; " src="${imageSrc}" width="100" height="100" alt="">
    <div class="cart-item-title">${title}</div>
    
  </div>
  <div class="priceRemove">
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger btn-remove" type="button">REMOVE</button>
  </div>
  </div>
    `
      cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removecartitem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function updatecarttotal(){
    var cartitemcontainer = document.getElementsByClassName('cart-items')[0]
    var cartrows = cartitemcontainer.getElementsByClassName('cart-row')
    var total = 0;
    for(var i = 0; i < cartrows.length; i++){
        var cartrow = cartrows[i]
        var priceelement = cartrow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartrow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceelement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
     
}



function slideshow() {

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.querySelectorAll(".slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 2 seconds
    }
}

slideshow();


const shopBtn = document.querySelector(`.shop-btn`)
const sidebar = document.querySelector(`.sidebar-main`)
const close = document.querySelector(`.close`)
const blur = document.querySelector(`.sidebar-blur`)
shopBtn.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar')
    blur.classList.add('open')
})

close.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
    blur.classList.remove('open')
})





const modal = document.querySelector(`.bg_modal`)
const modal1 = document.querySelector(`.bg_modal1`)
const modal2 = document.querySelector(`.bg_modal2`)
const modal3 = document.querySelector(`.bg_modal3`)
const modal4 = document.querySelector(`.bg_modal4`)
const modal5 = document.querySelector(`.bg_modal5`)
const modal6 = document.querySelector(`.bg_modal6`)
const modal7 = document.querySelector(`.bg_modal7`)

function myModal() {
    modal.classList.add('active')
}
function myModal1() {
    modal1.classList.add('active')
}
function myModal2() {
    modal2.classList.add('active')
}
function myModal3() {
    modal3.classList.add('active')
}
function myModal4() {
    modal4.classList.add('active')
}
function myModal5() {
    modal5.classList.add('active')
}
function myModal6() {
    modal6.classList.add('active')
}
function myModal7() {
    modal7.classList.add('active')
}



function sara() {
    modal.classList.remove('active')
    modal1.classList.remove('active')
    modal2.classList.remove('active')
    modal3.classList.remove('active')
    modal4.classList.remove('active')
    modal5.classList.remove('active')
    modal6.classList.remove('active')
    modal7.classList.remove('active')
}

const btn1 = document.querySelector(`#btn`);
const alert = document.querySelector(`.my-alert`);



window.addEventListener("scroll", function(){
    var header = document.querySelector('.nav-container');
    header.classList.toggle("sticky", window.scrollY > 0)
})
