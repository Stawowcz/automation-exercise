import { Locator } from "@playwright/test";
import { BasePage } from "./base-page";
import { CheckoutText } from "@typings/pages/checkout";

export class CheckoutPage extends BasePage {
  private readonly container: Locator = this.page.locator(".container");

  public readonly header: Locator = this.container.locator(".breadcrumbs");

  public readonly checkoutTextArea: Locator =
    this.container.locator(".form-control");

  public readonly placeOrderButton: Locator = this.container.locator(
    ".check_out",
    { hasText: CheckoutText.PLACE_ORDER },
  );

  public async clickCheckoutPlaceOrder(): Promise<void> {
    await this.interaction.secureClick(this.placeOrderButton);
  }

  private readonly deliveryAddressContainer: Locator =
    this.container.locator("#address_delivery");

  public readonly deliveryAddressTitleHeader: Locator =
    this.deliveryAddressContainer.locator(".address_title h3");

  public readonly deliveryName: Locator = this.deliveryAddressContainer.locator(
    ".address_firstname.address_lastname",
  );

  public readonly deliveryCompany: Locator = this.deliveryAddressContainer
    .locator(".address_address1.address_address2")
    .nth(0);

  public readonly deliveryStreet: Locator = this.deliveryAddressContainer
    .locator(".address_address1.address_address2")
    .nth(1);

  public readonly deliveryAddressExtra: Locator = this.deliveryAddressContainer
    .locator(".address_address1.address_address2")
    .nth(2);

  public readonly deliveryCityStatePostcode: Locator =
    this.deliveryAddressContainer.locator(
      ".address_city.address_state_name.address_postcode",
    );

  public readonly deliveryCountry: Locator =
    this.deliveryAddressContainer.locator(".address_country_name");

  public readonly deliveryPhone: Locator =
    this.deliveryAddressContainer.locator(".address_phone");

  private readonly billingAddressContainer: Locator =
    this.container.locator("#address_invoice");

  public readonly billingAddressTitleHeader: Locator =
    this.billingAddressContainer.locator(".address_title h3");

  public readonly billingName: Locator = this.billingAddressContainer.locator(
    ".address_firstname.address_lastname",
  );

  public readonly billingCompany: Locator = this.billingAddressContainer
    .locator(".address_address1.address_address2")
    .nth(0);

  public readonly billingStreet: Locator = this.billingAddressContainer
    .locator(".address_address1.address_address2")
    .nth(1);

  public readonly billingAddressExtra: Locator = this.billingAddressContainer
    .locator(".address_address1.address_address2")
    .nth(2);

  public readonly billingCityStatePostcode: Locator =
    this.billingAddressContainer.locator(
      ".address_city.address_state_name.address_postcode",
    );

  public readonly billingCountry: Locator =
    this.billingAddressContainer.locator(".address_country_name");

  public readonly billingPhone: Locator =
    this.billingAddressContainer.locator(".address_phone");

  public async fillCheckoutTextArea(value: string): Promise<void> {
    await this.interaction.secureFill(this.checkoutTextArea, value);
  }
}
