import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditKycService {
  getData() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  public getT(): Observable<any> {
    return this.http.get('/', {
      headers: {
        Authorization: `Bearer `,
      },
    });
  }

  public getOne(id: string): Observable<any> {
    return this.http.get(`/${id}/`, {
      headers: {
        Authorization: `Bearer `,
      },
    });
  }

  public putOne(id: string, data: any): Observable<any> {
    return this.http.put(`/${id}/`, data, {
      headers: {
        Authorization: `Bearer `,
      },
    });
  }
}
