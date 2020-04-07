const localeMapping = {
  EUR: "€",
  USD: "$",
};

export const priceParser = (centsPrice, locale, hasSymbolBefore) => {
  const currency = localeMapping[locale] ? localeMapping[locale] : locale;

  return hasSymbolBefore
    ? `${currency}${centsPrice / 100}`
    : `${centsPrice / 100}${currency}`;
};

export const getTotal = products => {
  return products.reduce((total, item) => total + item.total, 0);
};
