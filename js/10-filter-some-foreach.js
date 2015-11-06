// NOTES - Crazy refactor. Got to watch the video to understand it

var Inbox = {

  /**
   * An array of message objects
   * Example: {id: 1, from: 'Joe Schmoe', subject: 'Hello There', flagged: false}
   */
  messages: [],

  /**
   * Given an array of "selected message ids", decide whether to flag OR unflag them
   *
   * If all selected messages are flagged, unflag them.
   * If none selected messages are flagged, flag them.
   * If any selected messages are not flagged, flag them.
   *
   * @param selectedIds
   * @return {boolean}
   */
  shouldFlag: function(selectedIds) {

    return this.messages
      .filter(message => selectedIds.indexOf(message.id) !== -1)
      .some(message => !message.flagged);

  },


  /**
   * BEFORE refactoring
   */
  oldShouldFlag: function(selectedIds) {

    return this.messages
      .filter(message => selectedIds.indexOf(this.messages.id) !== -1)
      .some(message => !message.flagged)

  }

};


/**
 * Setup data, usages, and verify expected outcomes
 */

Inbox.messages = [
  {
    id: 123,
    from: "John Doe",
    flagged: false,
    subject: "Please Read Me"
  },
  {
    id: 124,
    from: "Mary Jane",
    flagged: true,
    subject: "Not so important..."
  },
  {
    id: 125,
    from: "Bill Bob",
    flagged: false,
    subject: "Spam Content"
  },
  {
    id: 126,
    from: "Josh Josherson",
    flagged: true,
    subject: "RE: Your Request"
  },
  {
    id: 127,
    from: "Kate Katerson",
    flagged: true,
    subject: "Just Checking in"
  }
];

// Pretend these are Jasmine tests ;P
function assertShouldFlag(expectation, selectedIds, description) {
  var result  = Inbox.shouldFlag(selectedIds);
  var message = (result === expectation)
    ? "Pass!"
    : "Failed...";
  console.log(
    description,
    message +
    " Expected " + expectation + " got " + result + " with " +
    JSON.stringify(selectedIds) + "\n"
  );
}

console.clear();
console.log(Math.random());

assertShouldFlag(false, [124, 126],
                "If all selected messages are flagged, unflag them.");

assertShouldFlag(true, [123, 125],
                "If none selected messages are flagged, flag them.");

assertShouldFlag(true, [123, 124, 126, 127],
                "If any selected messages are not flagged, flag them.");
