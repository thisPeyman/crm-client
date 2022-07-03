import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  constructor(private readonly store: Store) {}
}
