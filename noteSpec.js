function testNoteInstantiateWithPlaceHolder() {
  var note = new Note();
  assert.isEq(note.text, note.PLACEHOLDER);
};

// testNoteInstantiateWithPlaceHolder();

// function testGetText() {
//   var note = new Note();
//   assert.isTrue(note.getText() === note.PLACEHOLDER);
// };


it('is a failing test', function(){
  var note = new Note();
  assert.isTrue(note.getText() === "baboon");
});

it('gets text', function(){
  var note = new Note();
  assert.isTrue(note.getText() === note.PLACEHOLDER);
})

