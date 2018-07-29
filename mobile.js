let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');
let imageUrl= "http://static01.nyt.com/newsgraphics/2018/04/17/nyc-parks-photos/assets/images/09_Couple_on_Rock-2000.jpg";
textArea.style.display ='none';

okButton.addEventListener('click', function () {
textArea.style.display ='block';
document.body.style.backgroundImage = "url('"+imageUrl+"d')";
});
