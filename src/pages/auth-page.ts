import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { RegisterFormData, PreRegisterFormData } from "@typings/auth";
import { LoginText } from "@typings/auth/auth-enums";

export class AuthPage extends BasePage {
  private readonly loginLink: Locator = this.page.getByRole("link", {
    name: "Signup / Login",
  });
  private readonly signupNameField: Locator =
    this.page.getByTestId("signup-name");
  private readonly signupEmailField: Locator =
    this.page.getByTestId("signup-email");
  private readonly signupEmailBUtton: Locator =
    this.page.getByTestId("signup-button");
  private readonly genderMrRadio: Locator = this.page.locator("#id_gender1");
  private readonly genderMrsRadio: Locator = this.page.locator("#id_gender2");
  private readonly password: Locator = this.page.getByLabel("Password");
  private readonly newsletterCheckbox: Locator =
    this.page.locator("#newsletter");
  private readonly specialOfferCheckbox: Locator = this.page.locator("#optin");
  private readonly firstNameField: Locator = this.page.getByLabel("First name");
  private readonly lastNameField: Locator = this.page.getByLabel("Last name");
  private readonly address1Field: Locator = this.page.getByTestId("address");
  private readonly address2Field: Locator = this.page.getByTestId("address2");
  private readonly cityField: Locator = this.page.getByLabel("City");
  private readonly stateField: Locator = this.page.getByLabel("State");
  private readonly zipField: Locator = this.page.getByTestId("zipcode");
  private readonly mobileNumberField: Locator =
    this.page.getByLabel("Mobile Number");
  private readonly daysField: Locator = this.page.getByTestId("days");
  private readonly monthsField: Locator = this.page.getByTestId("months");
  private readonly yearsField: Locator = this.page.getByTestId("years");
  private readonly countryField: Locator = this.page.getByTestId("country");
  private readonly companyField: Locator = this.page.getByTestId("company");
  private readonly createAccount: Locator =
    this.page.getByTestId("create-account");
  public readonly createAccountText: Locator =
    this.page.getByTestId("account-created");
  private readonly loginEmailField: Locator =
    this.page.getByTestId("login-email");
  private readonly loginPasswordField: Locator =
    this.page.getByTestId("login-password");

  private readonly loginButton: Locator = this.page.getByTestId("login-button");
  public readonly loginError: Locator = this.page.locator('p', {hasText: LoginText.LOGIN_UNSUCCESSFULL })
  public readonly logoutButton: Locator = this.page.getByRole("link", {name: "Logout"})
  public readonly loginToYourAccountText: Locator = this.page.getByRole("heading", {name: LoginText.LOGING_TO_ACCOUNT })
  public readonly newUserSignupText: Locator = this.page.getByRole('heading', {name: LoginText.NEW_USER_SIGNUP })

  

  public async fillPreRegisterForm(data: PreRegisterFormData): Promise<void> {
    await this.secureClick(this.loginLink);
    await this.fillSignupName(data.signupName);
    await this.fillSignupEmail(data.signupEmail);
    await this.clickSignupButton();
  }

  public async fillLoginEmail(value: string) {
    await this.secureFill(this.loginEmailField, value);
  }

  public async fillLoginPassword(value: string) {
    await this.secureFill(this.loginPasswordField, value);
  }

  public async login(email: string, password: string): Promise<void> {
    await this.secureClick(this.loginLink);
    await this.fillLoginEmail(email);
    await this.fillLoginPassword(password);
    await this.clickLoginButton();
  }
  public async fillSignupName(value: string): Promise<void> {
    await this.secureFill(this.signupNameField, value);
  }

  public async clickLoginButton(): Promise<void> {
    await this.secureClick(this.loginButton);
  }

  public async clickLogoutButton(): Promise<void> {
    await this.secureClick(this.logoutButton);
  }

  public async fillSignupEmail(value: string): Promise<void> {
    await this.secureFill(this.signupEmailField, value);
  }

  public async clickSignupButton(): Promise<void> {
    await this.secureClick(this.signupEmailBUtton);
  }

  public async clickCreateAccount(): Promise<void> {
    await this.secureClick(this.createAccount);
  }

  public async fillPassword(value: string): Promise<void> {
    await this.secureFill(this.password, value);
  }

  public async fillCompany(value: string): Promise<void> {
    await this.secureFill(this.companyField, value);
  }

  public async clickMrGender(): Promise<void> {
    await this.secureClick(this.genderMrRadio);
  }

  public async checkNewsletter(): Promise<void> {
    await this.secureClick(this.newsletterCheckbox);
  }

  public async clickMrsGender(): Promise<void> {
    await this.secureClick(this.genderMrsRadio);
  }

  public async checkSpecialOffer(): Promise<void> {
    await this.secureClick(this.specialOfferCheckbox);
  }

  public async fillFirstName(value: string): Promise<void> {
    await this.secureFill(this.firstNameField, value);
  }

  public async fillLastName(value: string): Promise<void> {
    await this.secureFill(this.lastNameField, value);
  }

  public async fillAddress1(value: string): Promise<void> {
    await this.secureFill(this.address1Field, value);
  }

  public async fillAddress2(value: string): Promise<void> {
    await this.secureFill(this.address2Field, value);
  }

  public async fillCity(value: string): Promise<void> {
    await this.secureFill(this.cityField, value);
  }

  public async fillState(value: string): Promise<void> {
    await this.secureFill(this.stateField, value);
  }

  public async fillZip(value: string): Promise<void> {
    await this.secureFill(this.zipField, value);
  }

  public async fillMobileNumber(value: string): Promise<void> {
    await this.secureFill(this.mobileNumberField, value);
  }

  public async selectDay(value: string): Promise<void> {
    await this.secureSelect(this.daysField, value);
  }

  public async selectMonth(value: string): Promise<void> {
    await this.secureSelect(this.monthsField, value);
  }

  public async selectYear(value: string): Promise<void> {
    await this.secureSelect(this.yearsField, value);
  }

  public async selectCountry(value: string): Promise<void> {
    await this.secureSelect(this.countryField, value);
  }

  public async fillRegistration(data: RegisterFormData): Promise<void> {
    if (data.menGender) {
      await this.clickMrGender();
    }
    if (data.womanGender) {
      await this.clickMrsGender();
    }
    await this.fillPassword(data.password);
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    if (data.company) {
      await this.fillCompany(data.company);
    }
    await this.fillAddress1(data.address1);
    if (data.address2) {
      await this.fillAddress2(data.address2);
    }
    await this.fillCity(data.city);
    await this.fillState(data.state);
    await this.fillZip(data.zip);
    await this.fillMobileNumber(data.mobileNumber);
    if (data.day) {
      await this.selectDay(data.day);
    }
    if (data.month) {
      await this.selectMonth(data.month);
    }
    if (data.year) {
      await this.selectYear(data.year);
    }

    await this.selectCountry(data.country);
    if (data.subscribeToNewsletter) {
      await this.checkNewsletter();
    }
    if (data.receiveSpecialOffer) {
      await this.checkSpecialOffer();
    }
    await this.clickCreateAccount();
  }
}
