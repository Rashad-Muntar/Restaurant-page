/* eslint-disable import/no-cycle */
import header from './header';
import { homeContent } from './home';

function page() {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(homeContent());
}

export default page;