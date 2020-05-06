/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



  // Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // The function takes an array as its only argument.

  function menuMaker(menuItems){
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')
    const uoList = document.createElement('ul')
    menuDiv.append(uoList)
  
  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  

  const listElements = menuItems.map( text => {
    const newList = document.createElement('li')
    newList.textContent = text
    uoList.append(newList)
  })
  
  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  const menuButton = document.querySelector('.menu-button')

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  menuButton.addEventListener('click', event => {
    menuDiv.classList.toggle('menu--open')
  })

  // Step 5: return the menu component.
  return menuDiv;
  }
  // Step 6: add the menu component to the DOM.

  const headerDiv = document.querySelector('.header')
  headerDiv.append(menuMaker(menuItems))





//  // Step 1: Write a function that will create a menu component as seen below:

//   // <div class="menu">
//   //   <ul>
//   //     {each menu item as a list item}
//   //   </ul>
//   // </div>

//   // The function takes an array as its only argument.

//   function menuMaker(menuItems) {
//     const menuDiv = document.createElement('div');
//     menuDiv.classList.add('menu');
//     const uoList = document.createElement('ul')
//     menuDiv.appendChild(uoList)
  
//   // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
//   // Add those items to the <ul>
//    const listElements = menuItems.map(liText => {
//       const newList = document.createElement('li')
//       newList.textContent = liText
//       uoList.appendChild(newList)
//     })
//   // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

//     const menuButton = document.querySelector('.menu-button')


//   // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
//   // const articleToggle = () => {
//   //   article.classList.toggle('article-open')
  
//   // expandButton.addEventListener('click', articleToggle);
//   // }


//   const menuToggle = () => {
//     menuDiv.classList.toggle('menu--open')
// }
//     menuButton.addEventListener('click', menuToggle);
  

//   // Step 5: return the menu component.

//   return menuDiv;
  
//   }

//   const myMenu = menuMaker(menuItems)
//   let myHeader = document.querySelector('.header')
//   myHeader.appendChild(myMenu)
  

//   // Step 6: add the menu component to the DOM.
  

  