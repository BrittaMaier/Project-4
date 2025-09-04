To Do:

- Read lecture handout on using APIs/Fetch in react
- read documentation of clipboard API we are supposed to use
- update excalidraw file

- Create CopyToClipboard component returning a button
- when the button is clicked the hex value of the color card (color.hex) should be copied to the clipboard, i.e. onClick should use the async writeClipboardText function with color.hex of the current color as an argument, also the text of the button should change from "copy" to "copied!"(for 3 seconds)
- because writeClipboardText is an async function we need to await it's return and use try and catch to display any error to the user
- use state in CopyToClipboard component to implement the button text change
- manage the change from "Copy" to "Copied!" and back by defining a function which updates the state after awaiting the copying to the clipboard to be done
- use setTimeout function to update state again after 3 seconds
- return of CopyToClipboard should be button using function as value for onClick attribute and using state condition to set button text
- use try and catch to display errors to the user
