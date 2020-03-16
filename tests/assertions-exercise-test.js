const origin = 'http://localhost:3000/assertions/';

fixture("regression test without assertions")
  .page(origin);

test('ADD ASSERTIONS TO ME', async t => {
  await t.expect(true).eql(true);
});
