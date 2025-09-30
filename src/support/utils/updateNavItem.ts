import { reactive } from 'vue';

const stateNav = reactive({
  navItems: [
    {
      name: 'Home',
      root: '/home',
      to: '/app/Home',
      icon: 'fa-solid fa-house',
      label: 'Inicio',
    },
    {
      name: 'Order',
      root: '/Order',
      to: '/app/Order',
      icon: 'point_of_sale',
      label: 'Punto de venta',
    },
    {
      name: 'Order',
      root: '/Order',
      to: '/app/Order',
      icon: 'fa-solid fa-sack-dollar',
      label: 'Pedidos',
    },
    {
      name: 'Logout',
      root: '',
      to: '',
      icon: 'fa-solid fa-right-from-bracket',
      label: 'Salir',
    },
  ],
});

const storeNav = {
  stateNav,
};

export default storeNav;
