/*!calc*/var row1xB11B13=new Array(3);for(var jj=0;jj<3;jj++){row1xB11B13[jj]=""};var row1xC11C13=new Array(3);for(var jj=0;jj<3;jj++){row1xC11C13[jj]=0};var row1xD11D13=new Array(3);for(var jj=0;jj<3;jj++){row1xD11D13[jj]=0};function calc(data){var c1F5=data['XLEW_1_5_6'];var c1C5=data['XLEW_1_5_3'];var c1C4=data['XLEW_1_4_3'];row1xB11B13[0]=("Clover Flex");row1xC11C13[0]=(109);row1xB11B13[1]=("Clover Mini");row1xC11C13[1]=(119);row1xB11B13[2]=("Clover Station");row1xC11C13[2]=(149);var c1D4=(((c1C4)*(12)));var c1D5=(((c1C5)*(12)));var c1G5=(index2(row1xC11C13,0,2,(match_str((c1F5),row1xB11B13,0,2,(0)))));var c1K5=(((((c1G5)*(12)))/(((c1C4)*(12)))));var c1C6=(((c1C5)/(c1C4)));row1xD11D13[0]=(((row1xC11C13[0])*(12)));row1xD11D13[1]=(((row1xC11C13[1])*(12)));row1xD11D13[2]=(((row1xC11C13[2])*(12)));var c1K4=(((c1C5)-(c1G5)));var c1L4=(((((c1C5)*(12)))-(((c1G5)*(12)))));var c1H5=(index2(row1xD11D13,0,2,(match((c1G5),row1xC11C13,0,2,(0)))));var c1L5=(((c1H5)/(c1D4)));var c1D6=(((c1D5)/(c1D4)));data['XLEW_1_6_4']=c1D6;data['XLEW_1_6_3']=c1C6;data['XLEW_1_5_12']=c1L5;data['XLEW_1_5_11']=c1K5;data['XLEW_1_5_8']=c1H5;data['XLEW_1_5_7']=c1G5;data['XLEW_1_5_4']=c1D5;data['XLEW_1_4_12']=c1L4;data['XLEW_1_4_11']=c1K4;data['XLEW_1_4_4']=c1D4;};
var eeisus=1;var eetrue="TRUE";var eefalse="FALSE";var eedec=".";var eeth=",";var eedecreg=new RegExp("\\.","g");var eethreg=new RegExp(",","g");var eecurrencyreg=new RegExp("[$]","g");var eepercentreg=new RegExp("%","g"); var fmtdaynamesshort=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat"); var fmtdaynameslong=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"); var fmtmonthnamesshort=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); var fmtmonthnameslong=new Array("January","February","March","April","May","June","July","August","September","October","November","December"); var fmtstrings=new Array("$"); var fmtdate1=[32,25,0];
var co = new Object;
function recalc_onclick(ctl) {ssc.recalcSource = ctl;
  if (true) {


co['XLEW_1_4_3']=eeparseFloatTh(document.getElementById('XLEW_1_4_3').value);co['XLEW_1_5_3']=eeparseFloatTh(document.getElementById('XLEW_1_5_3').value);co['XLEW_1_5_6']=eegetdropdownvalue(document.getElementsByName('XLEW_1_5_6'));calc(co);if(ssc !== undefined && ssc.realtimesync !== undefined && ssc.realtimesync.connection !== undefined && ssc.realtimesync.connection.readyState == 1){ssc.realtimesync.coUpdate(co,ctl);}else if(ssc !== undefined && ssc.realtimesync !== undefined && ssc.realtimesync.wsUrl && ssc.realtimesync.IsCloseByError && !ssc.realtimesync.IsErrorMsgDialogShown){if(!alert('Realtime-Sync is Disconnected, This Form will not save in server and will not collaborate with your partner.')){ssc.realtimesync.IsErrorMsgDialogShown = true;}}document.getElementById('XLEW_1_4_4').value=eedatefmt(fmtdate1,co['XLEW_1_4_4']);document.getElementById('XLEW_1_4_11').value=eedatefmt(fmtdate1,co['XLEW_1_4_11']);document.getElementById('XLEW_1_4_12').value=eedatefmt(fmtdate1,co['XLEW_1_4_12']);document.getElementById('XLEW_1_5_4').value=eedatefmt(fmtdate1,co['XLEW_1_5_4']);document.getElementById('XLEW_1_5_7').value=eedatefmt(fmtdate1,co['XLEW_1_5_7']);document.getElementById('XLEW_1_5_8').value=eedatefmt(fmtdate1,co['XLEW_1_5_8']);document.getElementById('XLEW_1_5_11').value=eedisplayPercentND(co['XLEW_1_5_11'],2);document.getElementById('XLEW_1_5_12').value=eedisplayPercentND(co['XLEW_1_5_12'],2);document.getElementById('XLEW_1_6_3').value=eedisplayPercentND(co['XLEW_1_6_3'],2);document.getElementById('XLEW_1_6_4').value=eedisplayPercentND(co['XLEW_1_6_4'],2);
};};
function str_eq(x,y){if(isNaN(x)&&isNaN(y))return(x.toLowerCase()==y.toLowerCase());else return x==y;};

