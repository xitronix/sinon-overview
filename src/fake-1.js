const sinon = require('sinon');


const sandbox = sinon.createSandbox();
const object = {
  method: () => 1,
  sandboxMethod: () => 'sandbox-1',
};
console.log(object.method());
console.log(object.sandboxMethod());

const fake = sinon.fake.returns(100);
const sandboxFake = sandbox.fake.returns('sandbox-100');

fake.returns(200);

sinon.replace(object, "method", fake);
sandbox.replace(object, "sandboxMethod", sandboxFake);

console.log(object.method());
console.log(object.sandboxMethod());

sandbox.restore();
console.log(object.method());
console.log(object.sandboxMethod());