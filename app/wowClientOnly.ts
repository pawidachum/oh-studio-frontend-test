export async function initWOW() {
    const WOWModule = await import("wowjs");
    const WOW = WOWModule.default;
    new WOW().init();
  }