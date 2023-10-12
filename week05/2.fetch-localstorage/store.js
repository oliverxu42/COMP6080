const container = document.createElement('div');
container.setAttribute('id', 'container');
container.innerText = 'Loading, Please wait';
document.body.appendChild(container);

const createElement = (text) => {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerText = text;
  container.appendChild(box);
  return box;
};

// Fetch and render items...
