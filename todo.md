Now that every color card has a working delete button the last two acceptance criteria need to be adressed:

- before deleting the color card after pressing the delete button a confirmation message should be shown
- if user deleted the last color card that was displayed, a message should be displayed encouraging users to add new colors

The screen recording shows, that when the delete button is clicked the first time, the display should change to a textfield, a cancel button and the delete button
This might mean, that we need:

- a button component which contains all three elements
- a function that toggles display when initial delete Button is clicked to hide initial delete button and show three elements (googled it works with state variable and assigning hidden attribute of elements to state variable being true or false, meaning if hidden={statevariable} this element will be hidden/not displayed if statevariable is true) --> had to use style to set display of p related to state variable to "inline" or "none" because display already defined in CSS --> had to be overwritten

The screen recording shows, that when the last color card is deleted a message "No colors.. start by adding one!" is shown

- means, that if colors.length is zero (meaning colors array is empty) this message is displayed whereas in all other cases it is not --> needs to be implemented in App component
