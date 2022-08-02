export interface RootTheme {
  title: string;
  colors: {
    blue: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    red: {
      bg: string;
      main: string;
    };
    green: {
      bg: string;
      main: string;
    };
    orange: {
      bg: string;
      main: string;
    };
    shape: string;
    progressbar: string;
  };
  fonts: {
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
    black: string;
  };
}

export interface Theme {
  light: RootTheme;
  dark: RootTheme;
}
