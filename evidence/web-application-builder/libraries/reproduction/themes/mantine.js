import { duke } from './tokens.js';
export function mantineTheme() {
  const d = duke();
  // Mantine requires ten shades; repeated published solids avoid invented Duke tints.
  return { primaryColor: 'duke', primaryShade: 6, fontFamily: d.body,
    headings: { fontFamily: d.heading, fontWeight: 400 }, defaultRadius: 'sm',
    colors: { duke: [d.panel,d.panel,d.panel,d.royal,d.royal,d.royal,d.navy,d.navy,d.navy,d.navy] },
    components: { Button: { styles: { root: { '--button-hover': d.royal } } } } };
}
