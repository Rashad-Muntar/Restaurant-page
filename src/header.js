/* eslint-disable import/no-cycle */
import { homeLoader } from './home';
import menuLoader from './menu';
import contactLoader from './contact';

const header = () => {
  const nav = document.createElement('nav');
  const wrapper = document.createElement('div');
  const menuWrapper = document.createElement('div');
  const log = document.createElement('h3');

  wrapper.classList.add('wrapper');
  menuWrapper.classList.add('d-flex');
  log.classList.add('logo');
  log.innerHTML = 'Gold..Skies';

  wrapper.appendChild(log);
  wrapper.appendChild(menuWrapper);
  menuWrapper.appendChild(homeLoader());
  menuWrapper.appendChild(menuLoader());
  menuWrapper.appendChild(contactLoader());
  nav.appendChild(wrapper);

  return nav;
};

export default header;
