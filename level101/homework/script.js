/*
Add a Class:
Create an HTML div element with an id of "myDiv".
Write JavaScript code to add the class "highlight" to the div element.


Remove a Class:
Continuing from the previous task, write JavaScript code to remove the "highlight" class from the div element.

*/
let newDiv = document.createElement('div')
  newDiv.id = 'myDiv'
  document.body.appendChild(newDiv)

  let myDiv = document.getElementById('myDiv')
  myDiv.classList.add('highlight')

  myDiv.classList.remove('highlight')

  let toggleButton = document.createElement('button')
  toggleButton.id = 'toggleButton'
  toggleButton.textContent = 'Toggle Class'
  document.body.appendChild(toggleButton)

  let targetDiv = document.createElement('div')
  targetDiv.id = 'targetDiv'
  document.body.appendChild(targetDiv)

