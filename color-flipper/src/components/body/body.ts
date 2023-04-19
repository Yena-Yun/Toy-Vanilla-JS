import { getTextColorByBackgroundColor } from '../utils/isDark';

const COLOR_WHITE = '#FFFFFF';
const COLOR_BLACK = '#000000';

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
colorChangeButton.style.fontWeight = '700';
colorChangeButton.style.border = `1px solid ${COLOR_BLACK}`;
colorChangeButton.style.borderRadius = '8px';
colorChangeButton.textContent = 'CLICK ME';
colorChangeButton.style.cursor = 'pointer';

const DEFAULT_COLOR = COLOR_WHITE;

const colorTitleBox = document.createElement('div');
const title = document.createElement('h1');
const colorName = document.createElement('span');

colorTitleBox.style.marginBottom = '24px';
colorTitleBox.style.padding = '24px';
colorTitleBox.style.borderRadius = '16px';
colorTitleBox.style.backgroundColor = COLOR_BLACK;

title.classList.add('color-name');
title.style.color = COLOR_WHITE;
title.textContent = `Background Color : ${DEFAULT_COLOR}`;

const changeBackgroundColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = '#' + randomColor;
  colorName.textContent = '#' + randomColor;

  const isDark = getTextColorByBackgroundColor(randomColor);

  if (isDark) {
    colorTitleBox.style.backgroundColor = COLOR_WHITE;
    title.style.color = COLOR_BLACK;
    colorChangeButton.style.border = `1px solid ${COLOR_WHITE}`;
    colorChangeButton.style.color = COLOR_WHITE;
  } else {
    colorTitleBox.style.backgroundColor = COLOR_BLACK;
    title.style.color = COLOR_WHITE;
    colorChangeButton.style.border = `1px solid ${COLOR_BLACK}`;
    colorChangeButton.style.color = COLOR_BLACK;
  }

  title.textContent = `Background Color : ${colorName.textContent}`;
};

colorChangeButton.addEventListener('click', changeBackgroundColor);

colorTitleBox?.appendChild(title);
backgroundContainer?.append(colorTitleBox, colorChangeButton);
body?.appendChild(backgroundContainer);
container?.append(body);
