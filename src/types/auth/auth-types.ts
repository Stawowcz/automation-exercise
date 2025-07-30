export type RegisterFormData = {
  signupName: string;
  signupEmail: string;

  password: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  mobileNumber: string;
  day: string;
  month: string;
  year: string;
  country: string;
  company: string;
  subscribeToNewsletter?: boolean;
  receiveSpecialOffer?: boolean;
};

export type PreRegisterFormData = Pick<
  RegisterFormData,
  "signupName" | "signupEmail"
>;
