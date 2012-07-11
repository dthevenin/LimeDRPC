var cm_select_proto = new Object ();

function _contructor (config)
{
  this.apply ("Page", "_constructor", config);
}
cm_select_proto._constructor = _contructor;

function vod_buy_initSkin ()
{
  this.apply ('Page', 'initSkin');
  this.bind ('start', this, 'pageStarted');
}
cm_select_proto.initSkin = vod_buy_initSkin;

function cm_select_pageStarted (event)
{
  this.setUsedKeyList ("basic data-button numeric-tuning");
  
  KEYBOARD.bind (KEYBOARD.RED, this);
  KEYBOARD.bind (KEYBOARD.BLUE, this);
  this.loadingView.hide ();
}
cm_select_proto.pageStarted = cm_select_pageStarted;

function cmselect_notify (event)
{
  if (event.type == KEYBOARD.RED)
  {
    this.loadingView.show ();
    this.goToPage ("CmSelect");
  }
  
  else if (event.type == KEYBOARD.BLUE)
  {
    this.loadingView.show ();
    this.goToIndexPage ();
  }
}
cm_select_proto.notify = cmselect_notify;


var CmSelect = Class.create ('CmSelect', cm_select_proto);
Class.extend ('CmSelect', 'Page');
