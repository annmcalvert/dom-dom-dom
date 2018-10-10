let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');
btn.appendChild(btnText);
document.body.appendChild(btn);

let div = document.createElement('div');
document.body.appendChild(div);

btn.addEventListener('click', function (){
    let square = document.createElement('div');
    square.setAttribute('class', 'square');
    div.appendChild(square);
})