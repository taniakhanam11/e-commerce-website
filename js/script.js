// side-cart start
function showMenu() {
    var m = document.querySelector('.btn-compare-design');
    m.classList.add('btn-compare-show');
}

function closeMenu() {
    var m = document.querySelector('.btn-compare-design');
    m.classList.remove('btn-compare-show');
}

// cart  
function showMenu2() {
    var m = document.querySelector('.cart-design');
    m.classList.add('btn-cart-show');
}

function closeMenu2() {
    var m = document.querySelector('.cart-design');
    m.classList.remove('btn-cart-show');
}
// side-cart end

// top-cart start 
function showMenu4() {
    var m = document.querySelector('.cart-design4');
    m.classList.add('btn-cart-show4');
}

function closeMenu4() {
    var m = document.querySelector('.cart-design4');
    m.classList.remove('btn-cart-show4');
}

// top-cart end 


// bottom-compare start 

function showMenu3() {
    var m = document.querySelector('.btn-compare-design3');
    m.classList.add('btn-compare-show3');
}

function closeMenu3() {
    var m = document.querySelector('.btn-compare-design3');
    m.classList.remove('btn-compare-show3');
}
// bottom-compare end

//  product card start 

function showModel() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.bye-now-cart').classList.add('showcart');
}

function closeModel() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.bye-now-cart').classList.remove('showcart');
}
var btnlogin = document.querySelector('.btn-login');
btnlogin.addEventListener("click", showModel)
var c = document.querySelector(".bye-icon");
c.addEventListener("click", closeModel)

//  product card end

// scrol button start 
//Get the button

// scrol button end