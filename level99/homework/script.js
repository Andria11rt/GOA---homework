/*
Create a new <div> element with the text "This is a div."
Append this <div> element to the body of the document.
Remove the <div> element from the body of the document.
*/
let newDiv = document.createElement('div')

newDiv.textContent = 'This is a div.'

document.body.appendChild(newDiv)

document.body.removeChild(newDiv)
/*
Create a new <ul> element with three <li> child elements, each containing text "Item 1", "Item 2", and "Item 3."
Append the <ul> element to the body of the document.
Access and log the first and last child elements of the <ul> element.

*/
let newUl = document.createElement('ul')

let listItem1 = document.createElement('li')

listItem1.textContent = 'Item 1'

let listItem2 = document.createElement('li')

listItem2.textContent = 'Item 2'

let listItem3 = document.createElement('li')

listItem3.textContent = 'Item 3'

newUl.appendChild(listItem1)

newUl.appendChild(listItem2)

newUl.appendChild(listItem3)

document.body.appendChild(newUl)

let firstChild = newUl.firstElementChild

let lastChild = newUl.lastElementChild

console.log('First child:', firstChild)

console.log('Last child:', lastChild)

/*
Create a new <h3> element with the text "Inserted Heading."
Insert this <h3> element before the first child element of the body.
*/

let newHeading = document.createElement('h3')
newHeading.textContent = 'Inserted Heading.'
if (document.body.firstChild) {
  document.body.insertBefore(newHeading, document.body.firstChild)
} 
else {
  document.body.appendChild(newHeading)
}
/*
Create a new <span> element with the text "This is a span."
Append this <span> element to an existing <div> element with the id "container."
Access and log the parent element of the <span> element.
*/

let newSpan = document.createElement('span')

newSpan.textContent = 'This is a span.'

let containerDiv = document.getElementById('container')

if (containerDiv) {
  containerDiv.appendChild(newSpan)
  let spanParentElement = newSpan.parentNode
  console.log('Parent element of span', spanParentElement)
} 
else {
  console.log('Error: No div element with id "container" found')
}