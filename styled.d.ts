import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      lightGray: string;
      gray: string;
      darkDray: string;
    };
    spacings: {
      small: string;
      medium: string;
      large: string;
    };
    font: {
      sizes: {
        small: string;
        medium: string;
        large: string;
        superLarge: string;
      };
    };
  }
}
