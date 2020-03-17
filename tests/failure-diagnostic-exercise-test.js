import faker from 'faker';
import { Selector } from 'testcafe';

const origin = 'http://localhost:3000/diagnostic';

// INPUTS
const proposal_title = faker.random.word();
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
const letter_of_support = 'Good dude.';

fixture("sample critical failure")
  .page(origin);

test('THIS TEST WILL FAIL', async t => {
  await t
    // .setTestSpeed(0.5)
    .typeText(Selector('input[name="proposal-title"]'), proposal_title, {paste: true, replace: true})
    .typeText(Selector('input[name="principal-name"]'), principal.name, {paste: true, replace: true});

  const principal_div = await Selector('#principal-info');

  await t
    .typeText(principal_div.find('input').withAttribute('placeholder', 'Street address'), principal.address_1, {paste: true, replace: true})
    .typeText(principal_div.find('input').withAttribute('placeholder', 'Street address line 2'), principal.address_2, {paste: true, replace: true})
    .typeText(principal_div.find('input').withAttribute('placeholder', 'City'), principal.city, {paste: true, replace: true})
    .typeText(principal_div.find('input').withAttribute('placeholder', 'Region'), principal.region, {paste: true, replace: true})
    .typeText(principal_div.find('input').withAttribute('placeholder', 'Postal / Zip code'), principal.zip, {paste: true, replace: true})
    .click(principal_div.find('select'))
    .click(principal_div.find('select > option').withText('USA'))
    .typeText(principal_div.find('input[name="phone"]'), principal.phone, {paste: true, replace: true})
    .typeText(principal_div.find('input[name="email"]'), principal.email, {paste: true, replace: true});

  const coinvestigator_div = await Selector('#coinvestigator-info');

  await t
    .typeText(coinvestigator_div.find('input').withAttribute('placeholder', 'Street address'), principal.address_1, {paste: true, replace: true})
    .typeText(coinvestigator_div.find('input').withAttribute('placeholder', 'Street address line 2'), principal.address_2, {paste: true, replace: true})
    .typeText(coinvestigator_div.find('input').withAttribute('placeholder', 'City'), principal.city, {paste: true, replace: true})
    .typeText(coinvestigator_div.find('input').withAttribute('placeholder', 'Region'), principal.region, {paste: true, replace: true})
    .typeText(coinvestigator_div.find('input').withAttribute('placeholder', 'Postal / Zip code'), principal.zip, {paste: true, replace: true})
    .click(coinvestigator_div.find('select'))
    .click(coinvestigator_div.find('select > option').withText('USA'))
    .typeText(coinvestigator_div.find('input[name="phone"]'), principal.phone, {paste: true, replace: true})
    .typeText(coinvestigator_div.find('input[name="email"]'), principal.email, {paste: true, replace: true})
    .click(Selector('label[for="radio_1"]'))
    .click(Selector('label[for="radio_3"]'))
    .click(Selector('label[for="radio_6"]'))
    .typeText(Selector('#support-letter'), letter_of_support, {paste: true, replace: true})
    .click(Selector('label[for="check_1"]'))
    .click(Selector('label[for="check_2"]'))
    .click(Selector('label[for="check_3"]'))
    .click(Selector('label[for="check_4"]'))
    .click(Selector('label[for="check_5"]'))
    .click(Selector('label[for="check_6"]'))
    .click(Selector('label[for="check_7"]'))
    .click(Selector('label[for="check_8"]'))
    .click(Selector('label[for="check_9"]'))
    .typeText(Selector('#signature'), principal.name, {paste: true, replace: true})    
    .click(Selector('button').withAttribute('type', 'submit')).debug();

});
