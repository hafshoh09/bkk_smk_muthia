(function() {
    'use strict';
    var internetStatus = document.getElementById('internetStatus');
    if (window.navigator.onLine) {
        internetStatus.textContent = "Internet Terhubung";
        internetStatus.style.backgroundColor = "#00b894";
        internetStatus.style.display = "none";
    } else {
        internetStatus.textContent = "Internet Tidak Terhubung!";
        internetStatus.style.backgroundColor = "#ea4c62";
        internetStatus.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
        internetStatus.style.display = "block";
    }
    window.addEventListener('online', function() {
        internetStatus.textContent = "Internet Terhubung";
        internetStatus.style.backgroundColor = "#00b894";
        internetStatus.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
        $("#internetStatus").delay("5000").fadeOut(500);
    });
    window.addEventListener('offline', function() {
        internetStatus.textContent = "Internet Tidak Terhubung!";
        internetStatus.style.backgroundColor = "#ea4c62";
        internetStatus.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
        $("#internetStatus").fadeIn(500);
    });
})();