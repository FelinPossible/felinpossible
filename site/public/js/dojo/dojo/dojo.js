/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

//>>built
(function(_1,_2){
var _3=function(){
},_4=function(it){
for(var p in it){
return 0;
}
return 1;
},_5={}.toString,_6=function(it){
return _5.call(it)=="[object Function]";
},_7=function(it){
return _5.call(it)=="[object String]";
},_8=function(it){
return _5.call(it)=="[object Array]";
},_9=function(_a,_b){
if(_a){
for(var i=0;i<_a.length;){
_b(_a[i++]);
}
}
},_c=function(_d,_e){
for(var p in _e){
_d[p]=_e[p];
}
return _d;
},_f=function(_10,_11){
return _c(new Error(_10),{src:"dojoLoader",info:_11});
},_12=1,uid=function(){
return "_"+_12++;
},req=function(_13,_14,_15){
return _16(_13,_14,_15,0,req);
},_17=this,doc=_17.document,_18=doc&&doc.createElement("DiV"),has=req.has=function(_19){
return _6(_1a[_19])?(_1a[_19]=_1a[_19](_17,doc,_18)):_1a[_19];
},_1a=has.cache=_2.hasCache;
has.add=function(_1b,_1c,now,_1d){
(_1a[_1b]===undefined||_1d)&&(_1a[_1b]=_1c);
return now&&has(_1b);
};
0&&has.add("host-node",_1.has&&"host-node" in _1.has?_1.has["host-node"]:(typeof process=="object"&&process.versions&&process.versions.node&&process.versions.v8));
if(0){
require("./_base/configNode.js").config(_2);
_2.loaderPatch.nodeRequire=require;
}
0&&has.add("host-rhino",_1.has&&"host-rhino" in _1.has?_1.has["host-rhino"]:(typeof load=="function"&&(typeof Packages=="function"||typeof Packages=="object")));
if(0){
for(var _1e=_1.baseUrl||".",arg,_1f=this.arguments,i=0;i<_1f.length;){
arg=(_1f[i++]+"").split("=");
if(arg[0]=="baseUrl"){
_1e=arg[1];
break;
}
}
load(_1e+"/_base/configRhino.js");
rhinoDojoConfig(_2,_1e,_1f);
}
for(var p in _1.has){
has.add(p,_1.has[p],0,1);
}
var _20=1,_21=2,_22=3,_23=4,_24=5;
if(0){
_20="requested";
_21="arrived";
_22="not-a-module";
_23="executing";
_24="executed";
}
var _25=0,_26="sync",xd="xd",_27=[],_28=0,_29=_3,_2a=_3,_2b;
if(1){
req.isXdUrl=_3;
req.initSyncLoader=function(_2c,_2d,_2e){
if(!_28){
_28=_2c;
_29=_2d;
_2a=_2e;
}
return {sync:_26,requested:_20,arrived:_21,nonmodule:_22,executing:_23,executed:_24,syncExecStack:_27,modules:_2f,execQ:_30,getModule:_31,injectModule:_32,setArrived:_33,signal:_34,finishExec:_35,execModule:_36,dojoRequirePlugin:_28,getLegacyMode:function(){
return _25;
},guardCheckComplete:_37};
};
if(1){
var _38=location.protocol,_39=location.host;
req.isXdUrl=function(url){
if(/^\./.test(url)){
return false;
}
if(/^\/\//.test(url)){
return true;
}
var _3a=url.match(/^([^\/\:]+\:)\/+([^\/]+)/);
return _3a&&(_3a[1]!=_38||(_39&&_3a[2]!=_39));
};
1||has.add("dojo-xhr-factory",1);
has.add("dojo-force-activex-xhr",1&&!doc.addEventListener&&window.location.protocol=="file:");
has.add("native-xhr",typeof XMLHttpRequest!="undefined");
if(has("native-xhr")&&!has("dojo-force-activex-xhr")){
_2b=function(){
return new XMLHttpRequest();
};
}else{
for(var _3b=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],_3c,i=0;i<3;){
try{
_3c=_3b[i++];
if(new ActiveXObject(_3c)){
break;
}
}
catch(e){
}
}
_2b=function(){
return new ActiveXObject(_3c);
};
}
req.getXhr=_2b;
has.add("dojo-gettext-api",1);
req.getText=function(url,_3d,_3e){
var xhr=_2b();
xhr.open("GET",_3f(url),false);
xhr.send(null);
if(xhr.status==200||(!location.host&&!xhr.status)){
if(_3e){
_3e(xhr.responseText,_3d);
}
}else{
throw _f("xhrFailed",xhr.status);
}
return xhr.responseText;
};
}
}else{
req.async=1;
}
var _40=new Function("return eval(arguments[0]);");
req.eval=function(_41,_42){
return _40(_41+"\r\n////@ sourceURL="+_42);
};
var _43={},_44="error",_34=req.signal=function(_45,_46){
var _47=_43[_45];
_9(_47&&_47.slice(0),function(_48){
_48.apply(null,_8(_46)?_46:[_46]);
});
},on=req.on=function(_49,_4a){
var _4b=_43[_49]||(_43[_49]=[]);
_4b.push(_4a);
return {remove:function(){
for(var i=0;i<_4b.length;i++){
if(_4b[i]===_4a){
_4b.splice(i,1);
return;
}
}
}};
};
var _4c=[],_4d={},_4e=[],_4f={},map=req.map={},_50=[],_2f={},_51="",_52={},_53="url:",_54={},_55={};
if(1){
var _56=function(_57){
var p,_58,_59,now,m;
for(p in _54){
_58=_54[p];
_59=p.match(/^url\:(.+)/);
if(_59){
_52[_53+_5a(_59[1],_57)]=_58;
}else{
if(p=="*now"){
now=_58;
}else{
if(p!="*noref"){
m=_5b(p,_57);
_52[m.mid]=_52[_53+m.url]=_58;
}
}
}
}
if(now){
now(_5c(_57));
}
_54={};
},_5d=function(s){
return s.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(c){
return "\\"+c;
});
},_5e=function(map,_5f){
_5f.splice(0,_5f.length);
for(var p in map){
_5f.push([p,map[p],new RegExp("^"+_5d(p)+"(/|$)"),p.length]);
}
_5f.sort(function(lhs,rhs){
return rhs[3]-lhs[3];
});
return _5f;
},_60=function(_61){
var _62=_61.name;
if(!_62){
_62=_61;
_61={name:_62};
}
_61=_c({main:"main"},_61);
_61.location=_61.location?_61.location:_62;
if(_61.packageMap){
map[_62]=_61.packageMap;
}
if(!_61.main.indexOf("./")){
_61.main=_61.main.substring(2);
}
_4f[_62]=_61;
},_63=[],_64=function(_65,_66,_67){
for(var p in _65){
if(p=="waitSeconds"){
req.waitms=(_65[p]||0)*1000;
}
if(p=="cacheBust"){
_51=_65[p]?(_7(_65[p])?_65[p]:(new Date()).getTime()+""):"";
}
if(p=="baseUrl"||p=="combo"){
req[p]=_65[p];
}
if(1&&p=="async"){
var _68=_65[p];
req.legacyMode=_25=(_7(_68)&&/sync|legacyAsync/.test(_68)?_68:(!_68?_26:false));
req.async=!_25;
}
if(_65[p]!==_1a){
req.rawConfig[p]=_65[p];
p!="has"&&has.add("config-"+p,_65[p],0,_66);
}
}
if(!req.baseUrl){
req.baseUrl="./";
}
if(!/\/$/.test(req.baseUrl)){
req.baseUrl+="/";
}
for(p in _65.has){
has.add(p,_65.has[p],0,_66);
}
_9(_65.packages,_60);
for(_1e in _65.packagePaths){
_9(_65.packagePaths[_1e],function(_69){
var _6a=_1e+"/"+_69;
if(_7(_69)){
_69={name:_69};
}
_69.location=_6a;
_60(_69);
});
}
_5e(_c(map,_65.map),_50);
_9(_50,function(_6b){
_6b[1]=_5e(_6b[1],[]);
if(_6b[0]=="*"){
_50.star=_6b;
}
});
_5e(_c(_4d,_65.paths),_4e);
_9(_65.aliases,function(_6c){
if(_7(_6c[0])){
_6c[0]=new RegExp("^"+_5d(_6c[0])+"$");
}
_4c.push(_6c);
});
if(_66){
_63.push({config:_65.config});
}else{
for(p in _65.config){
var _6d=_31(p,_67);
_6d.config=_c(_6d.config||{},_65.config[p]);
}
}
if(_65.cache){
_56();
_54=_65.cache;
if(_65.cache["*noref"]){
_56();
}
}
_34("config",[_65,req.rawConfig]);
};
if(has("dojo-cdn")||1){
var _6e=doc.getElementsByTagName("script"),i=0,_6f,_70,src,_71;
while(i<_6e.length){
_6f=_6e[i++];
if((src=_6f.getAttribute("src"))&&(_71=src.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))){
_70=_71[3]||"";
_2.baseUrl=_2.baseUrl||_70;
src=(_6f.getAttribute("data-dojo-config")||_6f.getAttribute("djConfig"));
if(src){
_55=req.eval("({ "+src+" })","data-dojo-config");
}
if(0){
var _72=_6f.getAttribute("data-main");
if(_72){
_55.deps=_55.deps||[_72];
}
}
break;
}
}
}
if(0){
try{
if(window.parent!=window&&window.parent.require){
var doh=window.parent.require("doh");
doh&&_c(_55,doh.testConfig);
}
}
catch(e){
}
}
req.rawConfig={};
_64(_2,1);
if(has("dojo-cdn")){
_4f.dojo.location=_70;
if(_70){
_70+="/";
}
_4f.dijit.location=_70+"../dijit/";
_4f.dojox.location=_70+"../dojox/";
}
_64(_1,1);
_64(_55,1);
}else{
_4d=_2.paths;
_4e=_2.pathsMapProg;
_4f=_2.packs;
_4c=_2.aliases;
_50=_2.mapProgs;
_2f=_2.modules;
_52=_2.cache;
_51=_2.cacheBust;
req.rawConfig=_2;
}
if(0){
req.combo=req.combo||{add:_3};
var _73=0,_74=[],_75=null;
}
var _76=function(_77){
_37(function(){
_9(_77.deps,_32);
if(0&&_73&&!_75){
_75=setTimeout(function(){
_73=0;
_75=null;
req.combo.done(function(_78,url){
var _79=function(){
_7a(0,_78);
_7b();
};
_74.push(_78);
_7c=_78;
req.injectUrl(url,_79,_78);
_7c=0;
},req);
},0);
}
});
},_16=function(a1,a2,a3,_7d,_7e){
var _7f,_80;
if(_7(a1)){
_7f=_31(a1,_7d,true);
if(_7f&&_7f.executed){
return _7f.result;
}
throw _f("undefinedModule",a1);
}
if(!_8(a1)){
_64(a1,0,_7d);
a1=a2;
a2=a3;
}
if(_8(a1)){
if(!a1.length){
a2&&a2();
}else{
_80="require*"+uid();
for(var mid,_81=[],i=0;i<a1.length;){
mid=a1[i++];
_81.push(_31(mid,_7d));
}
_7f=_c(_82("",_80,0,""),{injected:_21,deps:_81,def:a2||_3,require:_7d?_7d.require:req,gc:1});
_2f[_7f.mid]=_7f;
_76(_7f);
var _83=_84&&_25!=_26;
_37(function(){
_36(_7f,_83);
});
if(!_7f.executed){
_30.push(_7f);
}
_7b();
}
}
return _7e;
},_5c=function(_85){
if(!_85){
return req;
}
var _86=_85.require;
if(!_86){
_86=function(a1,a2,a3){
return _16(a1,a2,a3,_85,_86);
};
_85.require=_c(_86,req);
_86.module=_85;
_86.toUrl=function(_87){
return _5a(_87,_85);
};
_86.toAbsMid=function(mid){
return _b4(mid,_85);
};
if(0){
_86.undef=function(mid){
req.undef(mid,_85);
};
}
if(1){
_86.syncLoadNls=function(mid){
var _88=_5b(mid,_85),_89=_2f[_88.mid];
if(!_89||!_89.executed){
_8a=_52[_88.mid]||_52[_53+_88.url];
if(_8a){
_8b(_8a);
_89=_2f[_88.mid];
}
}
return _89&&_89.executed&&_89.result;
};
}
}
return _86;
},_30=[],_8c=[],_8d={},_8e=function(_8f){
_8f.injected=_20;
_8d[_8f.mid]=1;
if(_8f.url){
_8d[_8f.url]=_8f.pack||1;
}
_90();
},_33=function(_91){
_91.injected=_21;
delete _8d[_91.mid];
if(_91.url){
delete _8d[_91.url];
}
if(_4(_8d)){
_92();
1&&_25==xd&&(_25=_26);
}
},_93=req.idle=function(){
return !_8c.length&&_4(_8d)&&!_30.length&&!_84;
},_94=function(_95,map){
if(map){
for(var i=0;i<map.length;i++){
if(map[i][2].test(_95)){
return map[i];
}
}
}
return 0;
},_96=function(_97){
var _98=[],_99,_9a;
_97=_97.replace(/\\/g,"/").split("/");
while(_97.length){
_99=_97.shift();
if(_99==".."&&_98.length&&_9a!=".."){
_98.pop();
_9a=_98[_98.length-1];
}else{
if(_99!="."){
_98.push(_9a=_99);
}
}
}
return _98.join("/");
},_82=function(pid,mid,_9b,url){
if(1){
var xd=req.isXdUrl(url);
return {pid:pid,mid:mid,pack:_9b,url:url,executed:0,def:0,isXd:xd,isAmd:!!(xd||(_4f[pid]&&_4f[pid].isAmd))};
}else{
return {pid:pid,mid:mid,pack:_9b,url:url,executed:0,def:0};
}
},_9c=function(mid,_9d,_9e,_9f,_a0,_a1,_a2,_a3){
var pid,_a4,_a5,_a6,_a7,url,_a8,_a9,_aa;
_aa=mid;
_a9=/^\./.test(mid);
if(/(^\/)|(\:)|(\.js$)/.test(mid)||(_a9&&!_9d)){
return _82(0,mid,0,mid);
}else{
mid=_96(_a9?(_9d.mid+"/../"+mid):mid);
if(/^\./.test(mid)){
throw _f("irrationalPath",mid);
}
if(_9d){
_a7=_94(_9d.mid,_a1);
}
_a7=_a7||_a1.star;
_a7=_a7&&_94(mid,_a7[1]);
if(_a7){
mid=_a7[1]+mid.substring(_a7[3]);
}
_71=mid.match(/^([^\/]+)(\/(.+))?$/);
pid=_71?_71[1]:"";
if((_a4=_9e[pid])){
mid=pid+"/"+(_a5=(_71[3]||_a4.main));
}else{
pid="";
}
var _ab=0,_ac=0;
_9(_4c,function(_ad){
var _ae=mid.match(_ad[0]);
if(_ae&&_ae.length>_ab){
_ac=_6(_ad[1])?mid.replace(_ad[0],_ad[1]):_ad[1];
}
});
if(_ac){
return _9c(_ac,0,_9e,_9f,_a0,_a1,_a2,_a3);
}
_a8=_9f[mid];
if(_a8){
return _a3?_82(_a8.pid,_a8.mid,_a8.pack,_a8.url):_9f[mid];
}
}
_a7=_94(mid,_a2);
if(_a7){
url=_a7[1]+mid.substring(_a7[3]);
}else{
if(pid){
url=_a4.location+"/"+_a5;
}else{
if(has("config-tlmSiblingOfDojo")){
url="../"+mid;
}else{
url=mid;
}
}
}
if(!(/(^\/)|(\:)/.test(url))){
url=_a0+url;
}
url+=".js";
return _82(pid,mid,_a4,_96(url));
},_5b=function(mid,_af){
return _9c(mid,_af,_4f,_2f,req.baseUrl,_50,_4e);
},_b0=function(_b1,_b2,_b3){
return _b1.normalize?_b1.normalize(_b2,function(mid){
return _b4(mid,_b3);
}):_b4(_b2,_b3);
},_b5=0,_31=function(mid,_b6,_b7){
var _b8,_b9,_ba,_bb;
_b8=mid.match(/^(.+?)\!(.*)$/);
if(_b8){
_b9=_31(_b8[1],_b6,_b7);
if(1&&_25==_26&&!_b9.executed){
_32(_b9);
if(_b9.injected===_21&&!_b9.executed){
_37(function(){
_36(_b9);
});
}
if(_b9.executed){
_bc(_b9);
}else{
_30.unshift(_b9);
}
}
if(_b9.executed===_24&&!_b9.load){
_bc(_b9);
}
if(_b9.load){
_ba=_b0(_b9,_b8[2],_b6);
mid=(_b9.mid+"!"+(_b9.dynamic?++_b5+"!":"")+_ba);
}else{
_ba=_b8[2];
mid=_b9.mid+"!"+(++_b5)+"!waitingForPlugin";
}
_bb={plugin:_b9,mid:mid,req:_5c(_b6),prid:_ba};
}else{
_bb=_5b(mid,_b6);
}
return _2f[_bb.mid]||(!_b7&&(_2f[_bb.mid]=_bb));
},_b4=req.toAbsMid=function(mid,_bd){
return _5b(mid,_bd).mid;
},_5a=req.toUrl=function(_be,_bf){
var _c0=_5b(_be+"/x",_bf),url=_c0.url;
return _3f(_c0.pid===0?_be:url.substring(0,url.length-5));
},_c1={injected:_21,executed:_24,def:_22,result:_22},_c2=function(mid){
return _2f[mid]=_c({mid:mid},_c1);
},_c3=_c2("require"),_c4=_c2("exports"),_c5=_c2("module"),_c6=function(_c7,_c8){
req.trace("loader-run-factory",[_c7.mid]);
var _c9=_c7.def,_ca;
1&&_27.unshift(_c7);
if(has("config-dojo-loader-catches")){
try{
_ca=_6(_c9)?_c9.apply(null,_c8):_c9;
}
catch(e){
_34(_44,_c7.result=_f("factoryThrew",[_c7,e]));
}
}else{
_ca=_6(_c9)?_c9.apply(null,_c8):_c9;
}
_c7.result=_ca===undefined&&_c7.cjs?_c7.cjs.exports:_ca;
1&&_27.shift(_c7);
},_cb={},_cc=0,_bc=function(_cd){
var _ce=_cd.result;
_cd.dynamic=_ce.dynamic;
_cd.normalize=_ce.normalize;
_cd.load=_ce.load;
return _cd;
},_cf=function(_d0){
var map={};
_9(_d0.loadQ,function(_d1){
var _d2=_b0(_d0,_d1.prid,_d1.req.module),mid=_d0.dynamic?_d1.mid.replace(/waitingForPlugin$/,_d2):(_d0.mid+"!"+_d2),_d3=_c(_c({},_d1),{mid:mid,prid:_d2,injected:0});
if(!_2f[mid]){
_e5(_2f[mid]=_d3);
}
map[_d1.mid]=_2f[mid];
_33(_d1);
delete _2f[_d1.mid];
});
_d0.loadQ=0;
var _d4=function(_d5){
for(var _d6,_d7=_d5.deps||[],i=0;i<_d7.length;i++){
_d6=map[_d7[i].mid];
if(_d6){
_d7[i]=_d6;
}
}
};
for(var p in _2f){
_d4(_2f[p]);
}
_9(_30,_d4);
},_35=function(_d8){
req.trace("loader-finish-exec",[_d8.mid]);
_d8.executed=_24;
_d8.defOrder=_cc++;
1&&_9(_d8.provides,function(cb){
cb();
});
if(_d8.loadQ){
_bc(_d8);
_cf(_d8);
}
for(i=0;i<_30.length;){
if(_30[i]===_d8){
_30.splice(i,1);
}else{
i++;
}
}
if(/^require\*/.test(_d8.mid)){
delete _2f[_d8.mid];
}
},_d9=[],_36=function(_da,_db){
if(_da.executed===_23){
req.trace("loader-circular-dependency",[_d9.concat(_da.mid).join("->")]);
return (!_da.def||_db)?_cb:(_da.cjs&&_da.cjs.exports);
}
if(!_da.executed){
if(!_da.def){
return _cb;
}
var mid=_da.mid,_dc=_da.deps||[],arg,_dd,_de=[],i=0;
if(0){
_d9.push(mid);
req.trace("loader-exec-module",["exec",_d9.length,mid]);
}
_da.executed=_23;
while(i<_dc.length){
arg=_dc[i++];
_dd=((arg===_c3)?_5c(_da):((arg===_c4)?_da.cjs.exports:((arg===_c5)?_da.cjs:_36(arg,_db))));
if(_dd===_cb){
_da.executed=0;
req.trace("loader-exec-module",["abort",mid]);
0&&_d9.pop();
return _cb;
}
_de.push(_dd);
}
_c6(_da,_de);
_35(_da);
0&&_d9.pop();
}
return _da.result;
},_84=0,_37=function(_df){
try{
_84++;
_df();
}
finally{
_84--;
}
if(_93()){
_34("idle",[]);
}
},_7b=function(){
if(_84){
return;
}
_37(function(){
_29();
for(var _e0,_e1,i=0;i<_30.length;){
_e0=_cc;
_e1=_30[i];
_36(_e1);
if(_e0!=_cc){
_29();
i=0;
}else{
i++;
}
}
});
};
if(0){
req.undef=function(_e2,_e3){
var _e4=_31(_e2,_e3);
_33(_e4);
delete _2f[_e4.mid];
};
}
if(1){
if(has("dojo-loader-eval-hint-url")===undefined){
has.add("dojo-loader-eval-hint-url",1);
}
var _3f=function(url){
url+="";
return url+(_51?((/\?/.test(url)?"&":"?")+_51):"");
},_e5=function(_e6){
var _e7=_e6.plugin;
if(_e7.executed===_24&&!_e7.load){
_bc(_e7);
}
var _e8=function(def){
_e6.result=def;
_33(_e6);
_35(_e6);
_7b();
};
if(_e7.load){
_e7.load(_e6.prid,_e6.req,_e8);
}else{
if(_e7.loadQ){
_e7.loadQ.push(_e6);
}else{
_e7.loadQ=[_e6];
_30.unshift(_e7);
_32(_e7);
}
}
},_8a=0,_7c=0,_e9=0,_8b=function(_ea,_eb){
if(has("config-stripStrict")){
_ea=_ea.replace(/"use strict"/g,"");
}
_e9=1;
if(has("config-dojo-loader-catches")){
try{
if(_ea===_8a){
_8a.call(null);
}else{
req.eval(_ea,has("dojo-loader-eval-hint-url")?_eb.url:_eb.mid);
}
}
catch(e){
_34(_44,_f("evalModuleThrew",_eb));
}
}else{
if(_ea===_8a){
_8a.call(null);
}else{
req.eval(_ea,has("dojo-loader-eval-hint-url")?_eb.url:_eb.mid);
}
}
_e9=0;
},_32=function(_ec){
var mid=_ec.mid,url=_ec.url;
if(_ec.executed||_ec.injected||_8d[mid]||(_ec.url&&((_ec.pack&&_8d[_ec.url]===_ec.pack)||_8d[_ec.url]==1))){
return;
}
_8e(_ec);
if(0){
var _ed=0;
if(_ec.plugin&&_ec.plugin.isCombo){
req.combo.add(_ec.plugin.mid,_ec.prid,0,req);
_ed=1;
}else{
if(!_ec.plugin){
_ed=req.combo.add(0,_ec.mid,_ec.url,req);
}
}
if(_ed){
_73=1;
return;
}
}
if(_ec.plugin){
_e5(_ec);
return;
}
var _ee=function(){
_7a(_ec);
if(_ec.injected!==_21){
_33(_ec);
_c(_ec,_c1);
req.trace("loader-define-nonmodule",[_ec.url]);
}
if(1&&_25){
!_27.length&&_7b();
}else{
_7b();
}
};
_8a=_52[mid]||_52[_53+_ec.url];
if(_8a){
req.trace("loader-inject",["cache",_ec.mid,url]);
_8b(_8a,_ec);
_ee();
return;
}
if(1&&_25){
if(_ec.isXd){
_25==_26&&(_25=xd);
}else{
if(_ec.isAmd&&_25!=_26){
}else{
var _ef=function(_f0){
if(_25==_26){
_27.unshift(_ec);
_8b(_f0,_ec);
_27.shift();
_7a(_ec);
if(!_ec.cjs){
_33(_ec);
_35(_ec);
}
if(_ec.finish){
var _f1=mid+"*finish",_f2=_ec.finish;
delete _ec.finish;
def(_f1,["dojo",("dojo/require!"+_f2.join(",")).replace(/\./g,"/")],function(_f3){
_9(_f2,function(mid){
_f3.require(mid);
});
});
_30.unshift(_31(_f1));
}
_ee();
}else{
_f0=_2a(_ec,_f0);
if(_f0){
_8b(_f0,_ec);
_ee();
}else{
_7c=_ec;
req.injectUrl(_3f(url),_ee,_ec);
_7c=0;
}
}
};
req.trace("loader-inject",["xhr",_ec.mid,url,_25!=_26]);
if(has("config-dojo-loader-catches")){
try{
req.getText(url,_25!=_26,_ef);
}
catch(e){
_34(_44,_f("xhrInjectFailed",[_ec,e]));
}
}else{
req.getText(url,_25!=_26,_ef);
}
return;
}
}
}
req.trace("loader-inject",["script",_ec.mid,url]);
_7c=_ec;
req.injectUrl(_3f(url),_ee,_ec);
_7c=0;
},_f4=function(_f5,_f6,def){
req.trace("loader-define-module",[_f5.mid,_f6]);
if(0&&_f5.plugin&&_f5.plugin.isCombo){
_f5.result=_6(def)?def():def;
_33(_f5);
_35(_f5);
return _f5;
}
var mid=_f5.mid;
if(_f5.injected===_21){
_34(_44,_f("multipleDefine",_f5));
return _f5;
}
_c(_f5,{deps:_f6,def:def,cjs:{id:_f5.mid,uri:_f5.url,exports:(_f5.result={}),setExports:function(_f7){
_f5.cjs.exports=_f7;
},config:function(){
return _f5.config;
}}});
for(var i=0;i<_f6.length;i++){
_f6[i]=_31(_f6[i],_f5);
}
if(1&&_25&&!_8d[mid]){
_76(_f5);
_30.push(_f5);
_7b();
}
_33(_f5);
if(!_6(def)&&!_f6.length){
_f5.result=def;
_35(_f5);
}
return _f5;
},_7a=function(_f8,_f9){
var _fa=[],_fb,_fc;
while(_8c.length){
_fc=_8c.shift();
_f9&&(_fc[0]=_f9.shift());
_fb=(_fc[0]&&_31(_fc[0]))||_f8;
_fa.push([_fb,_fc[1],_fc[2]]);
}
_56(_f8);
_9(_fa,function(_fd){
_76(_f4.apply(null,_fd));
});
};
}
var _fe=0,_92=_3,_90=_3;
if(1){
_92=function(){
_fe&&clearTimeout(_fe);
_fe=0;
},_90=function(){
_92();
if(req.waitms){
_fe=window.setTimeout(function(){
_92();
_34(_44,_f("timeout",_8d));
},req.waitms);
}
};
}
if(1){
has.add("ie-event-behavior",!!doc.attachEvent&&(typeof opera==="undefined"||opera.toString()!="[object Opera]"));
}
if(1&&(1||1)){
var _ff=function(node,_100,_101,_102){
if(!has("ie-event-behavior")){
node.addEventListener(_100,_102,false);
return function(){
node.removeEventListener(_100,_102,false);
};
}else{
node.attachEvent(_101,_102);
return function(){
node.detachEvent(_101,_102);
};
}
},_103=_ff(window,"load","onload",function(){
req.pageLoaded=1;
doc.readyState!="complete"&&(doc.readyState="complete");
_103();
});
if(1){
var _104=doc.getElementsByTagName("script")[0],_105=_104.parentNode;
req.injectUrl=function(url,_106,_107){
var node=_107.node=doc.createElement("script"),_108=function(e){
e=e||window.event;
var node=e.target||e.srcElement;
if(e.type==="load"||/complete|loaded/.test(node.readyState)){
_109();
_10a();
_106&&_106();
}
},_109=_ff(node,"load","onreadystatechange",_108),_10a=_ff(node,"error","onerror",function(e){
_109();
_10a();
_34(_44,_f("scriptError",[url,e]));
});
node.type="text/javascript";
node.charset="utf-8";
node.src=url;
_105.insertBefore(node,_104);
return node;
};
}
}
if(1){
req.log=function(){
try{
for(var i=0;i<arguments.length;i++){
}
}
catch(e){
}
};
}else{
req.log=_3;
}
if(0){
var _10b=req.trace=function(_10c,args){
if(_10b.on&&_10b.group[_10c]){
_34("trace",[_10c,args]);
for(var arg,dump=[],text="trace:"+_10c+(args.length?(":"+args[0]):""),i=1;i<args.length;){
arg=args[i++];
if(_7(arg)){
text+=", "+arg;
}else{
dump.push(arg);
}
}
req.log(text);
dump.length&&dump.push(".");
req.log.apply(req,dump);
}
};
_c(_10b,{on:1,group:{},set:function(_10d,_10e){
if(_7(_10d)){
_10b.group[_10d]=_10e;
}else{
_c(_10b.group,_10d);
}
}});
_10b.set(_c(_c(_c({},_2.trace),_1.trace),_55.trace));
on("config",function(_10f){
_10f.trace&&_10b.set(_10f.trace);
});
}else{
req.trace=_3;
}
var def=function(mid,_110,_111){
var _112=arguments.length,_113=["require","exports","module"],args=[0,mid,_110];
if(_112==1){
args=[0,(_6(mid)?_113:[]),mid];
}else{
if(_112==2&&_7(mid)){
args=[mid,(_6(_110)?_113:[]),_110];
}else{
if(_112==3){
args=[mid,_110,_111];
}
}
}
if(0&&args[1]===_113){
args[2].toString().replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,"").replace(/require\(["']([\w\!\-_\.\/]+)["']\)/g,function(_114,dep){
args[1].push(dep);
});
}
req.trace("loader-define",args.slice(0,2));
var _115=args[0]&&_31(args[0]),_116;
if(_115&&!_8d[_115.mid]){
_76(_f4(_115,args[1],args[2]));
}else{
if(!has("ie-event-behavior")||!1||_e9){
_8c.push(args);
}else{
_115=_115||_7c;
if(!_115){
for(mid in _8d){
_116=_2f[mid];
if(_116&&_116.node&&_116.node.readyState==="interactive"){
_115=_116;
break;
}
}
if(0&&!_115){
for(var i=0;i<_74.length;i++){
_115=_74[i];
if(_115.node&&_115.node.readyState==="interactive"){
break;
}
_115=0;
}
}
}
if(0&&_8(_115)){
_76(_f4(_31(_115.shift()),args[1],args[2]));
if(!_115.length){
_74.splice(i,1);
}
}else{
if(_115){
_56(_115);
_76(_f4(_115,args[1],args[2]));
}else{
_34(_44,_f("ieDefineFailed",args[0]));
}
}
_7b();
}
}
};
def.amd={vendor:"dojotoolkit.org"};
if(0){
req.def=def;
}
_c(_c(req,_2.loaderPatch),_1.loaderPatch);
on(_44,function(arg){
try{
console.error(arg);
if(arg instanceof Error){
for(var p in arg){
}
}
}
catch(e){
}
});
_c(req,{uid:uid,cache:_52,packs:_4f});
if(0){
_c(req,{paths:_4d,aliases:_4c,modules:_2f,legacyMode:_25,execQ:_30,defQ:_8c,waiting:_8d,packs:_4f,mapProgs:_50,pathsMapProg:_4e,listenerQueues:_43,computeMapProg:_5e,runMapProg:_94,compactPath:_96,getModuleInfo:_9c});
}
if(_17.define){
if(1){
_34(_44,_f("defineAlreadyDefined",0));
}
return;
}else{
_17.define=def;
_17.require=req;
if(0){
require=req;
}
}
if(0&&req.combo&&req.combo.plugins){
var _117=req.combo.plugins,_118;
for(_118 in _117){
_c(_c(_31(_118),_117[_118]),{isCombo:1,executed:"executed",load:1});
}
}
if(1){
_9(_63,function(c){
_64(c);
});
var _119=_55.deps||_1.deps||_2.deps,_11a=_55.callback||_1.callback||_2.callback;
req.boot=(_119||_11a)?[_119||[],_11a]:0;
}
if(!1){
!req.async&&req(["dojo"]);
req.boot&&req.apply(null,req.boot);
}
})(this.dojoConfig||this.djConfig||this.require||{},{async:0,hasCache:{"config-selectorEngine":"acme","config-tlmSiblingOfDojo":1,"dojo-built":1,"dojo-loader":1,dom:1,"host-browser":1},packages:[{location:".",name:"dojo"},{location:"../dijit",name:"dijit"},{location:"../dojox",name:"dojox"}]});
require({cache:{"dojo/main":function(){
define(["./_base/kernel","./has","require","./sniff","./_base/lang","./_base/array","./_base/config","./ready","./_base/declare","./_base/connect","./_base/Deferred","./_base/json","./_base/Color","./has!dojo-firebug?./_firebug/firebug","./_base/browser","./_base/loader"],function(_11b,has,_11c,_11d,lang,_11e,_11f,_120){
if(_11f.isDebug){
_11c(["./_firebug/firebug"]);
}
1||has.add("dojo-config-require",1);
if(1){
var deps=_11f.require;
if(deps){
deps=_11e.map(lang.isArray(deps)?deps:[deps],function(item){
return item.replace(/\./g,"/");
});
if(_11b.isAsync){
_11c(deps);
}else{
_120(1,function(){
_11c(deps);
});
}
}
}
return _11b;
});
},"dojo/_base/kernel":function(){
define(["../has","./config","require","module"],function(has,_121,_122,_123){
var i,p,_124={},_125={},dojo={config:_121,global:this,dijit:_124,dojox:_125};
var _126={dojo:["dojo",dojo],dijit:["dijit",_124],dojox:["dojox",_125]},_127=(_122.map&&_122.map[_123.id.match(/[^\/]+/)[0]]),item;
for(p in _127){
if(_126[p]){
_126[p][0]=_127[p];
}else{
_126[p]=[_127[p],{}];
}
}
for(p in _126){
item=_126[p];
item[1]._scopeName=item[0];
if(!_121.noGlobals){
this[item[0]]=item[1];
}
}
dojo.scopeMap=_126;
dojo.baseUrl=dojo.config.baseUrl=_122.baseUrl;
dojo.isAsync=!1||_122.async;
dojo.locale=_121.locale;
var rev="$Rev: 30169 $".match(/\d+/);
dojo.version={major:1,minor:8,patch:2,flag:"",revision:rev?+rev[0]:NaN,toString:function(){
var v=dojo.version;
return v.major+"."+v.minor+"."+v.patch+v.flag+" ("+v.revision+")";
}};
1||has.add("extend-dojo",1);
(Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}"))(dojo);
if(0){
dojo.exit=function(_128){
quit(_128);
};
}else{
dojo.exit=function(){
};
}
1||has.add("dojo-guarantee-console",1);
if(1){
typeof console!="undefined"||(console={});
var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];
var tn;
i=0;
while((tn=cn[i++])){
if(!console[tn]){
(function(){
var tcn=tn+"";
console[tcn]=("log" in console)?function(){
var a=Array.apply({},arguments);
a.unshift(tcn+":");
console["log"](a.join(" "));
}:function(){
};
console[tcn]._fake=true;
})();
}
}
}
has.add("dojo-debug-messages",!!_121.isDebug);
dojo.deprecated=dojo.experimental=function(){
};
if(has("dojo-debug-messages")){
dojo.deprecated=function(_129,_12a,_12b){
var _12c="DEPRECATED: "+_129;
if(_12a){
_12c+=" "+_12a;
}
if(_12b){
_12c+=" -- will be removed in version: "+_12b;
}
console.warn(_12c);
};
dojo.experimental=function(_12d,_12e){
var _12f="EXPERIMENTAL: "+_12d+" -- APIs subject to change without notice.";
if(_12e){
_12f+=" "+_12e;
}
console.warn(_12f);
};
}
1||has.add("dojo-modulePaths",1);
if(1){
if(_121.modulePaths){
dojo.deprecated("dojo.modulePaths","use paths configuration");
var _130={};
for(p in _121.modulePaths){
_130[p.replace(/\./g,"/")]=_121.modulePaths[p];
}
_122({paths:_130});
}
}
1||has.add("dojo-moduleUrl",1);
if(1){
dojo.moduleUrl=function(_131,url){
dojo.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");
var _132=null;
if(_131){
_132=_122.toUrl(_131.replace(/\./g,"/")+(url?("/"+url):"")+"/*.*").replace(/\/\*\.\*/,"")+(url?"":"/");
}
return _132;
};
}
dojo._hasResource={};
return dojo;
});
},"dojo/has":function(){
define(["require","module"],function(_133,_134){
var has=_133.has||function(){
};
if(!1){
var _135=typeof window!="undefined"&&typeof location!="undefined"&&typeof document!="undefined"&&window.location==location&&window.document==document,_136=this,doc=_135&&document,_137=doc&&doc.createElement("DiV"),_138=(_134.config&&_134.config())||{};
has=function(name){
return typeof _138[name]=="function"?(_138[name]=_138[name](_136,doc,_137)):_138[name];
};
has.cache=_138;
has.add=function(name,test,now,_139){
(typeof _138[name]=="undefined"||_139)&&(_138[name]=test);
return now&&has(name);
};
1||has.add("host-browser",_135);
1||has.add("dom",_135);
1||has.add("dojo-dom-ready-api",1);
1||has.add("dojo-sniff",1);
}
if(1){
has.add("dom-addeventlistener",!!document.addEventListener);
has.add("touch","ontouchstart" in document);
has.add("device-width",screen.availWidth||innerWidth);
var form=document.createElement("form");
has.add("dom-attributes-explicit",form.attributes.length==0);
has.add("dom-attributes-specified-flag",form.attributes.length>0&&form.attributes.length<40);
}
has.clearElement=function(_13a){
_13a.innerHTML="";
return _13a;
};
has.normalize=function(id,_13b){
var _13c=id.match(/[\?:]|[^:\?]*/g),i=0,get=function(skip){
var term=_13c[i++];
if(term==":"){
return 0;
}else{
if(_13c[i++]=="?"){
if(!skip&&has(term)){
return get();
}else{
get(true);
return get(skip);
}
}
return term||0;
}
};
id=get();
return id&&_13b(id);
};
has.load=function(id,_13d,_13e){
if(id){
_13d([id],_13e);
}else{
_13e();
}
};
return has;
});
},"dojo/_base/config":function(){
define(["../has","require"],function(has,_13f){
var _140={};
if(1){
var src=_13f.rawConfig,p;
for(p in src){
_140[p]=src[p];
}
}else{
var _141=function(_142,_143,_144){
for(p in _142){
p!="has"&&has.add(_143+p,_142[p],0,_144);
}
};
_140=1?_13f.rawConfig:this.dojoConfig||this.djConfig||{};
_141(_140,"config",1);
_141(_140.has,"",1);
}
return _140;
});
},"dojo/sniff":function(){
define("dojo/sniff",["./has"],function(has){
if(1){
var n=navigator,dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav);
has.add("air",dua.indexOf("AdobeAIR")>=0),has.add("khtml",dav.indexOf("Konqueror")>=0?tv:undefined);
has.add("webkit",parseFloat(dua.split("WebKit/")[1])||undefined);
has.add("chrome",parseFloat(dua.split("Chrome/")[1])||undefined);
has.add("safari",dav.indexOf("Safari")>=0&&!has("chrome")?parseFloat(dav.split("Version/")[1]):undefined);
has.add("mac",dav.indexOf("Macintosh")>=0);
has.add("quirks",document.compatMode=="BackCompat");
has.add("ios",/iPhone|iPod|iPad/.test(dua));
has.add("android",parseFloat(dua.split("Android ")[1])||undefined);
if(!has("webkit")){
if(dua.indexOf("Opera")>=0){
has.add("opera",tv>=9.8?parseFloat(dua.split("Version/")[1])||tv:tv);
}
if(dua.indexOf("Gecko")>=0&&!has("khtml")&&!has("webkit")){
has.add("mozilla",tv);
}
if(has("mozilla")){
has.add("ff",parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1])||undefined);
}
if(document.all&&!has("opera")){
var isIE=parseFloat(dav.split("MSIE ")[1])||undefined;
var mode=document.documentMode;
if(mode&&mode!=5&&Math.floor(isIE)!=mode){
isIE=mode;
}
has.add("ie",isIE);
}
has.add("wii",typeof opera!="undefined"&&opera.wiiremote);
}
}
return has;
});
},"dojo/_base/lang":function(){
define(["./kernel","../has","../sniff"],function(dojo,has){
has.add("bug-for-in-skips-shadowed",function(){
for(var i in {toString:1}){
return 0;
}
return 1;
});
var _145=has("bug-for-in-skips-shadowed")?"hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."):[],_146=_145.length,_147=function(_148,_149,_14a){
var p,i=0,_14b=dojo.global;
if(!_14a){
if(!_148.length){
return _14b;
}else{
p=_148[i++];
try{
_14a=dojo.scopeMap[p]&&dojo.scopeMap[p][1];
}
catch(e){
}
_14a=_14a||(p in _14b?_14b[p]:(_149?_14b[p]={}:undefined));
}
}
while(_14a&&(p=_148[i++])){
_14a=(p in _14a?_14a[p]:(_149?_14a[p]={}:undefined));
}
return _14a;
},opts=Object.prototype.toString,_14c=function(obj,_14d,_14e){
return (_14e||[]).concat(Array.prototype.slice.call(obj,_14d||0));
},_14f=/\{([^\}]+)\}/g;
var lang={_extraNames:_145,_mixin:function(dest,_150,_151){
var name,s,i,_152={};
for(name in _150){
s=_150[name];
if(!(name in dest)||(dest[name]!==s&&(!(name in _152)||_152[name]!==s))){
dest[name]=_151?_151(s):s;
}
}
if(has("bug-for-in-skips-shadowed")){
if(_150){
for(i=0;i<_146;++i){
name=_145[i];
s=_150[name];
if(!(name in dest)||(dest[name]!==s&&(!(name in _152)||_152[name]!==s))){
dest[name]=_151?_151(s):s;
}
}
}
}
return dest;
},mixin:function(dest,_153){
if(!dest){
dest={};
}
for(var i=1,l=arguments.length;i<l;i++){
lang._mixin(dest,arguments[i]);
}
return dest;
},setObject:function(name,_154,_155){
var _156=name.split("."),p=_156.pop(),obj=_147(_156,true,_155);
return obj&&p?(obj[p]=_154):undefined;
},getObject:function(name,_157,_158){
return _147(name.split("."),_157,_158);
},exists:function(name,obj){
return lang.getObject(name,false,obj)!==undefined;
},isString:function(it){
return (typeof it=="string"||it instanceof String);
},isArray:function(it){
return it&&(it instanceof Array||typeof it=="array");
},isFunction:function(it){
return opts.call(it)==="[object Function]";
},isObject:function(it){
return it!==undefined&&(it===null||typeof it=="object"||lang.isArray(it)||lang.isFunction(it));
},isArrayLike:function(it){
return it&&it!==undefined&&!lang.isString(it)&&!lang.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(lang.isArray(it)||isFinite(it.length));
},isAlien:function(it){
return it&&!lang.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));
},extend:function(ctor,_159){
for(var i=1,l=arguments.length;i<l;i++){
lang._mixin(ctor.prototype,arguments[i]);
}
return ctor;
},_hitchArgs:function(_15a,_15b){
var pre=lang._toArray(arguments,2);
var _15c=lang.isString(_15b);
return function(){
var args=lang._toArray(arguments);
var f=_15c?(_15a||dojo.global)[_15b]:_15b;
return f&&f.apply(_15a||this,pre.concat(args));
};
},hitch:function(_15d,_15e){
if(arguments.length>2){
return lang._hitchArgs.apply(dojo,arguments);
}
if(!_15e){
_15e=_15d;
_15d=null;
}
if(lang.isString(_15e)){
_15d=_15d||dojo.global;
if(!_15d[_15e]){
throw (["lang.hitch: scope[\"",_15e,"\"] is null (scope=\"",_15d,"\")"].join(""));
}
return function(){
return _15d[_15e].apply(_15d,arguments||[]);
};
}
return !_15d?_15e:function(){
return _15e.apply(_15d,arguments||[]);
};
},delegate:(function(){
function TMP(){
};
return function(obj,_15f){
TMP.prototype=obj;
var tmp=new TMP();
TMP.prototype=null;
if(_15f){
lang._mixin(tmp,_15f);
}
return tmp;
};
})(),_toArray:has("ie")?(function(){
function slow(obj,_160,_161){
var arr=_161||[];
for(var x=_160||0;x<obj.length;x++){
arr.push(obj[x]);
}
return arr;
};
return function(obj){
return ((obj.item)?slow:_14c).apply(this,arguments);
};
})():_14c,partial:function(_162){
var arr=[null];
return lang.hitch.apply(dojo,arr.concat(lang._toArray(arguments)));
},clone:function(src){
if(!src||typeof src!="object"||lang.isFunction(src)){
return src;
}
if(src.nodeType&&"cloneNode" in src){
return src.cloneNode(true);
}
if(src instanceof Date){
return new Date(src.getTime());
}
if(src instanceof RegExp){
return new RegExp(src);
}
var r,i,l;
if(lang.isArray(src)){
r=[];
for(i=0,l=src.length;i<l;++i){
if(i in src){
r.push(lang.clone(src[i]));
}
}
}else{
r=src.constructor?new src.constructor():{};
}
return lang._mixin(r,src,lang.clone);
},trim:String.prototype.trim?function(str){
return str.trim();
}:function(str){
return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
},replace:function(tmpl,map,_163){
return tmpl.replace(_163||_14f,lang.isFunction(map)?map:function(_164,k){
return lang.getObject(k,false,map);
});
}};
1&&lang.mixin(dojo,lang);
return lang;
});
},"dojo/_base/array":function(){
define(["./kernel","../has","./lang"],function(dojo,has,lang){
var _165={},u;
function _166(fn){
return _165[fn]=new Function("item","index","array",fn);
};
function _167(some){
var _168=!some;
return function(a,fn,o){
var i=0,l=a&&a.length||0,_169;
if(l&&typeof a=="string"){
a=a.split("");
}
if(typeof fn=="string"){
fn=_165[fn]||_166(fn);
}
if(o){
for(;i<l;++i){
_169=!fn.call(o,a[i],i,a);
if(some^_169){
return !_169;
}
}
}else{
for(;i<l;++i){
_169=!fn(a[i],i,a);
if(some^_169){
return !_169;
}
}
}
return _168;
};
};
function _16a(up){
var _16b=1,_16c=0,_16d=0;
if(!up){
_16b=_16c=_16d=-1;
}
return function(a,x,from,last){
if(last&&_16b>0){
return _16e.lastIndexOf(a,x,from);
}
var l=a&&a.length||0,end=up?l+_16d:_16c,i;
if(from===u){
i=up?_16c:l+_16d;
}else{
if(from<0){
i=l+from;
if(i<0){
i=_16c;
}
}else{
i=from>=l?l+_16d:from;
}
}
if(l&&typeof a=="string"){
a=a.split("");
}
for(;i!=end;i+=_16b){
if(a[i]==x){
return i;
}
}
return -1;
};
};
var _16e={every:_167(false),some:_167(true),indexOf:_16a(true),lastIndexOf:_16a(false),forEach:function(arr,_16f,_170){
var i=0,l=arr&&arr.length||0;
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _16f=="string"){
_16f=_165[_16f]||_166(_16f);
}
if(_170){
for(;i<l;++i){
_16f.call(_170,arr[i],i,arr);
}
}else{
for(;i<l;++i){
_16f(arr[i],i,arr);
}
}
},map:function(arr,_171,_172,Ctr){
var i=0,l=arr&&arr.length||0,out=new (Ctr||Array)(l);
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _171=="string"){
_171=_165[_171]||_166(_171);
}
if(_172){
for(;i<l;++i){
out[i]=_171.call(_172,arr[i],i,arr);
}
}else{
for(;i<l;++i){
out[i]=_171(arr[i],i,arr);
}
}
return out;
},filter:function(arr,_173,_174){
var i=0,l=arr&&arr.length||0,out=[],_175;
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _173=="string"){
_173=_165[_173]||_166(_173);
}
if(_174){
for(;i<l;++i){
_175=arr[i];
if(_173.call(_174,_175,i,arr)){
out.push(_175);
}
}
}else{
for(;i<l;++i){
_175=arr[i];
if(_173(_175,i,arr)){
out.push(_175);
}
}
}
return out;
},clearCache:function(){
_165={};
}};
1&&lang.mixin(dojo,_16e);
return _16e;
});
},"dojo/ready":function(){
define(["./_base/kernel","./has","require","./domReady","./_base/lang"],function(dojo,has,_176,_177,lang){
var _178=0,_179,_17a=[],_17b=0,_17c=function(){
_178=1;
dojo._postLoad=dojo.config.afterOnLoad=true;
if(_17a.length){
_179(_17d);
}
},_17d=function(){
if(_178&&!_17b&&_17a.length){
_17b=1;
var f=_17a.shift();
try{
f();
}
finally{
_17b=0;
}
_17b=0;
if(_17a.length){
_179(_17d);
}
}
};
_176.on("idle",_17d);
_179=function(){
if(_176.idle()){
_17d();
}
};
var _17e=dojo.ready=dojo.addOnLoad=function(_17f,_180,_181){
var _182=lang._toArray(arguments);
if(typeof _17f!="number"){
_181=_180;
_180=_17f;
_17f=1000;
}else{
_182.shift();
}
_181=_181?lang.hitch.apply(dojo,_182):function(){
_180();
};
_181.priority=_17f;
for(var i=0;i<_17a.length&&_17f>=_17a[i].priority;i++){
}
_17a.splice(i,0,_181);
_179();
};
1||has.add("dojo-config-addOnLoad",1);
if(1){
var dca=dojo.config.addOnLoad;
if(dca){
_17e[(lang.isArray(dca)?"apply":"call")](dojo,dca);
}
}
if(1&&dojo.config.parseOnLoad&&!dojo.isAsync){
_17e(99,function(){
if(!dojo.parser){
dojo.deprecated("Add explicit require(['dojo/parser']);","","2.0");
_176(["dojo/parser"]);
}
});
}
if(1){
_177(_17c);
}else{
_17c();
}
return _17e;
});
},"dojo/domReady":function(){
define(["./has"],function(has){
var _183=this,doc=document,_184={"loaded":1,"complete":1},_185=typeof doc.readyState!="string",_186=!!_184[doc.readyState];
if(_185){
doc.readyState="loading";
}
if(!_186){
var _187=[],_188=[],_189=function(evt){
evt=evt||_183.event;
if(_186||(evt.type=="readystatechange"&&!_184[doc.readyState])){
return;
}
_186=1;
if(_185){
doc.readyState="complete";
}
while(_187.length){
(_187.shift())(doc);
}
},on=function(node,_18a){
node.addEventListener(_18a,_189,false);
_187.push(function(){
node.removeEventListener(_18a,_189,false);
});
};
if(!has("dom-addeventlistener")){
on=function(node,_18b){
_18b="on"+_18b;
node.attachEvent(_18b,_189);
_187.push(function(){
node.detachEvent(_18b,_189);
});
};
var div=doc.createElement("div");
try{
if(div.doScroll&&_183.frameElement===null){
_188.push(function(){
try{
div.doScroll("left");
return 1;
}
catch(e){
}
});
}
}
catch(e){
}
}
on(doc,"DOMContentLoaded");
on(_183,"load");
if("onreadystatechange" in doc){
on(doc,"readystatechange");
}else{
if(!_185){
_188.push(function(){
return _184[doc.readyState];
});
}
}
if(_188.length){
var _18c=function(){
if(_186){
return;
}
var i=_188.length;
while(i--){
if(_188[i]()){
_189("poller");
return;
}
}
setTimeout(_18c,30);
};
_18c();
}
}
function _18d(_18e){
if(_186){
_18e(doc);
}else{
_187.push(_18e);
}
};
_18d.load=function(id,req,load){
_18d(load);
};
return _18d;
});
},"dojo/_base/declare":function(){
define(["./kernel","../has","./lang"],function(dojo,has,lang){
var mix=lang.mixin,op=Object.prototype,opts=op.toString,xtor=new Function,_18f=0,_190="constructor";
function err(msg,cls){
throw new Error("declare"+(cls?" "+cls:"")+": "+msg);
};
function _191(_192,_193){
var _194=[],_195=[{cls:0,refs:[]}],_196={},_197=1,l=_192.length,i=0,j,lin,base,top,_198,rec,name,refs;
for(;i<l;++i){
base=_192[i];
if(!base){
err("mixin #"+i+" is unknown. Did you use dojo.require to pull it in?",_193);
}else{
if(opts.call(base)!="[object Function]"){
err("mixin #"+i+" is not a callable constructor.",_193);
}
}
lin=base._meta?base._meta.bases:[base];
top=0;
for(j=lin.length-1;j>=0;--j){
_198=lin[j].prototype;
if(!_198.hasOwnProperty("declaredClass")){
_198.declaredClass="uniqName_"+(_18f++);
}
name=_198.declaredClass;
if(!_196.hasOwnProperty(name)){
_196[name]={count:0,refs:[],cls:lin[j]};
++_197;
}
rec=_196[name];
if(top&&top!==rec){
rec.refs.push(top);
++top.count;
}
top=rec;
}
++top.count;
_195[0].refs.push(top);
}
while(_195.length){
top=_195.pop();
_194.push(top.cls);
--_197;
while(refs=top.refs,refs.length==1){
top=refs[0];
if(!top||--top.count){
top=0;
break;
}
_194.push(top.cls);
--_197;
}
if(top){
for(i=0,l=refs.length;i<l;++i){
top=refs[i];
if(!--top.count){
_195.push(top);
}
}
}
}
if(_197){
err("can't build consistent linearization",_193);
}
base=_192[0];
_194[0]=base?base._meta&&base===_194[_194.length-base._meta.bases.length]?base._meta.bases.length:1:0;
return _194;
};
function _199(args,a,f){
var name,_19a,_19b,_19c,meta,base,_19d,opf,pos,_19e=this._inherited=this._inherited||{};
if(typeof args=="string"){
name=args;
args=a;
a=f;
}
f=0;
_19c=args.callee;
name=name||_19c.nom;
if(!name){
err("can't deduce a name to call inherited()",this.declaredClass);
}
meta=this.constructor._meta;
_19b=meta.bases;
pos=_19e.p;
if(name!=_190){
if(_19e.c!==_19c){
pos=0;
base=_19b[0];
meta=base._meta;
if(meta.hidden[name]!==_19c){
_19a=meta.chains;
if(_19a&&typeof _19a[name]=="string"){
err("calling chained method with inherited: "+name,this.declaredClass);
}
do{
meta=base._meta;
_19d=base.prototype;
if(meta&&(_19d[name]===_19c&&_19d.hasOwnProperty(name)||meta.hidden[name]===_19c)){
break;
}
}while(base=_19b[++pos]);
pos=base?pos:-1;
}
}
base=_19b[++pos];
if(base){
_19d=base.prototype;
if(base._meta&&_19d.hasOwnProperty(name)){
f=_19d[name];
}else{
opf=op[name];
do{
_19d=base.prototype;
f=_19d[name];
if(f&&(base._meta?_19d.hasOwnProperty(name):f!==opf)){
break;
}
}while(base=_19b[++pos]);
}
}
f=base&&f||op[name];
}else{
if(_19e.c!==_19c){
pos=0;
meta=_19b[0]._meta;
if(meta&&meta.ctor!==_19c){
_19a=meta.chains;
if(!_19a||_19a.constructor!=="manual"){
err("calling chained constructor with inherited",this.declaredClass);
}
while(base=_19b[++pos]){
meta=base._meta;
if(meta&&meta.ctor===_19c){
break;
}
}
pos=base?pos:-1;
}
}
while(base=_19b[++pos]){
meta=base._meta;
f=meta?meta.ctor:base;
if(f){
break;
}
}
f=base&&f;
}
_19e.c=f;
_19e.p=pos;
if(f){
return a===true?f:f.apply(this,a||args);
}
};
function _19f(name,args){
if(typeof name=="string"){
return this.__inherited(name,args,true);
}
return this.__inherited(name,true);
};
function _1a0(args,a1,a2){
var f=this.getInherited(args,a1);
if(f){
return f.apply(this,a2||a1||args);
}
};
var _1a1=dojo.config.isDebug?_1a0:_199;
function _1a2(cls){
var _1a3=this.constructor._meta.bases;
for(var i=0,l=_1a3.length;i<l;++i){
if(_1a3[i]===cls){
return true;
}
}
return this instanceof cls;
};
function _1a4(_1a5,_1a6){
for(var name in _1a6){
if(name!=_190&&_1a6.hasOwnProperty(name)){
_1a5[name]=_1a6[name];
}
}
if(has("bug-for-in-skips-shadowed")){
for(var _1a7=lang._extraNames,i=_1a7.length;i;){
name=_1a7[--i];
if(name!=_190&&_1a6.hasOwnProperty(name)){
_1a5[name]=_1a6[name];
}
}
}
};
function _1a8(_1a9,_1aa){
var name,t;
for(name in _1aa){
t=_1aa[name];
if((t!==op[name]||!(name in op))&&name!=_190){
if(opts.call(t)=="[object Function]"){
t.nom=name;
}
_1a9[name]=t;
}
}
if(has("bug-for-in-skips-shadowed")){
for(var _1ab=lang._extraNames,i=_1ab.length;i;){
name=_1ab[--i];
t=_1aa[name];
if((t!==op[name]||!(name in op))&&name!=_190){
if(opts.call(t)=="[object Function]"){
t.nom=name;
}
_1a9[name]=t;
}
}
}
return _1a9;
};
function _1ac(_1ad){
_1ae.safeMixin(this.prototype,_1ad);
return this;
};
function _1af(_1b0){
return _1ae([this].concat(_1b0));
};
function _1b1(_1b2,_1b3){
return function(){
var a=arguments,args=a,a0=a[0],f,i,m,l=_1b2.length,_1b4;
if(!(this instanceof a.callee)){
return _1b5(a);
}
if(_1b3&&(a0&&a0.preamble||this.preamble)){
_1b4=new Array(_1b2.length);
_1b4[0]=a;
for(i=0;;){
a0=a[0];
if(a0){
f=a0.preamble;
if(f){
a=f.apply(this,a)||a;
}
}
f=_1b2[i].prototype;
f=f.hasOwnProperty("preamble")&&f.preamble;
if(f){
a=f.apply(this,a)||a;
}
if(++i==l){
break;
}
_1b4[i]=a;
}
}
for(i=l-1;i>=0;--i){
f=_1b2[i];
m=f._meta;
f=m?m.ctor:f;
if(f){
f.apply(this,_1b4?_1b4[i]:a);
}
}
f=this.postscript;
if(f){
f.apply(this,args);
}
};
};
function _1b6(ctor,_1b7){
return function(){
var a=arguments,t=a,a0=a[0],f;
if(!(this instanceof a.callee)){
return _1b5(a);
}
if(_1b7){
if(a0){
f=a0.preamble;
if(f){
t=f.apply(this,t)||t;
}
}
f=this.preamble;
if(f){
f.apply(this,t);
}
}
if(ctor){
ctor.apply(this,a);
}
f=this.postscript;
if(f){
f.apply(this,a);
}
};
};
function _1b8(_1b9){
return function(){
var a=arguments,i=0,f,m;
if(!(this instanceof a.callee)){
return _1b5(a);
}
for(;f=_1b9[i];++i){
m=f._meta;
f=m?m.ctor:f;
if(f){
f.apply(this,a);
break;
}
}
f=this.postscript;
if(f){
f.apply(this,a);
}
};
};
function _1ba(name,_1bb,_1bc){
return function(){
var b,m,f,i=0,step=1;
if(_1bc){
i=_1bb.length-1;
step=-1;
}
for(;b=_1bb[i];i+=step){
m=b._meta;
f=(m?m.hidden:b.prototype)[name];
if(f){
f.apply(this,arguments);
}
}
};
};
function _1bd(ctor){
xtor.prototype=ctor.prototype;
var t=new xtor;
xtor.prototype=null;
return t;
};
function _1b5(args){
var ctor=args.callee,t=_1bd(ctor);
ctor.apply(t,args);
return t;
};
function _1ae(_1be,_1bf,_1c0){
if(typeof _1be!="string"){
_1c0=_1bf;
_1bf=_1be;
_1be="";
}
_1c0=_1c0||{};
var _1c1,i,t,ctor,name,_1c2,_1c3,_1c4=1,_1c5=_1bf;
if(opts.call(_1bf)=="[object Array]"){
_1c2=_191(_1bf,_1be);
t=_1c2[0];
_1c4=_1c2.length-t;
_1bf=_1c2[_1c4];
}else{
_1c2=[0];
if(_1bf){
if(opts.call(_1bf)=="[object Function]"){
t=_1bf._meta;
_1c2=_1c2.concat(t?t.bases:_1bf);
}else{
err("base class is not a callable constructor.",_1be);
}
}else{
if(_1bf!==null){
err("unknown base class. Did you use dojo.require to pull it in?",_1be);
}
}
}
if(_1bf){
for(i=_1c4-1;;--i){
_1c1=_1bd(_1bf);
if(!i){
break;
}
t=_1c2[i];
(t._meta?_1a4:mix)(_1c1,t.prototype);
ctor=new Function;
ctor.superclass=_1bf;
ctor.prototype=_1c1;
_1bf=_1c1.constructor=ctor;
}
}else{
_1c1={};
}
_1ae.safeMixin(_1c1,_1c0);
t=_1c0.constructor;
if(t!==op.constructor){
t.nom=_190;
_1c1.constructor=t;
}
for(i=_1c4-1;i;--i){
t=_1c2[i]._meta;
if(t&&t.chains){
_1c3=mix(_1c3||{},t.chains);
}
}
if(_1c1["-chains-"]){
_1c3=mix(_1c3||{},_1c1["-chains-"]);
}
t=!_1c3||!_1c3.hasOwnProperty(_190);
_1c2[0]=ctor=(_1c3&&_1c3.constructor==="manual")?_1b8(_1c2):(_1c2.length==1?_1b6(_1c0.constructor,t):_1b1(_1c2,t));
ctor._meta={bases:_1c2,hidden:_1c0,chains:_1c3,parents:_1c5,ctor:_1c0.constructor};
ctor.superclass=_1bf&&_1bf.prototype;
ctor.extend=_1ac;
ctor.createSubclass=_1af;
ctor.prototype=_1c1;
_1c1.constructor=ctor;
_1c1.getInherited=_19f;
_1c1.isInstanceOf=_1a2;
_1c1.inherited=_1a1;
_1c1.__inherited=_199;
if(_1be){
_1c1.declaredClass=_1be;
lang.setObject(_1be,ctor);
}
if(_1c3){
for(name in _1c3){
if(_1c1[name]&&typeof _1c3[name]=="string"&&name!=_190){
t=_1c1[name]=_1ba(name,_1c2,_1c3[name]==="after");
t.nom=name;
}
}
}
return ctor;
};
dojo.safeMixin=_1ae.safeMixin=_1a8;
dojo.declare=_1ae;
return _1ae;
});
},"dojo/_base/connect":function(){
define(["./kernel","../on","../topic","../aspect","./event","../mouse","./sniff","./lang","../keys"],function(dojo,on,hub,_1c6,_1c7,_1c8,has,lang){
has.add("events-keypress-typed",function(){
var _1c9={charCode:0};
try{
_1c9=document.createEvent("KeyboardEvent");
(_1c9.initKeyboardEvent||_1c9.initKeyEvent).call(_1c9,"keypress",true,true,null,false,false,false,false,9,3);
}
catch(e){
}
return _1c9.charCode==0&&!has("opera");
});
function _1ca(obj,_1cb,_1cc,_1cd,_1ce){
_1cd=lang.hitch(_1cc,_1cd);
if(!obj||!(obj.addEventListener||obj.attachEvent)){
return _1c6.after(obj||dojo.global,_1cb,_1cd,true);
}
if(typeof _1cb=="string"&&_1cb.substring(0,2)=="on"){
_1cb=_1cb.substring(2);
}
if(!obj){
obj=dojo.global;
}
if(!_1ce){
switch(_1cb){
case "keypress":
_1cb=_1cf;
break;
case "mouseenter":
_1cb=_1c8.enter;
break;
case "mouseleave":
_1cb=_1c8.leave;
break;
}
}
return on(obj,_1cb,_1cd,_1ce);
};
var _1d0={106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39,229:113};
var _1d1=has("mac")?"metaKey":"ctrlKey";
var _1d2=function(evt,_1d3){
var faux=lang.mixin({},evt,_1d3);
_1d4(faux);
faux.preventDefault=function(){
evt.preventDefault();
};
faux.stopPropagation=function(){
evt.stopPropagation();
};
return faux;
};
function _1d4(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
};
var _1cf;
if(has("events-keypress-typed")){
var _1d5=function(e,code){
try{
return (e.keyCode=code);
}
catch(e){
return 0;
}
};
_1cf=function(_1d6,_1d7){
var _1d8=on(_1d6,"keydown",function(evt){
var k=evt.keyCode;
var _1d9=(k!=13)&&k!=32&&(k!=27||!has("ie"))&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222)&&k!=229;
if(_1d9||evt.ctrlKey){
var c=_1d9?0:k;
if(evt.ctrlKey){
if(k==3||k==13){
return _1d7.call(evt.currentTarget,evt);
}else{
if(c>95&&c<106){
c-=48;
}else{
if((!evt.shiftKey)&&(c>=65&&c<=90)){
c+=32;
}else{
c=_1d0[c]||c;
}
}
}
}
var faux=_1d2(evt,{type:"keypress",faux:true,charCode:c});
_1d7.call(evt.currentTarget,faux);
if(has("ie")){
_1d5(evt,faux.keyCode);
}
}
});
var _1da=on(_1d6,"keypress",function(evt){
var c=evt.charCode;
c=c>=32?c:0;
evt=_1d2(evt,{charCode:c,faux:true});
return _1d7.call(this,evt);
});
return {remove:function(){
_1d8.remove();
_1da.remove();
}};
};
}else{
if(has("opera")){
_1cf=function(_1db,_1dc){
return on(_1db,"keypress",function(evt){
var c=evt.which;
if(c==3){
c=99;
}
c=c<32&&!evt.shiftKey?0:c;
if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){
c+=32;
}
return _1dc.call(this,_1d2(evt,{charCode:c}));
});
};
}else{
_1cf=function(_1dd,_1de){
return on(_1dd,"keypress",function(evt){
_1d4(evt);
return _1de.call(this,evt);
});
};
}
}
var _1df={_keypress:_1cf,connect:function(obj,_1e0,_1e1,_1e2,_1e3){
var a=arguments,args=[],i=0;
args.push(typeof a[0]=="string"?null:a[i++],a[i++]);
var a1=a[i+1];
args.push(typeof a1=="string"||typeof a1=="function"?a[i++]:null,a[i++]);
for(var l=a.length;i<l;i++){
args.push(a[i]);
}
return _1ca.apply(this,args);
},disconnect:function(_1e4){
if(_1e4){
_1e4.remove();
}
},subscribe:function(_1e5,_1e6,_1e7){
return hub.subscribe(_1e5,lang.hitch(_1e6,_1e7));
},publish:function(_1e8,args){
return hub.publish.apply(hub,[_1e8].concat(args));
},connectPublisher:function(_1e9,obj,_1ea){
var pf=function(){
_1df.publish(_1e9,arguments);
};
return _1ea?_1df.connect(obj,_1ea,pf):_1df.connect(obj,pf);
},isCopyKey:function(e){
return e[_1d1];
}};
_1df.unsubscribe=_1df.disconnect;
1&&lang.mixin(dojo,_1df);
return _1df;
});
},"dojo/on":function(){
define("dojo/on",["./has!dom-addeventlistener?:./aspect","./_base/kernel","./has"],function(_1eb,dojo,has){
"use strict";
if(1){
var _1ec=window.ScriptEngineMajorVersion;
has.add("jscript",_1ec&&(_1ec()+ScriptEngineMinorVersion()/10));
has.add("event-orientationchange",has("touch")&&!has("android"));
has.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation);
}
var on=function(_1ed,type,_1ee,_1ef){
if(typeof _1ed.on=="function"&&typeof type!="function"){
return _1ed.on(type,_1ee);
}
return on.parse(_1ed,type,_1ee,_1f0,_1ef,this);
};
on.pausable=function(_1f1,type,_1f2,_1f3){
var _1f4;
var _1f5=on(_1f1,type,function(){
if(!_1f4){
return _1f2.apply(this,arguments);
}
},_1f3);
_1f5.pause=function(){
_1f4=true;
};
_1f5.resume=function(){
_1f4=false;
};
return _1f5;
};
on.once=function(_1f6,type,_1f7,_1f8){
var _1f9=on(_1f6,type,function(){
_1f9.remove();
return _1f7.apply(this,arguments);
});
return _1f9;
};
on.parse=function(_1fa,type,_1fb,_1fc,_1fd,_1fe){
if(type.call){
return type.call(_1fe,_1fa,_1fb);
}
if(type.indexOf(",")>-1){
var _1ff=type.split(/\s*,\s*/);
var _200=[];
var i=0;
var _201;
while(_201=_1ff[i++]){
_200.push(_1fc(_1fa,_201,_1fb,_1fd,_1fe));
}
_200.remove=function(){
for(var i=0;i<_200.length;i++){
_200[i].remove();
}
};
return _200;
}
return _1fc(_1fa,type,_1fb,_1fd,_1fe);
};
var _202=/^touch/;
function _1f0(_203,type,_204,_205,_206){
var _207=type.match(/(.*):(.*)/);
if(_207){
type=_207[2];
_207=_207[1];
return on.selector(_207,type).call(_206,_203,_204);
}
if(has("touch")){
if(_202.test(type)){
_204=_208(_204);
}
if(!has("event-orientationchange")&&(type=="orientationchange")){
type="resize";
_203=window;
_204=_208(_204);
}
}
if(_209){
_204=_209(_204);
}
if(_203.addEventListener){
var _20a=type in _20b,_20c=_20a?_20b[type]:type;
_203.addEventListener(_20c,_204,_20a);
return {remove:function(){
_203.removeEventListener(_20c,_204,_20a);
}};
}
type="on"+type;
if(_20d&&_203.attachEvent){
return _20d(_203,type,_204);
}
throw new Error("Target must be an event emitter");
};
on.selector=function(_20e,_20f,_210){
return function(_211,_212){
var _213=typeof _20e=="function"?{matches:_20e}:this,_214=_20f.bubble;
function _215(_216){
_213=_213&&_213.matches?_213:dojo.query;
while(!_213.matches(_216,_20e,_211)){
if(_216==_211||_210===false||!(_216=_216.parentNode)||_216.nodeType!=1){
return;
}
}
return _216;
};
if(_214){
return on(_211,_214(_215),_212);
}
return on(_211,_20f,function(_217){
var _218=_215(_217.target);
return _218&&_212.call(_218,_217);
});
};
};
function _219(){
this.cancelable=false;
};
function _21a(){
this.bubbles=false;
};
var _21b=[].slice,_21c=on.emit=function(_21d,type,_21e){
var args=_21b.call(arguments,2);
var _21f="on"+type;
if("parentNode" in _21d){
var _220=args[0]={};
for(var i in _21e){
_220[i]=_21e[i];
}
_220.preventDefault=_219;
_220.stopPropagation=_21a;
_220.target=_21d;
_220.type=type;
_21e=_220;
}
do{
_21d[_21f]&&_21d[_21f].apply(_21d,args);
}while(_21e&&_21e.bubbles&&(_21d=_21d.parentNode));
return _21e&&_21e.cancelable&&_21e;
};
var _20b={};
if(!has("event-stopimmediatepropagation")){
var _221=function(){
this.immediatelyStopped=true;
this.modified=true;
};
var _209=function(_222){
return function(_223){
if(!_223.immediatelyStopped){
_223.stopImmediatePropagation=_221;
return _222.apply(this,arguments);
}
};
};
}
if(has("dom-addeventlistener")){
_20b={focusin:"focus",focusout:"blur"};
on.emit=function(_224,type,_225){
if(_224.dispatchEvent&&document.createEvent){
var _226=_224.ownerDocument.createEvent("HTMLEvents");
_226.initEvent(type,!!_225.bubbles,!!_225.cancelable);
for(var i in _225){
var _227=_225[i];
if(!(i in _226)){
_226[i]=_225[i];
}
}
return _224.dispatchEvent(_226)&&_226;
}
return _21c.apply(on,arguments);
};
}else{
on._fixEvent=function(evt,_228){
if(!evt){
var w=_228&&(_228.ownerDocument||_228.document||_228).parentWindow||window;
evt=w.event;
}
if(!evt){
return evt;
}
if(_229&&evt.type==_229.type){
evt=_229;
}
if(!evt.target){
evt.target=evt.srcElement;
evt.currentTarget=(_228||evt.srcElement);
if(evt.type=="mouseover"){
evt.relatedTarget=evt.fromElement;
}
if(evt.type=="mouseout"){
evt.relatedTarget=evt.toElement;
}
if(!evt.stopPropagation){
evt.stopPropagation=_22a;
evt.preventDefault=_22b;
}
switch(evt.type){
case "keypress":
var c=("charCode" in evt?evt.charCode:evt.keyCode);
if(c==10){
c=0;
evt.keyCode=13;
}else{
if(c==13||c==27){
c=0;
}else{
if(c==3){
c=99;
}
}
}
evt.charCode=c;
_22c(evt);
break;
}
}
return evt;
};
var _229,_22d=function(_22e){
this.handle=_22e;
};
_22d.prototype.remove=function(){
delete _dojoIEListeners_[this.handle];
};
var _22f=function(_230){
return function(evt){
evt=on._fixEvent(evt,this);
var _231=_230.call(this,evt);
if(evt.modified){
if(!_229){
setTimeout(function(){
_229=null;
});
}
_229=evt;
}
return _231;
};
};
var _20d=function(_232,type,_233){
_233=_22f(_233);
if(((_232.ownerDocument?_232.ownerDocument.parentWindow:_232.parentWindow||_232.window||window)!=top||has("jscript")<5.8)&&!has("config-_allow_leaks")){
if(typeof _dojoIEListeners_=="undefined"){
_dojoIEListeners_=[];
}
var _234=_232[type];
if(!_234||!_234.listeners){
var _235=_234;
_234=Function("event","var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
_234.listeners=[];
_232[type]=_234;
_234.global=this;
if(_235){
_234.listeners.push(_dojoIEListeners_.push(_235)-1);
}
}
var _236;
_234.listeners.push(_236=(_234.global._dojoIEListeners_.push(_233)-1));
return new _22d(_236);
}
return _1eb.after(_232,type,_233,true);
};
var _22c=function(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
};
var _22a=function(){
this.cancelBubble=true;
};
var _22b=on._preventDefault=function(){
this.bubbledKeyCode=this.keyCode;
if(this.ctrlKey){
try{
this.keyCode=0;
}
catch(e){
}
}
this.defaultPrevented=true;
this.returnValue=false;
};
}
if(has("touch")){
var _237=function(){
};
var _238=window.orientation;
var _208=function(_239){
return function(_23a){
var _23b=_23a.corrected;
if(!_23b){
var type=_23a.type;
try{
delete _23a.type;
}
catch(e){
}
if(_23a.type){
_237.prototype=_23a;
var _23b=new _237;
_23b.preventDefault=function(){
_23a.preventDefault();
};
_23b.stopPropagation=function(){
_23a.stopPropagation();
};
}else{
_23b=_23a;
_23b.type=type;
}
_23a.corrected=_23b;
if(type=="resize"){
if(_238==window.orientation){
return null;
}
_238=window.orientation;
_23b.type="orientationchange";
return _239.call(this,_23b);
}
if(!("rotation" in _23b)){
_23b.rotation=0;
_23b.scale=1;
}
var _23c=_23b.changedTouches[0];
for(var i in _23c){
delete _23b[i];
_23b[i]=_23c[i];
}
}
return _239.call(this,_23b);
};
};
}
return on;
});
},"dojo/topic":function(){
define(["./Evented"],function(_23d){
var hub=new _23d;
return {publish:function(_23e,_23f){
return hub.emit.apply(hub,arguments);
},subscribe:function(_240,_241){
return hub.on.apply(hub,arguments);
}};
});
},"dojo/Evented":function(){
define("dojo/Evented",["./aspect","./on"],function(_242,on){
"use strict";
var _243=_242.after;
function _244(){
};
_244.prototype={on:function(type,_245){
return on.parse(this,type,_245,function(_246,type){
return _243(_246,"on"+type,_245,true);
});
},emit:function(type,_247){
var args=[this];
args.push.apply(args,arguments);
return on.emit.apply(on,args);
}};
return _244;
});
},"dojo/aspect":function(){
define([],function(){
"use strict";
var _248,_249=0;
function _24a(_24b,type,_24c,_24d){
var _24e=_24b[type];
var _24f=type=="around";
var _250;
if(_24f){
var _251=_24c(function(){
return _24e.advice(this,arguments);
});
_250={remove:function(){
_250.cancelled=true;
},advice:function(_252,args){
return _250.cancelled?_24e.advice(_252,args):_251.apply(_252,args);
}};
}else{
_250={remove:function(){
var _253=_250.previous;
var next=_250.next;
if(!next&&!_253){
delete _24b[type];
}else{
if(_253){
_253.next=next;
}else{
_24b[type]=next;
}
if(next){
next.previous=_253;
}
}
},id:_249++,advice:_24c,receiveArguments:_24d};
}
if(_24e&&!_24f){
if(type=="after"){
while(_24e.next&&(_24e=_24e.next)){
}
_24e.next=_250;
_250.previous=_24e;
}else{
if(type=="before"){
_24b[type]=_250;
_250.next=_24e;
_24e.previous=_250;
}
}
}else{
_24b[type]=_250;
}
return _250;
};
function _254(type){
return function(_255,_256,_257,_258){
var _259=_255[_256],_25a;
if(!_259||_259.target!=_255){
_255[_256]=_25a=function(){
var _25b=_249;
var args=arguments;
var _25c=_25a.before;
while(_25c){
args=_25c.advice.apply(this,args)||args;
_25c=_25c.next;
}
if(_25a.around){
var _25d=_25a.around.advice(this,args);
}
var _25e=_25a.after;
while(_25e&&_25e.id<_25b){
if(_25e.receiveArguments){
var _25f=_25e.advice.apply(this,args);
_25d=_25f===_248?_25d:_25f;
}else{
_25d=_25e.advice.call(this,_25d,args);
}
_25e=_25e.next;
}
return _25d;
};
if(_259){
_25a.around={advice:function(_260,args){
return _259.apply(_260,args);
}};
}
_25a.target=_255;
}
var _261=_24a((_25a||_259),type,_257,_258);
_257=null;
return _261;
};
};
var _262=_254("after");
var _263=_254("before");
var _264=_254("around");
return {before:_263,around:_264,after:_262};
});
},"dojo/_base/event":function(){
define(["./kernel","../on","../has","../dom-geometry"],function(dojo,on,has,dom){
if(on._fixEvent){
var _265=on._fixEvent;
on._fixEvent=function(evt,se){
evt=_265(evt,se);
if(evt){
dom.normalizeEvent(evt);
}
return evt;
};
}
var ret={fix:function(evt,_266){
if(on._fixEvent){
return on._fixEvent(evt,_266);
}
return evt;
},stop:function(evt){
if(has("dom-addeventlistener")||(evt&&evt.preventDefault)){
evt.preventDefault();
evt.stopPropagation();
}else{
evt=evt||window.event;
evt.cancelBubble=true;
on._preventDefault.call(evt);
}
}};
if(1){
dojo.fixEvent=ret.fix;
dojo.stopEvent=ret.stop;
}
return ret;
});
},"dojo/dom-geometry":function(){
define("dojo/dom-geometry",["./sniff","./_base/window","./dom","./dom-style"],function(has,win,dom,_267){
var geom={};
geom.boxModel="content-box";
if(has("ie")){
geom.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";
}
geom.getPadExtents=function getPadExtents(node,_268){
node=dom.byId(node);
var s=_268||_267.getComputedStyle(node),px=_267.toPixelValue,l=px(node,s.paddingLeft),t=px(node,s.paddingTop),r=px(node,s.paddingRight),b=px(node,s.paddingBottom);
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
var none="none";
geom.getBorderExtents=function getBorderExtents(node,_269){
node=dom.byId(node);
var px=_267.toPixelValue,s=_269||_267.getComputedStyle(node),l=s.borderLeftStyle!=none?px(node,s.borderLeftWidth):0,t=s.borderTopStyle!=none?px(node,s.borderTopWidth):0,r=s.borderRightStyle!=none?px(node,s.borderRightWidth):0,b=s.borderBottomStyle!=none?px(node,s.borderBottomWidth):0;
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
geom.getPadBorderExtents=function getPadBorderExtents(node,_26a){
node=dom.byId(node);
var s=_26a||_267.getComputedStyle(node),p=geom.getPadExtents(node,s),b=geom.getBorderExtents(node,s);
return {l:p.l+b.l,t:p.t+b.t,r:p.r+b.r,b:p.b+b.b,w:p.w+b.w,h:p.h+b.h};
};
geom.getMarginExtents=function getMarginExtents(node,_26b){
node=dom.byId(node);
var s=_26b||_267.getComputedStyle(node),px=_267.toPixelValue,l=px(node,s.marginLeft),t=px(node,s.marginTop),r=px(node,s.marginRight),b=px(node,s.marginBottom);
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
geom.getMarginBox=function getMarginBox(node,_26c){
node=dom.byId(node);
var s=_26c||_267.getComputedStyle(node),me=geom.getMarginExtents(node,s),l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode,px=_267.toPixelValue,pcs;
if(has("mozilla")){
var sl=parseFloat(s.left),st=parseFloat(s.top);
if(!isNaN(sl)&&!isNaN(st)){
l=sl;
t=st;
}else{
if(p&&p.style){
pcs=_267.getComputedStyle(p);
if(pcs.overflow!="visible"){
l+=pcs.borderLeftStyle!=none?px(node,pcs.borderLeftWidth):0;
t+=pcs.borderTopStyle!=none?px(node,pcs.borderTopWidth):0;
}
}
}
}else{
if(has("opera")||(has("ie")==8&&!has("quirks"))){
if(p){
pcs=_267.getComputedStyle(p);
l-=pcs.borderLeftStyle!=none?px(node,pcs.borderLeftWidth):0;
t-=pcs.borderTopStyle!=none?px(node,pcs.borderTopWidth):0;
}
}
}
return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};
};
geom.getContentBox=function getContentBox(node,_26d){
node=dom.byId(node);
var s=_26d||_267.getComputedStyle(node),w=node.clientWidth,h,pe=geom.getPadExtents(node,s),be=geom.getBorderExtents(node,s);
if(!w){
w=node.offsetWidth;
h=node.offsetHeight;
}else{
h=node.clientHeight;
be.w=be.h=0;
}
if(has("opera")){
pe.l+=be.l;
pe.t+=be.t;
}
return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};
};
function _26e(node,l,t,w,h,u){
u=u||"px";
var s=node.style;
if(!isNaN(l)){
s.left=l+u;
}
if(!isNaN(t)){
s.top=t+u;
}
if(w>=0){
s.width=w+u;
}
if(h>=0){
s.height=h+u;
}
};
function _26f(node){
return node.tagName.toLowerCase()=="button"||node.tagName.toLowerCase()=="input"&&(node.getAttribute("type")||"").toLowerCase()=="button";
};
function _270(node){
return geom.boxModel=="border-box"||node.tagName.toLowerCase()=="table"||_26f(node);
};
geom.setContentSize=function setContentSize(node,box,_271){
node=dom.byId(node);
var w=box.w,h=box.h;
if(_270(node)){
var pb=geom.getPadBorderExtents(node,_271);
if(w>=0){
w+=pb.w;
}
if(h>=0){
h+=pb.h;
}
}
_26e(node,NaN,NaN,w,h);
};
var _272={l:0,t:0,w:0,h:0};
geom.setMarginBox=function setMarginBox(node,box,_273){
node=dom.byId(node);
var s=_273||_267.getComputedStyle(node),w=box.w,h=box.h,pb=_270(node)?_272:geom.getPadBorderExtents(node,s),mb=geom.getMarginExtents(node,s);
if(has("webkit")){
if(_26f(node)){
var ns=node.style;
if(w>=0&&!ns.width){
ns.width="4px";
}
if(h>=0&&!ns.height){
ns.height="4px";
}
}
}
if(w>=0){
w=Math.max(w-pb.w-mb.w,0);
}
if(h>=0){
h=Math.max(h-pb.h-mb.h,0);
}
_26e(node,box.l,box.t,w,h);
};
geom.isBodyLtr=function isBodyLtr(doc){
doc=doc||win.doc;
return (win.body(doc).dir||doc.documentElement.dir||"ltr").toLowerCase()=="ltr";
};
geom.docScroll=function docScroll(doc){
doc=doc||win.doc;
var node=win.doc.parentWindow||win.doc.defaultView;
return "pageXOffset" in node?{x:node.pageXOffset,y:node.pageYOffset}:(node=has("quirks")?win.body(doc):doc.documentElement)&&{x:geom.fixIeBiDiScrollLeft(node.scrollLeft||0,doc),y:node.scrollTop||0};
};
if(has("ie")){
geom.getIeDocumentElementOffset=function getIeDocumentElementOffset(doc){
doc=doc||win.doc;
var de=doc.documentElement;
if(has("ie")<8){
var r=de.getBoundingClientRect(),l=r.left,t=r.top;
if(has("ie")<7){
l+=de.clientLeft;
t+=de.clientTop;
}
return {x:l<0?0:l,y:t<0?0:t};
}else{
return {x:0,y:0};
}
};
}
geom.fixIeBiDiScrollLeft=function fixIeBiDiScrollLeft(_274,doc){
doc=doc||win.doc;
var ie=has("ie");
if(ie&&!geom.isBodyLtr(doc)){
var qk=has("quirks"),de=qk?win.body(doc):doc.documentElement,pwin=win.global;
if(ie==6&&!qk&&pwin.frameElement&&de.scrollHeight>de.clientHeight){
_274+=de.clientLeft;
}
return (ie<8||qk)?(_274+de.clientWidth-de.scrollWidth):-_274;
}
return _274;
};
geom.position=function(node,_275){
node=dom.byId(node);
var db=win.body(node.ownerDocument),ret=node.getBoundingClientRect();
ret={x:ret.left,y:ret.top,w:ret.right-ret.left,h:ret.bottom-ret.top};
if(has("ie")<9){
var _276=geom.getIeDocumentElementOffset(node.ownerDocument);
ret.x-=_276.x+(has("quirks")?db.clientLeft+db.offsetLeft:0);
ret.y-=_276.y+(has("quirks")?db.clientTop+db.offsetTop:0);
}
if(_275){
var _277=geom.docScroll(node.ownerDocument);
ret.x+=_277.x;
ret.y+=_277.y;
}
return ret;
};
geom.getMarginSize=function getMarginSize(node,_278){
node=dom.byId(node);
var me=geom.getMarginExtents(node,_278||_267.getComputedStyle(node));
var size=node.getBoundingClientRect();
return {w:(size.right-size.left)+me.w,h:(size.bottom-size.top)+me.h};
};
geom.normalizeEvent=function(_279){
if(!("layerX" in _279)){
_279.layerX=_279.offsetX;
_279.layerY=_279.offsetY;
}
if(!has("dom-addeventlistener")){
var se=_279.target;
var doc=(se&&se.ownerDocument)||document;
var _27a=has("quirks")?doc.body:doc.documentElement;
var _27b=geom.getIeDocumentElementOffset(doc);
_279.pageX=_279.clientX+geom.fixIeBiDiScrollLeft(_27a.scrollLeft||0,doc)-_27b.x;
_279.pageY=_279.clientY+(_27a.scrollTop||0)-_27b.y;
}
};
return geom;
});
},"dojo/_base/window":function(){
define(["./kernel","./lang","../sniff"],function(dojo,lang,has){
var ret={global:dojo.global,doc:this["document"]||null,body:function(doc){
doc=doc||dojo.doc;
return doc.body||doc.getElementsByTagName("body")[0];
},setContext:function(_27c,_27d){
dojo.global=ret.global=_27c;
dojo.doc=ret.doc=_27d;
},withGlobal:function(_27e,_27f,_280,_281){
var _282=dojo.global;
try{
dojo.global=ret.global=_27e;
return ret.withDoc.call(null,_27e.document,_27f,_280,_281);
}
finally{
dojo.global=ret.global=_282;
}
},withDoc:function(_283,_284,_285,_286){
var _287=ret.doc,oldQ=has("quirks"),_288=has("ie"),isIE,mode,pwin;
try{
dojo.doc=ret.doc=_283;
dojo.isQuirks=has.add("quirks",dojo.doc.compatMode=="BackCompat",true,true);
if(has("ie")){
if((pwin=_283.parentWindow)&&pwin.navigator){
isIE=parseFloat(pwin.navigator.appVersion.split("MSIE ")[1])||undefined;
mode=_283.documentMode;
if(mode&&mode!=5&&Math.floor(isIE)!=mode){
isIE=mode;
}
dojo.isIE=has.add("ie",isIE,true,true);
}
}
if(_285&&typeof _284=="string"){
_284=_285[_284];
}
return _284.apply(_285,_286||[]);
}
finally{
dojo.doc=ret.doc=_287;
dojo.isQuirks=has.add("quirks",oldQ,true,true);
dojo.isIE=has.add("ie",_288,true,true);
}
}};
1&&lang.mixin(dojo,ret);
return ret;
});
},"dojo/dom":function(){
define(["./sniff","./_base/window"],function(has,win){
if(has("ie")<=7){
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}
}
var dom={};
if(has("ie")){
dom.byId=function(id,doc){
if(typeof id!="string"){
return id;
}
var _289=doc||win.doc,te=id&&_289.getElementById(id);
if(te&&(te.attributes.id.value==id||te.id==id)){
return te;
}else{
var eles=_289.all[id];
if(!eles||eles.nodeName){
eles=[eles];
}
var i=0;
while((te=eles[i++])){
if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){
return te;
}
}
}
};
}else{
dom.byId=function(id,doc){
return ((typeof id=="string")?(doc||win.doc).getElementById(id):id)||null;
};
}
dom.isDescendant=function(node,_28a){
try{
node=dom.byId(node);
_28a=dom.byId(_28a);
while(node){
if(node==_28a){
return true;
}
node=node.parentNode;
}
}
catch(e){
}
return false;
};
has.add("css-user-select",function(_28b,doc,_28c){
if(!_28c){
return false;
}
var _28d=_28c.style;
var _28e=["Khtml","O","ms","Moz","Webkit"],i=_28e.length,name="userSelect",_28f;
do{
if(typeof _28d[name]!=="undefined"){
return name;
}
}while(i--&&(name=_28e[i]+"UserSelect"));
return false;
});
var _290=has("css-user-select");
dom.setSelectable=_290?function(node,_291){
dom.byId(node).style[_290]=_291?"":"none";
}:function(node,_292){
node=dom.byId(node);
var _293=node.getElementsByTagName("*"),i=_293.length;
if(_292){
node.removeAttribute("unselectable");
while(i--){
_293[i].removeAttribute("unselectable");
}
}else{
node.setAttribute("unselectable","on");
while(i--){
_293[i].setAttribute("unselectable","on");
}
}
};
return dom;
});
},"dojo/dom-style":function(){
define(["./sniff","./dom"],function(has,dom){
var _294,_295={};
if(has("webkit")){
_294=function(node){
var s;
if(node.nodeType==1){
var dv=node.ownerDocument.defaultView;
s=dv.getComputedStyle(node,null);
if(!s&&node.style){
node.style.display="";
s=dv.getComputedStyle(node,null);
}
}
return s||{};
};
}else{
if(has("ie")&&(has("ie")<9||has("quirks"))){
_294=function(node){
return node.nodeType==1&&node.currentStyle?node.currentStyle:{};
};
}else{
_294=function(node){
return node.nodeType==1?node.ownerDocument.defaultView.getComputedStyle(node,null):{};
};
}
}
_295.getComputedStyle=_294;
var _296;
if(!has("ie")){
_296=function(_297,_298){
return parseFloat(_298)||0;
};
}else{
_296=function(_299,_29a){
if(!_29a){
return 0;
}
if(_29a=="medium"){
return 4;
}
if(_29a.slice&&_29a.slice(-2)=="px"){
return parseFloat(_29a);
}
var s=_299.style,rs=_299.runtimeStyle,cs=_299.currentStyle,_29b=s.left,_29c=rs.left;
rs.left=cs.left;
try{
s.left=_29a;
_29a=s.pixelLeft;
}
catch(e){
_29a=0;
}
s.left=_29b;
rs.left=_29c;
return _29a;
};
}
_295.toPixelValue=_296;
var astr="DXImageTransform.Microsoft.Alpha";
var af=function(n,f){
try{
return n.filters.item(astr);
}
catch(e){
return f?{}:null;
}
};
var _29d=has("ie")<9||(has("ie")<10&&has("quirks"))?function(node){
try{
return af(node).Opacity/100;
}
catch(e){
return 1;
}
}:function(node){
return _294(node).opacity;
};
var _29e=has("ie")<9||(has("ie")<10&&has("quirks"))?function(node,_29f){
var ov=_29f*100,_2a0=_29f==1;
node.style.zoom=_2a0?"":1;
if(!af(node)){
if(_2a0){
return _29f;
}
node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";
}else{
af(node,1).Opacity=ov;
}
af(node,1).Enabled=!_2a0;
if(node.tagName.toLowerCase()=="tr"){
for(var td=node.firstChild;td;td=td.nextSibling){
if(td.tagName.toLowerCase()=="td"){
_29e(td,_29f);
}
}
}
return _29f;
}:function(node,_2a1){
return node.style.opacity=_2a1;
};
var _2a2={left:true,top:true};
var _2a3=/margin|padding|width|height|max|min|offset/;
function _2a4(node,type,_2a5){
type=type.toLowerCase();
if(has("ie")){
if(_2a5=="auto"){
if(type=="height"){
return node.offsetHeight;
}
if(type=="width"){
return node.offsetWidth;
}
}
if(type=="fontweight"){
switch(_2a5){
case 700:
return "bold";
case 400:
default:
return "normal";
}
}
}
if(!(type in _2a2)){
_2a2[type]=_2a3.test(type);
}
return _2a2[type]?_296(node,_2a5):_2a5;
};
var _2a6=has("ie")?"styleFloat":"cssFloat",_2a7={"cssFloat":_2a6,"styleFloat":_2a6,"float":_2a6};
_295.get=function getStyle(node,name){
var n=dom.byId(node),l=arguments.length,op=(name=="opacity");
if(l==2&&op){
return _29d(n);
}
name=_2a7[name]||name;
var s=_295.getComputedStyle(n);
return (l==1)?s:_2a4(n,name,s[name]||n.style[name]);
};
_295.set=function setStyle(node,name,_2a8){
var n=dom.byId(node),l=arguments.length,op=(name=="opacity");
name=_2a7[name]||name;
if(l==3){
return op?_29e(n,_2a8):n.style[name]=_2a8;
}
for(var x in name){
_295.set(node,x,name[x]);
}
return _295.getComputedStyle(n);
};
return _295;
});
},"dojo/mouse":function(){
define(["./_base/kernel","./on","./has","./dom","./_base/window"],function(dojo,on,has,dom,win){
has.add("dom-quirks",win.doc&&win.doc.compatMode=="BackCompat");
has.add("events-mouseenter",win.doc&&"onmouseenter" in win.doc.createElement("div"));
has.add("events-mousewheel",win.doc&&"onmousewheel" in win.doc);
var _2a9;
if((has("dom-quirks")&&has("ie"))||!has("dom-addeventlistener")){
_2a9={LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,_2aa){
return e.button&_2aa;
},isLeft:function(e){
return e.button&1;
},isMiddle:function(e){
return e.button&4;
},isRight:function(e){
return e.button&2;
}};
}else{
_2a9={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,_2ab){
return e.button==_2ab;
},isLeft:function(e){
return e.button==0;
},isMiddle:function(e){
return e.button==1;
},isRight:function(e){
return e.button==2;
}};
}
dojo.mouseButtons=_2a9;
function _2ac(type,_2ad){
var _2ae=function(node,_2af){
return on(node,type,function(evt){
if(_2ad){
return _2ad(evt,_2af);
}
if(!dom.isDescendant(evt.relatedTarget,node)){
return _2af.call(this,evt);
}
});
};
_2ae.bubble=function(_2b0){
return _2ac(type,function(evt,_2b1){
var _2b2=_2b0(evt.target);
var _2b3=evt.relatedTarget;
if(_2b2&&(_2b2!=(_2b3&&_2b3.nodeType==1&&_2b0(_2b3)))){
return _2b1.call(_2b2,evt);
}
});
};
return _2ae;
};
var _2b4;
if(has("events-mousewheel")){
_2b4="mousewheel";
}else{
_2b4=function(node,_2b5){
return on(node,"DOMMouseScroll",function(evt){
evt.wheelDelta=-evt.detail;
_2b5.call(this,evt);
});
};
}
return {_eventHandler:_2ac,enter:_2ac("mouseover"),leave:_2ac("mouseout"),wheel:_2b4,isLeft:_2a9.isLeft,isMiddle:_2a9.isMiddle,isRight:_2a9.isRight};
});
},"dojo/_base/sniff":function(){
define(["./kernel","./lang","../sniff"],function(dojo,lang,has){
if(!1){
return has;
}
dojo._name="browser";
lang.mixin(dojo,{isBrowser:true,isFF:has("ff"),isIE:has("ie"),isKhtml:has("khtml"),isWebKit:has("webkit"),isMozilla:has("mozilla"),isMoz:has("mozilla"),isOpera:has("opera"),isSafari:has("safari"),isChrome:has("chrome"),isMac:has("mac"),isIos:has("ios"),isAndroid:has("android"),isWii:has("wii"),isQuirks:has("quirks"),isAir:has("air")});
dojo.locale=dojo.locale||(has("ie")?navigator.userLanguage:navigator.language).toLowerCase();
return has;
});
},"dojo/keys":function(){
define(["./_base/kernel","./sniff"],function(dojo,has){
return dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:has("webkit")?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,UP_DPAD:175,DOWN_DPAD:176,LEFT_DPAD:177,RIGHT_DPAD:178,copyKey:has("mac")&&!has("air")?(has("safari")?91:224):17};
});
},"dojo/_base/Deferred":function(){
define(["./kernel","../Deferred","../promise/Promise","../errors/CancelError","../has","./lang","../when"],function(dojo,_2b6,_2b7,_2b8,has,lang,when){
var _2b9=function(){
};
var _2ba=Object.freeze||function(){
};
var _2bb=dojo.Deferred=function(_2bc){
var _2bd,_2be,_2bf,head,_2c0;
var _2c1=(this.promise=new _2b7());
function _2c2(_2c3){
if(_2be){
throw new Error("This deferred has already been resolved");
}
_2bd=_2c3;
_2be=true;
_2c4();
};
function _2c4(){
var _2c5;
while(!_2c5&&_2c0){
var _2c6=_2c0;
_2c0=_2c0.next;
if((_2c5=(_2c6.progress==_2b9))){
_2be=false;
}
var func=(_2bf?_2c6.error:_2c6.resolved);
if(has("config-useDeferredInstrumentation")){
if(_2bf&&_2b6.instrumentRejected){
_2b6.instrumentRejected(_2bd,!!func);
}
}
if(func){
try{
var _2c7=func(_2bd);
if(_2c7&&typeof _2c7.then==="function"){
_2c7.then(lang.hitch(_2c6.deferred,"resolve"),lang.hitch(_2c6.deferred,"reject"),lang.hitch(_2c6.deferred,"progress"));
continue;
}
var _2c8=_2c5&&_2c7===undefined;
if(_2c5&&!_2c8){
_2bf=_2c7 instanceof Error;
}
_2c6.deferred[_2c8&&_2bf?"reject":"resolve"](_2c8?_2bd:_2c7);
}
catch(e){
_2c6.deferred.reject(e);
}
}else{
if(_2bf){
_2c6.deferred.reject(_2bd);
}else{
_2c6.deferred.resolve(_2bd);
}
}
}
};
this.resolve=this.callback=function(_2c9){
this.fired=0;
this.results=[_2c9,null];
_2c2(_2c9);
};
this.reject=this.errback=function(_2ca){
_2bf=true;
this.fired=1;
if(has("config-useDeferredInstrumentation")){
if(_2b6.instrumentRejected){
_2b6.instrumentRejected(_2ca,!!_2c0);
}
}
_2c2(_2ca);
this.results=[null,_2ca];
};
this.progress=function(_2cb){
var _2cc=_2c0;
while(_2cc){
var _2cd=_2cc.progress;
_2cd&&_2cd(_2cb);
_2cc=_2cc.next;
}
};
this.addCallbacks=function(_2ce,_2cf){
this.then(_2ce,_2cf,_2b9);
return this;
};
_2c1.then=this.then=function(_2d0,_2d1,_2d2){
var _2d3=_2d2==_2b9?this:new _2bb(_2c1.cancel);
var _2d4={resolved:_2d0,error:_2d1,progress:_2d2,deferred:_2d3};
if(_2c0){
head=head.next=_2d4;
}else{
_2c0=head=_2d4;
}
if(_2be){
_2c4();
}
return _2d3.promise;
};
var _2d5=this;
_2c1.cancel=this.cancel=function(){
if(!_2be){
var _2d6=_2bc&&_2bc(_2d5);
if(!_2be){
if(!(_2d6 instanceof Error)){
_2d6=new _2b8(_2d6);
}
_2d6.log=false;
_2d5.reject(_2d6);
}
}
};
_2ba(_2c1);
};
lang.extend(_2bb,{addCallback:function(_2d7){
return this.addCallbacks(lang.hitch.apply(dojo,arguments));
},addErrback:function(_2d8){
return this.addCallbacks(null,lang.hitch.apply(dojo,arguments));
},addBoth:function(_2d9){
var _2da=lang.hitch.apply(dojo,arguments);
return this.addCallbacks(_2da,_2da);
},fired:-1});
_2bb.when=dojo.when=when;
return _2bb;
});
},"dojo/Deferred":function(){
define(["./has","./_base/lang","./errors/CancelError","./promise/Promise","./promise/instrumentation"],function(has,lang,_2db,_2dc,_2dd){
"use strict";
var _2de=0,_2df=1,_2e0=2;
var _2e1="This deferred has already been fulfilled.";
var _2e2=Object.freeze||function(){
};
var _2e3=function(_2e4,type,_2e5,_2e6,_2e7){
if(1){
if(type===_2e0&&_2e8.instrumentRejected&&_2e4.length===0){
_2e8.instrumentRejected(_2e5,false,_2e6,_2e7);
}
}
for(var i=0;i<_2e4.length;i++){
_2e9(_2e4[i],type,_2e5,_2e6);
}
};
var _2e9=function(_2ea,type,_2eb,_2ec){
var func=_2ea[type];
var _2ed=_2ea.deferred;
if(func){
try{
var _2ee=func(_2eb);
if(type===_2de){
if(typeof _2ee!=="undefined"){
_2ef(_2ed,type,_2ee);
}
}else{
if(_2ee&&typeof _2ee.then==="function"){
_2ea.cancel=_2ee.cancel;
_2ee.then(_2f0(_2ed,_2df),_2f0(_2ed,_2e0),_2f0(_2ed,_2de));
return;
}
_2ef(_2ed,_2df,_2ee);
}
}
catch(error){
_2ef(_2ed,_2e0,error);
}
}else{
_2ef(_2ed,type,_2eb);
}
if(1){
if(type===_2e0&&_2e8.instrumentRejected){
_2e8.instrumentRejected(_2eb,!!func,_2ec,_2ed.promise);
}
}
};
var _2f0=function(_2f1,type){
return function(_2f2){
_2ef(_2f1,type,_2f2);
};
};
var _2ef=function(_2f3,type,_2f4){
if(!_2f3.isCanceled()){
switch(type){
case _2de:
_2f3.progress(_2f4);
break;
case _2df:
_2f3.resolve(_2f4);
break;
case _2e0:
_2f3.reject(_2f4);
break;
}
}
};
var _2e8=function(_2f5){
var _2f6=this.promise=new _2dc();
var _2f7=this;
var _2f8,_2f9,_2fa;
var _2fb=false;
var _2fc=[];
if(1&&Error.captureStackTrace){
Error.captureStackTrace(_2f7,_2e8);
Error.captureStackTrace(_2f6,_2e8);
}
this.isResolved=_2f6.isResolved=function(){
return _2f8===_2df;
};
this.isRejected=_2f6.isRejected=function(){
return _2f8===_2e0;
};
this.isFulfilled=_2f6.isFulfilled=function(){
return !!_2f8;
};
this.isCanceled=_2f6.isCanceled=function(){
return _2fb;
};
this.progress=function(_2fd,_2fe){
if(!_2f8){
_2e3(_2fc,_2de,_2fd,null,_2f7);
return _2f6;
}else{
if(_2fe===true){
throw new Error(_2e1);
}else{
return _2f6;
}
}
};
this.resolve=function(_2ff,_300){
if(!_2f8){
_2e3(_2fc,_2f8=_2df,_2f9=_2ff,null,_2f7);
_2fc=null;
return _2f6;
}else{
if(_300===true){
throw new Error(_2e1);
}else{
return _2f6;
}
}
};
var _301=this.reject=function(_302,_303){
if(!_2f8){
if(1&&Error.captureStackTrace){
Error.captureStackTrace(_2fa={},_301);
}
_2e3(_2fc,_2f8=_2e0,_2f9=_302,_2fa,_2f7);
_2fc=null;
return _2f6;
}else{
if(_303===true){
throw new Error(_2e1);
}else{
return _2f6;
}
}
};
this.then=_2f6.then=function(_304,_305,_306){
var _307=[_306,_304,_305];
_307.cancel=_2f6.cancel;
_307.deferred=new _2e8(function(_308){
return _307.cancel&&_307.cancel(_308);
});
if(_2f8&&!_2fc){
_2e9(_307,_2f8,_2f9,_2fa);
}else{
_2fc.push(_307);
}
return _307.deferred.promise;
};
this.cancel=_2f6.cancel=function(_309,_30a){
if(!_2f8){
if(_2f5){
var _30b=_2f5(_309);
_309=typeof _30b==="undefined"?_309:_30b;
}
_2fb=true;
if(!_2f8){
if(typeof _309==="undefined"){
_309=new _2db();
}
_301(_309);
return _309;
}else{
if(_2f8===_2e0&&_2f9===_309){
return _309;
}
}
}else{
if(_30a===true){
throw new Error(_2e1);
}
}
};
_2e2(_2f6);
};
_2e8.prototype.toString=function(){
return "[object Deferred]";
};
if(_2dd){
_2dd(_2e8);
}
return _2e8;
});
},"dojo/errors/CancelError":function(){
define(["./create"],function(_30c){
return _30c("CancelError",null,null,{dojoType:"cancel"});
});
},"dojo/errors/create":function(){
define(["../_base/lang"],function(lang){
return function(name,ctor,base,_30d){
base=base||Error;
var _30e=function(_30f){
if(base===Error){
if(Error.captureStackTrace){
Error.captureStackTrace(this,_30e);
}
var err=Error.call(this,_30f),prop;
for(prop in err){
if(err.hasOwnProperty(prop)){
this[prop]=err[prop];
}
}
this.message=_30f;
this.stack=err.stack;
}else{
base.apply(this,arguments);
}
if(ctor){
ctor.apply(this,arguments);
}
};
_30e.prototype=lang.delegate(base.prototype,_30d);
_30e.prototype.name=name;
_30e.prototype.constructor=_30e;
return _30e;
};
});
},"dojo/promise/Promise":function(){
define(["../_base/lang"],function(lang){
"use strict";
function _310(){
throw new TypeError("abstract");
};
return lang.extend(function Promise(){
},{then:function(_311,_312,_313){
_310();
},cancel:function(_314,_315){
_310();
},isResolved:function(){
_310();
},isRejected:function(){
_310();
},isFulfilled:function(){
_310();
},isCanceled:function(){
_310();
},always:function(_316){
return this.then(_316,_316);
},otherwise:function(_317){
return this.then(null,_317);
},trace:function(){
return this;
},traceRejected:function(){
return this;
},toString:function(){
return "[object Promise]";
}});
});
},"dojo/promise/instrumentation":function(){
define(["./tracer","../has","../_base/lang","../_base/array"],function(_318,has,lang,_319){
function _31a(_31b,_31c,_31d){
var _31e="";
if(_31b&&_31b.stack){
_31e+=_31b.stack;
}
if(_31c&&_31c.stack){
_31e+="\n    ----------------------------------------\n    rejected"+_31c.stack.split("\n").slice(1).join("\n").replace(/^\s+/," ");
}
if(_31d&&_31d.stack){
_31e+="\n    ----------------------------------------\n"+_31d.stack;
}
console.error(_31b,_31e);
};
function _31f(_320,_321,_322,_323){
if(!_321){
_31a(_320,_322,_323);
}
};
var _324=[];
var _325=false;
var _326=1000;
function _327(_328,_329,_32a,_32b){
if(_329){
_319.some(_324,function(obj,ix){
if(obj.error===_328){
_324.splice(ix,1);
return true;
}
});
}else{
if(!_319.some(_324,function(obj){
return obj.error===_328;
})){
_324.push({error:_328,rejection:_32a,deferred:_32b,timestamp:new Date().getTime()});
}
}
if(!_325){
_325=setTimeout(_32c,_326);
}
};
function _32c(){
var now=new Date().getTime();
var _32d=now-_326;
_324=_319.filter(_324,function(obj){
if(obj.timestamp<_32d){
_31a(obj.error,obj.rejection,obj.deferred);
return false;
}
return true;
});
if(_324.length){
_325=setTimeout(_32c,_324[0].timestamp+_326-now);
}else{
_325=false;
}
};
return function(_32e){
var _32f=has("config-useDeferredInstrumentation");
if(_32f){
_318.on("resolved",lang.hitch(console,"log","resolved"));
_318.on("rejected",lang.hitch(console,"log","rejected"));
_318.on("progress",lang.hitch(console,"log","progress"));
var args=[];
if(typeof _32f==="string"){
args=_32f.split(",");
_32f=args.shift();
}
if(_32f==="report-rejections"){
_32e.instrumentRejected=_31f;
}else{
if(_32f==="report-unhandled-rejections"||_32f===true||_32f===1){
_32e.instrumentRejected=_327;
_326=parseInt(args[0],10)||_326;
}else{
throw new Error("Unsupported instrumentation usage <"+_32f+">");
}
}
}
};
});
},"dojo/promise/tracer":function(){
define(["../_base/lang","./Promise","../Evented"],function(lang,_330,_331){
"use strict";
var _332=new _331;
var emit=_332.emit;
_332.emit=null;
function _333(args){
setTimeout(function(){
emit.apply(_332,args);
},0);
};
_330.prototype.trace=function(){
var args=lang._toArray(arguments);
this.then(function(_334){
_333(["resolved",_334].concat(args));
},function(_335){
_333(["rejected",_335].concat(args));
},function(_336){
_333(["progress",_336].concat(args));
});
return this;
};
_330.prototype.traceRejected=function(){
var args=lang._toArray(arguments);
this.otherwise(function(_337){
_333(["rejected",_337].concat(args));
});
return this;
};
return _332;
});
},"dojo/when":function(){
define(["./Deferred","./promise/Promise"],function(_338,_339){
"use strict";
return function when(_33a,_33b,_33c,_33d){
var _33e=_33a&&typeof _33a.then==="function";
var _33f=_33e&&_33a instanceof _339;
if(!_33e){
if(_33b){
return _33b(_33a);
}else{
return new _338().resolve(_33a);
}
}else{
if(!_33f){
var _340=new _338(_33a.cancel);
_33a.then(_340.resolve,_340.reject,_340.progress);
_33a=_340.promise;
}
}
if(_33b||_33c||_33d){
return _33a.then(_33b,_33c,_33d);
}
return _33a;
};
});
},"dojo/_base/json":function(){
define(["./kernel","../json"],function(dojo,json){
dojo.fromJson=function(js){
return eval("("+js+")");
};
dojo._escapeString=json.stringify;
dojo.toJsonIndentStr="\t";
dojo.toJson=function(it,_341){
return json.stringify(it,function(key,_342){
if(_342){
var tf=_342.__json__||_342.json;
if(typeof tf=="function"){
return tf.call(_342);
}
}
return _342;
},_341&&dojo.toJsonIndentStr);
};
return dojo;
});
},"dojo/json":function(){
define(["./has"],function(has){
"use strict";
var _343=typeof JSON!="undefined";
has.add("json-parse",_343);
has.add("json-stringify",_343&&JSON.stringify({a:0},function(k,v){
return v||1;
})=="{\"a\":1}");
if(has("json-stringify")){
return JSON;
}else{
var _344=function(str){
return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");
};
return {parse:has("json-parse")?JSON.parse:function(str,_345){
if(_345&&!/^([\s\[\{]*(?:"(?:\\.|[^"])+"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(str)){
throw new SyntaxError("Invalid characters in JSON");
}
return eval("("+str+")");
},stringify:function(_346,_347,_348){
var _349;
if(typeof _347=="string"){
_348=_347;
_347=null;
}
function _34a(it,_34b,key){
if(_347){
it=_347(key,it);
}
var val,_34c=typeof it;
if(_34c=="number"){
return isFinite(it)?it+"":"null";
}
if(_34c=="boolean"){
return it+"";
}
if(it===null){
return "null";
}
if(typeof it=="string"){
return _344(it);
}
if(_34c=="function"||_34c=="undefined"){
return _349;
}
if(typeof it.toJSON=="function"){
return _34a(it.toJSON(key),_34b,key);
}
if(it instanceof Date){
return "\"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z\"".replace(/\{(\w+)(\+)?\}/g,function(t,prop,plus){
var num=it["getUTC"+prop]()+(plus?1:0);
return num<10?"0"+num:num;
});
}
if(it.valueOf()!==it){
return _34a(it.valueOf(),_34b,key);
}
var _34d=_348?(_34b+_348):"";
var sep=_348?" ":"";
var _34e=_348?"\n":"";
if(it instanceof Array){
var itl=it.length,res=[];
for(key=0;key<itl;key++){
var obj=it[key];
val=_34a(obj,_34d,key);
if(typeof val!="string"){
val="null";
}
res.push(_34e+_34d+val);
}
return "["+res.join(",")+_34e+_34b+"]";
}
var _34f=[];
for(key in it){
var _350;
if(it.hasOwnProperty(key)){
if(typeof key=="number"){
_350="\""+key+"\"";
}else{
if(typeof key=="string"){
_350=_344(key);
}else{
continue;
}
}
val=_34a(it[key],_34d,key);
if(typeof val!="string"){
continue;
}
_34f.push(_34e+_34d+_350+":"+sep+val);
}
}
return "{"+_34f.join(",")+_34e+_34b+"}";
};
return _34a(_346,"","");
}};
}
});
},"dojo/_base/Color":function(){
define(["./kernel","./lang","./array","./config"],function(dojo,lang,_351,_352){
var _353=dojo.Color=function(_354){
if(_354){
this.setColor(_354);
}
};
_353.named={"black":[0,0,0],"silver":[192,192,192],"gray":[128,128,128],"white":[255,255,255],"maroon":[128,0,0],"red":[255,0,0],"purple":[128,0,128],"fuchsia":[255,0,255],"green":[0,128,0],"lime":[0,255,0],"olive":[128,128,0],"yellow":[255,255,0],"navy":[0,0,128],"blue":[0,0,255],"teal":[0,128,128],"aqua":[0,255,255],"transparent":_352.transparentColor||[0,0,0,0]};
lang.extend(_353,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){
var t=this;
t.r=r;
t.g=g;
t.b=b;
t.a=a;
},setColor:function(_355){
if(lang.isString(_355)){
_353.fromString(_355,this);
}else{
if(lang.isArray(_355)){
_353.fromArray(_355,this);
}else{
this._set(_355.r,_355.g,_355.b,_355.a);
if(!(_355 instanceof _353)){
this.sanitize();
}
}
}
return this;
},sanitize:function(){
return this;
},toRgb:function(){
var t=this;
return [t.r,t.g,t.b];
},toRgba:function(){
var t=this;
return [t.r,t.g,t.b,t.a];
},toHex:function(){
var arr=_351.map(["r","g","b"],function(x){
var s=this[x].toString(16);
return s.length<2?"0"+s:s;
},this);
return "#"+arr.join("");
},toCss:function(_356){
var t=this,rgb=t.r+", "+t.g+", "+t.b;
return (_356?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";
},toString:function(){
return this.toCss(true);
}});
_353.blendColors=dojo.blendColors=function(_357,end,_358,obj){
var t=obj||new _353();
_351.forEach(["r","g","b","a"],function(x){
t[x]=_357[x]+(end[x]-_357[x])*_358;
if(x!="a"){
t[x]=Math.round(t[x]);
}
});
return t.sanitize();
};
_353.fromRgb=dojo.colorFromRgb=function(_359,obj){
var m=_359.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
return m&&_353.fromArray(m[1].split(/\s*,\s*/),obj);
};
_353.fromHex=dojo.colorFromHex=function(_35a,obj){
var t=obj||new _353(),bits=(_35a.length==4)?4:8,mask=(1<<bits)-1;
_35a=Number("0x"+_35a.substr(1));
if(isNaN(_35a)){
return null;
}
_351.forEach(["b","g","r"],function(x){
var c=_35a&mask;
_35a>>=bits;
t[x]=bits==4?17*c:c;
});
t.a=1;
return t;
};
_353.fromArray=dojo.colorFromArray=function(a,obj){
var t=obj||new _353();
t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));
if(isNaN(t.a)){
t.a=1;
}
return t.sanitize();
};
_353.fromString=dojo.colorFromString=function(str,obj){
var a=_353.named[str];
return a&&_353.fromArray(a,obj)||_353.fromRgb(str,obj)||_353.fromHex(str,obj);
};
return _353;
});
},"dojo/_base/browser":function(){
if(require.has){
require.has.add("config-selectorEngine","acme");
}
define(["../ready","./kernel","./connect","./unload","./window","./event","./html","./NodeList","../query","./xhr","./fx"],function(dojo){
return dojo;
});
},"dojo/_base/unload":function(){
define(["./kernel","./lang","../on"],function(dojo,lang,on){
var win=window;
var _35b={addOnWindowUnload:function(obj,_35c){
if(!dojo.windowUnloaded){
on(win,"unload",(dojo.windowUnloaded=function(){
}));
}
on(win,"unload",lang.hitch(obj,_35c));
},addOnUnload:function(obj,_35d){
on(win,"beforeunload",lang.hitch(obj,_35d));
}};
dojo.addOnWindowUnload=_35b.addOnWindowUnload;
dojo.addOnUnload=_35b.addOnUnload;
return _35b;
});
},"dojo/_base/html":function(){
define(["./kernel","../dom","../dom-style","../dom-attr","../dom-prop","../dom-class","../dom-construct","../dom-geometry"],function(dojo,dom,_35e,attr,prop,cls,ctr,geom){
dojo.byId=dom.byId;
dojo.isDescendant=dom.isDescendant;
dojo.setSelectable=dom.setSelectable;
dojo.getAttr=attr.get;
dojo.setAttr=attr.set;
dojo.hasAttr=attr.has;
dojo.removeAttr=attr.remove;
dojo.getNodeProp=attr.getNodeProp;
dojo.attr=function(node,name,_35f){
if(arguments.length==2){
return attr[typeof name=="string"?"get":"set"](node,name);
}
return attr.set(node,name,_35f);
};
dojo.hasClass=cls.contains;
dojo.addClass=cls.add;
dojo.removeClass=cls.remove;
dojo.toggleClass=cls.toggle;
dojo.replaceClass=cls.replace;
dojo._toDom=dojo.toDom=ctr.toDom;
dojo.place=ctr.place;
dojo.create=ctr.create;
dojo.empty=function(node){
ctr.empty(node);
};
dojo._destroyElement=dojo.destroy=function(node){
ctr.destroy(node);
};
dojo._getPadExtents=dojo.getPadExtents=geom.getPadExtents;
dojo._getBorderExtents=dojo.getBorderExtents=geom.getBorderExtents;
dojo._getPadBorderExtents=dojo.getPadBorderExtents=geom.getPadBorderExtents;
dojo._getMarginExtents=dojo.getMarginExtents=geom.getMarginExtents;
dojo._getMarginSize=dojo.getMarginSize=geom.getMarginSize;
dojo._getMarginBox=dojo.getMarginBox=geom.getMarginBox;
dojo.setMarginBox=geom.setMarginBox;
dojo._getContentBox=dojo.getContentBox=geom.getContentBox;
dojo.setContentSize=geom.setContentSize;
dojo._isBodyLtr=dojo.isBodyLtr=geom.isBodyLtr;
dojo._docScroll=dojo.docScroll=geom.docScroll;
dojo._getIeDocumentElementOffset=dojo.getIeDocumentElementOffset=geom.getIeDocumentElementOffset;
dojo._fixIeBiDiScrollLeft=dojo.fixIeBiDiScrollLeft=geom.fixIeBiDiScrollLeft;
dojo.position=geom.position;
dojo.marginBox=function marginBox(node,box){
return box?geom.setMarginBox(node,box):geom.getMarginBox(node);
};
dojo.contentBox=function contentBox(node,box){
return box?geom.setContentSize(node,box):geom.getContentBox(node);
};
dojo.coords=function(node,_360){
dojo.deprecated("dojo.coords()","Use dojo.position() or dojo.marginBox().");
node=dom.byId(node);
var s=_35e.getComputedStyle(node),mb=geom.getMarginBox(node,s);
var abs=geom.position(node,_360);
mb.x=abs.x;
mb.y=abs.y;
return mb;
};
dojo.getProp=prop.get;
dojo.setProp=prop.set;
dojo.prop=function(node,name,_361){
if(arguments.length==2){
return prop[typeof name=="string"?"get":"set"](node,name);
}
return prop.set(node,name,_361);
};
dojo.getStyle=_35e.get;
dojo.setStyle=_35e.set;
dojo.getComputedStyle=_35e.getComputedStyle;
dojo.__toPixelValue=dojo.toPixelValue=_35e.toPixelValue;
dojo.style=function(node,name,_362){
switch(arguments.length){
case 1:
return _35e.get(node);
case 2:
return _35e[typeof name=="string"?"get":"set"](node,name);
}
return _35e.set(node,name,_362);
};
return dojo;
});
},"dojo/dom-attr":function(){
define(["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(_363,has,lang,dom,_364,prop){
var _365={innerHTML:1,className:1,htmlFor:has("ie"),value:1},_366={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};
function _367(node,name){
var attr=node.getAttributeNode&&node.getAttributeNode(name);
return attr&&attr.specified;
};
_363.has=function hasAttr(node,name){
var lc=name.toLowerCase();
return _365[prop.names[lc]||name]||_367(dom.byId(node),_366[lc]||name);
};
_363.get=function getAttr(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_368=prop.names[lc]||name,_369=_365[_368],_36a=node[_368];
if(_369&&typeof _36a!="undefined"){
return _36a;
}
if(_368!="href"&&(typeof _36a=="boolean"||lang.isFunction(_36a))){
return _36a;
}
var _36b=_366[lc]||name;
return _367(node,_36b)?node.getAttribute(_36b):null;
};
_363.set=function setAttr(node,name,_36c){
node=dom.byId(node);
if(arguments.length==2){
for(var x in name){
_363.set(node,x,name[x]);
}
return node;
}
var lc=name.toLowerCase(),_36d=prop.names[lc]||name,_36e=_365[_36d];
if(_36d=="style"&&typeof _36c!="string"){
_364.set(node,_36c);
return node;
}
if(_36e||typeof _36c=="boolean"||lang.isFunction(_36c)){
return prop.set(node,name,_36c);
}
node.setAttribute(_366[lc]||name,_36c);
return node;
};
_363.remove=function removeAttr(node,name){
dom.byId(node).removeAttribute(_366[name.toLowerCase()]||name);
};
_363.getNodeProp=function getNodeProp(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_36f=prop.names[lc]||name;
if((_36f in node)&&_36f!="href"){
return node[_36f];
}
var _370=_366[lc]||name;
return _367(node,_370)?node.getAttribute(_370):null;
};
});
},"dojo/dom-prop":function(){
define(["exports","./_base/kernel","./sniff","./_base/lang","./dom","./dom-style","./dom-construct","./_base/connect"],function(_371,dojo,has,lang,dom,_372,ctr,conn){
var _373={},_374=0,_375=dojo._scopeName+"attrid";
_371.names={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"};
_371.get=function getProp(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_376=_371.names[lc]||name;
return node[_376];
};
_371.set=function setProp(node,name,_377){
node=dom.byId(node);
var l=arguments.length;
if(l==2&&typeof name!="string"){
for(var x in name){
_371.set(node,x,name[x]);
}
return node;
}
var lc=name.toLowerCase(),_378=_371.names[lc]||name;
if(_378=="style"&&typeof _377!="string"){
_372.set(node,_377);
return node;
}
if(_378=="innerHTML"){
if(has("ie")&&node.tagName.toLowerCase() in {col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1}){
ctr.empty(node);
node.appendChild(ctr.toDom(_377,node.ownerDocument));
}else{
node[_378]=_377;
}
return node;
}
if(lang.isFunction(_377)){
var _379=node[_375];
if(!_379){
_379=_374++;
node[_375]=_379;
}
if(!_373[_379]){
_373[_379]={};
}
var h=_373[_379][_378];
if(h){
conn.disconnect(h);
}else{
try{
delete node[_378];
}
catch(e){
}
}
if(_377){
_373[_379][_378]=conn.connect(node,_378,_377);
}else{
node[_378]=null;
}
return node;
}
node[_378]=_377;
return node;
};
});
},"dojo/dom-construct":function(){
define(["exports","./_base/kernel","./sniff","./_base/window","./dom","./dom-attr","./on"],function(_37a,dojo,has,win,dom,attr,on){
var _37b={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_37c=/<\s*([\w\:]+)/,_37d={},_37e=0,_37f="__"+dojo._scopeName+"ToDomId";
for(var _380 in _37b){
if(_37b.hasOwnProperty(_380)){
var tw=_37b[_380];
tw.pre=_380=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";
tw.post="</"+tw.reverse().join("></")+">";
}
}
function _381(node,ref){
var _382=ref.parentNode;
if(_382){
_382.insertBefore(node,ref);
}
};
function _383(node,ref){
var _384=ref.parentNode;
if(_384){
if(_384.lastChild==ref){
_384.appendChild(node);
}else{
_384.insertBefore(node,ref.nextSibling);
}
}
};
_37a.toDom=function toDom(frag,doc){
doc=doc||win.doc;
var _385=doc[_37f];
if(!_385){
doc[_37f]=_385=++_37e+"";
_37d[_385]=doc.createElement("div");
}
frag+="";
var _386=frag.match(_37c),tag=_386?_386[1].toLowerCase():"",_387=_37d[_385],wrap,i,fc,df;
if(_386&&_37b[tag]){
wrap=_37b[tag];
_387.innerHTML=wrap.pre+frag+wrap.post;
for(i=wrap.length;i;--i){
_387=_387.firstChild;
}
}else{
_387.innerHTML=frag;
}
if(_387.childNodes.length==1){
return _387.removeChild(_387.firstChild);
}
df=doc.createDocumentFragment();
while((fc=_387.firstChild)){
df.appendChild(fc);
}
return df;
};
_37a.place=function place(node,_388,_389){
_388=dom.byId(_388);
if(typeof node=="string"){
node=/^\s*</.test(node)?_37a.toDom(node,_388.ownerDocument):dom.byId(node);
}
if(typeof _389=="number"){
var cn=_388.childNodes;
if(!cn.length||cn.length<=_389){
_388.appendChild(node);
}else{
_381(node,cn[_389<0?0:_389]);
}
}else{
switch(_389){
case "before":
_381(node,_388);
break;
case "after":
_383(node,_388);
break;
case "replace":
_388.parentNode.replaceChild(node,_388);
break;
case "only":
_37a.empty(_388);
_388.appendChild(node);
break;
case "first":
if(_388.firstChild){
_381(node,_388.firstChild);
break;
}
default:
_388.appendChild(node);
}
}
return node;
};
_37a.create=function create(tag,_38a,_38b,pos){
var doc=win.doc;
if(_38b){
_38b=dom.byId(_38b);
doc=_38b.ownerDocument;
}
if(typeof tag=="string"){
tag=doc.createElement(tag);
}
if(_38a){
attr.set(tag,_38a);
}
if(_38b){
_37a.place(tag,_38b,pos);
}
return tag;
};
var _38c=has("ie")?function(node){
try{
node.innerHTML="";
}
catch(e){
for(var c;c=node.lastChild;){
_38d(c,node);
}
}
}:function(node){
node.innerHTML="";
};
_37a.empty=function empty(node){
_38c(dom.byId(node));
};
function _38d(node,_38e){
if(node.firstChild){
_38c(node);
}
if(_38e){
_38e.removeChild(node);
}
};
_37a.destroy=function destroy(node){
node=dom.byId(node);
if(!node){
return;
}
_38d(node,node.parentNode);
};
});
},"dojo/dom-class":function(){
define(["./_base/lang","./_base/array","./dom"],function(lang,_38f,dom){
var _390="className";
var cls,_391=/\s+/,a1=[""];
function _392(s){
if(typeof s=="string"||s instanceof String){
if(s&&!_391.test(s)){
a1[0]=s;
return a1;
}
var a=s.split(_391);
if(a.length&&!a[0]){
a.shift();
}
if(a.length&&!a[a.length-1]){
a.pop();
}
return a;
}
if(!s){
return [];
}
return _38f.filter(s,function(x){
return x;
});
};
var _393={};
cls={contains:function containsClass(node,_394){
return ((" "+dom.byId(node)[_390]+" ").indexOf(" "+_394+" ")>=0);
},add:function addClass(node,_395){
node=dom.byId(node);
_395=_392(_395);
var cls=node[_390],_396;
cls=cls?" "+cls+" ":" ";
_396=cls.length;
for(var i=0,len=_395.length,c;i<len;++i){
c=_395[i];
if(c&&cls.indexOf(" "+c+" ")<0){
cls+=c+" ";
}
}
if(_396<cls.length){
node[_390]=cls.substr(1,cls.length-2);
}
},remove:function removeClass(node,_397){
node=dom.byId(node);
var cls;
if(_397!==undefined){
_397=_392(_397);
cls=" "+node[_390]+" ";
for(var i=0,len=_397.length;i<len;++i){
cls=cls.replace(" "+_397[i]+" "," ");
}
cls=lang.trim(cls);
}else{
cls="";
}
if(node[_390]!=cls){
node[_390]=cls;
}
},replace:function replaceClass(node,_398,_399){
node=dom.byId(node);
_393[_390]=node[_390];
cls.remove(_393,_399);
cls.add(_393,_398);
if(node[_390]!==_393[_390]){
node[_390]=_393[_390];
}
},toggle:function toggleClass(node,_39a,_39b){
node=dom.byId(node);
if(_39b===undefined){
_39a=_392(_39a);
for(var i=0,len=_39a.length,c;i<len;++i){
c=_39a[i];
cls[cls.contains(node,c)?"remove":"add"](node,c);
}
}else{
cls[_39b?"add":"remove"](node,_39a);
}
return _39b;
}};
return cls;
});
},"dojo/_base/NodeList":function(){
define(["./kernel","../query","./array","./html","../NodeList-dom"],function(dojo,_39c,_39d){
var _39e=_39c.NodeList,nlp=_39e.prototype;
nlp.connect=_39e._adaptAsForEach(function(){
return dojo.connect.apply(this,arguments);
});
nlp.coords=_39e._adaptAsMap(dojo.coords);
_39e.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];
_39d.forEach(_39e.events,function(evt){
var _39f="on"+evt;
nlp[_39f]=function(a,b){
return this.connect(_39f,a,b);
};
});
dojo.NodeList=_39e;
return _39e;
});
},"dojo/query":function(){
define(["./_base/kernel","./has","./dom","./on","./_base/array","./_base/lang","./selector/_loader","./selector/_loader!default"],function(dojo,has,dom,on,_3a0,lang,_3a1,_3a2){
"use strict";
has.add("array-extensible",function(){
return lang.delegate([],{length:1}).length==1&&!has("bug-for-in-skips-shadowed");
});
var ap=Array.prototype,aps=ap.slice,apc=ap.concat,_3a3=_3a0.forEach;
var tnl=function(a,_3a4,_3a5){
var _3a6=new (_3a5||this._NodeListCtor||nl)(a);
return _3a4?_3a6._stash(_3a4):_3a6;
};
var _3a7=function(f,a,o){
a=[0].concat(aps.call(a,0));
o=o||dojo.global;
return function(node){
a[0]=node;
return f.apply(o,a);
};
};
var _3a8=function(f,o){
return function(){
this.forEach(_3a7(f,arguments,o));
return this;
};
};
var _3a9=function(f,o){
return function(){
return this.map(_3a7(f,arguments,o));
};
};
var _3aa=function(f,o){
return function(){
return this.filter(_3a7(f,arguments,o));
};
};
var _3ab=function(f,g,o){
return function(){
var a=arguments,body=_3a7(f,a,o);
if(g.call(o||dojo.global,a)){
return this.map(body);
}
this.forEach(body);
return this;
};
};
var _3ac=function(_3ad){
var _3ae=this instanceof nl&&has("array-extensible");
if(typeof _3ad=="number"){
_3ad=Array(_3ad);
}
var _3af=(_3ad&&"length" in _3ad)?_3ad:arguments;
if(_3ae||!_3af.sort){
var _3b0=_3ae?this:[],l=_3b0.length=_3af.length;
for(var i=0;i<l;i++){
_3b0[i]=_3af[i];
}
if(_3ae){
return _3b0;
}
_3af=_3b0;
}
lang._mixin(_3af,nlp);
_3af._NodeListCtor=function(_3b1){
return nl(_3b1);
};
return _3af;
};
var nl=_3ac,nlp=nl.prototype=has("array-extensible")?[]:{};
nl._wrap=nlp._wrap=tnl;
nl._adaptAsMap=_3a9;
nl._adaptAsForEach=_3a8;
nl._adaptAsFilter=_3aa;
nl._adaptWithCondition=_3ab;
_3a3(["slice","splice"],function(name){
var f=ap[name];
nlp[name]=function(){
return this._wrap(f.apply(this,arguments),name=="slice"?this:null);
};
});
_3a3(["indexOf","lastIndexOf","every","some"],function(name){
var f=_3a0[name];
nlp[name]=function(){
return f.apply(dojo,[this].concat(aps.call(arguments,0)));
};
});
lang.extend(_3ac,{constructor:nl,_NodeListCtor:nl,toString:function(){
return this.join(",");
},_stash:function(_3b2){
this._parent=_3b2;
return this;
},on:function(_3b3,_3b4){
var _3b5=this.map(function(node){
return on(node,_3b3,_3b4);
});
_3b5.remove=function(){
for(var i=0;i<_3b5.length;i++){
_3b5[i].remove();
}
};
return _3b5;
},end:function(){
if(this._parent){
return this._parent;
}else{
return new this._NodeListCtor(0);
}
},concat:function(item){
var t=aps.call(this,0),m=_3a0.map(arguments,function(a){
return aps.call(a,0);
});
return this._wrap(apc.apply(t,m),this);
},map:function(func,obj){
return this._wrap(_3a0.map(this,func,obj),this);
},forEach:function(_3b6,_3b7){
_3a3(this,_3b6,_3b7);
return this;
},filter:function(_3b8){
var a=arguments,_3b9=this,_3ba=0;
if(typeof _3b8=="string"){
_3b9=_3bb._filterResult(this,a[0]);
if(a.length==1){
return _3b9._stash(this);
}
_3ba=1;
}
return this._wrap(_3a0.filter(_3b9,a[_3ba],a[_3ba+1]),this);
},instantiate:function(_3bc,_3bd){
var c=lang.isFunction(_3bc)?_3bc:lang.getObject(_3bc);
_3bd=_3bd||{};
return this.forEach(function(node){
new c(_3bd,node);
});
},at:function(){
var t=new this._NodeListCtor(0);
_3a3(arguments,function(i){
if(i<0){
i=this.length+i;
}
if(this[i]){
t.push(this[i]);
}
},this);
return t._stash(this);
}});
function _3be(_3bf,_3c0){
var _3c1=function(_3c2,root){
if(typeof root=="string"){
root=dom.byId(root);
if(!root){
return new _3c0([]);
}
}
var _3c3=typeof _3c2=="string"?_3bf(_3c2,root):_3c2?_3c2.orphan?_3c2:[_3c2]:[];
if(_3c3.orphan){
return _3c3;
}
return new _3c0(_3c3);
};
_3c1.matches=_3bf.match||function(node,_3c4,root){
return _3c1.filter([node],_3c4,root).length>0;
};
_3c1.filter=_3bf.filter||function(_3c5,_3c6,root){
return _3c1(_3c6,root).filter(function(node){
return _3a0.indexOf(_3c5,node)>-1;
});
};
if(typeof _3bf!="function"){
var _3c7=_3bf.search;
_3bf=function(_3c8,root){
return _3c7(root||document,_3c8);
};
}
return _3c1;
};
var _3bb=_3be(_3a2,_3ac);
dojo.query=_3be(_3a2,function(_3c9){
return _3ac(_3c9);
});
_3bb.load=function(id,_3ca,_3cb){
_3a1.load(id,_3ca,function(_3cc){
_3cb(_3be(_3cc,_3ac));
});
};
dojo._filterQueryResult=_3bb._filterResult=function(_3cd,_3ce,root){
return new _3ac(_3bb.filter(_3cd,_3ce,root));
};
dojo.NodeList=_3bb.NodeList=_3ac;
return _3bb;
});
},"dojo/selector/_loader":function(){
define(["../has","require"],function(has,_3cf){
"use strict";
var _3d0=document.createElement("div");
has.add("dom-qsa2.1",!!_3d0.querySelectorAll);
has.add("dom-qsa3",function(){
try{
_3d0.innerHTML="<p class='TEST'></p>";
return _3d0.querySelectorAll(".TEST:empty").length==1;
}
catch(e){
}
});
var _3d1;
var acme="./acme",lite="./lite";
return {load:function(id,_3d2,_3d3,_3d4){
var req=_3cf;
id=id=="default"?has("config-selectorEngine")||"css3":id;
id=id=="css2"||id=="lite"?lite:id=="css2.1"?has("dom-qsa2.1")?lite:acme:id=="css3"?has("dom-qsa3")?lite:acme:id=="acme"?acme:(req=_3d2)&&id;
if(id.charAt(id.length-1)=="?"){
id=id.substring(0,id.length-1);
var _3d5=true;
}
if(_3d5&&(has("dom-compliant-qsa")||_3d1)){
return _3d3(_3d1);
}
req([id],function(_3d6){
if(id!="./lite"){
_3d1=_3d6;
}
_3d3(_3d6);
});
}};
});
},"dojo/NodeList-dom":function(){
define(["./_base/kernel","./query","./_base/array","./_base/lang","./dom-class","./dom-construct","./dom-geometry","./dom-attr","./dom-style"],function(dojo,_3d7,_3d8,lang,_3d9,_3da,_3db,_3dc,_3dd){
var _3de=function(a){
return a.length==1&&(typeof a[0]=="string");
};
var _3df=function(node){
var p=node.parentNode;
if(p){
p.removeChild(node);
}
};
var _3e0=_3d7.NodeList,awc=_3e0._adaptWithCondition,aafe=_3e0._adaptAsForEach,aam=_3e0._adaptAsMap;
function _3e1(_3e2){
return function(node,name,_3e3){
if(arguments.length==2){
return _3e2[typeof name=="string"?"get":"set"](node,name);
}
return _3e2.set(node,name,_3e3);
};
};
lang.extend(_3e0,{_normalize:function(_3e4,_3e5){
var _3e6=_3e4.parse===true;
if(typeof _3e4.template=="string"){
var _3e7=_3e4.templateFunc||(dojo.string&&dojo.string.substitute);
_3e4=_3e7?_3e7(_3e4.template,_3e4):_3e4;
}
var type=(typeof _3e4);
if(type=="string"||type=="number"){
_3e4=_3da.toDom(_3e4,(_3e5&&_3e5.ownerDocument));
if(_3e4.nodeType==11){
_3e4=lang._toArray(_3e4.childNodes);
}else{
_3e4=[_3e4];
}
}else{
if(!lang.isArrayLike(_3e4)){
_3e4=[_3e4];
}else{
if(!lang.isArray(_3e4)){
_3e4=lang._toArray(_3e4);
}
}
}
if(_3e6){
_3e4._runParse=true;
}
return _3e4;
},_cloneNode:function(node){
return node.cloneNode(true);
},_place:function(ary,_3e8,_3e9,_3ea){
if(_3e8.nodeType!=1&&_3e9=="only"){
return;
}
var _3eb=_3e8,_3ec;
var _3ed=ary.length;
for(var i=_3ed-1;i>=0;i--){
var node=(_3ea?this._cloneNode(ary[i]):ary[i]);
if(ary._runParse&&dojo.parser&&dojo.parser.parse){
if(!_3ec){
_3ec=_3eb.ownerDocument.createElement("div");
}
_3ec.appendChild(node);
dojo.parser.parse(_3ec);
node=_3ec.firstChild;
while(_3ec.firstChild){
_3ec.removeChild(_3ec.firstChild);
}
}
if(i==_3ed-1){
_3da.place(node,_3eb,_3e9);
}else{
_3eb.parentNode.insertBefore(node,_3eb);
}
_3eb=node;
}
},position:aam(_3db.position),attr:awc(_3e1(_3dc),_3de),style:awc(_3e1(_3dd),_3de),addClass:aafe(_3d9.add),removeClass:aafe(_3d9.remove),toggleClass:aafe(_3d9.toggle),replaceClass:aafe(_3d9.replace),empty:aafe(_3da.empty),removeAttr:aafe(_3dc.remove),marginBox:aam(_3db.getMarginBox),place:function(_3ee,_3ef){
var item=_3d7(_3ee)[0];
return this.forEach(function(node){
_3da.place(node,item,_3ef);
});
},orphan:function(_3f0){
return (_3f0?_3d7._filterResult(this,_3f0):this).forEach(_3df);
},adopt:function(_3f1,_3f2){
return _3d7(_3f1).place(this[0],_3f2)._stash(this);
},query:function(_3f3){
if(!_3f3){
return this;
}
var ret=new _3e0;
this.map(function(node){
_3d7(_3f3,node).forEach(function(_3f4){
if(_3f4!==undefined){
ret.push(_3f4);
}
});
});
return ret._stash(this);
},filter:function(_3f5){
var a=arguments,_3f6=this,_3f7=0;
if(typeof _3f5=="string"){
_3f6=_3d7._filterResult(this,a[0]);
if(a.length==1){
return _3f6._stash(this);
}
_3f7=1;
}
return this._wrap(_3d8.filter(_3f6,a[_3f7],a[_3f7+1]),this);
},addContent:function(_3f8,_3f9){
_3f8=this._normalize(_3f8,this[0]);
for(var i=0,node;(node=this[i]);i++){
this._place(_3f8,node,_3f9,i>0);
}
return this;
}});
return _3e0;
});
},"dojo/_base/xhr":function(){
define(["./kernel","./sniff","require","../io-query","../dom","../dom-form","./Deferred","./config","./json","./lang","./array","../on","../aspect","../request/watch","../request/xhr","../request/util"],function(dojo,has,_3fa,ioq,dom,_3fb,_3fc,_3fd,json,lang,_3fe,on,_3ff,_400,_401,util){
dojo._xhrObj=_401._create;
var cfg=dojo.config;
dojo.objectToQuery=ioq.objectToQuery;
dojo.queryToObject=ioq.queryToObject;
dojo.fieldToObject=_3fb.fieldToObject;
dojo.formToObject=_3fb.toObject;
dojo.formToQuery=_3fb.toQuery;
dojo.formToJson=_3fb.toJson;
dojo._blockAsync=false;
var _402=dojo._contentHandlers=dojo.contentHandlers={"text":function(xhr){
return xhr.responseText;
},"json":function(xhr){
return json.fromJson(xhr.responseText||null);
},"json-comment-filtered":function(xhr){
if(!_3fd.useCommentedJson){
console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");
}
var _403=xhr.responseText;
var _404=_403.indexOf("/*");
var _405=_403.lastIndexOf("*/");
if(_404==-1||_405==-1){
throw new Error("JSON was not comment filtered");
}
return json.fromJson(_403.substring(_404+2,_405));
},"javascript":function(xhr){
return dojo.eval(xhr.responseText);
},"xml":function(xhr){
var _406=xhr.responseXML;
if(has("ie")){
if((!_406||!_406.documentElement)){
var ms=function(n){
return "MSXML"+n+".DOMDocument";
};
var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];
_3fe.some(dp,function(p){
try{
var dom=new ActiveXObject(p);
dom.async=false;
dom.loadXML(xhr.responseText);
_406=dom;
}
catch(e){
return false;
}
return true;
});
}
}
return _406;
},"json-comment-optional":function(xhr){
if(xhr.responseText&&/^[^{\[]*\/\*/.test(xhr.responseText)){
return _402["json-comment-filtered"](xhr);
}else{
return _402["json"](xhr);
}
}};
dojo._ioSetArgs=function(args,_407,_408,_409){
var _40a={args:args,url:args.url};
var _40b=null;
if(args.form){
var form=dom.byId(args.form);
var _40c=form.getAttributeNode("action");
_40a.url=_40a.url||(_40c?_40c.value:null);
_40b=_3fb.toObject(form);
}
var _40d=[{}];
if(_40b){
_40d.push(_40b);
}
if(args.content){
_40d.push(args.content);
}
if(args.preventCache){
_40d.push({"dojo.preventCache":new Date().valueOf()});
}
_40a.query=ioq.objectToQuery(lang.mixin.apply(null,_40d));
_40a.handleAs=args.handleAs||"text";
var d=new _3fc(function(dfd){
dfd.canceled=true;
_407&&_407(dfd);
var err=dfd.ioArgs.error;
if(!err){
err=new Error("request cancelled");
err.dojoType="cancel";
dfd.ioArgs.error=err;
}
return err;
});
d.addCallback(_408);
var ld=args.load;
if(ld&&lang.isFunction(ld)){
d.addCallback(function(_40e){
return ld.call(args,_40e,_40a);
});
}
var err=args.error;
if(err&&lang.isFunction(err)){
d.addErrback(function(_40f){
return err.call(args,_40f,_40a);
});
}
var _410=args.handle;
if(_410&&lang.isFunction(_410)){
d.addBoth(function(_411){
return _410.call(args,_411,_40a);
});
}
d.addErrback(function(_412){
return _409(_412,d);
});
if(cfg.ioPublish&&dojo.publish&&_40a.args.ioPublish!==false){
d.addCallbacks(function(res){
dojo.publish("/dojo/io/load",[d,res]);
return res;
},function(res){
dojo.publish("/dojo/io/error",[d,res]);
return res;
});
d.addBoth(function(res){
dojo.publish("/dojo/io/done",[d,res]);
return res;
});
}
d.ioArgs=_40a;
return d;
};
var _413=function(dfd){
var ret=_402[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);
return ret===undefined?null:ret;
};
var _414=function(_415,dfd){
if(!dfd.ioArgs.args.failOk){
console.error(_415);
}
return _415;
};
var _416=function(dfd){
if(_417<=0){
_417=0;
if(cfg.ioPublish&&dojo.publish&&(!dfd||dfd&&dfd.ioArgs.args.ioPublish!==false)){
dojo.publish("/dojo/io/stop");
}
}
};
var _417=0;
_3ff.after(_400,"_onAction",function(){
_417-=1;
});
_3ff.after(_400,"_onInFlight",_416);
dojo._ioCancelAll=_400.cancelAll;
dojo._ioNotifyStart=function(dfd){
if(cfg.ioPublish&&dojo.publish&&dfd.ioArgs.args.ioPublish!==false){
if(!_417){
dojo.publish("/dojo/io/start");
}
_417+=1;
dojo.publish("/dojo/io/send",[dfd]);
}
};
dojo._ioWatch=function(dfd,_418,_419,_41a){
var args=dfd.ioArgs.options=dfd.ioArgs.args;
lang.mixin(dfd,{response:dfd.ioArgs,isValid:function(_41b){
return _418(dfd);
},isReady:function(_41c){
return _419(dfd);
},handleResponse:function(_41d){
return _41a(dfd);
}});
_400(dfd);
_416(dfd);
};
var _41e="application/x-www-form-urlencoded";
dojo._ioAddQueryToUrl=function(_41f){
if(_41f.query.length){
_41f.url+=(_41f.url.indexOf("?")==-1?"?":"&")+_41f.query;
_41f.query=null;
}
};
dojo.xhr=function(_420,args,_421){
var rDfd;
var dfd=dojo._ioSetArgs(args,function(dfd){
rDfd&&rDfd.cancel();
},_413,_414);
var _422=dfd.ioArgs;
if("postData" in args){
_422.query=args.postData;
}else{
if("putData" in args){
_422.query=args.putData;
}else{
if("rawBody" in args){
_422.query=args.rawBody;
}else{
if((arguments.length>2&&!_421)||"POST|PUT".indexOf(_420.toUpperCase())===-1){
dojo._ioAddQueryToUrl(_422);
}
}
}
}
var _423={method:_420,handleAs:"text",timeout:args.timeout,withCredentials:args.withCredentials,ioArgs:_422};
if(typeof args.headers!=="undefined"){
_423.headers=args.headers;
}
if(typeof args.contentType!=="undefined"){
if(!_423.headers){
_423.headers={};
}
_423.headers["Content-Type"]=args.contentType;
}
if(typeof _422.query!=="undefined"){
_423.data=_422.query;
}
if(typeof args.sync!=="undefined"){
_423.sync=args.sync;
}
dojo._ioNotifyStart(dfd);
try{
rDfd=_401(_422.url,_423,true);
}
catch(e){
dfd.cancel();
return dfd;
}
dfd.ioArgs.xhr=rDfd.response.xhr;
rDfd.then(function(){
dfd.resolve(dfd);
}).otherwise(function(_424){
_422.error=_424;
if(_424.response){
_424.status=_424.response.status;
_424.responseText=_424.response.text;
_424.xhr=_424.response.xhr;
}
dfd.reject(_424);
});
return dfd;
};
dojo.xhrGet=function(args){
return dojo.xhr("GET",args);
};
dojo.rawXhrPost=dojo.xhrPost=function(args){
return dojo.xhr("POST",args,true);
};
dojo.rawXhrPut=dojo.xhrPut=function(args){
return dojo.xhr("PUT",args,true);
};
dojo.xhrDelete=function(args){
return dojo.xhr("DELETE",args);
};
dojo._isDocumentOk=function(x){
return util.checkStatus(x.status);
};
dojo._getText=function(url){
var _425;
dojo.xhrGet({url:url,sync:true,load:function(text){
_425=text;
}});
return _425;
};
lang.mixin(dojo.xhr,{_xhrObj:dojo._xhrObj,fieldToObject:_3fb.fieldToObject,formToObject:_3fb.toObject,objectToQuery:ioq.objectToQuery,formToQuery:_3fb.toQuery,formToJson:_3fb.toJson,queryToObject:ioq.queryToObject,contentHandlers:_402,_ioSetArgs:dojo._ioSetArgs,_ioCancelAll:dojo._ioCancelAll,_ioNotifyStart:dojo._ioNotifyStart,_ioWatch:dojo._ioWatch,_ioAddQueryToUrl:dojo._ioAddQueryToUrl,_isDocumentOk:dojo._isDocumentOk,_getText:dojo._getText,get:dojo.xhrGet,post:dojo.xhrPost,put:dojo.xhrPut,del:dojo.xhrDelete});
return dojo.xhr;
});
},"dojo/io-query":function(){
define("dojo/io-query",["./_base/lang"],function(lang){
var _426={};
return {objectToQuery:function objectToQuery(map){
var enc=encodeURIComponent,_427=[];
for(var name in map){
var _428=map[name];
if(_428!=_426[name]){
var _429=enc(name)+"=";
if(lang.isArray(_428)){
for(var i=0,l=_428.length;i<l;++i){
_427.push(_429+enc(_428[i]));
}
}else{
_427.push(_429+enc(_428));
}
}
}
return _427.join("&");
},queryToObject:function queryToObject(str){
var dec=decodeURIComponent,qp=str.split("&"),ret={},name,val;
for(var i=0,l=qp.length,item;i<l;++i){
item=qp[i];
if(item.length){
var s=item.indexOf("=");
if(s<0){
name=dec(item);
val="";
}else{
name=dec(item.slice(0,s));
val=dec(item.slice(s+1));
}
if(typeof ret[name]=="string"){
ret[name]=[ret[name]];
}
if(lang.isArray(ret[name])){
ret[name].push(val);
}else{
ret[name]=val;
}
}
}
return ret;
}};
});
},"dojo/dom-form":function(){
define(["./_base/lang","./dom","./io-query","./json"],function(lang,dom,ioq,json){
function _42a(obj,name,_42b){
if(_42b===null){
return;
}
var val=obj[name];
if(typeof val=="string"){
obj[name]=[val,_42b];
}else{
if(lang.isArray(val)){
val.push(_42b);
}else{
obj[name]=_42b;
}
}
};
var _42c="file|submit|image|reset|button";
var form={fieldToObject:function fieldToObject(_42d){
var ret=null;
_42d=dom.byId(_42d);
if(_42d){
var _42e=_42d.name,type=(_42d.type||"").toLowerCase();
if(_42e&&type&&!_42d.disabled){
if(type=="radio"||type=="checkbox"){
if(_42d.checked){
ret=_42d.value;
}
}else{
if(_42d.multiple){
ret=[];
var _42f=[_42d.firstChild];
while(_42f.length){
for(var node=_42f.pop();node;node=node.nextSibling){
if(node.nodeType==1&&node.tagName.toLowerCase()=="option"){
if(node.selected){
ret.push(node.value);
}
}else{
if(node.nextSibling){
_42f.push(node.nextSibling);
}
if(node.firstChild){
_42f.push(node.firstChild);
}
break;
}
}
}
}else{
ret=_42d.value;
}
}
}
}
return ret;
},toObject:function formToObject(_430){
var ret={},_431=dom.byId(_430).elements;
for(var i=0,l=_431.length;i<l;++i){
var item=_431[i],_432=item.name,type=(item.type||"").toLowerCase();
if(_432&&type&&_42c.indexOf(type)<0&&!item.disabled){
_42a(ret,_432,form.fieldToObject(item));
if(type=="image"){
ret[_432+".x"]=ret[_432+".y"]=ret[_432].x=ret[_432].y=0;
}
}
}
return ret;
},toQuery:function formToQuery(_433){
return ioq.objectToQuery(form.toObject(_433));
},toJson:function formToJson(_434,_435){
return json.stringify(form.toObject(_434),null,_435?4:0);
}};
return form;
});
},"dojo/request/watch":function(){
define(["./util","../errors/RequestTimeoutError","../errors/CancelError","../_base/array","../_base/window","../has!host-browser?dom-addeventlistener?:../on:"],function(util,_436,_437,_438,win,on){
var _439=null,_43a=[];
function _43b(){
var now=+(new Date);
for(var i=0,dfd;i<_43a.length&&(dfd=_43a[i]);i++){
var _43c=dfd.response,_43d=_43c.options;
if((dfd.isCanceled&&dfd.isCanceled())||(dfd.isValid&&!dfd.isValid(_43c))){
_43a.splice(i--,1);
_43e._onAction&&_43e._onAction();
}else{
if(dfd.isReady&&dfd.isReady(_43c)){
_43a.splice(i--,1);
dfd.handleResponse(_43c);
_43e._onAction&&_43e._onAction();
}else{
if(dfd.startTime){
if(dfd.startTime+(_43d.timeout||0)<now){
_43a.splice(i--,1);
dfd.cancel(new _436("Timeout exceeded",_43c));
_43e._onAction&&_43e._onAction();
}
}
}
}
}
_43e._onInFlight&&_43e._onInFlight(dfd);
if(!_43a.length){
clearInterval(_439);
_439=null;
}
};
function _43e(dfd){
if(dfd.response.options.timeout){
dfd.startTime=+(new Date);
}
if(dfd.isFulfilled()){
return;
}
_43a.push(dfd);
if(!_439){
_439=setInterval(_43b,50);
}
if(dfd.response.options.sync){
_43b();
}
};
_43e.cancelAll=function cancelAll(){
try{
_438.forEach(_43a,function(dfd){
try{
dfd.cancel(new _437("All requests canceled."));
}
catch(e){
}
});
}
catch(e){
}
};
if(win&&on&&win.doc.attachEvent){
on(win.global,"unload",function(){
_43e.cancelAll();
});
}
return _43e;
});
},"dojo/request/util":function(){
define(["exports","../errors/RequestError","../errors/CancelError","../Deferred","../io-query","../_base/array","../_base/lang"],function(_43f,_440,_441,_442,_443,_444,lang){
_43f.deepCopy=function deepCopy(_445,_446){
for(var name in _446){
var tval=_445[name],sval=_446[name];
if(tval!==sval){
if(tval&&typeof tval==="object"&&sval&&typeof sval==="object"){
_43f.deepCopy(tval,sval);
}else{
_445[name]=sval;
}
}
}
return _445;
};
_43f.deepCreate=function deepCreate(_447,_448){
_448=_448||{};
var _449=lang.delegate(_447),name,_44a;
for(name in _447){
_44a=_447[name];
if(_44a&&typeof _44a==="object"){
_449[name]=_43f.deepCreate(_44a,_448[name]);
}
}
return _43f.deepCopy(_449,_448);
};
var _44b=Object.freeze||function(obj){
return obj;
};
function _44c(_44d){
return _44b(_44d);
};
_43f.deferred=function deferred(_44e,_44f,_450,_451,_452,last){
var def=new _442(function(_453){
_44f&&_44f(def,_44e);
if(!_453||!(_453 instanceof _440)&&!(_453 instanceof _441)){
return new _441("Request canceled",_44e);
}
return _453;
});
def.response=_44e;
def.isValid=_450;
def.isReady=_451;
def.handleResponse=_452;
function _454(_455){
_455.response=_44e;
throw _455;
};
var _456=def.then(_44c).otherwise(_454);
if(_43f.notify){
_456.then(lang.hitch(_43f.notify,"emit","load"),lang.hitch(_43f.notify,"emit","error"));
}
var _457=_456.then(function(_458){
return _458.data||_458.text;
});
var _459=_44b(lang.delegate(_457,{response:_456}));
if(last){
def.then(function(_45a){
last.call(def,_45a);
},function(_45b){
last.call(def,_44e,_45b);
});
}
def.promise=_459;
def.then=_459.then;
return def;
};
_43f.addCommonMethods=function addCommonMethods(_45c,_45d){
_444.forEach(_45d||["GET","POST","PUT","DELETE"],function(_45e){
_45c[(_45e==="DELETE"?"DEL":_45e).toLowerCase()]=function(url,_45f){
_45f=lang.delegate(_45f||{});
_45f.method=_45e;
return _45c(url,_45f);
};
});
};
_43f.parseArgs=function parseArgs(url,_460,_461){
var data=_460.data,_462=_460.query;
if(data&&!_461){
if(typeof data==="object"){
_460.data=_443.objectToQuery(data);
}
}
if(_462){
if(typeof _462==="object"){
_462=_443.objectToQuery(_462);
}
if(_460.preventCache){
_462+=(_462?"&":"")+"request.preventCache="+(+(new Date));
}
}else{
if(_460.preventCache){
_462="request.preventCache="+(+(new Date));
}
}
if(url&&_462){
url+=(~url.indexOf("?")?"&":"?")+_462;
}
return {url:url,options:_460,getHeader:function(_463){
return null;
}};
};
_43f.checkStatus=function(stat){
stat=stat||0;
return (stat>=200&&stat<300)||stat===304||stat===1223||!stat;
};
});
},"dojo/errors/RequestError":function(){
define(["./create"],function(_464){
return _464("RequestError",function(_465,_466){
this.response=_466;
});
});
},"dojo/errors/RequestTimeoutError":function(){
define(["./create","./RequestError"],function(_467,_468){
return _467("RequestTimeoutError",null,_468,{dojoType:"timeout"});
});
},"dojo/request/xhr":function(){
define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(_469,_46a,_46b,util,has){
has.add("native-xhr",function(){
return typeof XMLHttpRequest!=="undefined";
});
has.add("dojo-force-activex-xhr",function(){
return has("activex")&&!document.addEventListener&&window.location.protocol==="file:";
});
has.add("native-xhr2",function(){
if(!has("native-xhr")){
return;
}
var x=new XMLHttpRequest();
return typeof x["addEventListener"]!=="undefined"&&(typeof opera==="undefined"||typeof x["upload"]!=="undefined");
});
has.add("native-formdata",function(){
return typeof FormData==="function";
});
function _46c(_46d,_46e){
var _46f=_46d.xhr;
_46d.status=_46d.xhr.status;
_46d.text=_46f.responseText;
if(_46d.options.handleAs==="xml"){
_46d.data=_46f.responseXML;
}
if(!_46e){
try{
_46b(_46d);
}
catch(e){
_46e=e;
}
}
if(_46e){
this.reject(_46e);
}else{
if(util.checkStatus(_46f.status)){
this.resolve(_46d);
}else{
_46e=new _469("Unable to load "+_46d.url+" status: "+_46f.status,_46d);
this.reject(_46e);
}
}
};
var _470,_471,_472,_473;
if(has("native-xhr2")){
_470=function(_474){
return !this.isFulfilled();
};
_473=function(dfd,_475){
_475.xhr.abort();
};
_472=function(_476,dfd,_477){
function _478(evt){
dfd.handleResponse(_477);
};
function _479(evt){
var _47a=evt.target;
var _47b=new _469("Unable to load "+_477.url+" status: "+_47a.status,_477);
dfd.handleResponse(_477,_47b);
};
function _47c(evt){
if(evt.lengthComputable){
_477.loaded=evt.loaded;
_477.total=evt.total;
dfd.progress(_477);
}
};
_476.addEventListener("load",_478,false);
_476.addEventListener("error",_479,false);
_476.addEventListener("progress",_47c,false);
return function(){
_476.removeEventListener("load",_478,false);
_476.removeEventListener("error",_479,false);
_476.removeEventListener("progress",_47c,false);
};
};
}else{
_470=function(_47d){
return _47d.xhr.readyState;
};
_471=function(_47e){
return 4===_47e.xhr.readyState;
};
_473=function(dfd,_47f){
var xhr=_47f.xhr;
var _480=typeof xhr.abort;
if(_480==="function"||_480==="object"||_480==="unknown"){
xhr.abort();
}
};
}
var _481,_482={data:null,query:null,sync:false,method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}};
function xhr(url,_483,_484){
var _485=util.parseArgs(url,util.deepCreate(_482,_483),has("native-formdata")&&_483&&_483.data&&_483.data instanceof FormData);
url=_485.url;
_483=_485.options;
var _486,last=function(){
_486&&_486();
};
var dfd=util.deferred(_485,_473,_470,_471,_46c,last);
var _487=_485.xhr=xhr._create();
if(!_487){
dfd.cancel(new _469("XHR was not created"));
return _484?dfd:dfd.promise;
}
_485.getHeader=function(_488){
return this.xhr.getResponseHeader(_488);
};
if(_472){
_486=_472(_487,dfd,_485);
}
var data=_483.data,_489=!_483.sync,_48a=_483.method;
try{
_487.open(_48a,url,_489,_483.user||_481,_483.password||_481);
if(_483.withCredentials){
_487.withCredentials=_483.withCredentials;
}
var _48b=_483.headers,_48c;
if(_48b){
for(var hdr in _48b){
if(hdr.toLowerCase()==="content-type"){
_48c=_48b[hdr];
}else{
if(_48b[hdr]){
_487.setRequestHeader(hdr,_48b[hdr]);
}
}
}
}
if(_48c&&_48c!==false){
_487.setRequestHeader("Content-Type",_48c);
}
if(!_48b||!("X-Requested-With" in _48b)){
_487.setRequestHeader("X-Requested-With","XMLHttpRequest");
}
if(util.notify){
util.notify.emit("send",_485,dfd.promise.cancel);
}
_487.send(data);
}
catch(e){
dfd.reject(e);
}
_46a(dfd);
_487=null;
return _484?dfd:dfd.promise;
};
xhr._create=function(){
throw new Error("XMLHTTP not available");
};
if(has("native-xhr")&&!has("dojo-force-activex-xhr")){
xhr._create=function(){
return new XMLHttpRequest();
};
}else{
if(has("activex")){
try{
new ActiveXObject("Msxml2.XMLHTTP");
xhr._create=function(){
return new ActiveXObject("Msxml2.XMLHTTP");
};
}
catch(e){
try{
new ActiveXObject("Microsoft.XMLHTTP");
xhr._create=function(){
return new ActiveXObject("Microsoft.XMLHTTP");
};
}
catch(e){
}
}
}
}
util.addCommonMethods(xhr);
return xhr;
});
},"dojo/request/handlers":function(){
define(["../json","../_base/kernel","../_base/array","../has"],function(JSON,_48d,_48e,has){
has.add("activex",typeof ActiveXObject!=="undefined");
var _48f;
if(has("activex")){
var dp=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML.DOMDocument"];
_48f=function(_490){
var _491=_490.data;
if(!_491||!_491.documentElement){
var text=_490.text;
_48e.some(dp,function(p){
try{
var dom=new ActiveXObject(p);
dom.async=false;
dom.loadXML(text);
_491=dom;
}
catch(e){
return false;
}
return true;
});
}
return _491;
};
}
var _492={"javascript":function(_493){
return _48d.eval(_493.text||"");
},"json":function(_494){
return JSON.parse(_494.text||null);
},"xml":_48f};
function _495(_496){
var _497=_492[_496.options.handleAs];
_496.data=_497?_497(_496):(_496.data||_496.text);
return _496;
};
_495.register=function(name,_498){
_492[name]=_498;
};
return _495;
});
},"dojo/_base/fx":function(){
define(["./kernel","./config","./lang","../Evented","./Color","./connect","./sniff","../dom","../dom-style"],function(dojo,_499,lang,_49a,_49b,_49c,has,dom,_49d){
var _49e=lang.mixin;
var _49f={};
var _4a0=_49f._Line=function(_4a1,end){
this.start=_4a1;
this.end=end;
};
_4a0.prototype.getValue=function(n){
return ((this.end-this.start)*n)+this.start;
};
var _4a2=_49f.Animation=function(args){
_49e(this,args);
if(lang.isArray(this.curve)){
this.curve=new _4a0(this.curve[0],this.curve[1]);
}
};
_4a2.prototype=new _49a();
lang.extend(_4a2,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){
var _4a3=this._percent,_4a4=this.easing;
return _4a4?_4a4(_4a3):_4a3;
},_fire:function(evt,args){
var a=args||[];
if(this[evt]){
if(_499.debugAtAllCosts){
this[evt].apply(this,a);
}else{
try{
this[evt].apply(this,a);
}
catch(e){
console.error("exception in animation handler for:",evt);
console.error(e);
}
}
}
return this;
},play:function(_4a5,_4a6){
var _4a7=this;
if(_4a7._delayTimer){
_4a7._clearTimer();
}
if(_4a6){
_4a7._stopTimer();
_4a7._active=_4a7._paused=false;
_4a7._percent=0;
}else{
if(_4a7._active&&!_4a7._paused){
return _4a7;
}
}
_4a7._fire("beforeBegin",[_4a7.node]);
var de=_4a5||_4a7.delay,_4a8=lang.hitch(_4a7,"_play",_4a6);
if(de>0){
_4a7._delayTimer=setTimeout(_4a8,de);
return _4a7;
}
_4a8();
return _4a7;
},_play:function(_4a9){
var _4aa=this;
if(_4aa._delayTimer){
_4aa._clearTimer();
}
_4aa._startTime=new Date().valueOf();
if(_4aa._paused){
_4aa._startTime-=_4aa.duration*_4aa._percent;
}
_4aa._active=true;
_4aa._paused=false;
var _4ab=_4aa.curve.getValue(_4aa._getStep());
if(!_4aa._percent){
if(!_4aa._startRepeatCount){
_4aa._startRepeatCount=_4aa.repeat;
}
_4aa._fire("onBegin",[_4ab]);
}
_4aa._fire("onPlay",[_4ab]);
_4aa._cycle();
return _4aa;
},pause:function(){
var _4ac=this;
if(_4ac._delayTimer){
_4ac._clearTimer();
}
_4ac._stopTimer();
if(!_4ac._active){
return _4ac;
}
_4ac._paused=true;
_4ac._fire("onPause",[_4ac.curve.getValue(_4ac._getStep())]);
return _4ac;
},gotoPercent:function(_4ad,_4ae){
var _4af=this;
_4af._stopTimer();
_4af._active=_4af._paused=true;
_4af._percent=_4ad;
if(_4ae){
_4af.play();
}
return _4af;
},stop:function(_4b0){
var _4b1=this;
if(_4b1._delayTimer){
_4b1._clearTimer();
}
if(!_4b1._timer){
return _4b1;
}
_4b1._stopTimer();
if(_4b0){
_4b1._percent=1;
}
_4b1._fire("onStop",[_4b1.curve.getValue(_4b1._getStep())]);
_4b1._active=_4b1._paused=false;
return _4b1;
},status:function(){
if(this._active){
return this._paused?"paused":"playing";
}
return "stopped";
},_cycle:function(){
var _4b2=this;
if(_4b2._active){
var curr=new Date().valueOf();
var step=_4b2.duration===0?1:(curr-_4b2._startTime)/(_4b2.duration);
if(step>=1){
step=1;
}
_4b2._percent=step;
if(_4b2.easing){
step=_4b2.easing(step);
}
_4b2._fire("onAnimate",[_4b2.curve.getValue(step)]);
if(_4b2._percent<1){
_4b2._startTimer();
}else{
_4b2._active=false;
if(_4b2.repeat>0){
_4b2.repeat--;
_4b2.play(null,true);
}else{
if(_4b2.repeat==-1){
_4b2.play(null,true);
}else{
if(_4b2._startRepeatCount){
_4b2.repeat=_4b2._startRepeatCount;
_4b2._startRepeatCount=0;
}
}
}
_4b2._percent=0;
_4b2._fire("onEnd",[_4b2.node]);
!_4b2.repeat&&_4b2._stopTimer();
}
}
return _4b2;
},_clearTimer:function(){
clearTimeout(this._delayTimer);
delete this._delayTimer;
}});
var ctr=0,_4b3=null,_4b4={run:function(){
}};
lang.extend(_4a2,{_startTimer:function(){
if(!this._timer){
this._timer=_49c.connect(_4b4,"run",this,"_cycle");
ctr++;
}
if(!_4b3){
_4b3=setInterval(lang.hitch(_4b4,"run"),this.rate);
}
},_stopTimer:function(){
if(this._timer){
_49c.disconnect(this._timer);
this._timer=null;
ctr--;
}
if(ctr<=0){
clearInterval(_4b3);
_4b3=null;
ctr=0;
}
}});
var _4b5=has("ie")?function(node){
var ns=node.style;
if(!ns.width.length&&_49d.get(node,"width")=="auto"){
ns.width="auto";
}
}:function(){
};
_49f._fade=function(args){
args.node=dom.byId(args.node);
var _4b6=_49e({properties:{}},args),_4b7=(_4b6.properties.opacity={});
_4b7.start=!("start" in _4b6)?function(){
return +_49d.get(_4b6.node,"opacity")||0;
}:_4b6.start;
_4b7.end=_4b6.end;
var anim=_49f.animateProperty(_4b6);
_49c.connect(anim,"beforeBegin",lang.partial(_4b5,_4b6.node));
return anim;
};
_49f.fadeIn=function(args){
return _49f._fade(_49e({end:1},args));
};
_49f.fadeOut=function(args){
return _49f._fade(_49e({end:0},args));
};
_49f._defaultEasing=function(n){
return 0.5+((Math.sin((n+1.5)*Math.PI))/2);
};
var _4b8=function(_4b9){
this._properties=_4b9;
for(var p in _4b9){
var prop=_4b9[p];
if(prop.start instanceof _49b){
prop.tempColor=new _49b();
}
}
};
_4b8.prototype.getValue=function(r){
var ret={};
for(var p in this._properties){
var prop=this._properties[p],_4ba=prop.start;
if(_4ba instanceof _49b){
ret[p]=_49b.blendColors(_4ba,prop.end,r,prop.tempColor).toCss();
}else{
if(!lang.isArray(_4ba)){
ret[p]=((prop.end-_4ba)*r)+_4ba+(p!="opacity"?prop.units||"px":0);
}
}
}
return ret;
};
_49f.animateProperty=function(args){
var n=args.node=dom.byId(args.node);
if(!args.easing){
args.easing=dojo._defaultEasing;
}
var anim=new _4a2(args);
_49c.connect(anim,"beforeBegin",anim,function(){
var pm={};
for(var p in this.properties){
if(p=="width"||p=="height"){
this.node.display="block";
}
var prop=this.properties[p];
if(lang.isFunction(prop)){
prop=prop(n);
}
prop=pm[p]=_49e({},(lang.isObject(prop)?prop:{end:prop}));
if(lang.isFunction(prop.start)){
prop.start=prop.start(n);
}
if(lang.isFunction(prop.end)){
prop.end=prop.end(n);
}
var _4bb=(p.toLowerCase().indexOf("color")>=0);
function _4bc(node,p){
var v={height:node.offsetHeight,width:node.offsetWidth}[p];
if(v!==undefined){
return v;
}
v=_49d.get(node,p);
return (p=="opacity")?+v:(_4bb?v:parseFloat(v));
};
if(!("end" in prop)){
prop.end=_4bc(n,p);
}else{
if(!("start" in prop)){
prop.start=_4bc(n,p);
}
}
if(_4bb){
prop.start=new _49b(prop.start);
prop.end=new _49b(prop.end);
}else{
prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);
}
}
this.curve=new _4b8(pm);
});
_49c.connect(anim,"onAnimate",lang.hitch(_49d,"set",anim.node));
return anim;
};
_49f.anim=function(node,_4bd,_4be,_4bf,_4c0,_4c1){
return _49f.animateProperty({node:node,duration:_4be||_4a2.prototype.duration,properties:_4bd,easing:_4bf,onEnd:_4c0}).play(_4c1||0);
};
if(1){
_49e(dojo,_49f);
dojo._Animation=_4a2;
}
return _49f;
});
},"dojo/_base/loader":function(){
define(["./kernel","../has","require","module","./json","./lang","./array"],function(dojo,has,_4c2,_4c3,json,lang,_4c4){
if(!1){
console.error("cannot load the Dojo v1.x loader with a foreign loader");
return 0;
}
1||has.add("dojo-fast-sync-require",1);
var _4c5=function(id){
return {src:_4c3.id,id:id};
},_4c6=function(name){
return name.replace(/\./g,"/");
},_4c7=/\/\/>>built/,_4c8=[],_4c9=[],_4ca=function(mid,_4cb,_4cc){
_4c8.push(_4cc);
_4c4.forEach(mid.split(","),function(mid){
var _4cd=_4ce(mid,_4cb.module);
_4c9.push(_4cd);
_4cf(_4cd);
});
_4d0();
},_4d0=(1?function(){
var _4d1,mid;
for(mid in _4d2){
_4d1=_4d2[mid];
if(_4d1.noReqPluginCheck===undefined){
_4d1.noReqPluginCheck=/loadInit\!/.test(mid)||/require\!/.test(mid)?1:0;
}
if(!_4d1.executed&&!_4d1.noReqPluginCheck&&_4d1.injected==_4d3){
return;
}
}
_4d4(function(){
var _4d5=_4c8;
_4c8=[];
_4c4.forEach(_4d5,function(cb){
cb(1);
});
});
}:(function(){
var _4d6,_4d7=function(m){
_4d6[m.mid]=1;
for(var t,_4d8,deps=m.deps||[],i=0;i<deps.length;i++){
_4d8=deps[i];
if(!(t=_4d6[_4d8.mid])){
if(t===0||!_4d7(_4d8)){
_4d6[m.mid]=0;
return false;
}
}
}
return true;
};
return function(){
var _4d9,mid;
_4d6={};
for(mid in _4d2){
_4d9=_4d2[mid];
if(_4d9.executed||_4d9.noReqPluginCheck){
_4d6[mid]=1;
}else{
if(_4d9.noReqPluginCheck!==0){
_4d9.noReqPluginCheck=/loadInit\!/.test(mid)||/require\!/.test(mid)?1:0;
}
if(_4d9.noReqPluginCheck){
_4d6[mid]=1;
}else{
if(_4d9.injected!==_505){
_4d6[mid]=0;
}
}
}
}
for(var t,i=0,end=_4c9.length;i<end;i++){
_4d9=_4c9[i];
if(!(t=_4d6[_4d9.mid])){
if(t===0||!_4d7(_4d9)){
return;
}
}
}
_4d4(function(){
var _4da=_4c8;
_4c8=[];
_4c4.forEach(_4da,function(cb){
cb(1);
});
});
};
})()),_4db=function(mid,_4dc,_4dd){
_4dc([mid],function(_4de){
_4dc(_4de.names,function(){
for(var _4df="",args=[],i=0;i<arguments.length;i++){
_4df+="var "+_4de.names[i]+"= arguments["+i+"]; ";
args.push(arguments[i]);
}
eval(_4df);
var _4e0=_4dc.module,_4e1=[],_4e2,_4e3={provide:function(_4e4){
_4e4=_4c6(_4e4);
var _4e5=_4ce(_4e4,_4e0);
if(_4e5!==_4e0){
_50b(_4e5);
}
},require:function(_4e6,_4e7){
_4e6=_4c6(_4e6);
_4e7&&(_4ce(_4e6,_4e0).result=_506);
_4e1.push(_4e6);
},requireLocalization:function(_4e8,_4e9,_4ea){
if(!_4e2){
_4e2=["dojo/i18n"];
}
_4ea=(_4ea||dojo.locale).toLowerCase();
_4e8=_4c6(_4e8)+"/nls/"+(/root/i.test(_4ea)?"":_4ea+"/")+_4c6(_4e9);
if(_4ce(_4e8,_4e0).isXd){
_4e2.push("dojo/i18n!"+_4e8);
}
},loadInit:function(f){
f();
}},hold={},p;
try{
for(p in _4e3){
hold[p]=dojo[p];
dojo[p]=_4e3[p];
}
_4de.def.apply(null,args);
}
catch(e){
_4eb("error",[_4c5("failedDojoLoadInit"),e]);
}
finally{
for(p in _4e3){
dojo[p]=hold[p];
}
}
if(_4e2){
_4e1=_4e1.concat(_4e2);
}
if(_4e1.length){
_4ca(_4e1.join(","),_4dc,_4dd);
}else{
_4dd();
}
});
});
},_4ec=function(text,_4ed,_4ee){
var _4ef=/\(|\)/g,_4f0=1,_4f1;
_4ef.lastIndex=_4ed;
while((_4f1=_4ef.exec(text))){
if(_4f1[0]==")"){
_4f0-=1;
}else{
_4f0+=1;
}
if(_4f0==0){
break;
}
}
if(_4f0!=0){
throw "unmatched paren around character "+_4ef.lastIndex+" in: "+text;
}
return [dojo.trim(text.substring(_4ee,_4ef.lastIndex))+";\n",_4ef.lastIndex];
},_4f2=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,_4f3=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,_4f4=/(^|\s)(require|define)\s*\(/m,_4f5=function(text,_4f6){
var _4f7,_4f8,_4f9,_4fa,_4fb=[],_4fc=[],_4fd=[];
_4f6=_4f6||text.replace(_4f2,function(_4fe){
_4f3.lastIndex=_4f4.lastIndex=0;
return (_4f3.test(_4fe)||_4f4.test(_4fe))?"":_4fe;
});
while((_4f7=_4f3.exec(_4f6))){
_4f8=_4f3.lastIndex;
_4f9=_4f8-_4f7[0].length;
_4fa=_4ec(_4f6,_4f8,_4f9);
if(_4f7[2]=="loadInit"){
_4fb.push(_4fa[0]);
}else{
_4fc.push(_4fa[0]);
}
_4f3.lastIndex=_4fa[1];
}
_4fd=_4fb.concat(_4fc);
if(_4fd.length||!_4f4.test(_4f6)){
return [text.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 && dojo.loadInit("),_4fd.join(""),_4fd];
}else{
return 0;
}
},_4ff=function(_500,text){
var _501,id,_502=[],_503=[];
if(_4c7.test(text)||!(_501=_4f5(text))){
return 0;
}
id=_500.mid+"-*loadInit";
for(var p in _4ce("dojo",_500).result.scopeMap){
_502.push(p);
_503.push("\""+p+"\"");
}
return "// xdomain rewrite of "+_500.mid+"\n"+"define('"+id+"',{\n"+"\tnames:"+dojo.toJson(_502)+",\n"+"\tdef:function("+_502.join(",")+"){"+_501[1]+"}"+"});\n\n"+"define("+dojo.toJson(_502.concat(["dojo/loadInit!"+id]))+", function("+_502.join(",")+"){\n"+_501[0]+"});";
},_504=_4c2.initSyncLoader(_4ca,_4d0,_4ff),sync=_504.sync,_4d3=_504.requested,_505=_504.arrived,_506=_504.nonmodule,_507=_504.executing,_508=_504.executed,_509=_504.syncExecStack,_4d2=_504.modules,_50a=_504.execQ,_4ce=_504.getModule,_4cf=_504.injectModule,_50b=_504.setArrived,_4eb=_504.signal,_50c=_504.finishExec,_50d=_504.execModule,_50e=_504.getLegacyMode,_4d4=_504.guardCheckComplete;
_4ca=_504.dojoRequirePlugin;
dojo.provide=function(mid){
var _50f=_509[0],_510=lang.mixin(_4ce(_4c6(mid),_4c2.module),{executed:_507,result:lang.getObject(mid,true)});
_50b(_510);
if(_50f){
(_50f.provides||(_50f.provides=[])).push(function(){
_510.result=lang.getObject(mid);
delete _510.provides;
_510.executed!==_508&&_50c(_510);
});
}
return _510.result;
};
has.add("config-publishRequireResult",1,0,0);
dojo.require=function(_511,_512){
function _513(mid,_514){
var _515=_4ce(_4c6(mid),_4c2.module);
if(_509.length&&_509[0].finish){
_509[0].finish.push(mid);
return undefined;
}
if(_515.executed){
return _515.result;
}
_514&&(_515.result=_506);
var _516=_50e();
_4cf(_515);
_516=_50e();
if(_515.executed!==_508&&_515.injected===_505){
_504.guardCheckComplete(function(){
_50d(_515);
});
}
if(_515.executed){
return _515.result;
}
if(_516==sync){
if(_515.cjs){
_50a.unshift(_515);
}else{
_509.length&&(_509[0].finish=[mid]);
}
}else{
_50a.push(_515);
}
return undefined;
};
var _517=_513(_511,_512);
if(has("config-publishRequireResult")&&!lang.exists(_511)&&_517!==undefined){
lang.setObject(_511,_517);
}
return _517;
};
dojo.loadInit=function(f){
f();
};
dojo.registerModulePath=function(_518,_519){
var _51a={};
_51a[_518.replace(/\./g,"/")]=_519;
_4c2({paths:_51a});
};
dojo.platformRequire=function(_51b){
var _51c=(_51b.common||[]).concat(_51b[dojo._name]||_51b["default"]||[]),temp;
while(_51c.length){
if(lang.isArray(temp=_51c.shift())){
dojo.require.apply(dojo,temp);
}else{
dojo.require(temp);
}
}
};
dojo.requireIf=dojo.requireAfterIf=function(_51d,_51e,_51f){
if(_51d){
dojo.require(_51e,_51f);
}
};
dojo.requireLocalization=function(_520,_521,_522){
_4c2(["../i18n"],function(i18n){
i18n.getLocalization(_520,_521,_522);
});
};
return {extractLegacyApiApplications:_4f5,require:_4ca,loadInit:_4db};
});
}}});
(function(){
var _523=this.require;
_523({cache:{}});
!_523.async&&_523(["dojo"]);
_523.boot&&_523.apply(null,_523.boot);
})();
