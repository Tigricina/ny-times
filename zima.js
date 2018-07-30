var arr = ['зима', 'весна', 'лето', 'осень'];
	iterator = arr.keys();
document.querySelector("input").addEventListener("click", function () {
	var next = iterator.next().value;
	if ( !next) {
		iterator = arr.keys();
		next = iterator.next().value;
	}
	this.nextElementSibling.value = arr[next];
});


