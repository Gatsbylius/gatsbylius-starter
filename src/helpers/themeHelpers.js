export const fontFamily = (key) => ({ theme }) =>
  `font-family: ${theme.typography.families[key]};`;

export const color = (key) => ({ theme }) => theme.colors[key];

export const spacing = (sizes) => ({ theme }) =>
  sizes
    .map((size) => `${theme.spaces[size]}${size === "none" ? "" : "rem"}`)
    .join(" ");

export const mediaQuery = (size) => {
  switch (size) {
    case "xl": {
      return "1214px";
    }
    case "lg": {
      return "991px";
    }
    case "md": {
      return "768px";
    }
    case "xs": {
      return "576px";
    }
    default: {
      return "576px";
    }
  }
};

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
