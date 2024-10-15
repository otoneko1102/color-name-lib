declare module 'color-name-lib' {
  interface RGB {
    r: number;
    g: number;
    b: number;
  }

  function name(color: string, language?: 'en' | 'ja' | 'cn'): string;
  function name(color: [number, number, number], language?: 'en' | 'ja' | 'cn'): string;
  function name(color: RGB, language?: 'en' | 'ja' | 'cn'): string;

  export { name };
}
