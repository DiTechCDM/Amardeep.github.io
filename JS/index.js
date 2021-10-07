//  When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // Image Scroll width
        document.getElementById("Brand-logo").style.width = "150px";
    } else {
        // Image initial width
        document.getElementById("Brand-logo").style.width = "170px";
    }
}
