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
    return this.http.get<OlympicType[]>(this.olympicUrl).pipe(
      tap((value: OlympicType[]) => this.olympics$.next(value)),
      catchError((error: any, caught: Observable<OlympicType[]>) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next([]);
        return caught;
      })
    );
  }

  /**
   * Retrieves the full list of olympics data.
   *
   * @return {Observable<OlympicType[]>} The observable for the olympics$.
   */
  getOlympics(): Observable<OlympicType[]> {
    return this.olympics$.asObservable();
  }

  /**
   * Retrieves a country by its ID.
   *
   * @param {number} id - The ID of the country.
   * @return {Observable<OlympicType | undefined>} An observable that emits the country with the specified ID,
   * used for the detail page.
   */

  getCountryById(id: number): Observable<OlympicType | undefined> {
    return this.olympics$.pipe(
      map((countries) => countries.find((country) => country.id === id))
    );
  }
}
