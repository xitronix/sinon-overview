const sinon = require('sinon');

const object = { method: function () { } };
var spy = sinon.spy(object, "method");

object.method(1, 42); // 1, 42
object.method(1);
object.method(1);

console.log('With 42 called once:', spy.withArgs(1, 42).calledOnce);
console.log('Withs 1 called once:', spy.withArgs(1).calledOnce);
console.log('With 1 called:', spy.withArgs(1).called);
console.log('With 1 called twice:', spy.withArgs(1).calledTwice);

console.log('Always with 1', spy.alwaysCalledWithExactly(1));
console.log('Always with 1', spy.alwaysCalledWith(1));