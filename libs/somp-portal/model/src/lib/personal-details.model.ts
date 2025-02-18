export interface PersonalDetails {
  id: string;
  applicantId: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: string;
  pronouns: string;
  dateOfBirth: string;
  phoneNumber: string;
  landLine?: string;
  email: string;
  nationalId: string;
  nationality: string;
  street: string;
  city: string;
  zipCode: string;
  hobbies?: string;
  otherHobbies?: string;
  anyComments?: string;
}

export interface applicantList {
  applicantList: PersonalDetails[];
}
