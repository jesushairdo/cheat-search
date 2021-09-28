import { Injectable } from '@angular/core';
import { Cheat } from './cheat';
import { CHEATS } from './mock-cheats';
import { fromEventPattern, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheatService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCheats(): Observable<Cheat[]> {
    return this.http.get<Cheat[]>(this.cheatsUrl)
    .pipe(
      tap(_ => this.log('fetched cheats')),
      catchError(this.handleError<Cheat[]>('getCheats', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getCheat(id: number): Observable<Cheat> {
    const url = `${this.cheatsUrl}/${id}`;
    return this.http.get<Cheat>(url).pipe(
      tap(_ => this.log(`fetched cheat id=${id}`)),
      catchError(this.handleError<Cheat>(`getCheat id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private cheatsUrl = '/api/cheats'; //URL to web api

  /**
   * Handle Http operation that failed.
   * Let the app continue
   * @param operation - name of operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.error(error); //log to console instead

      //TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      //Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  updateCheat(cheat: Cheat): Observable<any> {
    return this.http.put(this.cheatsUrl, cheat, this.httpOptions).pipe(
      tap(_ => this.log(`updated cheat id=${cheat.id}`)),
      catchError(this.handleError<any>('updateCheat'))
    );
  }

  /** POST: add a new cheat to the server */
  addCheat(cheat: Cheat): Observable<Cheat> {
    return this.http.post<Cheat>(this.cheatsUrl, cheat, this.httpOptions).pipe(
      tap((newCheat: Cheat) => this.log(`added cheat w/ id=${newCheat.id}`)),
      catchError(this.handleError<Cheat>('addCheat'))
    );
  }

  /** DELETE: delete the cheat from the server */
  deleteCheat(id: number): Observable<Cheat> {
    const url = `${this.cheatsUrl}/${id}`;

    return this.http.delete<Cheat>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted cheat id=${id}`)),
      catchError(this.handleError<Cheat>('deleteCheat'))
    );
  }

  /** GET: cheats whose name contains search term */
  searchCheats(term: string): Observable<Cheat[]> {
    if (!term.trim()) {
      //if not search term, return empty cheat array
      return of ([]);
    }
    return this.http.get<Cheat[]>(`${this.cheatsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found cheats matching "${term}"`) :
        this.log(`no cheats matching "${term}"`)),
        catchError(this.handleError<Cheat[]>('searchCheats', [])) 
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
