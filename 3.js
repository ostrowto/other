var noteCount = 0;
function addNote(noteCount) {
	var newSubject = document.getElementById('new_subject').value;
	var newContent = document.getElementById('new_content').value;
	var parent = document.querySelector('.notes');
	if (newSubject !== '' && newContent !== '') {
		parent.innerHTML += '<div class="note" id="note-' + noteCount +
			'"><p id="subject-' + noteCount +
			'" class="subject">' + newSubject + '</p><p id="content-" class="content">' + newContent + '</p><nobr><i id="delete-' + noteCount +
			'" class="far fa-trash-alt"></i> <i id="fav-' + noteCount +
			'" class="far fa-star"></i></nobr></div>';
		noteCount += 1;
		document.getElementById('new_subject').value = '';
		document.getElementById('new_content').value = '';
	} else {
		alert('No subject or content given.');
	}
}
function deleteNote(noteNumb) {
	var parent = document.querySelector('.notes');
	var child = document.getElementById('note-' + noteNumb);
	parent.removeChild(child);
}
document.querySelector('.btn').onclick = addNote;