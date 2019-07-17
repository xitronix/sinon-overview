const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const callback = sinon.stub();
callback.withArgs(42)
    .onFirstCall().returns(1)
    .onSecondCall().returns(2);
callback.returns(0);

console.log(callback(1));
console.log(callback(42));
console.log(callback(1)); 
console.log(callback(42));
console.log(callback(1)); 
console.log(callback(42));
