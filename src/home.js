import {activeButton} from './page'
function homeContent(){
    let bodyContent = document.getElementById('content')
    let homeWraper = document.createElement('div')
    let mainText = document.createElement('p')
    let subText = document.createElement('p')
    mainText.innerHTML = "IN <span>BEER</span> WE TRUST"
    subText.innerText = "We serve the finest only"

    homeWraper.classList.add('bodyStyle')
    mainText.classList.add('mainText')
    subText.classList.add('subText')
    
    homeWraper.appendChild(mainText)
    homeWraper.appendChild(subText)
    bodyContent.appendChild(homeWraper)

    return homeWraper
}

function homeLoader(){
    let homeButton = document.createElement('button')
    homeButton.textContent = 'Home'
    homeButton.classList.add('menu_btns')
    

    homeButton.addEventListener("click", (e) => {
        if(document.body.contains(document.querySelector('.menu_item_wrapper'))){
            document.querySelector('.menu_item_wrapper').remove()
        }
        if(document.body.contains(document.querySelector('.contactWrapper'))){
            document.querySelector('.contactWrapper').remove()
        }

        if(!document.body.contains(document.querySelector('.bodyStyle'))){
            homeContent();
            e.target.classList.add('')
        }
        
      });

    return homeButton
}

export { homeLoader, homeContent }