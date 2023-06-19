window.onload = function() {
var div = document.querySelector("div");
div.onclick = function(){
    
    div.classList.toggle("fullsd");

}


div.addEventListener("transitionend",trans_back);
function trans_back() {
    div.classList.toggle("fullsd");
}
    
interval_bottom = setInterval(my_func_bottom, 10);
var left_change = 0;
var changer = 1;
function my_func_bottom() {
    div.style.left = left_change + "px";
    
    
    if (left_change==400 || left_change<0) {
        changer = changer * (-1);
    }
    left_change+=changer;
}

}