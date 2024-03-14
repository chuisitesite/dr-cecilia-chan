// Get the modal
var wechatModal = document.getElementById("wechat-qr-modal");

// Get the button that opens the modal
var wechatBtn = document.getElementById("wechat-icon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
wechatBtn.onclick = function() {
    wechatModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    wechatModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == wechatModal) {
        wechatModal.style.display = "none";
    }
}
