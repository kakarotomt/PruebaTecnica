import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMoney } from '../interfaces/money.interface';

@Injectable()
export class MoneyService {

  readonly url: string = "https://localhost:7003/api/Monedas";
  constructor(private http: HttpClient) { }

  GetData(): Observable<IMoney[]> {
    return this.http.get<IMoney[]>(this.url);
  }

  GetDetails(id: number): Observable<IMoney> {
    return this.http.get<IMoney>(this.url + "/" + id);
  }

  Delete(id: number): Observable<any> {
    return this.http.delete<IMoney>(this.url + "/" + id);
  }

  Update(id: number, money: IMoney): Observable<any> {
    return this.http.put<IMoney>(this.url + "/" + id, money);
  }

  Add(money: IMoney): Observable<any> {
   return this.http.post<IMoney>(this.url, money);
  }
}
