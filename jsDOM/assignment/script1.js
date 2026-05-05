document.getElementById("myheading").innerHTML = "New Text";

function changeText1() {
    document.getElementById("para").innerHTML = "Text Changed!";
}

function updateHeading() {
    document.getElementById("heading").innerHTML = "Welcome";
}

let text = document.getElementById("para1").innerHTML;
console.log(text);

document.getElementById("box").innerHTML = "New Content";

function change() {
    document.getElementById("text1").innerHTML = "Changed!";
}

function updateBoth() {
    document.getElementById("title").innerHTML = "New Heading";
    document.getElementById("para").innerHTML = "New Paragraph";
}

let content = document.getElementById("box").innerText;
console.log(content);


function changeText2() {
    document.getElementById("text2").innerHTML = "Content Changed Dynamically!";
}