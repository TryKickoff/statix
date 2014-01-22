// HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
;(function(window,document){var version='3.6.2pre';var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined');}());}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true;}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild);}
function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements;}
function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data;}
return data;}
function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createElement(nodeName);}
if(!data){data=getExpandoData(ownerDocument);}
var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode();}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();}else{node=data.createElem(nodeName);}
return node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node;}
function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createDocumentFragment();}
data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i]);}
return clone;}
function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag();}
ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName);}
return createElement(nodeName,ownerDocument,data);};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+
getElements().join().replace(/\w+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")';})+');return n}')(html5,data.frag);}
function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document;}
var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}'+'mark{background:#FF0;color:#000}');}
if(!supportsUnknownElements){shivMethods(ownerDocument,data);}
return ownerDocument;}
var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video','version':version,'shivCSS':(options.shivCSS!==false),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==false),'type':'default','shivDocument':shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5;shivDocument(document);var reMedia=/^$|\b(?:all|print)\b/;var shivNamespace='html5shiv';var supportsShivableSheets=!supportsUnknownElements&&(function(){var docEl=document.documentElement;return!(typeof document.namespaces=='undefined'||typeof document.parentWindow=='undefined'||typeof docEl.applyElement=='undefined'||typeof docEl.removeNode=='undefined'||typeof window.attachEvent=='undefined');}());function addWrappers(ownerDocument){var node,nodes=ownerDocument.getElementsByTagName('*'),index=nodes.length,reElements=RegExp('^(?:'+getElements().join('|')+')$','i'),result=[];while(index--){node=nodes[index];if(reElements.test(node.nodeName)){result.push(node.applyElement(createWrapper(node)));}}
return result;}
function createWrapper(element){var node,nodes=element.attributes,index=nodes.length,wrapper=element.ownerDocument.createElement(shivNamespace+':'+element.nodeName);while(index--){node=nodes[index];node.specified&&wrapper.setAttribute(node.nodeName,node.nodeValue);}
wrapper.style.cssText=element.style.cssText;return wrapper;}
function shivCssText(cssText){var pair,parts=cssText.split('{'),index=parts.length,reElements=RegExp('(^|[\\s,>+~])('+getElements().join('|')+')(?=[[\\s,>+~#.:]|$)','gi'),replacement='$1'+shivNamespace+'\\:$2';while(index--){pair=parts[index]=parts[index].split('}');pair[pair.length-1]=pair[pair.length-1].replace(reElements,replacement);parts[index]=pair.join('}');}
return parts.join('{');}
function removeWrappers(wrappers){var index=wrappers.length;while(index--){wrappers[index].removeNode();}}
function shivPrint(ownerDocument){var shivedSheet,wrappers,data=getExpandoData(ownerDocument),namespaces=ownerDocument.namespaces,ownerWindow=ownerDocument.parentWindow;if(!supportsShivableSheets||ownerDocument.printShived){return ownerDocument;}
if(typeof namespaces[shivNamespace]=='undefined'){namespaces.add(shivNamespace);}
function removeSheet(){clearTimeout(data._removeSheetTimer);if(shivedSheet){shivedSheet.removeNode(true);}
shivedSheet=null;}
ownerWindow.attachEvent('onbeforeprint',function(){removeSheet();var imports,length,sheet,collection=ownerDocument.styleSheets,cssText=[],index=collection.length,sheets=Array(index);while(index--){sheets[index]=collection[index];}
while((sheet=sheets.pop())){if(!sheet.disabled&&reMedia.test(sheet.media)){try{imports=sheet.imports;length=imports.length;}catch(er){length=0;}
for(index=0;index<length;index++){sheets.push(imports[index]);}
try{cssText.push(sheet.cssText);}catch(er){}}}
cssText=shivCssText(cssText.reverse().join(''));wrappers=addWrappers(ownerDocument);shivedSheet=addStyleSheet(ownerDocument,cssText);});ownerWindow.attachEvent('onafterprint',function(){removeWrappers(wrappers);clearTimeout(data._removeSheetTimer);data._removeSheetTimer=setTimeout(removeSheet,500);});ownerDocument.printShived=true;return ownerDocument;}
html5.type+=' print';html5.shivPrint=shivPrint;shivPrint(document);}(this,document));