import { faker } from "@faker-js/faker";
import { RegisterFormData } from "@typings/auth";
import { Countries } from "@typings/auth";
import { ContactFormData } from "@typings/contact";
import { EmailData } from "@typings/home";

export class DataGenerator {
  public static generateRegisterFormData(
    requiredOnly = false,
    overrides: Partial<RegisterFormData> = {},
  ): RegisterFormData {
    const isMale = requiredOnly ? false : faker.datatype.boolean();
    const isFemale = requiredOnly ? false : !isMale;

    const baseData: RegisterFormData = {
      signupName: faker.person.firstName(),
      signupEmail: faker.internet.email(),

      password: faker.internet.password({ length: 10 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),

      address1: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      mobileNumber: faker.phone.number(),
      country: faker.helpers.arrayElement(Object.values(Countries)),

      company: requiredOnly ? undefined : faker.company.name(),
      address2: requiredOnly ? undefined : faker.location.secondaryAddress(),
      day: requiredOnly
        ? undefined
        : faker.number.int({ min: 1, max: 28 }).toString(),
      month: requiredOnly
        ? undefined
        : faker.number.int({ min: 1, max: 12 }).toString(),
      year: requiredOnly
        ? undefined
        : faker.number.int({ min: 1960, max: 2005 }).toString(),

      subscribeToNewsletter: requiredOnly ? false : true,
      receiveSpecialOffer: requiredOnly ? false : true,

      menGender: isMale,
      womanGender: isFemale,
    };

    return { ...baseData, ...overrides };
  }

  public static generateContactFormData(
    overrides: Partial<ContactFormData> = {},
  ): ContactFormData {
    const baseData: ContactFormData = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      subject: faker.lorem.sentence(3),
      message: faker.lorem.paragraph(),
    };

    return { ...baseData, ...overrides };
  }

  public static generateEmail(overrides: Partial<EmailData> = {}): string {
    return overrides.signupEmail || faker.internet.email();
  }
}