function str_gr(x,y){if(isNaN(x)&&isNaN(y))return(x.toLowerCase()>y.toLowerCase());else return x>y;};

function str_ls(x,y){if(isNaN(x)&&isNaN(y))return(x.toLowerCase()<y.toLowerCase());else return x<y;};







function eegetdropdownvalue(ctl) {
                                    var control = $(ctl);
                                    var tag = control.get(0).tagName;
                                    var val;
                                    if (tag == 'INPUT') {
                                        val = $('input[name=' + control.attr('name') + ']:checked').attr('data-value');
                                    } 
                                    else if( tag == 'SELECT'){
                                        val = control.find(':selected').attr('data-value'); /* data-value contains type and value, eg. n:100 (number), b:true (bool), s:ram (string) */
                                    }   
                                    else {
                                        val = control.val();
                                    }
                                    return (val == undefined) ? 0 : eeunpackdropdownvalue(val);
                                }

function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function mod(n,d){return n-d*Math.floor(n/d);};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x);if(near0RegExp.test(str)){x=round(x,8);str=String(x);}return str.replace(/\./g,eedec);}};

function eedisplayScientific(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x.toExponential(nd));return str.replace(/\./g,eedec);}};

function eedisplayFloatND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}}else{return res;}}};

function eedisplayPercent(x){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloat(x*100)+'%';}};

function eedisplayPercentND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloatND(x*100,nd)+'%';}}

function eeparseFloatTh(str){str=String(str).replace(eethreg,"");str=String(str).replace(eedecreg,".");var res=parseFloat(str);if(isNaN(res)){return 0;}else{return res;}};

function eedisplayFloatNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');var res2=eeinsertThousand(parts[0].toString());if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(res2+eedec+decimals);}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);}}else{return(eeinsertThousand(res.toString()));}}};

function eedisplayPercentNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloatNDTh(x*100,nd)+'%';}}

function eeinsertThousand(whole){if(whole==""||whole.indexOf("e")>=0){return whole;}else{var minus_sign="";if(whole.charAt(0)=="-"){minus_sign="-";whole=whole.substring(1);};var res="";var str_length=whole.length-1;for(var ii=0;ii<=str_length;ii++){if(ii>0&&ii%3==0){res=eeth+res;};res=whole.charAt(str_length-ii)+res;};return minus_sign+res;}};

 function eedatefmt(fmt,x){if(!isFinite(x))return Number.NaN;var padding=0;var tmp=0;var res="";var len=fmt.length;for(var ii=0;ii<len;ii++){if(fmt[ii]>31){res+=fmtstrings[fmt[ii]-32];}else{switch(fmt[ii]){case 2:res+=eemonth(x);break;case 3:tmp=eemonth(x);if(tmp<10){res+="0";};res+=tmp;break;case 4:res+=fmtmonthnamesshort[eemonth(x)-1];break;case 5:res+=fmtmonthnameslong[eemonth(x)-1];break;case 6:res+=eeday(x);break;case 7:tmp=eeday(x);if(tmp<10){res+="0";};res+=tmp;break;case 8:res+=fmtdaynamesshort[weekday(x,1)-1];break;case 9:res+=fmtdaynameslong[weekday(x,1)-1];break;case 10:tmp=year(x)%100;if(tmp<10){res+="0";};res+=tmp;break;case 11:res+=year(x);break;case 12:res+=hour(x);break;case 13:tmp=hour(x);if(tmp<10){res+="0";};res+=tmp;break;case 14:tmp=hour(x)%12;if(tmp==0){res+="12";}else{res+=tmp%12;};break;case 15:tmp=hour(x)%12;if(tmp==0){res+="12";}else{if(tmp<10){res+="0";};res+=tmp;};break;case 16:res+=minute(x);break;case 17:tmp=minute(x);if(tmp<10){res+="0";};res+=tmp;break;case 18:res+=second(x);break;case 19:tmp=second(x);
 if(tmp<10){res+="0";};res+=tmp;break;case 21:case 22:if(hour(x)<12){res+="AM";}else{res+="PM";};break;case 23:res+=eedisplayFloat(x);break;case 24:tmp=fmt[++ii];res+=eedisplayFloatND(x,tmp);break;case 25:tmp=fmt[++ii];res+=eedisplayFloatNDTh(x,tmp);break;case 26:res+=eedisplayPercent(x);break;case 27:tmp=fmt[++ii];res+=eedisplayPercentND(x,tmp);break;case 28:tmp=fmt[++ii];res+=eedisplayPercentNDTh(x,tmp);break;case 29:tmp=fmt[++ii];res+=eedisplayScientific(x,tmp);break;case 30:padding=fmt[++ii];tmp=hour(x)+Math.floor(x)*24;tmp=tmp.toString();if(tmp.length<padding){res+=('00000000000000').substring(0,padding-tmp.length);}res+=tmp;break;};};};return res;};

