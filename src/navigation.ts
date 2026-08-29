import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Careers', href: getPermalink('/careers') },
    { text: 'FAQ', href: getPermalink('/faq') },
    { text: 'Blog', href: getBlogPermalink() },
  ],
  actions: [
    {
      text: 'Book a free consultation',
      href: 'https://cal.com/example',
      target: '_blank',
      variant: 'primary' as const,
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    AEW Agency · All rights reserved.
  `,
};

export const headerDataRu = {
  links: [
    { text: 'Главная', href: getPermalink('/ru') },
    { text: 'Услуги', href: getPermalink('/ru/services') },
    { text: 'Карьера', href: getPermalink('/ru/careers') },
    { text: 'FAQ', href: getPermalink('/ru/faq') },
    { text: 'Блог', href: getBlogPermalink() },
  ],
  actions: [
    {
      text: 'Записаться на бесплатную консультацию',
      href: 'https://cal.com/example',
      target: '_blank',
      variant: 'primary' as const,
    },
  ],
};

export const footerDataRu = {
  links: [
    {
      title: 'Компания',
      links: [
        { text: 'Главная', href: getPermalink('/ru') },
        { text: 'Услуги', href: getPermalink('/ru/services') },
        { text: 'Карьера', href: getPermalink('/ru/careers') },
        { text: 'FAQ', href: getPermalink('/ru/faq') },
        { text: 'Блог', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Условия', href: getPermalink('/ru/terms') },
    { text: 'Конфиденциальность', href: getPermalink('/ru/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    AEW Agency · Все права защищены.
  `,
};
