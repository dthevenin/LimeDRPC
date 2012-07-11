var vod_detail_proto = new Object ();
function voddetail_contructor (config)
{
  this.apply ("Page", "_constructor", config);
  Content.parseParameters ();
}
vod_detail_proto._constructor = voddetail_contructor;

function voddetail_initSkin ()
{
  this.apply ("Page", "initSkin");
  this.bind ('start', this, 'pageStarted');
}
vod_detail_proto.initSkin = voddetail_initSkin;

function voddetail_pageStarted (event)
{
  this.setCastMode ();
  this.setContent ();
  
  this.setUsedKeyList ("basic data-button numeric-tuning");
  KEYBOARD.bind (KEYBOARD.ONE, this);
  KEYBOARD.bind (KEYBOARD.TWO, this);
  KEYBOARD.bind (KEYBOARD.THREE, this);
  KEYBOARD.bind (KEYBOARD.RED, this);
  KEYBOARD.bind (KEYBOARD.BLUE, this);
  this.loadingView.hide ();
}
vod_detail_proto.pageStarted = voddetail_pageStarted;


function voddetail_notify (event)
{
  if (event.type == KEYBOARD.BLUE || event.type == KEYBOARD.THREE)
  {
    this.seeButton.setFocus ();
    this.loadingView.show ();
    this.goToIndexPage ();
  }
  
  if (event.type == KEYBOARD.TWO)
  {
    this.buyButton.setFocus ();
    this.loadingView.show ();
    this.goToPage ("VodBuy");
  }
  
  else if (event.type == KEYBOARD.RED)
  {
    this.loadingView.show ();
    this.goToPage ("CmSelect");
  }
}
vod_detail_proto.notify = voddetail_notify;

function voddetail_setContent ()
{
  var contentData = Content.getCurrentData ();
  if (!contentData) { return;}
  
  this.drpcInformation.setSrc (contentData.drpcInfo);
  this.contentInformation.setSrc (contentData.contentInfo);
  this.castView.setSrc (contentData.castInfo);
}
vod_detail_proto.setContent = voddetail_setContent;


function voddetail_setCastMode ()
{
  this.castTab.setSrc ("resources/images/DetailsOfVOD_Tab_01_CAST_selected.jpg");
  this.permissionTab.setSrc ("resources/images/DetailsOfVOD_Tab_01_Permission.jpg");  
  this.tabButton.setSrc ("resources/images/DetailsOfVOD_Button_01_toPermissionInfo.jpg");  
}
vod_detail_proto.setCastMode = voddetail_setCastMode;

function voddetail_setPermissionMode ()
{
  this.castTab.setSrc ("resources/images/DetailsOfVOD_Tab_01_CAST.jpg");
  this.permissionTab.setSrc ("resources/images/DetailsOfVOD_Tab_01_Permission_selected.jpg");  
  this.tabButton.setSrc ("resources/images/DetailsOfVOD_Button_01_toCAST.jpg");  
}
vod_detail_proto.setPermissionMode = voddetail_setPermissionMode;


var VodDetail = Class.create ('VodDetail', vod_detail_proto);
Class.extend ('VodDetail', "Page");
