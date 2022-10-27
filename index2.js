document.addEventListener('DOMContentLoaded', function(){
    function proportionalSize() {
        var widthDiv = document.querySelector('.containerLogo').clientWidth
        var heigthDiv = document.querySelector('.containerLogo').clientHeight;
        heigthDiv = `${widthDiv / 7 + 'px'}`;
        document.querySelector('.containerLogo').style.height = heigthDiv;
    }
    proportionalSize();
})






document.addEventListener('DOMContentLoaded', function() {
    var windowWidth = window.screen.width;
    console.log(windowWidth);

    if (windowWidth <= 800) {
        console.log('deu');
        var btnHomeToggle = document.    querySelector('.btnHome');
        var btnProductsToggle = document.querySelector('.btnProducts');
        var btnNetworksToggle = document.querySelector('.btnNetworks');
        btnHomeToggle.classList.    add('removeBtnMenuToggle');
        btnProductsToggle.classList.add('removeBtnMenuToggle');
        btnNetworksToggle.classList.add('removeBtnMenuToggle');
        document.querySelector('.btnHome').    innerHTML = '';
        document.querySelector('.btnProducts').innerHTML = '';
        document.querySelector('.btnNetworks').innerHTML = '';
        var btnCataogToggle =       document.querySelector('.btnCatalog');
        var btnContactToggle =      document.querySelector('.btnContact');
        var btnRegistrationToggle = document.querySelector('.btnMenu6');
        btnCataogToggle.classList.      add('btnLinkToggle');
        btnContactToggle.classList.     add ('btnLinkToggle');
        btnRegistrationToggle.classList.add('btnLinkToggle');
    }
    else {
        console.log('não deu');
    }
});













function openRegClient() {
window.open('./registrationClient/indexRegClient.html')
}



