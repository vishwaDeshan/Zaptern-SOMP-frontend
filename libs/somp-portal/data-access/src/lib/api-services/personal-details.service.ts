import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalDetails } from '@zaptern-somp-frontend/model';
import { environment } from 'apps/Zaptern-SOMP-frontend/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsService {
  private apiUrl = 'https://api.example.com/personal-details'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getPersonalDetails(id: string): Observable<PersonalDetails> {
    return this.http.get<PersonalDetails>(
      `${environment.apiUrl}/applicant/getApplicants/${id}`
    );
  }

  updatePersonalDetails(
    id: string,
    personalDetails: PersonalDetails
  ): Observable<PersonalDetails> {
    return this.http.put<PersonalDetails>(
      `${environment.apiUrl}/applicant/updateApplicants/${id}`,
      personalDetails
    );
  }
}
