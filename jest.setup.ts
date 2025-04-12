import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

// Mock WOW.js
jest.mock('wow.js', () => {
    return {
      __esModule: true,
      default: class WOW {
        init() {
          return null;
        }
      },
      WOW: class WOW {
        init() {
          return null;
        }
      }
    };
  });

  