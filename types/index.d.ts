declare module "xbogus" {
  type SignFunction = (url: string, userAgent: string) => any;

  const sign: SignFunction;

  interface xbogus {
    (url: string, userAgent: string): any;
  }

  const xbogus: xbogus;

  export = xbogus;
}