import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import {
  loadPersonalDetails,
  selectPersonalDetails,
} from '@zaptern-somp-frontend/data-access';
import { Observable } from 'rxjs';
import { PersonalDetails } from '@zaptern-somp-frontend/model';

@Component({
  selector: 'somp-personal-details',
  standalone: true,
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  imports: [CommonModule, PersonalDetailsFormComponent],
})
export class PersonalDetailsComponent implements OnInit {
  applicantId: string = 'f41f2114-2f10-08dd-a1f5-fed9484ae025';
  personalDetails$: Observable<PersonalDetails>;

  constructor(private store: Store) {
    this.personalDetails$ = this.store.pipe(
      select(selectPersonalDetails)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadPersonalDetails({ id: this.applicantId }));
    }
}
