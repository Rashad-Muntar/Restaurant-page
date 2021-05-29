import {activeButton} from './page'

function contactContent(){
    let bodyContent = document.getElementById('content')
    let contactWraper = document.createElement('div')
    let phone = document.createElement('p')
    let address = document.createElement('p')
    let map = document.createElement('img')
    map.src = 'https://techbeacon.com/sites/default/files/styles/social/public/field/image/google-location-privacy.jpg?itok=g3oTUeP2'
    phone.innerHTML = "+233-246-949-634"
    address.innerText = "Street 19 Abokoba dindin avenue"
    
    contactWraper.classList.add('contactWrapper')

    contactWraper.appendChild(phone)
    contactWraper.appendChild(address)
    contactWraper.appendChild(map)
    bodyContent.appendChild(contactWraper)

    return contactWraper
}

function contactLoader(){
    let contactButton = document.createElement('button')
    contactButton.textContent = 'Contact'
    contactButton.classList.add('menu_btns')

    contactButton.addEventListener("click", (e) => {
    
        if(document.body.contains(document.querySelector('.menu_item_wrapper'))){
            document.querySelector('.menu_item_wrapper').remove()
        }
        if(document.body.contains(document.querySelector('.bodyStyle'))){
            document.querySelector('.bodyStyle').remove()
        }

        if(!document.body.contains(document.querySelector('.contactWrapper'))){
            contactContent()
        }
      });

    return contactButton
}




export default contactLoader