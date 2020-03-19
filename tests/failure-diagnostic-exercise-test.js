import faker from 'faker';
import { Selector } from 'testcafe';

const origin = 'http://localhost:3000/diagnostic';

// INPUTS
const proposal_title = faker.random.word();
const date = '01/01/2000';
const principal = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address_1: `${faker.address.streetAddress()}`,
  address_2: `${faker.address.secondaryAddress()}`,
  city: `${faker.address.city()}`,
  region: `${faker.address.county()}`,
  zip: `${faker.address.zipCode()}`,
  phone: `${faker.phone.phoneNumber()}`,
  email: `${faker.internet.email()}`
}
const coinvestigator = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address_1: `${faker.address.streetAddress()}`,
  address_2: `${faker.address.secondaryAddress()}`,
  city: `${faker.address.city()}`,
  region: `${faker.address.county()}`,
  zip: `${faker.address.zipCode()}`,
  phone: `${faker.phone.phoneNumber()}`,
  email: `${faker.internet.email()}`
}

fixture("sample critical failure")
  .page(origin);

test('THIS TEST WILL FAIL', async t => {
  await t
    .typeText(Selector('input[name="proposal-title"]'), proposal_title, {paste: true, replace: true})
    .typeText(Selector('input[name="bdate"]'), date, {paste: true, replace: true})
    .typeText(Selector('input[name="principal-name"]'), principal.name, {paste: true, replace: true});

  const principal_div = await Selector('#principal-info');

  await t
    .typeText(principal_div.find('input').withAttribute('placeholder', 'Street address'), principal.address_1, {paste: true, replace: true})
    .typeText(principal_div.find('input').withAttribute('placeholder', 'Street address line 2'), principal.address_2, {paste: true, replace: true})
    .typeText(principal_div.find('input').withAttribute('placeholder', 'City'), principal.city, {paste: true, replace: true})
    .typeText(principal_div.find('input').withAttribute('placeholder', 'Region'), principal.region, {paste: true, replace: true})
    .typeText(principal_div.find('input').withAttribute('placeholder', 'Postal / Zip code'), principal.zip, {paste: true, replace: true})
    .click(principal_div.find('select'))
    .click(principal_div.find('select > option').withText('USA'));

});
