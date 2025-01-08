export const ALPHABETIC_CHARS_REGEX = /^[A-Za-z\s]+$/;
export const DATE_REGEX =
  /^(?:(?:19|20)\d{2})-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|02-(?:0[1-9]|1\d|2[0-8]))|(?:19|20)(?:[02468][048]|[13579][26])-02-29$/;
export const PHONE_NUMBER_REGEX = /^\+947\d{8}$/;
export const NATIONAL_ID_REGEX = /^(?:\d{9}[VXvx]|\d{12})$/;
export const NUMBERS_REGEX = /^\d+$/;
export const ALPHANUMERIC_SPECIAL_REGEX =
  /^[a-zA-Z0-9\s!@#$%^&*()\-_=+[\]{};:'",.<>?/|\\~`]*$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
