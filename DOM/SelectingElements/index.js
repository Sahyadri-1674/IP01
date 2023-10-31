console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.title);

let p1 = document.getElementById('p1');

console.log(p1);
console.log(p1.innerHTML);

p1.innerHTML = '<div>Learn <b>DOM</b> Effectively by practice coding.</div>'


let cls1 = document.getElementsByClassName('cls1');
console.log(cls1);

for(let i=0;i<cls1.length;i++){
    cls1[i].innerHTML = "Namaskar"
}

let h2 = document.getElementsByTagName('h2');
console.log(h2);

let div1 = document.getElementById('div1');
let p = div1.getElementsByTagName('p');
console.log(p);

for(let i = 0;i<p.length;i++){
    p[i].innerHTML = "My Paragraphs"
}

let cls2 = document.querySelectorAll('p.cls2');
console.log(cls2);

for(let i=0;i<cls2.length;i++){
    cls2[i].innerHTML = "These are the updated paragraphs."
}


let fruits = document.getElementsByClassName('fruits');
console.log(fruits);
let items = fruits[0].children;
console.log(items);
let firstChild = fruits[0].firstElementChild;
let lastChild = fruits[0].lastElementChild;
console.log(firstChild);
console.log(lastChild);

let intro = document.getElementsByClassName('intro');
let parent1 = intro[0].parentElement;
console.log(parent1)

parent1.innerHTML = "<li class=intro>Apple</li><li>Guava</li><li>Watermelon</li><li>Mango</li>"

let sampleList = document.querySelectorAll('.sampleList li');
console.log(sampleList);



let countries = document.getElementById('countries');

let fchild = countries.firstChild;
console.log(fchild);

let lchild = countries.lastChild;
console.log(lchild);

let child = countries.childNodes;
console.log(child)

console.log(countries.hasChildNodes());

let arr1 = Array.from(countries.childNodes);
console.log(arr1);

let country1 = document.getElementById('one');
console.log(country1);
console.log(country1.nextSibling)
console.log(country1.nextElementSibling)
console.log(country1.parentNode)
console.log(country1.previousSibling);
console.log(country1.previousElementSibling);


let t = document.getElementsByClassName('container')[0].firstElementChild;
console.log(t);
console.log(t.rows);
console.log(t.caption);
console.log(t.tHead);
console.log(t.tBodies);
console.log(t.rows[0].cells)
console.log(t.rows[3].sectionRowIndex)
console.log(t.rows[3].rowIndex)
console.log(t.rows[0].cells[1].cellIndex);

console.dir(t);

let div3 = document.getElementsByClassName('div3')[0];
let h1 = document.createElement('h1');
let text = document.createTextNode("This is a h1 tag appended later.")
h1.appendChild(text);
h1.className = "try pi"
h1.id = "id32"
div3.appendChild(h1);

let tech = document.getElementById('tech');

let li1 = document.createElement('li');
li1.textContent = "MONGO DB"

tech.appendChild(li1);


let pos = tech.firstElementChild.nextElementSibling.nextElementSibling;
let li2 = document.createElement('li');
li2.textContent = "JAVASCRIPT";

tech.insertBefore(li2,pos);

let btn1 = document.getElementById('btn-1')
let heading2 = document.getElementById('heading2');
btn1.addEventListener('click',()=>{
    heading2.style.fontFamily = 'verdana'
    heading2.style.color = 'red'
    heading2.style.border = '2px solid black'
    heading2.style.textAlign = 'center'
})