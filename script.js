function changeText() {
    document.getElementById("Text").innerHTML = "I Love You Chellam ";
}
function changeColor() {
    document.getElementById("changeColor").style.backgroundColor = "black";
}

function toggleParagraph() {
    const paragraph = document.getElementById("Hide");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
<
    function addItem() {
        const li = document.createElement('li');
        li.textContent = 'New Item';
        document.getElementById('myList').appendChild(li);
    }
}



function changeImage() {
    document.getElementById('myImage').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCH_6PIkQAWtqpH6cg0K8BVnyM2t9LomE8ig&s';

}

function Paragraphs() {
    const paragraphs = document.getElementsByTagName('p');
    alert('Number of paragraphs: ' + paragraphs.length);
}

function deleteLastItem() {
    const list = document.getElementById('myListToDelete');
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}