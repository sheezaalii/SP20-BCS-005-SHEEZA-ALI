// function buttonclick(){
//     console.log("yay button clicked");
// }



// function update(){
//     console.log("updating...")
//     var input = document.getElementById("input");
//     // console.log(input.value);
//     var ok = document.getElementById("ok");
//     ok.innerHTML = input.value;
// }



function handleaddnew()
{
    console.log("Handling new to-doS for you ");
}


 window.onload = function()
 {
    var btn = document.getElementById("btn");
    btn.onclick = handleaddnew;
}
//obindings(); //will not work unless doc is loaded