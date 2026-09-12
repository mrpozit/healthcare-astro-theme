import nav from "../data/navigation.json";

export const primaryLinks = nav.links;

export const contactLink = {
  label: nav.cta.label,
  href: nav.cta.href,
};

export const footerLinks = [...primaryLinks, contactLink];

export { nav };
