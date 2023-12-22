import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditKycService {
  constructor(private http: HttpClient) {}

  public getT(): Observable<any> {
    return this.http.get(
      'https://dca.revadeep.xyz/api/v1/admin/kyc_aml_record/',
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYmYyNzNjYTItOTc3Mi00Njg3LTllZGItNGNhZjcyNDhmODAxIiwiZW1haWwiOiJtem5lZXJhaEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im9sYSIsImV4dHJhX2luZm8yMzQ1MzAiOnRydWUsInVzZXJfcmVmZXJlbmNlIjoiY2E1NGE4YWM1OTNlZDZlMiIsImV4cCI6MTcwMzMyMTMwNSwiMmZhIjp0cnVlLCJvcmlnX2lhdCI6MTcwMzIzNDkwNSwib3RwX2RldmljZV9pZCI6Im90cF90b3RwLnRvdHBkZXZpY2UvMTQifQ.il_USwGc7X0tA1lQfyX9C40xU2hgp-aDO4216F-ELgc`,
        },
      }
    );
  }

  public getOne(id: string): Observable<any> {
    return this.http.get(
      `https://dca.revadeep.xyz/api/v1/admin/kyc_aml_record/${id}/`,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYmYyNzNjYTItOTc3Mi00Njg3LTllZGItNGNhZjcyNDhmODAxIiwiZW1haWwiOiJtem5lZXJhaEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im9sYSIsImV4dHJhX2luZm8yMzQ1MzAiOnRydWUsInVzZXJfcmVmZXJlbmNlIjoiY2E1NGE4YWM1OTNlZDZlMiIsImV4cCI6MTcwMzMyMTMwNSwiMmZhIjp0cnVlLCJvcmlnX2lhdCI6MTcwMzIzNDkwNSwib3RwX2RldmljZV9pZCI6Im90cF90b3RwLnRvdHBkZXZpY2UvMTQifQ.il_USwGc7X0tA1lQfyX9C40xU2hgp-aDO4216F-ELgc`,
        },
      }
    );
  }
}
