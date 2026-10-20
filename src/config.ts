// Site-wide settings. Change them here, not in every page.
// Adds the site's base path (needed when the site lives at user.github.io/repo-name/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${base}${path}`;
export const SITE = {
  name: 'مرام المهجرع',
  description: 'مدونة شخصية بالعربية',
  instagram: 'https://www.instagram.com/malmaohgra',
};
