export const fontFamily = key => ({ theme }) =>
  `font-family: ${theme.typography.families[key]};`;

export const color = key => ({ theme }) => theme.colors[key];

export const spacing = sizes => ({ theme }) =>
  sizes
    .map(size => `${theme.spaces[size]}${size === "none" ? "" : "rem"}`)
    .join(" ");

export const toastrConfig = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-bottom-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "100",
  hideDuration: "1000",
  timeOut: "2000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
