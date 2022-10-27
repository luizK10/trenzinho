function openRegClient() {
    window.open('./registrationClient/indexRegClient.html');
}

function changeButtonColor(menuItem) {
    document.getElementsByClassName(menuItem)[0].style.backgroundColor = "rgb(236, 236, 236)";
}
    
function returnButtonColor(menuItem) {
    document.getElementsByClassName(menuItem)[0].style.backgroundColor = "aliceblue";
}