import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../tokens/local-storage';

@Injectable()
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

  public set(key: string, value: any): void {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  public get<T>(key: string): T | null {
    const data: string | null = this.localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  }

  public delete(key: string): void {
    this.localStorage.removeItem(key);
  }
}
