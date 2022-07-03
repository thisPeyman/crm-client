import { Injectable } from '@angular/core';
import { AuthFacade } from './auth.facade';

@Injectable()
export class AuthEffects {
  constructor(private authFacade: AuthFacade) {}
}
