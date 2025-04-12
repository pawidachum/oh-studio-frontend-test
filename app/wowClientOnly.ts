
export async function initWOW() {
  try {
    if (typeof window !== 'undefined') {
      const WOWModule = await import("wowjs");
      const WOW = WOWModule.default;
      
      if (typeof WOW === 'function') {
        new WOW().init();
      } else {
        console.warn("WOW is not available as expected in the imported module");
      }
    }
  } catch (error) {
    console.warn("Failed to initialize WOW.js:", error);
  }
}