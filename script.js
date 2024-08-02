
document.querySelectorAll('.map_image a').forEach(function(link) {
    link.addEventListener('mousemove', function(e) {
        let infobulle = document.querySelector('.infobulle');
        if (!infobulle) {
            infobulle = document.createElement('div');
            infobulle.className = 'infobulle';
            document.body.appendChild(infobulle);
        }
        infobulle.innerHTML = link.getAttribute('title');
        infobulle.style.left = e.pageX + 15 + 'px';
        infobulle.style.top = e.pageY + 15 + 'px';
        infobulle.style.display = 'block';
    });
    link.addEventListener('mouseleave', function() {
        let infobulle = document.querySelector('.infobulle');
        if (infobulle) {
            infobulle.style.display = 'none';
        }
    });
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let note = document.querySelector('.note');
        note.title = link.getAttribute('title');
        note.style.left = e.pageX + 0 + 'px';
        note.style.top = e.pageY + 0 + 'px';
        note.style.display = 'block';
        note.querySelector('textarea').focus();
		console.log(note.title);
    });
});

const note = document.querySelector('.note');
note.style.display = 'none';
// Masquer la note lorsque l'utilisateur clique en dehors
document.addEventListener('click', function(e) {
	// Click hors zone note && clic hors zone def && si la note était ouverte
    if ((!note.contains(e.target) && !e.target.closest('.map_image a') && note.style.display!='none')) {
        note.style.display = 'none';
		console.log("save");
    }
});
