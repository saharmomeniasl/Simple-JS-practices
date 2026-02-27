const noteInput = document.getElementById("noteText");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");

let notes = [];

window.addEventListener("load", function () {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
        notes = JSON.parse(savedNotes);
        showNotes();
    }
});

addBtn.addEventListener("click", function () {
    const text = noteInput.value.trim();

    if (text === "") return;

    const note = {
        id: Date.now(),
        text: text
    };

    notes.push(note);
    saveNotes();
    showNotes();

    noteInput.value = "";
});

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function showNotes() {
    notesList.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];

        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        const textDiv = document.createElement("div");
        textDiv.className = "note-text";
        textDiv.textContent = note.text;

        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "note-buttons";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {
            deleteNote(note.id);
        });

        buttonsDiv.appendChild(deleteBtn);

        noteDiv.appendChild(textDiv);
        noteDiv.appendChild(buttonsDiv);

        notesList.appendChild(noteDiv);
    }
}

function deleteNote(id) {
    notes = notes.filter(function (note) {
        return note.id !== id;
    });

    saveNotes();
    showNotes();
}