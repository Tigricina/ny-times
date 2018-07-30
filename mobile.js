let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');
let imageUrl= "http://static01.nyt.com/newsgraphics/2018/04/17/nyc-parks-photos/assets/images/09_Couple_on_Rock-2000.jpg";
textArea.style.display ='none';

let texts = ["page1", "page2", "page3"];
let pictures = ["http://static01.nyt.com/newsgraphics/2018/04/17/nyc-parks-photos/assets/images/09_Couple_on_Rock-2000.jpg", "https://static01.nyt.com/newsgraphics/2018/04/17/nyc-parks-photos/assets/images/71_Pool_buds-2000.jpg", "#262626"]

function createPage(){
    for (let textIdx = 0; textIdx < texts.length; textIdx++)
    for (let pictureIdx = 0; pictureIdx < pictures.length; pictureIdx++)

let pageNow = {
    text: texts[textIdx],
    picture: pictures[pictureIdx]
}    

	iterator = pageNow.keys();
document.querySelector("okButton").addEventListener("click", function () {
	var next = iterator.next().value;
	if ( !next) {
		iterator = pageNow.keys();
		next = iterator.next().value;
	}
	this.nextElementSibling.value = pageNow[next];
});


okButton.addEventListener('click', function () {
textArea.style.display ='block';
document.body.style.backgroundImage = "url('"+imageUrl+"')";
});
/*
let pageNow = {
    slide:
    title:
    background:
    image:
    animation:
}*/