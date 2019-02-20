/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.querySelector("#navicella").style.left = 400 + "px";
document.querySelector("#navicella").style.top = 200 + "px"; 
document.querySelector("#navicella");
document.querySelector("body").onkeydown = function (e) {
    document.querySelector("div").innerHTML = e.which;
    switch (e.which) {
        case 38:
            muovi("#navicella", 0, -5);
            break;
        case 40:
            muovi("#navicella", 0, 5);
            break;

        case 37:
            muovi("#navicella", -5, 0);
            break;
        case 39:
            muovi("#navicella", 5, 0);
            break;

        default:


            break;
    }



};

function muovi(selCss, dx, dy) {
    let ogg = document.querySelector(selCss);
    let x = parseFloat(ogg.style.left);
    let y = parseFloat(ogg.style.top);
    let nx = x + dx;
    let ny = y + dy;
    ogg.style.left = nx + "px";
    ogg.style.top = ny + "px";
    console.log("muovi", selCss, dx, dy, nx, ny);

}



