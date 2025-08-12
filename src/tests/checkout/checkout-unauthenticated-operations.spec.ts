import { expect, test } from "@fixtures";
import { CommonText } from "@typings/common";
import { AddToCartText } from "@typings/components/add-to-cart";
import { RegisterFormData, RegistrationText } from "@typings/pages/auth";
import { CheckoutText } from "@typings/pages/checkout";
import { PaymentText, PaymentFormData } from "@typings/pages/payment";
import { ProductsText } from "@typings/pages/products";
import { DataGenerator, env } from "@utils";

test.describe("Checkout", () => {
  test.beforeEach("should navigate to main page", async ({ homePage, cartPage, cartApi }) => {
    await cartPage.goToLink("/view_cart");
    await cartApi.clearCartViaApi();
    await homePage.goToLink(env.AUTOMATION_BASEURL);
    await expect.soft(homePage.homeTitle).toBeVisible();
    await homePage.expectUrlContains(env.AUTOMATION_BASEURL);
  });

  test.afterEach("should clear cart", async ({ cartPage, cartApi }) => {
    await cartPage.goToLink("/view_cart");
    await cartApi.clearCartViaApi();
  });

  test("should log in before checkout", async ({
    homePage,
    productPage,
    addedToCart,
    cartPage,
    checkoutPage,
    paymentPage,
    paymentDonePage,
    addedToCartUnAuth,
    authPage,
  }) => {
    await homePage.clickProductsLink();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );

    await expect
      .soft(addedToCart.modalHeader)
      .toContainText(ProductsText.ADDED);
    await expect.soft(addedToCart.modalBodyText).toBeVisible();
    await expect.soft(addedToCart.viewCartText).toBeVisible();
    await addedToCart.continueShoppingButton.waitFor({state: 'visible'})
    await expect
      .soft(addedToCart.continueShoppingButton)
      .toHaveText(AddToCartText.CONTINUE_SHOPPING);
    await addedToCart.viewCartText.waitFor({state: "visible"})
    await addedToCart.clickViewCart();
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("1");

    await cartPage.clickProceedCheckout();
    await addedToCartUnAuth.registerLogin.waitFor({state: "visible"})
    await addedToCartUnAuth.clickRegisterLogin();
    await authPage.login(
      env.AUTOMATION_USER_CORRECT,
      env.AUTOMATION_PASSWORD_CORRECT,
    );
    await cartPage.goToLink("/view_cart");
    await cartPage.clickProceedCheckout();
    await expect.soft(checkoutPage.header).toHaveText(CheckoutText.HEADER);

    await expect
      .soft(checkoutPage.deliveryAddressTitleHeader)
      .toHaveText(CheckoutText.DELIVERY_ADDRESS_TITLE);
    await expect
      .soft(checkoutPage.deliveryName)
      .toHaveText(CheckoutText.DELIVERY_NAME);
    await expect
      .soft(checkoutPage.deliveryCompany)
      .toHaveText(CheckoutText.DELIVERY_COMPANY);
    await expect
      .soft(checkoutPage.deliveryStreet)
      .toHaveText(CheckoutText.DELIVERY_STREET);
    await expect
      .soft(checkoutPage.deliveryAddressExtra)
      .toHaveText(CheckoutText.DELIVERY_ADDRESS_EXTRA);
    await expect
      .soft(checkoutPage.deliveryCityStatePostcode)
      .toHaveText(CheckoutText.DELIVERY_CITY_STATE_POSTCODE);
    await expect
      .soft(checkoutPage.deliveryCountry)
      .toHaveText(CheckoutText.DELIVERY_COUNTRY);
    await expect
      .soft(checkoutPage.deliveryPhone)
      .toHaveText(CheckoutText.DELIVERY_PHONE);

    await expect
      .soft(checkoutPage.billingAddressTitleHeader)
      .toHaveText(CheckoutText.BILLING_ADDRESS_TITLE);
    await expect
      .soft(checkoutPage.billingName)
      .toHaveText(CheckoutText.BILLING_NAME);
    await expect
      .soft(checkoutPage.billingCompany)
      .toHaveText(CheckoutText.BILLING_COMPANY);
    await expect
      .soft(checkoutPage.billingStreet)
      .toHaveText(CheckoutText.BILLING_STREET);
    await expect
      .soft(checkoutPage.billingAddressExtra)
      .toHaveText(CheckoutText.BILLING_ADDRESS_EXTRA);
    await expect
      .soft(checkoutPage.billingCityStatePostcode)
      .toHaveText(CheckoutText.BILLING_CITY_STATE_POSTCODE);
    await expect
      .soft(checkoutPage.billingCountry)
      .toHaveText(CheckoutText.BILLING_COUNTRY);
    await expect
      .soft(checkoutPage.billingPhone)
      .toHaveText(CheckoutText.BILLING_PHONE);

    await expect
      .soft(cartPage.getProductNameById(1))
      .toHaveText(CommonText.BLUE_TOP_NAME);
    await expect
      .soft(cartPage.getProductCategoryById(1))
      .toHaveText(CommonText.CATEGORY_WOMEN_TOPS);
    await expect
      .soft(cartPage.getProductPriceById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect
      .soft(cartPage.getProductTotalById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("1");

    const textAreatext = DataGenerator.generateTextareaText();
    await checkoutPage.fillCheckoutTextArea(textAreatext);

    await checkoutPage.clickCheckoutPlaceOrder();
    await expect.soft(paymentPage.header).toHaveText(PaymentText.HEADER);
    const paymentData: PaymentFormData =
      DataGenerator.generatePaymentFormData();
    await paymentPage.completePaymentForm(paymentData);
    await expect.soft(paymentDonePage.successMessage).toBeVisible();
    await expect.soft(paymentDonePage.continueButton).toBeVisible();
    await expect.soft(paymentDonePage.downloadInvoiceLink).toBeVisible();
  });

  test("should register in before checkout", async ({
    homePage,
    productPage,
    addedToCart,
    cartPage,
    checkoutPage,
    paymentPage,
    paymentDonePage,
    addedToCartUnAuth,
    authPage,
  }) => {
    await homePage.clickProductsLink();
    await productPage.clickAddToCartByProduct(
      CommonText.BLUE_TOP_NAME,
      CommonText.PRICE_500,
    );

    await expect
      .soft(addedToCart.modalHeader)
      .toContainText(ProductsText.ADDED);
    await expect.soft(addedToCart.modalBodyText).toBeVisible();
    await expect.soft(addedToCart.viewCartText).toBeVisible();
    await addedToCart.continueShoppingButton.waitFor({state: 'visible'})
    await expect
      .soft(addedToCart.continueShoppingButton)
      .toHaveText(AddToCartText.CONTINUE_SHOPPING);
    await addedToCart.viewCartText.waitFor({state: "visible"})
    await addedToCart.clickViewCart();
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("1");

    await cartPage.clickProceedCheckout();

    await addedToCartUnAuth.clickRegisterLogin();
    const formData: RegisterFormData = DataGenerator.generateRegisterFormData();
    await authPage.fillPreRegisterForm(formData);
    await authPage.fillRegistration(formData);
    await expect
      .soft(authPage.createAccountText)
      .toHaveText(RegistrationText.ACCOUNT_CREATED);

    await cartPage.goToLink("/view_cart");
    await cartPage.clickProceedCheckout();
    await expect.soft(checkoutPage.header).toHaveText(CheckoutText.HEADER);

    await expect
      .soft(checkoutPage.deliveryAddressTitleHeader)
      .toHaveText(CheckoutText.DELIVERY_ADDRESS_TITLE);
    await expect
      .soft(checkoutPage.deliveryName)
      .toContainText(`${formData.firstName} ${formData.lastName}`);
    await expect
      .soft(checkoutPage.deliveryCompany)
      .toHaveText(formData.company ?? "");
    await expect
      .soft(checkoutPage.deliveryStreet)
      .toHaveText(formData.address1);
    await expect
      .soft(checkoutPage.deliveryAddressExtra)
      .toHaveText(formData.address2 ?? "");
    await expect
      .soft(checkoutPage.deliveryCityStatePostcode)
      .toHaveText(`${formData.city} ${formData.state} ${formData.zip}`);

    await expect
      .soft(checkoutPage.deliveryCountry)
      .toHaveText(formData.country);
    await expect
      .soft(checkoutPage.deliveryPhone)
      .toHaveText(formData.mobileNumber);

    await expect
      .soft(checkoutPage.billingAddressTitleHeader)
      .toHaveText(CheckoutText.BILLING_ADDRESS_TITLE);
    await expect
      .soft(checkoutPage.billingName)
      .toContainText(`${formData.firstName} ${formData.lastName}`);
    await expect
      .soft(checkoutPage.billingCompany)
      .toHaveText(formData.company ?? "");
    await expect.soft(checkoutPage.billingStreet).toHaveText(formData.address1);
    await expect
      .soft(checkoutPage.billingAddressExtra)
      .toHaveText(formData.address2 ?? "");
    await expect
      .soft(checkoutPage.billingCityStatePostcode)
      .toHaveText(`${formData.city} ${formData.state} ${formData.zip}`);

    await expect.soft(checkoutPage.billingCountry).toHaveText(formData.country);
    await expect
      .soft(checkoutPage.billingPhone)
      .toHaveText(formData.mobileNumber);

    await expect
      .soft(cartPage.getProductNameById(1))
      .toHaveText(CommonText.BLUE_TOP_NAME);
    await expect
      .soft(cartPage.getProductCategoryById(1))
      .toHaveText(CommonText.CATEGORY_WOMEN_TOPS);
    await expect
      .soft(cartPage.getProductPriceById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect
      .soft(cartPage.getProductTotalById(1))
      .toHaveText(CommonText.PRICE_500);
    await expect.soft(cartPage.getProductQuantityById(1)).toHaveText("1");

    const textAreatext = DataGenerator.generateTextareaText();
    await checkoutPage.fillCheckoutTextArea(textAreatext);

    await checkoutPage.clickCheckoutPlaceOrder();
    await expect.soft(paymentPage.header).toHaveText(PaymentText.HEADER);
    const paymentData: PaymentFormData =
      DataGenerator.generatePaymentFormData();
    await paymentPage.completePaymentForm(paymentData);
    await expect.soft(paymentDonePage.successMessage).toBeVisible();
    await expect.soft(paymentDonePage.continueButton).toBeVisible();
    await expect.soft(paymentDonePage.downloadInvoiceLink).toBeVisible();
  });
});
