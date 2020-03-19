import faker from 'faker';
import { Selector } from 'testcafe';

const origin = 'http://localhost:3000/assertions';

// INPUTS
const billing = {
  first: `${faker.name.firstName()}`,
  last: `${faker.name.lastName()}`,
  address: `${faker.address.streetAddress()}`,
  email: `${faker.internet.email()}`,
  city: `${faker.address.city()}`,
  state: `${faker.address.state()}`,
  zip: `${faker.address.zipCode()}`
};
const card_number = '424242424242';
const card_exp_date = '10/25';
const card_cvv = '1337';

// FIXTURE
fixture("regression test without assertions")
  .page(origin);

// TEST
test('ADD ASSERTIONS TO ME', async t => {
  await t
    .typeText(Selector('body > section > div > div > div > div > div > div:nth-child(2) > div.product-quantity > input[type=number]'), '5', {paste: true, replace: true})
    .typeText(Selector('body > section > div > div > div > div > div > div:nth-child(3) > div.product-quantity > input[type=number]'), '2', {paste: true, replace: true})
    .click(Selector('body > section > div > div > div > div > div > div:nth-child(5) > div.product-removal > button'))
    .click(Selector('body > section > div > div > div > div > div > a'))
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(1) > div > div:nth-child(1) > input.form-control'), billing.first, {paste:true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(1) > div > div:nth-child(2) > input'), billing.last, {paste:true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(2) > div > div > input'), billing.email, {paste:true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(3) > div > div:nth-child(1) > input'), billing.address, {paste:true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(3) > div > div:nth-child(2) > input'), billing.city, {paste:true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(4) > div > div:nth-child(1) > input'), billing.state, {paste:true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(4) > div > div:nth-child(2) > input'), billing.zip, {paste:true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(5) > div > div > input'), card_number, {paste:true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(6) > div > div:nth-child(1) > input'), card_exp_date, {paste: true, replace: true})
    .typeText(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > div:nth-child(6) > div > div:nth-child(2) > input'), card_cvv, {paste: true, replace: true})
    .click(Selector('#billingCheckBox'))
    .click(Selector('body > section > div > div > div.col-lg-6.col-md-12 > form > h2 > div:nth-child(3) > div > div > button'));
});
