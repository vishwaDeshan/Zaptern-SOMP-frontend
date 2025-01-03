import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../../apps/Zaptern-SOMP-frontend/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class applicantsListService {
  constructor(private http: HttpClient) {}

  GetApplicants(): Observable<any> {
    return this.http.get<any[]>(
      `${environment.apiUrl}/applicant/getApplicants`
    );
  }
}
