var loadFileBefore = function(event) {
	var image = document.getElementById('before');
	image.src = URL.createObjectURL(event.target.files[0]);
};
var loadFileAfter = function(event) {
	var image = document.getElementById('after');
	image.src = URL.createObjectURL(event.target.files[0]);
    initComparisons();
};

//TODO Maybe I should try to implement his solution for the comparison slider. It works way better than the current version of mine
// http://adrianlarsson.com/stuff/gw2rtgi