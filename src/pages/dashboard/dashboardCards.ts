import { DashboardCardTypes } from '@/types';

export const dashboardCards: DashboardCardTypes[] = [
  {
    title: 'Serviços',
    description: 'Gerencie todos os serviços criados com praticidade e rapidez',
    icon: 'briefcase',
    toPage: '/services',
  },
  {
    title: 'Peças',
    description:
      'Gerencie as pecas cadastradas no sistema com praticidade e rapidez',
    icon: 'wrench',
    toPage: '/car-parts',
  },
  {
    title: 'Clientes',
    description:
      'Gerencie todos os clientes cadastrados no sistema de maneira simples',
    icon: 'users',
    toPage: '/customers',
  },
  {
    title: 'Colaboradores',
    description:
      'Gerencie todos os colaboradores cadastrados no sistema de maneira simples',
    icon: 'user-cog',
    toPage: '/employees',
  },
];
