let ov = document.getElementById("overskrift");

// let el = document.getElementsByTagName("h1");
// console.log(el);

ov.innerHTML = "dlkgj dlkgj ";
ov.style.color = "red";

var div = document.getElementById("div1");

for (let i = 0; i < 10; i++)
{
    let b = document.createElement("button");
    b.innerHTML = "Knap # " + i;
    div.appendChild(b);
}

document.getElementById("btn").onclick = function ()
{

    ov.style.color = "blue";
};