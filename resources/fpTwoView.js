var belle_maison_fp_two_view_proto = new Object ();

/**********************************************
 * 
 **********************************************/
function fp_two_view_initSkin ()
{
  this.apply ("ABView", "initSkin");

  this.firstButton.setNavigationDelegate (this);
  this.secondButton.setNavigationDelegate (this);
  this.thirdButton.setNavigationDelegate (this);
  
//  this.mainView.bind ('menuActive', this);
}
belle_maison_fp_two_view_proto.initSkin = fp_two_view_initSkin;


/**********************************************
 * 
 **********************************************/
function fp_two_view_show ()
{
  __setSize (this.view, 960, 540);

  this.apply ("ABView", "show");
  
  this.firstButton.setFocus ();
}
belle_maison_fp_two_view_proto.show = fp_two_view_show;

function fp_two_view_hide ()
{
  this.apply ("ABView", "hide");
  __setSize (this.view, 0, 0);
}
belle_maison_fp_two_view_proto.hide = fp_two_view_hide;

/**********************************************
 * 
 **********************************************/
function fp_two_view_onActive (obj)
{
  if (obj == this.secondButton)
  {
    this.propagate ('mainMenuSelect', 1);
  }
  if (obj == this.thirdButton)
  {
    this.propagate ('mainMenuSelect', 3);
  }
}
belle_maison_fp_two_view_proto.onActive = fp_two_view_onActive;


/**********************************************
 * 
 **********************************************/
function fp_two_view_onDown(obj)
{
  this.mainView.firstButton.setFocus ();
}
belle_maison_fp_two_view_proto.onDown = fp_two_view_onDown;


/**********************************************
 * 
 **********************************************/
function fp_two_view_notify (event)
{
  if (event.type == 'menuActive')
  {
    this.firstButton.setFocus ();
  }
}
belle_maison_fp_two_view_proto.notify = fp_two_view_notify;
