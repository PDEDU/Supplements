$(".defaultFadein").animate({opacity:"0.99"},1543);var mM=0,bM=0,PEKMAP=0,NNYMAP=0;function sendAjax(a,b,c){$.ajax({type:"POST",data:a,success:function(a){"ER"==a?($("#email").effect("shake"),$("#sendEmailBtn").prop("disabled",!1),$("#name").prop("disabled",!1),$("#email").prop("disabled",!1),$("#subject").prop("disabled",!1),$("#message").prop("disabled",!1)):($(b).html(a),""!=c&&null!=c&&$(c).animate({opacity:"0.99"},768))}})}$(document).ready(function(){$.support.placeholder=function(){var a=document.createElement("input");return"placeholder"in a}(),$.support.placeholder&&($(".form-label").each(function(){$(this).addClass("js-hide-label")}),$(".form-group").find("input, textarea").on("keyup blur focus",function(a){var b=$(this),c=b.parent().find("label");switch(a.type){case"keyup":c.toggleClass("js-hide-label",""==b.val());break;case"blur":""==b.val()?c.addClass("js-hide-label"):c.removeClass("js-hide-label").addClass("js-unhighlight-label");break;case"focus":""!==b.val()&&c.removeClass("js-unhighlight-label");break;default:}}))}),$(document).on("click","#sendEmailBtn",function(a){a.preventDefault(),$("#sendEmailBtn").prop("disabled",!0),$("#name").prop("disabled",!0),$("#email").prop("disabled",!0),$("#subject").prop("disabled",!0),$("#message").prop("disabled",!0);var b,c=$("#email").val();if(""==$("#name").val())b=1;else if(""==$("#subject").val())b=3;else if(""==$("#message").val())b=4;else if(1!=(c.match(/@/g)||[]).length||5>c.length)b=2;else{var d=c.split("@");if(1>d[1].split(".").length-1||0<d[1].split("..").length-1||""==d[0]||"."==d[1].substr(d[1].length-1)||"."==d[1].substring(0,1))b=2;else{var e=punycode.toASCII(d[1]),f=punycode.toASCII(d[0]),g=/^[a-zA-Z0-9_.-]+$/,h=/^[a-zA-Z0-9!#$%&'*+-/=?^_`.{|}~]+$/;h.test(f)&&g.test(e)?c=f+"@"+e:b=2}}1==b||2==b||3==b||4==b?($("#sendEmailBtn").prop("disabled",!1),$("#name").prop("disabled",!1),$("#email").prop("disabled",!1),$("#subject").prop("disabled",!1),$("#message").prop("disabled",!1),2==b?(console.log("Please check your email account!"),$("#email").effect("shake")):1==b?(console.log("Please fill in your name!"),$("#name").effect("shake")):4==b?(console.log("Please fill in the message field!"),$("#message").effect("shake")):(console.log("Please fill in the subject field!"),$("#subject").effect("shake"))):(sendAjax("NAME="+Base64.encode($("#name").val())+"&EMAIL="+Base64.encode(c)+"&SUBJECT="+Base64.encode($("#subject").val())+"&MESSAGE="+Base64.encode($("#message").val()),"#email_section","#NOEMAILALERT1"),setCookie("ZW1haWxfY29va2ll","CHj20sF0lw","/contact/",.25))});function addClickHandler(a,b){a.addEventListener("click",function(){a.openInfoWindow(b)})}function setMapEvent(a){a.enableScrollWheelZoom(),a.enableKeyboard(),a.enableDragging(),a.enableDoubleClickZoom();for(var b=[{content:"\u5317\u4EAC\u6821\u533A",title:"\u4F69\u8482\u6559\u80B2",imageOffset:{width:0,height:3},position:{lat:40.039536,lng:116.289253}},{content:"\u5357\u9633\u6821\u533A",title:"\u4F69\u8482\u6559\u80B2",imageOffset:{width:0,height:3},position:{lat:33.016628,lng:112.598956}},{content:"U.S. Campus",title:"PEDDIE INSTITUTE",imageOffset:{width:0,height:3},position:{lat:42.273385,lng:-71.147098}}],c=0;c<b.length;c++){var d=new BMap.Point(b[c].position.lng,b[c].position.lat),e=new BMap.Marker(d,{icon:new BMap.Icon("https://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{imageOffset:new BMap.Size(b[c].imageOffset.width,b[c].imageOffset.height)})}),f=new BMap.Label(b[c].title,{offset:new BMap.Size(25,5)}),g={width:200,title:b[c].title,enableMessage:!1},h=new BMap.InfoWindow(b[c].content,g);e.setLabel(f),addClickHandler(e,h),a.addOverlay(e)}var i=new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT});i.setUnit(BMAP_UNIT_IMPERIAL),a.addControl(i);var j=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:3});a.addControl(j);var k=new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:!1});a.addControl(k)}function initMap1(){var a=new BMap.Map("map2");a.centerAndZoom(new BMap.Point(116.288982,40.040363),15),setMapEvent(a),$("#map2").css("width","100%"),$("#map2").css("height","100%")}function initMap2(){var a=new BMap.Map("map3");a.centerAndZoom(new BMap.Point(112.599199,33.017124),15),setMapEvent(a),$("#map3").css("width","100%"),$("#map3").css("height","100%")}function loadMapScenario(){var a=new Microsoft.Maps.Map(document.getElementById("map1"),{credentials:"ApmIpPJ1Xq-6ham27v8foSLvtmCgpTJa0jv_eUjPWdiARzG4snQ629Ax9mZjot7g",center:new Microsoft.Maps.Location(42.2733281,-71.1471014)}),b=a.getCenter(),c=new Microsoft.Maps.Pushpin(a.getCenter(),{color:"#FF0000"}),d=new Microsoft.Maps.Infobox(b,{title:"PEDDIE INSTITUTE",description:"U.S. Campus",visible:!1});d.setMap(a),Microsoft.Maps.Events.addHandler(c,"click",function(){d.setOptions({visible:!0})}),a.entities.push(c);var e=new Microsoft.Maps.Location(40.033384,116.282436),f=new Microsoft.Maps.Pushpin(e,{color:"#a100ad"}),g=new Microsoft.Maps.Infobox(e,{title:"\u4F69\u8482\u6559\u80B2",description:"\u5317\u4EAC\u6821\u533A",visible:!1});g.setMap(a),Microsoft.Maps.Events.addHandler(f,"click",function(){g.setOptions({visible:!0})}),a.entities.push(f);var h=new Microsoft.Maps.Location(33.010584,112.592772),i=new Microsoft.Maps.Pushpin(h,{color:"#a100ad"}),j=new Microsoft.Maps.Infobox(h,{title:"\u4F69\u8482\u6559\u80B2",description:"\u5357\u9633\u6821\u533A",visible:!1});j.setMap(a),Microsoft.Maps.Events.addHandler(i,"click",function(){j.setOptions({visible:!0})}),a.entities.push(i)}$(".modal_trigger").click(function(a){if(a.preventDefault(),"#map_container1"==$(this).attr("data-value")&&0==mM){var b=document.createElement("script"),c=document.getElementsByTagName("script")[0];b.src="https://www.bing.com/api/maps/mapcontrol?branch=release&callback=loadMapScenario",b.defer=true,b.async=true,c.parentNode.insertBefore(b,c),mM=1}else if("#map_container1"!=$(this).attr("data-value")&&0==bM){var d=document.createElement("script");"nny"==$(this).attr("data-city")?(d.src="https://api.map.baidu.com/api?v=2.0&ak=wrwDZWra6A4YuzwltUs5i1fiILRBPLvj&s=1&callback=initMap2",NNYMAP=1):(d.src="https://api.map.baidu.com/api?v=2.0&ak=wrwDZWra6A4YuzwltUs5i1fiILRBPLvj&s=1&callback=initMap1",PEKMAP=1),d.defer=true,d.async=true,document.getElementsByTagName("head")[0].appendChild(d),bM=1}else"#map_container1"!=$(this).attr("data-value")&&1==bM&&("nny"==$(this).attr("data-city")&&0==NNYMAP?(initMap2(),NNYMAP=1):"pek"==$(this).attr("data-city")&&0==PEKMAP&&(initMap1(),PEKMAP=1));$($(this).attr("data-value")).removeAttr("class").addClass("modal-container one"),$("body").addClass("modal-active")}),$(".modal-container").click(function(){$(this).addClass("out"),setTimeout(function(){$(this).removeClass("one out"),$("body").removeClass("modal-active")},500)});