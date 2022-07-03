import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LocalStorageService] });
    service = TestBed.inject(LocalStorageService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set & get items in localStorage', () => {
    const data = { name: 'John Doe' };
    service.set('test', data);

    expect(service.get<{ name: string }>('test')).toEqual(data);
  });

  it('should delete item from localStorage', () => {
    service.set('test', 'My Test String');
    service.delete('test');

    expect(service.get('test')).toBeNull();
  });
});
