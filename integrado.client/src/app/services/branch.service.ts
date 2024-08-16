import { Injectable } from '@angular/core';
import { IBranch } from '../interfaces/branch.interface'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BranchService {

  readonly url: string = "https://localhost:7003/api/Sucursals";
  constructor(private http: HttpClient) { }

  GetData(): Observable<IBranch[]> {
    return this.http.get<IBranch[]>(this.url);
  }

  GetDetails(id: number): Observable<IBranch> {
    return this.http.get<IBranch>(this.url + "/" + id);
  }

  Delete(id: number): Observable<any> {
    return this.http.delete<IBranch>(this.url + "/" + id);
  }

  Update(id: number, branch: IBranch): Observable<any> {
    return this.http.put<IBranch>(this.url + "/" + id, branch);
  }

  Add(branch: IBranch): Observable<any> {
    return this.http.post<IBranch>(this.url, branch);
  }
}
