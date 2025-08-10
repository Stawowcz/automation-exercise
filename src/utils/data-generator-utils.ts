import { faker } from "@faker-js/faker";
import { RegisterFormData } from "@typings/pages/auth";
import { Countries } from "@typings/pages/auth";
import { ContactFormData } from "@typings/pages/contact";
import { EmailData } from "@typings/pages/home";
import { PaymentFormData } from "@typings/pages/payment/payment-types";

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

  public static generateTextareaText(): string {
    return faker.lorem.paragraphs(2, "\n\n"); // 2 akapity oddzielone pustą linią
  }

  public static generatePaymentFormData(
    overrides: Partial<PaymentFormData> = {},
  ): PaymentFormData {
    const baseData: PaymentFormData = {
      name_on_card: faker.person.fullName(),
      card_number: faker.finance.creditCardNumber().replace(/\D/g, ""),
      cvc: faker.finance.creditCardCVV(),
      expiry_month: String(
        faker.date.future({ years: 5 }).getMonth() + 1,
      ).padStart(2, "0"),
      expiry_year: String(faker.date.future({ years: 5 }).getFullYear()),
    };

    return { ...baseData, ...overrides };
  }
}
