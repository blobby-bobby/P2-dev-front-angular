import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { OlympicType } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<OlympicType[]>([]);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<any>(this.olympicUrl).pipe(
      tap((value: any) => this.olympics$.next(value)),
      catchError((error: any, caught: Observable<void>) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next([]);
        return caught;
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }

  getCountriesTotalMedal(): Observable<{ country: string, medalsTotal: number }[]> {
    return this.http.get<any>(this.olympicUrl).pipe(
      map(countries => {
        return countries.map((country: any) => {
          const totalMedals = country.participations.reduce((total: number, participation: any) => total + participation.medalsCount, 0);
          return { country: country.country, medalsTotal: totalMedals };
        });
      })
    );
  }
}
