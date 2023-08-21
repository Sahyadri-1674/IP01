// let h = document.createElement('h1')
// h.innerHTML = "Heading 1"
// document.body.appendChild(h);
// document.body.insertBefore(header,h1);

// 

function changeDiv() {
    let div = document.getElementById('div1');
    div.style.backgroundColor='yellow';
    let div2 = document.getElementsByClassName('div2')[0];
    div2.style.backgroundColor='red'
    let tag = document.getElementsByTagName('h1')[0];
    tag.style.backgroundColor = 'green'

    let newDiv = document.createElement('h1');
    const textNode = document.createTextNode("New h1 Tag");
    newDiv.appendChild(textNode);
    document.body.appendChild(newDiv);

    document.getElementsByClassName("id01")[0].innerHTML = "New Heading";

    let q = document.querySelector("div > p");
    q.style.backgroundColor = 'orange'

    document.querySelector("#demo").innerHTML = "Hello World!";

    const nodeList = document.querySelectorAll("p.example");
    nodeList[0].style.backgroundColor = "red";  
}

function delElement(){
    const element = document.getElementById("demo");
    element.remove();
}

