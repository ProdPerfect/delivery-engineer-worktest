const origin = 'http://localhost:3000/diagnostic';

fixture("sample critical failure")
  .page(origin);

test('THIS TEST WILL FAIL', async t => {
  await t.expect(true).eql(true);
});
