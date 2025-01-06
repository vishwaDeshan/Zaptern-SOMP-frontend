export interface PersonalDetails {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: string;
  pronouns: string;
  dateOfBirth: string;
  phoneNumber: string;
  landline?: string;
  email: string;
  nationalId: string;
  nationality: string;
  street: string;
  city: string;
  zipCode: string;
  hobbies?: string;
  otherHobbies?: string;
}

export interface applicantList {
  applicantList: PersonalDetails[];
}
