const body = document.createElement('body');
body.style.width = '100%';
body.style.height = '100vh';

const backgroundContainer = document.createElement('div');
backgroundContainer.classList.add('background-container');
backgroundContainer.style.height = '100%';

backgroundContainer.style.display = 'flex';
backgroundContainer.style.flexDirection = 'column';
backgroundContainer.style.justifyContent = 'center';
backgroundContainer.style.alignItems = 'center';

const colorChangeButton = document.createElement('button');
colorChangeButton.id = 'color-changer';
colorChangeButton.style.padding = '12px 16px';
colorChangeButton.textContent = 'CLICK ME';
colorChangeButton.style.cursor = 'pointer';

const DEFAULT_COLOR = '#ffffff';

const title = document.createElement('h1');
const colorName = document.createElement('span');
title.classList.add('color-name');
title.style.marginBottom = '24px';
title.textContent = `Background Color : ${DEFAULT_COLOR}`;

const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = '#' + randomColor;
  colorName.textContent = '#' + randomColor;
  title.textContent = `Background Color : ${colorName.textContent}`;
};

colorChangeButton.addEventListener('click', changeBackgroundColor);

backgroundContainer?.append(title, colorChangeButton);
body?.appendChild(backgroundContainer);
container?.append(body);
