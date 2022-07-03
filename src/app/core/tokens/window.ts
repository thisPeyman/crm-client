import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>(
  'An abstraction over global window object',
  { factory: () => inject(DOCUMENT).defaultView! }
);
