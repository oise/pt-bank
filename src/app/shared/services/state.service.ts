import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state$: BehaviorSubject<any>;

  get state() {
    return this.state$.getValue();
  }

  constructor() {
    this.state$ = new BehaviorSubject<any>([]);
  }

  setState(newState: Partial<any>) {
    this.state$.next({
      ...this.state,
      ...newState
    });
  }

  select<K>(mapFn: (state: any) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: any) => {
        return mapFn(state);
      }),
      distinctUntilChanged()
    );
  }
}
