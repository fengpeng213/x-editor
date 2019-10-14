import { Menu, app } from 'electron';

const dockMenu = Menu.buildFromTemplate([
  {
    label: 'New Window',
  },
])

app.dock.setMenu(dockMenu);

export default dockMenu;
