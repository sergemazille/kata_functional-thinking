# Functional refactoring

The code in the `script.js` file is structured around global states and variables.
The goal of this kata is to get rid of everything that is implicit while keeping the behavior of the app.

## Business rules
 
- The shipping cost is €10.
- The shipping becomes free if the cart's amount is equal or greater than €200.
- A "Free Shipping" icon is displayed near an item if adding it to the cart would increase its amount to €200 or above (triggering a free shipping).
- When the shipping is free (meaning when the cart's amount has reached €200), the eventual "Free Shipping" icons are hidden.
- A tax, corresponding to 20% of the cart's amount, is displayed separately.

### Example

- the cart total is €120
- the tax total is €24
- the shipping cost is €10
- an item costing €60 is not displaying any additional info
- an item costing €80 is displaying a Free shipping icon (120 + 80 >= 200)
- an item costing €17 is not displaying any additional info
- an item costing €120 is displaying a Free shipping icon (120 + 120 >= 200)

![](app/assets/readme_example.jpg)
## Info

No need to change any other file than `script.js`.  
The goal is not to change how the DOM is manipulated.  
As said previously, the app is already following the business rules and works as expected.  
The code in `script.js` is a mess though, and it needs some cleanup if we want to continue to add new features to our awesome app.

### Launch server
You can launch the web app with the command:
`yarn start` or `npm start`

### Launch e2e test suite
You can also use the provided e2e test suite to check if everything is still working as expected after the refactoring:  
First install the dependencies: `yarn` or `npm i`  
Finally run the tests: `yarn test` or `npm t`