var Content = new Object ();

Content.bmlType = 0;			// 0:ContentPortal, 1:CM, 2:VOD Detail, 3:CM Detail, 4:Buy a VOD
Content.returnBmlType = 0;		// 0:ContentPortal, 1:CM, 2:VOD Detail, 3:CM Detail, 4:Buy a VOD
Content.point = 80;				// user point
Content.buyStatus = 0;			// 0(000):Null,
								// 1(001):La maison en petits cubes,
								// 2(010):Love Mouse,
								// 3(011):La maison en petits cubes + Love Mouse,
								// 4(100):For Your Blossom,
								// 5(101):La maison en petits cubes + For Your Blossom,
								// 6(110):Love Mouse + For Your Blossom,
								// 7(111):All

Content.selectContentNum = 0;	// 0:Null, 1000:La maison en petits cubes, 1001:Love Mouse, 1002:For Your Blossom, 2000:CM1, 2001:CM2
Content.returnContentNum = 0;	// 0:Null, 1000:La maison en petits cubes, 1001:Love Mouse, 1002:For Your Blossom, 2000:CM1, 2001:CM2


function getParameters ()
{
  var param = "";
  param += this.returnBmlType + "&" + this.point + "&" + this.buyStatus;
  param += "&" + this.selectContentNum + "&" + this.returnContentNum;

  return param;
}
Content.getParameters = getParameters;

function parseParameters ()
{
  var uri = browser.getActiveDocument ();
	if (uri == null) return;
	var ary = uri.split("?");
//	var URL = ary[0];

	if (ary != null && ary.length > 1)
  {
		var param = ary[1].split("&");
		if (param.length >= 5)
    {
			this.returnBmlType = param[0];
			this.point = param[1];
			this.buyStatus = param[2];
			this.selectContentNum = param[3];
			this.returnContentNum = param[4];
		}
    else 
    {
			this.returnBmlType = 0;
			this.point = 80;
			this.buyStatus = 0;
			this.selectContentNum = 0;
			this.returnContentNum = 0;
		}
	} 
  else
  {
		this.returnBmlType = 0;
		this.point = 80;
		this.buyStatus = 0;
		this.selectContentNum = 0;
		this.returnContentNum = 0;
	}
}
Content.parseParameters = parseParameters;

function getCurrentData ()
{
  var code = 0;
  if (!this.selectContentNum)
  {
    return Content.data [0];
  }
  
  for (i = 0; i < Content.data.length; i ++)
  {
    var data = Content.data [i];
    if (!data || data.id != this.selectContentNum) { continue; }
    return data;
  }
  return Content.data [0];
}
Content.getCurrentData = getCurrentData;

Content.data = new Array ();

Content.data [0] = new Object ();
Content.data [0].id = "1000";
Content.data [0].videoUrl = "http://vod_1.cpc";
Content.data [0].point = 120;	// need points
Content.data [0].price = 400;	// need yen
Content.data [0].drpcInfo = "resources/images/DetailsOfVOD_DRPC1_TsumikinoIe.jpg";
Content.data [0].contentInfo = "resources/images/DetailsOfVOD_Text1_TsumikinoIe.jpg";
Content.data [0].castInfo = "resources/images/DetailsOfVOD_Cast1_TsumikinoIe.jpg";

Content.data [1] = new Object ();
Content.data [1].id = "1001";
Content.data [1].videoUrl = "http://vod_2.cpc";
Content.data [1].point = 120;  // need points
Content.data [1].price = 400;	// need yen
Content.data [1].drpcInfo = "resources/images/DetailsOfVOD_DRPC2_LoveMouse.jpg";
Content.data [1].contentInfo = "resources/images/DetailsOfVOD_Text2_LoveMouse.jpg";
Content.data [1].castInfo = "resources/images/DetailsOfVOD_Cast2_LoveMouse.jpg";

Content.data [2] = new Object ();
Content.data [2].id = "1002";
Content.data [2].videoUrl = "http://vod_3.cpc";
Content.data [2].point = 120;  // need points
Content.data [2].price = 400;	// need yen
Content.data [2].drpcInfo = "resources/images/DetailsOfVOD_DRPC3_ForYourBlossom.jpg";
Content.data [2].contentInfo = "resources/images/DetailsOfVOD_Text3_ForYourBlossom.jpg";
Content.data [2].castInfo = "resources/images/DetailsOfVOD_Cast3_ForYourBlossom.jpg";