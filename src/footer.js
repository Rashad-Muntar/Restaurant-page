const footerContent = () => {
  const footer = document.createElement('footer');
  const wrapper = document.createElement('div');
  const text = document.createElement('p');

  wrapper.classList.add('wrapper');
  text.innerHTML = 'Designed and built by Rashad';

  wrapper.appendChild(text);
  footer.appendChild(wrapper);

  return footer;
};

export default footerContent;