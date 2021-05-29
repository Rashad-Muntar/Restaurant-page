import header from './header'
import {homeContent} from './home'


function page(){
    let content = document.getElementById('content')
    content.appendChild(header())
    content.appendChild(homeContent())
}

function activeButton(button) {
    const buttons = document.querySelectorAll(".menu_btns");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.add("activeBtn");
      }
    });
  }

export {page, activeButton}