import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMoney } from '../interfaces/money.interface';

@Injectable()
export class MoneyService {
  constructor(private http: HttpClient) { }

  Create() /*: Observable<IMoney>*/ {
  }

  GetData(): Observable<IMoney[]> {
    return this.http.get<IMoney[]>("https://localhost:7003/api/Monedas");
  }

  GetDetails(id: number): Observable<IMoney> {
    return this.http.get<IMoney>("https://localhost:7003/api/Monedas/" + id);
  }

  Delete(id: number): boolean {
    return true;
  }

  Update(id: number, money: IMoney):void {
    this.http.put<IMoney>("https://localhost:7003/api/Monedas/", {'id':id, 'money':money});
  }
}
