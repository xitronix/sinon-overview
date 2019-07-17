const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

// const callback = sinon.stub();
const callback = sinon.stub().returns(5);

callback.onCall(0).returns(1);
callback.onCall(1).returns(2);
// callback.returns(3);

console.log(callback()); 
console.log(callback()); 
console.log(callback());
console.log(callback());
