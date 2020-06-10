import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '',
    group: true,
  },
  {
    title: 'Login',
    icon: 'person-outline',
    link: '/pages/login',
  },
  {
    title: 'Gestiones',
    icon: 'headphones-outline',
    children: [ 
      {
        title: 'Mantenimiento de gestiones',
        link: '/pages/forms/layouts',
      }
    ],
  },
  {
    title: 'Usuarios',
    icon: 'people-outline',
    children: [
      {
        title: 'Mantenimiento Usuarios',
        link: '/pages/tables/smart-table',
      },
    ],
  },
   {
    title: 'Archivos',
    icon: 'folder-outline',
    children: [
      {
        title: 'Cargar archivos',
        link: '/pages/uploader',
      },
      {
        title: 'Error al Subir Archivo',
        link: '/pages/errorarchivo',
      },
    ],
  },
];
