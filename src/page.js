/* eslint-disable import/no-cycle */
import header from './header';
import { homeContent } from './home';
import footerContent from './footer';

function page() {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(homeContent());
  document.body.appendChild(footerContent());
}
export default page;