import {activeButton} from './page'

const menuItems = [
    {
       name: "Bambara",
       desc: "factory functions simply set up and return the new object when you call the function"
    },
    {
        name: "Champaer",
        desc: " factory functions simply set up and return the new object when you call the function"
     },
     {
        name: "Nocora",
        desc: "factory functions simply set up and return the new object when you call the function"
     },
     {
        name: "Lamaria",
        desc: "factory functions simply set up and return the new object when you call the function"
     },
     

]

function menuLoader(){
    let menuButton = document.createElement('button')
    menuButton.textContent = 'Menu'
    menuButton.classList.add('menu_btns')
    menuButton.classList.add('menuClick')

    menuButton.addEventListener("click", () => {
        menuButton.classList.add("activeBtn")
   
        if(document.body.contains(document.querySelector('.bodyStyle'))){
            document.querySelector('.bodyStyle').remove()
        }

        if(document.body.contains(document.querySelector('.contactWrapper'))){
            document.querySelector('.contactWrapper').remove()
        }

        if(!document.body.contains(document.querySelector('.menu_item_wrapper'))){
            menuContent();
        }
        
      });

    return menuButton
}

function menuContent(){
    let bodyContent = document.getElementById('content')
    let menuWraper = document.createElement('div')
    menuWraper.classList.add('menu_item_wrapper') 

    for(let i = 0; i < menuItems.length; i++){
        let image = document.createElement('img')
        image.src = 'https://media-cdn.tripadvisor.com/media/photo-s/16/49/7d/c7/house-of-beer-craft-beer.jpg'
        let item = document.createElement('div')
        item.classList.add('menu_item')
        let name = document.createElement('h3')
        name.innerHTML = menuItems[i].name
        let description = document.createElement('p') 
        description.innerHTML = menuItems[i].desc
        item.appendChild(image)
        item.appendChild(name)
        item.appendChild(description)

        menuWraper.appendChild(item)
        bodyContent.appendChild(menuWraper)
    }

    return menuWraper
}



export default menuLoader