function eeunpackdropdownvalue(val) {if (val.length<2) return val;var typ = val.substring(0, 2);var data = val.substring(2);if (typ == 'b:') return data.toLowerCase() == 'true';if (typ == 'n:') return parseFloat(data);if (typ == 's:') return data;return val;  };

function index2(x0_vect,x0_from,x0_to,idx){if(!isFinite(idx))return Number.NaN;if(x0_to-x0_from+1<idx)return Number.NaN;return x0_vect[x0_from+Math.floor(idx)-1];};

function match(key,kvect,kfrom_start,kto_start,match_type){if(isFinite(key)&&isFinite(match_type)){switch(match_type){case-1:var current=0;var from_=kfrom_start;var to_=kto_start+1;while(true){current=(from_+to_)>>1;if(kvect[current]==key)break;if(from_==to_-1)break;if(kvect[current]>key){from_=current;}else{to_=current;}};while(current>kto_start){if(kvect[current]==kvect[current+1]){current--;}else{break;};};if(key>kvect[current])return Number.NaN;return current-kfrom_start+1;case 0:for(var ii=kfrom_start;ii<=kto_start;ii++){if(kvect[ii]==key){return ii-kfrom_start+1;}};return Number.NaN;case 1:default:var current=0;var from_=kfrom_start;var to_=kto_start+1;while(true){current=(from_+to_)>>1;if(kvect[current]==key)break;if(from_==to_-1)break;if(kvect[current]<key){from_=current;}else{to_=current;}};while(current<kto_start){if(kvect[current]==kvect[current+1]){current++;}else{break;};};if(key<kvect[current])return Number.NaN;return current-kfrom_start+1;}}else{return Number.NaN;}};

function match_str(key,kvect,kfrom_start,kto_start,match_type){if(isFinite(match_type)){switch(match_type){case-1:var current=0;var from_=kfrom_start;var to_=kto_start+1;while(true){current=(from_+to_)>>1;if(str_eq(kvect[current],key))break;if(from_==to_-1)break;if(str_gr(kvect[current],key)){from_=current;}else{to_=current;}};while(current>kto_start){if(str_eq(kvect[current],kvect[current+1])){current--;}else{break;};};if(str_gr(key,kvect[current]))return Number.NaN;return current-kfrom_start+1;case 0:for(var ii=kfrom_start;ii<=kto_start;ii++){if(str_eq(kvect[ii],key)){return ii-kfrom_start+1;}};return Number.NaN;case 1:default:var current=0;var from_=kfrom_start;var to_=kto_start+1;while(true){current=(from_+to_)>>1;if(str_eq(kvect[current],key))break;if(from_==to_-1)break;if(str_ls(kvect[current],key)){from_=current;}else{to_=current;}};while(current<kto_start){if(str_eq(kvect[current],kvect[current+1])){current++;}else{break;};};if(str_ls(key,kvect[current]))return Number.NaN;return current-kfrom_start+1;}}else{return Number.NaN;}};

 function leap_gregorian(year){return((year%4)==0)&&(!(((year%100)==0)&&((year%400)!=0)));}var GREGORIAN_EPOCH=1721425;function gregorian_to_jd(year,month,day){return(GREGORIAN_EPOCH-0)+(365*(year-1))+Math.floor((year-1)/4)+(-Math.floor((year-1)/100))+Math.floor((year-1)/400)+Math.floor((((367*month)-362)/12)+((month<=2)?0:(leap_gregorian(year)?-1:-2))+day);}function jd_to_gregorian(jd){var wjd,depoch,quadricent,dqc,cent,dcent,quad,dquad,yindex,year,yearday,leapadj;wjd=Math.floor(jd);depoch=wjd-GREGORIAN_EPOCH-1;quadricent=Math.floor(depoch/146097);dqc=mod(depoch,146097);cent=Math.floor(dqc/36524);dcent=mod(dqc,36524);quad=Math.floor(dcent/1461);dquad=mod(dcent,1461);yindex=Math.floor(dquad/365);year=(quadricent*400)+(cent*100)+(quad*4)+yindex;if(!((cent==4)||(yindex==4))){year++;}yearday=wjd-gregorian_to_jd(year,1,1);leapadj=((wjd<gregorian_to_jd(year,3,1))?0:(leap_gregorian(year)?1:2));var month=Math.floor((((yearday+leapadj)*12)+373)/367);var day=(wjd-gregorian_to_jd(year,month,1))+1;
 return new Array(year,month,day);}

