const size = {
    mobileS: '320px',
    mobileW: '375px',
    mobileL: '625px',
    tablet: '834px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const media = {
    mobileS: `@media(max-width: ${size.mobileS})`,
    mobileW: `@media(max-width: ${size.mobileW})`,
    mobileL: `@media(max-width: ${size.mobileL})`,
    tablet: `@media(max-width: ${size.tablet})`,
    laptop: `@media(max-width: ${size.laptop})`,
    laptopL: `@media(max-width: ${size.laptopL})`,
    desktop: `@media(max-width: ${size.desktop})`,
};
