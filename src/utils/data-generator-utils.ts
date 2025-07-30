import { faker } from "@faker-js/faker";
import { RegisterFormData } from "@typings/auth"; // dostosuj ścieżkę importu

export class DataGenerator {
  public static generateRegisterFormData(): RegisterFormData {
    return {
      signupName: faker.person.firstName(),
      signupEmail: faker.internet.email(),

      password: faker.internet.password({ length: 10 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      mobileNumber: faker.phone.number(),

      day: faker.number.int({ min: 1, max: 28 }).toString(), // np. "15"
      month: faker.number.int({ min: 1, max: 12 }).toString(), // np. "7"
      year: faker.number.int({ min: 1960, max: 2005 }).toString(), // np. "1994"
      country: "Canada", // możesz też dodać losowanie z listy państw

      subscribeToNewsletter: faker.datatype.boolean(),
      receiveSpecialOffer: faker.datatype.boolean(),
    };
  }
}