function eeday(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 0;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[2];};

function hour(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return Math.floor(res/3600);}

function minute(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return Math.floor(res/60)%60;};

function eemonth(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 1;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[1];};

function second(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return res%60;};

 function weekday(serial_number,return_type){if(!isFinite(return_type)||!isFinite(serial_number))return Number.NaN;if(return_type<1||return_type>3)return Number.NaN;var res=Math.floor(serial_number+6)%7;switch(Math.floor(return_type)){case 1:return res+1;case 2:return(res+6)%7+1;case 3:return(res+6)%7;};return "hej";};

function year(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 1900;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[0];};
function postcode() {
};function TriggerOnchange(hiddenId)
{
    var e = jQuery.Event('change');
    $('#'+hiddenId).trigger(e);
}
function LoadFromQueryString() {var queryStrings = decodeURI(document.location.search), _readonly = !1;queryStrings.indexOf("_readonly") > -1 && (_readonly = !0), queryStrings.length > 0 && $.each(queryStrings.substr(1).split("&"), function (c, q) {var aQueryString = q.split("=");if (2 == aQueryString.length) {var key = aQueryString[0].toString(), value = aQueryString[1].toString();ssc.formBinder.bind(key,value);}})}
function navigate(e){var t=e.keyCode|e.which;if(t!=13&&t!=40&&t!=38)return;var n=$(e.target||e.srcElement);if(n.is("textarea"))return;if(n.is("select")&&(t==38||t==40))return;var r=parseInt(n.attr("data-sheet"),10);var i=parseInt(n.attr("data-row"),10);var s=parseInt(n.attr("data-col"),10);var o=false;var u=$("#sheet-"+r+"");var a='input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea';var f=i+1;var l=i-1;var c=f;var h=l;while(t==40&&f<=c||t==38&&l>=h){var p=u.find(a).filter("[data-sheet="+r+"][data-row="+(t==38?l:f)+"][data-col="+s+"]");if(p.length>0){p.focus();if(p.is("input:text, textarea"))p.select();o=true;break}else{var d;if(u.data("col"+s)==undefined){d=u.find(a).filter("[data-sheet="+r+"][data-col="+s+"]").map(function(){return parseInt($(this).attr("data-row"),10)}).toArray();u.data("col"+s,d)}else{d=u.data("col"+s)}c=d[d.length-1];h=d[0];var v="indexOf"in Array.prototype?d.indexOf(i):$.inArray(i,d);if(t==40&&i<c){f=d[v+1]}else if(t==38&&i>h){l=d[v-1]}else{break}}}if(!o){var m;if(t==38)m=parseInt(n.attr("tabindex"),10)-1;else m=parseInt(n.attr("tabindex"),10)+1;var g=u.find(a).filter("[data-sheet][data-row][data-col][tabindex="+m+"]");if(g.length>0){if(g.is(":radio"))g=g.filter(":checked");if(g.length>0){g.focus();if(g.is("input:text, textarea"))g.select()}}else{var y=u.find(a).filter("[data-sheet][data-row][data-col][tabindex]:first");y.focus();if(y.is("input:text, textarea"))y.select()}}e.preventDefault?e.preventDefault():e.returnValue=false}
/* Finds out if the element is hidden by its parent tr */
                    jQuery.expr[':'].hiddenByParent = function(a) {
                        /* Skip the hidden form elements */
                        if(a.id.startsWith('xl_')) return true;
                        var isHiddenByParent=false;        
                        var elem = $(a);
                        if(elem !=undefined)
                        {
                            /* if the row is hidden */
                            isHiddenByParent = elem.closest("tr[class^='_css']").css('display') != 'none';
                        }

                        if(isHiddenByParent == true)
                        {
                            /* if whole tab is hidden */
                            isHiddenByParent = elem.closest('.tab-pane>div').css('display') != 'none';
                        }
                        return isHiddenByParent;                        
                    };var ssccf1n = function(op,id,css,data1){	
	                switch(op)
	                {
                        						case 'image':                               
                            $('#' + id).attr('src',$('#'+data1).attr('src'));
                        break;
      		
	                }
                }; 
                var ssccf4n = function(op,id,colors,data1,data2,data3,data4){
                    switch(op)
                    {
                           
                    }
                };
                    function calendarCallback(data){
                    var calendarType = $('#' + data.id).data('caltype'); 
                    var datepickerId =  calendarType == 'popup' ?  data.id : 'cal_' +  data.id, $datepicker = $('#' + datepickerId); 
                    var calcDate = data.s1;		
					if($datepicker.data('is-dirty') === undefined){ 						
                        if(calcDate != '' && !isNaN(calcDate)) {
						    $datepicker.datepicker('update', new Date(year(calcDate), eemonth(calcDate)-1, eeday(calcDate)));
                            EE.eeRecalcNeeded = true;						    
                        }
					}
               }

