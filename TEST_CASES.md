## Test Cases for the [Automation Exercise site](https://www.automationexercise.com/)

### Authentication
- T1 [@smoke, @regression] Should login successfully
- T2 [@regression] Should logout successfully
- T3 [@smoke, @regression] Should not login with incorrect password
- T4 [@smoke, @regression] Should not login with incorrect email

### Registration
- T5 [@smoke, @regression] Should register new user
- T6 [@regression] Should register user with required data only
- T7 [@regression] Should register user who already exists
- T8 [@regression] Should delete account after registration
- T9 [@regression] Should continue after account deletion

### Cart
- T10 [@smoke, @regression] Should add product to cart and validate
- T11 [@regression] Should add 3 different products to cart and validate
- T12 [@regression] Should add the same product twice to cart and validate
- T13 [@regression] Should verify product quantity in cart
- T14 [@regression] Should add product from recommended items and validate
- T15 [@regression] Should remove item from cart
- T16 [@regression] Should redirect to products from empty cart
- T17 [@regression] Should add product from product details
- T18 [@regression] Should increase product quantity from product details

### Checkout
- T19 [@smoke, @regression] Should checkout successfully (with state storage)
- T20 [@regression] Should download invoice after purchase (with state storage)
- T21 [@regression] Should checkout after login (without state storage)
- T22 [@regression] Should checkout after registration (without state storage)

### Contact
- T23 [@smoke, @regression] Should send message via contact form

### Brands
- T24 [@regression] Should verify brand Allen Solly Junior
- T25 [@regression] Should verify brand Polo
- T26 [@regression] Should verify brand H&M
- T27 [@regression] Should verify brand Madame
- T28 [@regression] Should verify brand Mast & Harbour
- T29 [@regression] Should verify brand Babyhug
- T30 [@regression] Should verify brand Kookie Kids
- T31 [@regression] Should verify brand Biba

### Categories
- T32 [@regression] Should verify Women → Dress products
- T33 [@regression] Should verify Women → Tops products
- T34 [@regression] Should verify Women → Saree products
- T35 [@regression] Should verify Men → T-Shirts products
- T36 [@regression] Should verify Men → Jeans products
- T37 [@regression] Should verify Kids → Dress products (bug: missing "dress" keyword)
- T38 [@regression] Should verify Kids → Tops/Shirts products (bug: missing "top" keyword)

### Products
- T39 [@regression] Should verify products page
- T40 [@regression] Should verify product details
- T41 [@smoke, @regression] Should search product
- T42 [@regression] Should add review on product

### Subscription
- T43 [@regression] Should verify subscription in home page
- T44 [@regression] Should verify subscription in cart page

### Test Cases Page
- T45 [@regression] Should verify test cases page
