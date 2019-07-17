const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const stub = sinon.stub().returns(1);
console.log(stub.called);

console.log('call:', stub());
console.log(stub.called);

stub.resetHistory();
console.log('### reset history');
console.log(stub.called);

stub.resetBehavior();
console.log('### reset behavior');
console.log('call:', stub());
console.log(stub.called);