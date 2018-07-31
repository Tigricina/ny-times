let okButton = document.getElementById('ok-button');
let textAreas = document.getElementsByClassName('text-area');

let arr = ['0', '1', '2', '3'];
iterator = arr.keys();

function changeState(){
        let next = iterator.next().value;
        if (!next) {
            iterator = arr.keys();
            next = iterator.next().value;
        }
        newSrc = arr[next];
        document.body.style.backgroundImage = "url('img/"+(newSrc)+".jpg')";
        for(let i=0; i < textAreas.length ; i++){
           textAreas[i].classList.add('hided') ;
        }
        textAreas[newSrc]
        .classList
        .remove('hided');
}
    
changeState();

okButton.addEventListener("click", function () {
    changeState();
});

