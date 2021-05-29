import {homeLoader} from './home'
import menuLoader from './menu'
import contactLoader from './contact'

function header(){

    let nav = document.createElement('nav')
    let wrapper = document.createElement('div')
    let menuWrapper = document.createElement('div')
    let log = document.createElement('h3')
    

    wrapper.classList.add('wrapper')
    menuWrapper.classList.add('d-flex')
    log.classList.add('logo')
    log.innerHTML= 'Gold..Skies'


    wrapper.appendChild(log)
    wrapper.appendChild(menuWrapper)
    menuWrapper.appendChild(homeLoader())
    menuWrapper.appendChild(menuLoader())
    menuWrapper.appendChild(contactLoader())
    nav.appendChild(wrapper)

    return nav

}

export default header
