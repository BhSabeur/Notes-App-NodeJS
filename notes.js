console.log("notes starting");

const fs = require("fs");

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
};

var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  notes.push(note);
  fs.writeFileSync("notes.txt", JSON.stringify(notes));

  logNote(note);
};

var removeNote = title => {
  var notes = fetchNotes();
  var filtredNotes = notes.filter(note => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(filtredNotes));
};

var readNote = title => {
  var notes = fetchNotes();
  var filtredNotes = notes.filter(note => note.title === title);
  logNote(filtredNotes[0]);
};

var getAll = () => {
  var notes = fetchNotes();

  notes.forEach(note => logNote(note));
};

var logNote = note => {
  console.log("*********");
  console.log(`Title :${note.title}`);
  console.log(`Body :${note.body}`);
};

module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
};
