var assert = {

  isEq: function(firstAssertion, secondAssertion) {
    if (firstAssertion !== secondAssertion) {
      message = "Expected " + firstAssertion + " to equal " + secondAssertion + "."
      printMessages(message);
    } else {
      message = 'The isEq test passed';
      printMessages(message);
    }
  },

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      message = "Assertion failed: " + assertionToCheck + " is not truthy"
      printMessages(message);
    } else {
      message = 'The isTrue test passed';
      printMessages(message);
    }
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      message = "Assertion failed: " + assertionToCheck + " is not falsy"
      printMessages(message);
    } else {
      message = 'The isFalse test passed';
      printMessages(message);
    }
  },
};

printMessages = function(message){
  var element = document.getElementById("testResults");
  var listItem = document.createElement('li');
  listItem.innerHTML = message;
  document.getElementById('testResults').appendChild(listItem);
}
