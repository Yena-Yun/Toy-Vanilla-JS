const container = document.getElementById('container');
const header = document.createElement('header');
const tabMenu = document.createElement('ul');

const TAB_MENU = ['Color Flipper', 'Simple Hex'];

header.style.width = '100%';
header.style.height = '80px';
header.style.position = 'fixed';
header.style.backgroundColor = '#ffffff';

tabMenu.style.width = '100%';
tabMenu.style.height = '100%';
tabMenu.style.display = 'flex';
tabMenu.style.alignItems = 'center';
tabMenu.style.gap = '48px';

header?.appendChild(tabMenu);
container?.append(header);

let tabId = 0;

TAB_MENU.forEach((tabMenuString: string) => {
  const tab = document.createElement('li');
  tab.classList.add('tab');
  tab.textContent = tabMenuString;
  tab.id = tabId.toString();
  tabId++;

  tab.style.flex = '1';
  tab.style.fontWeight = 'bold';
  tab.style.textAlign = 'center';
  tab.style.listStyle = 'none';
  tab.style.cursor = 'pointer';

  tabMenu?.appendChild(tab);
});

const tabs = document.querySelectorAll('.tab');

const switchTab = (e: Event) => {
  const eventTarget = e.currentTarget as HTMLLIElement;

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i] as HTMLLIElement;
    tab.classList.remove('active');
  }

  eventTarget.classList.add('active');

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i] as HTMLLIElement;
    tab.style.color = 'black';

    if (tab.classList.contains('active')) {
      tab.style.color = 'blue';
    }
  }
};

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];
  tab.addEventListener('click', switchTab);
}

window.onload = () => {
  const defaultTab = tabs[0] as HTMLLIElement;
  defaultTab.style.color = 'blue';
};
