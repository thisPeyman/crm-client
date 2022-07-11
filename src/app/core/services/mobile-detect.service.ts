import { Inject, Injectable } from '@angular/core';
import { NAVIGATOR } from '../tokens/navigator';

@Injectable({ providedIn: 'root' })
export class MobileDetectService {
  constructor(@Inject(NAVIGATOR) private readonly navigator: Navigator) {}

  get isDeviceMobile(): boolean {
    if (
      this.navigator.userAgent.match(/Android/i) ||
      this.navigator.userAgent.match(/iPhone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
