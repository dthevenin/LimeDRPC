var vod_buy_proto = new Object ();
var page = null;

function _contructor (config)
{
  this.apply ("Page", "_constructor", config);
  Content.parseParameters ();
  page = this;
}
vod_buy_proto._constructor = _contructor;

function vod_buy_initSkin ()
{
  this.apply ('Page', 'initSkin');
  this.bind ('start', this, 'pageStarted');
}
vod_buy_proto.initSkin = vod_buy_initSkin;

function vod_buy_pageStarted (event)
{
  this.setUsedKeyList ("basic data-button numeric-tuning");
  KEYBOARD.bind (KEYBOARD.ONE, this);
  KEYBOARD.bind (KEYBOARD.TWO, this);
  KEYBOARD.bind (KEYBOARD.THREE, this);
  KEYBOARD.bind (KEYBOARD.RED, this);
  KEYBOARD.bind (KEYBOARD.BLUE, this);
  this.loadingView.hide ();
}
vod_buy_proto.pageStarted = vod_buy_pageStarted;

function delay ()
{
  page.setFocus ();
}

function vodbuy_notify (event)
{
  if (event.type == KEYBOARD.BLUE)
  {
    this.loadingView.show ();
    this.goToIndexPage ();
  }
  
  else if (event.type == KEYBOARD.RED)
  {
    this.loadingView.show ();
    this.goToPage ("CmSelect");
  }
  
  else if (event.type == KEYBOARD.ONE)
  {
    this.buyCashButton.setFocus ();
    var self = this;
    setTimeout (delay, 50);
  }
  
  else if (event.type == KEYBOARD.TWO)
  {
    this.buyPointButton.setFocs ();
    var self = this;
    setTimeout (delay, 50);
  }
}
vod_buy_proto.notify = vodbuy_notify;

var VodBuy = Class.create ('VodBuy', vod_buy_proto);
Class.extend ('VodBuy', 'Page');