/* Licensed under the SpreadsheetConverter *//*!
 * ssc.script.js
 */
var ssc=ssc||{};ssc.pendingUploads=0;ssc.recalcSource='';ssc.APPNAME='WebsiteCalculatorv2';ssc.exMsg='The fields with the red border are required or invalid.' 
$(window).on('scroll', function() {
                    var $w = $(window);
  $('.position-fixed-x').css('left', $w.scrollLeft());
  $('.position-fixed-y').css('top', $w.scrollTop());
                });
ssc.Dialog={};ssc.Dialog.BeforeSubmitDesc='The form is being submitted.';ssc.Dialog.OfflineHeading='Save until online';ssc.Dialog.OfflineDesc='You are currently offline and the submit failed. Do you want to save the submit and send it later when you are online.';
                ssc.Dialog.OfflineConfirm='Do you want to save?';ssc.Dialog.OfflineSubmitHeading='Offline forms submit confirmation';ssc.Dialog.OfflineSubmitDesc='There are Offline form(s), which are now ready to submit in server.';ssc.Dialog.OfflineSubmitConfirm='Do you want to submit?';
                ssc.Dialog.FailOfflineHeading='Offline Form submit failed';ssc.Dialog.FailOfflineDesc='Unable to connect to the Internet. Please try submitting the offline forms later in internet connection.';ssc.Dialog.OfflineSubmitWait='It may take sometime to finish all submits depending on the size of offline forms and internet connection.';ssc.Dialog.OfflineSubmitWaitCounter='Left';
     var focused=false;
        (function($){
            var calendar_dateFormats = {};
            var defaultDateFmt = 'm/d/yyyy';
            postcode();
ssc.active_sheet_selector = 'div.active > div.container-fluid.ssc-responsive-sheet > div.row > section';

$('a').on('click',function (e) {	
				var href = $(this).attr('href');
				if(href.slice(0,1) == '#'){				
					e.preventDefault();	
                    if(href=='#') return;
					var $target = $(href);
					if($target.length == 0){
						alert('Oops! This link is broken so can not navigate.');
						return;
					}
					focused=false;
					ssc.focusOnElement($target);
				}
			});

                ssc.focusOnElement = function(elem){
                    if(focused) return;
                    focused=true;
                    var tab = elem.parents('.tab-pane');
				    if(!tab.hasClass('active')){
					    $('.nav-tabs a[href="#' + tab.attr('id') + '"]').tab('show');
				    }

				    $('html, body').stop().animate(
				    {
					    'scrollTop': elem.offset().top - 40			
				    }, 
				    900, 
				    'swing', 
				    function () {
					    elem.focus();						
				    });
                }
            var focusCtrl=$('input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea,a.ui-state-active');
			                //to prevent popup dialog to appear in page load.
			                if(focusCtrl!= undefined && focusCtrl.filter(':first').hasClass('form-control')==false){
				                focusCtrl.filter(':first').focus();
			                }
                            //To make readonly elements background transparent
                            $('textarea[readonly],input[type=text][readonly]').css('background','transparent');
        })($);
ssc.checkIfMSIE = function() {
            var a = window.navigator.userAgent,
                b = a.indexOf('MSIE '),
                c = a.indexOf('.NET CLR');
            return !(-1 === b && -1 === c)
        };

            function showValidateMessage(message,title){
                if(toastr){if(title && title.length>0){toastr.error(message,title);}else{toastr.error(message);}}else{alert(message);}
            }
