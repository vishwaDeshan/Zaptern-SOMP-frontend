import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationBackgroundData } from '@zaptern-somp-frontend/model';
import { environment } from 'apps/Zaptern-SOMP-frontend/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationalDetailsService {
  constructor(private http: HttpClient) {}

  getEducationalDetails(id: string): Observable<EducationBackgroundData> {
    return this.http.get<EducationBackgroundData>(
      `${environment.apiUrl}/getEducationalDetailsById?ApplicantId=${id}`
    );
  }

  saveEducationalDetails(
    educationalDetails: EducationBackgroundData
  ): Observable<EducationBackgroundData> {
    return this.http.post<EducationBackgroundData>(
      `${environment.apiUrl}/addEducationalDetails`,
      educationalDetails
    );
  }
}
