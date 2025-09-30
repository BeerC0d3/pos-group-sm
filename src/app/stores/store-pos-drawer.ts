import { defineStore } from 'pinia';

interface posDrawerState {
  posLDrawer: boolean;
  posRDrawer: boolean;
}

export const posDrawerStore = defineStore('pos-drawer', {
  state: (): posDrawerState => ({
    posLDrawer: false,
    posRDrawer: false,
  }),
  getters: {
    getLeftDrawer: (state) => state.posLDrawer,
    getRightDrawer: (state) => state.posRDrawer,
  },
  actions: {
    StateToggle(isOpen: boolean, typeSide: string) {
      if (typeSide == 'Left') this.posLDrawer = isOpen;
      if (typeSide == 'Right') this.posRDrawer = isOpen;
    },
    setToggle(typeSide: string) {
      if (typeSide == 'Left') this.posLDrawer = false;
      if (typeSide == 'Right') this.posRDrawer = false;
    },
  },
});
