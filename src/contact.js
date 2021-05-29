function contactContent() {
  const bodyContent = document.getElementById('content');
  const contactWraper = document.createElement('div');
  const phone = document.createElement('p');
  const address = document.createElement('p');
  const map = document.createElement('img');
  map.src = 'https://techbeacon.com/sites/default/files/styles/social/public/field/image/google-location-privacy.jpg?itok=g3oTUeP2';
  phone.innerHTML = '+233-246-949-634';
  address.innerText = 'Street 19 Abokoba dindin avenue';

  contactWraper.classList.add('contactWrapper');

  contactWraper.appendChild(phone);
  contactWraper.appendChild(address);
  contactWraper.appendChild(map);
  bodyContent.appendChild(contactWraper);

  return contactWraper;
}

function contactLoader() {
  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  contactButton.classList.add('menu_btns');

  contactButton.addEventListener('click', () => {
    if (document.body.contains(document.querySelector('.menu_item_wrapper'))) {
      document.querySelector('.menu_item_wrapper').remove();
    }
    if (document.body.contains(document.querySelector('.bodyStyle'))) {
      document.querySelector('.bodyStyle').remove();
    }

    if (!document.body.contains(document.querySelector('.contactWrapper'))) {
      contactContent();
    }
  });

  return contactButton;
}

export default contactLoader;