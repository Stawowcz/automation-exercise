import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { RegisterFormData, PreRegisterFormData } from "@typings/pages/auth";
import { LoginText, RegistrationText } from "@typings/pages/auth";

export class AuthPage extends BasePage {
  private readonly loginLink: Locator = this.page.getByRole("link", {
    name: RegistrationText.SIGNUP_LOGIN,
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
  private readonly mobileNumberField: Locator = this.page.getByLabel(
    RegistrationText.MOBILE_NUMBER,
  );
  private readonly daysField: Locator = this.page.getByTestId("days");
  private readonly monthsField: Locator = this.page.getByTestId("months");
  private readonly yearsField: Locator = this.page.getByTestId("years");
  private readonly countryField: Locator = this.page.getByTestId("country");
  private readonly companyField: Locator = this.page.getByTestId("company");
  private readonly createAccount: Locator =
    this.page.getByTestId("create-account");
  private readonly loginEmailField: Locator = this.page.locator(
    '[data-qa="login-email"]',
  );
  private readonly loginPasswordField: Locator = this.page.locator(
    '[data-qa="login-password"]',
  );
  private readonly loginButton: Locator = this.page.locator(
    '[data-qa="login-button"]',
  );

  private async fillLoginEmail(value: string): Promise<void> {
    await this.interaction.secureFill(this.loginEmailField, value);
  }

  private async fillLoginPassword(value: string): Promise<void> {
    await this.interaction.secureFill(this.loginPasswordField, value);
  }
  private async fillSignupName(value: string): Promise<void> {
    await this.interaction.secureFill(this.signupNameField, value);
  }

  private async fillSignupEmail(value: string): Promise<void> {
    await this.interaction.secureFill(this.signupEmailField, value);
  }

  private async fillPassword(value: string): Promise<void> {
    await this.interaction.secureFill(this.password, value);
  }

  private async fillCompany(value: string): Promise<void> {
    await this.interaction.secureFill(this.companyField, value);
  }

  private async fillFirstName(value: string): Promise<void> {
    await this.interaction.secureFill(this.firstNameField, value);
  }

  private async fillLastName(value: string): Promise<void> {
    await this.interaction.secureFill(this.lastNameField, value);
  }

  private async fillAddress1(value: string): Promise<void> {
    await this.interaction.secureFill(this.address1Field, value);
  }

  private async fillAddress2(value: string): Promise<void> {
    await this.interaction.secureFill(this.address2Field, value);
  }

  private async fillCity(value: string): Promise<void> {
    await this.interaction.secureFill(this.cityField, value);
  }

  private async fillState(value: string): Promise<void> {
    await this.interaction.secureFill(this.stateField, value);
  }

  private async fillZip(value: string): Promise<void> {
    await this.interaction.secureFill(this.zipField, value);
  }

  private async fillMobileNumber(value: string): Promise<void> {
    await this.interaction.secureFill(this.mobileNumberField, value);
  }

  private async selectDay(value: string): Promise<void> {
    await this.interaction.secureSelect(this.daysField, value);
  }

  private async selectMonth(value: string): Promise<void> {
    await this.interaction.secureSelect(this.monthsField, value);
  }

  private async selectYear(value: string): Promise<void> {
    await this.interaction.secureSelect(this.yearsField, value);
  }

  private async selectCountry(value: string): Promise<void> {
    await this.interaction.secureSelect(this.countryField, value);
  }

  private async clickLoginButton(): Promise<void> {
    await this.interaction.secureClick(this.loginButton);
  }

  private async clickSignupButton(): Promise<void> {
    await this.interaction.secureClick(this.signupEmailBUtton);
  }

  private async clickCreateAccount(): Promise<void> {
    await this.interaction.secureClick(this.createAccount);
  }

  private async clickMrGender(): Promise<void> {
    await this.interaction.secureClick(this.genderMrRadio);
  }

  private async clickMrsGender(): Promise<void> {
    await this.interaction.secureClick(this.genderMrsRadio);
  }

  private async checkNewsletter(): Promise<void> {
    await this.interaction.secureClick(this.newsletterCheckbox);
  }

  private async checkSpecialOffer(): Promise<void> {
    await this.interaction.secureClick(this.specialOfferCheckbox);
  }

  public readonly createAccountText: Locator =
    this.page.getByTestId("account-created");

  public readonly loginError: Locator = this.page.locator("p", {
    hasText: LoginText.LOGIN_UNSUCCESSFULL,
  });
  public readonly loginToYourAccountText: Locator = this.page.getByRole(
    "heading",
    {
      name: LoginText.LOGING_TO_ACCOUNT,
    },
  );
  public readonly newUserSignupText: Locator = this.page.getByRole("heading", {
    name: LoginText.NEW_USER_SIGNUP,
  });
  public readonly registerEmailExistError: Locator = this.page.locator("p", {
    hasText: RegistrationText.EMAIL_ALREADY_EXIST,
  });

  public async fillPreRegisterForm(data: PreRegisterFormData): Promise<void> {
    await this.interaction.secureClick(this.loginLink);
    await this.fillSignupName(data.signupName);
    await this.fillSignupEmail(data.signupEmail);
    await this.clickSignupButton();
  }

  public async login(email: string, password: string): Promise<void> {
    await this.interaction.secureClick(this.loginLink);
    await this.fillLoginEmail(email);
    await this.fillLoginPassword(password);
    await this.clickLoginButton();
  }

  public async fillRegistration(data: RegisterFormData): Promise<void> {
    if (data.menGender) await this.clickMrGender();
    if (data.womanGender) await this.clickMrsGender();
    await this.fillPassword(data.password);
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    if (data.company) await this.fillCompany(data.company);
    await this.fillAddress1(data.address1);
    if (data.address2) await this.fillAddress2(data.address2);
    await this.fillCity(data.city);
    await this.fillState(data.state);
    await this.fillZip(data.zip);
    await this.fillMobileNumber(data.mobileNumber);
    if (data.day) await this.selectDay(data.day);
    if (data.month) await this.selectMonth(data.month);
    if (data.year) await this.selectYear(data.year);
    await this.selectCountry(data.country);
    if (data.subscribeToNewsletter) await this.checkNewsletter();
    if (data.receiveSpecialOffer) await this.checkSpecialOffer();
    await this.clickCreateAccount();
  }

    public async submitRegistrationForm(data:RegisterFormData): Promise<void> {
        this.fillPreRegisterForm(data)
        this.fillRegistration(data)
  }
}
