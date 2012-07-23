var test_lime_proto = new Object ();

function test_lime_constructor (config)
{
  this.apply ('Application', '_constructor', config);
}
test_lime_proto._constructor = test_lime_constructor;

function test_lime_initSkin ()
{
  this.apply ('Application', 'initSkin');
  this.bind ('start', this, 'applicationStarted');
}
test_lime_proto.initSkin = test_lime_initSkin;

function test_lime_applicationStarted (event)
{
  // your code to execute when the application si launched
}
test_lime_proto.applicationStarted = test_lime_applicationStarted;

function test_lime_notify (event)
{
  // your code to manage events
}
test_lime_proto.notify = test_lime_notify;

var testLime = Class.create ('testLime', test_lime_proto);
Class.extend ('testLime', 'Application');
