var assert = {

  isEq: function(firstAssertion, secondAssertion) {
    if (firstAssertion !== secondAssertion) {
      message = "Expected " + firstAssertion + " to equal " + secondAssertion + "."
    } else {
      message = 'The isEq test passed';
    }
    printMessages(message);
  },

  isTrue: function(assertionToCheck) {
    console.log('there is life');
    if (!assertionToCheck) {
      message = "Assertion failed: " + assertionToCheck + " is not truthy"
    } else {
      message = 'The isTrue test passed';
    }
    printMessages(message);
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      message = "Assertion failed: " + assertionToCheck + " is not falsy"
    } else {
      message = 'The isFalse test passed';
    }
    printMessages(message);
  },
};

printMessages = function(message){
  var element = document.getElementById(count);
  var listItem = document.createElement('li');
  listItem.innerHTML = message;
  document.getElementById(count).appendChild(listItem);
}

printResults = function(message){
  var element = document.getElementById("testResults");
  var unorderedListItem = document.createElement('ul');
  unorderedListItem.setAttribute("id", count);
  unorderedListItem.innerHTML = message;
  document.getElementById('testResults').appendChild(unorderedListItem);
}
  it = function(description, test){
    printMessages(description);
    test();
  }

  describe = function(description, tests){
    printResults(description);
    tests();
    count += 1;
  }
var count = 1;
