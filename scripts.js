//adds button
let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');
btn.appendChild(btnText);
document.body.appendChild(btn);

//creates div to contain squares
let div = document.createElement('div');
document.body.appendChild(div);

//adds square when button is clicked
btn.addEventListener('click', function () {
    id = div.getElementsByClassName('square').length;
    let square = document.createElement('div');
    let squareText = document.createTextNode(id);
    square.appendChild(squareText);
    square.setAttribute('class', 'square');
    square.setAttribute('id', id);
    div.appendChild(square);

    //changes background color of squares
    square.addEventListener('click', function () {
        let colors = ["blue", "green", "yellow", "orange", "red", "purple"];
        let randomColor = () => colors[Math.ceil(Math.random() * colors.length - 1)];
        this.style.backgroundColor = randomColor();
    });

    //deletes other square depending on id
    square.addEventListener('dblclick', function () {
        let squareId = this.getAttribute('id');
        if (squareId % 2 == 0) {
            if (this.nextSibling == null) {
                alert('No next sibling to delete.');
            } else {
                div.removeChild(this.nextSibling);
            }
        } else if (this.previousSibling == null) {
            alert('No previous sibling to delete.')
        } else {
            div.removeChild(this.previousSibling);
        };
    });
});





