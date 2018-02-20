const test = require(`ava`);
const sinon = require(`sinon`);
const uuid = require(`uuid`);

const helloWorld = require(`..`).helloWorld;

test(`helloWorld: should print a name`, t => {
  // Initialize mocks
  const name = uuid.v4();
  const req = {
    body: {
      name: name
    }
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloWorld(req, res);

  // Verify behavior of tested function
  t.true(res.send.calledOnce);
  t.deepEqual(res.send.firstCall.args, [`Hello ${name}!`]);
});

test(`helloWorld: should print hello world`, t => {
  // Initialize mocks
  const req = {
    body: {}
  };
  const res = { send: sinon.stub() };

  // Call tested function
  helloWorld(req, res);

  // Verify behavior of tested function
  t.true(res.send.calledOnce);
  t.deepEqual(res.send.firstCall.args, [`Hello World!`]);
});

