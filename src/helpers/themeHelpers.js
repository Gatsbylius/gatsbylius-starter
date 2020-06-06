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

export const toastConfig = {
  position: "bottom-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};
