// function bulb1ON() {
//   document.getElementById("bulb1").style.backgroundColor = "yellow";
// }
// function bulb1red() {
//   document.getElementById("bulb1").style.backgroundColor = "red";
// }
// function bulb1blue() {
//   document.getElementById("bulb1").style.backgroundColor = "blue";
// }
// function bulb1OFF() {
//   document.getElementById("bulb1").style.backgroundColor = "white";
// }

// document.getElementById("bulb1red").addEventListener("click",bulb1red);
// document.getElementById("bulb1blue").addEventListener("click",bulb1blue);

// document.getElementById("bulb1colour").addEventListener("change",changebilbcolor);

// function changebilbcolor()
// {
//     const color =document.getElementById("bulb1colour").value;
//     document.getElementById("bulb1").style.backgroundColor=color;
// }

document.getElementById("bgcolor").addEventListener("change",changebilbcolor1);
function changebilbcolor1()
{
    const color =document.getElementById("bgcolor").value;
    document.getElementById("mainbc").style.backgroundColor=color;
}
document.getElementById("headingcolor").addEventListener("change",changebilbcolor2);
function changebilbcolor2()
{
    const color =document.getElementById("headingcolor").value;
    document.getElementById("heading").style.color=color;
}
document.getElementById("paragraphcolor").addEventListener("change",changebilbcolor3);
function changebilbcolor3()
{
    const color =document.getElementById("paragraphcolor").value;
    document.getElementById("para").style.color=color;
}
function reset()
{
    window.location.reload();
}
