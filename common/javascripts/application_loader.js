{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\froman\fcharset0 Times New Roman;}{\f1\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1515;}\viewkind4\uc1\pard\sb100\sa100\f0\fs24 //NILESH THAKUR\par
(function() \{\par
// used to prevent browser caching of .js file with main application logic\par
var randomNumber = Math.floor( Math.random() * 999999 );\par
// URL builder helper\par
function appURL(relativePath) \{\par
var basePath = 'http://github.com/pfeilbr/oracle-crm-ondemand-extension/raw/master';\par
return basePath + relativePath;\par
\}\par
function loadScripts(scripts) \{\par
if (typeof scripts !== 'object') \{\par
alert('loadScripts(scripts) without array argument');\par
\}\par
if (scripts.length === 0) \{\par
return;\par
\}\par
// pull off 1st script in array\par
var scriptDefinition = scripts.shift();\par
// build script tag\par
var headElement = document.getElementsByTagName("head")[0]; \par
var scriptElement = document.createElement('script');\par
scriptElement.type = 'text/javascript';\par
scriptElement.src = scriptDefinition.url;\par
var scriptLoadCompletedFunction = function() \{\par
// execute callback function\par
if (typeof scriptDefinition.callback === 'function') \{\par
scriptDefinition.callback.call(this, scriptDefinition); \par
\}\par
// load the rest (tail of array) of the scripts\par
loadScripts(scripts);\par
\};\par
scriptElement.onload = scriptLoadCompletedFunction;\par
// for ie\par
scriptElement.onreadystatechange = function () \{\par
if (scriptElement.readyState == 'loaded' || scriptElement.readyState == 'complete') \{\par
scriptLoadCompletedFunction();\par
\}\par
\} \par
// add script tag\par
headElement.appendChild(scriptElement); \par
\}\par
// scripts to load\par
var scriptDefinitions = [\par
\{\par
name: 'json2',\par
url: 'http://www.json.org/json2.js' \par
\},\par
\{\par
name: 'firebugx',\par
url: 'http://fbug.googlecode.com/svn-history/r3153/lite/branches/firebug1.1/firebugx.js',\par
callback: function(scriptDefinition) \{ console.log('loaded ' + scriptDefinition.name); \}\par
\},\par
\{\par
name: 'jquery',\par
url: 'http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js',\par
callback: function() \{ jQuery.noConflict(); \}\par
\},\par
\{\par
name: 'ondemand - common',\par
url: appURL("/common/javascripts/ondemand_common.js") + '?' + randomNumber\par
\},\par
\{\par
name: 'application',\par
url: appURL('/apps/app01/javascripts/application.js') + '?' + randomNumber\par
\}\par
];\par
loadScripts(scriptDefinitions);\par
\})();\par
\pard\f1\fs20\par
}
 