declare module 'wowjs' {
    export default class WOW {
      static WOW: any;
      constructor(options?: {
        boxClass?: string;
        animateClass?: string;
        offset?: number;
        mobile?: boolean;
        live?: boolean;
        callback?: (box: HTMLElement) => void;
        scrollContainer?: HTMLElement | null;
        resetAnimation?: boolean;
      });
      init(): void;
    }
  }
  