{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\froman\fcharset0 Times New Roman;}{\f1\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1515;}\viewkind4\uc1\pard\sb100\sa100\f0\fs24 // sandbox ourselves to guarantee we don't interfere with OnDemand platform --- NILESH THAKUR\par
// JS internals\par
jQuery(function($) \{\par
// bail if we don't have our main lib\par
if (typeof jQuery === 'undefined') \{\par
alert('Custom application extension failed: jQuery not available');\par
return;\par
\}\par
function $get(key) \{\par
return $("[id='" + key + "']");\par
\}\par
//***************************************************************************\par
// Plugin Handlers\par
//***************************************************************************\par
var copyPreviousObjectiveHandler = function() \{\par
var ownerId = $get('ContactCallInsert.Owner Id').val();\par
var contactPerId = $get('ContactCallInsert.Contact Per Id').val();\par
var $objectiveInputElement = $get('ContactCallInsert.VONDMED Call');\par
var objectiveValue = $objectiveInputElement.val();\par
// already has a value so don't overwrite\par
if (objectiveValue !== '') \{ return; \}\par
var obj = \{ownerId: ownerId, contactPerId: contactPerId, objectiveValue: objectiveValue\};\par
console.dir(obj);\par
var fields = \{\par
ActivityId: '',\par
PrimaryContactId: " ='" + contactPerId + "' ",\par
PrimaryContactLastName: '',\par
PrimaryContactFirstName: '',\par
Owner: '',\par
AccountId: '',\par
CallType: '',\par
PrimaryContact: '',\par
CreatedBy: '',\par
Location: '',\par
Objective: '',\par
OwnerId: " ='" + ownerId + "' ",\par
Status: '',\par
Type: '',\par
ActivitySubType: '',\par
CreatedDate: '',\par
ModifiedDate: '',\par
Date: '',\par
StartTime: '',\par
EndTime: ''\par
\};\par
odlib.activityQuery(fields, function(data) \{\par
// no previous activities on contact\par
if (data.length === 0) \{\par
return;\par
\}\par
data.sort(function(item1, item2) \{\par
return Date.parse(item1.StartTime) - Date.parse(item2.StartTime);\par
\});\par
var lastObjectiveValue = data[data.length - 1].Objective;\par
$objectiveInputElement.val(lastObjectiveValue);\par
console.dir(data); \par
\});\par
\};\par
var augmentCallDetailsEntry = function() \{\par
var row = "<tr width='100%'>";\par
row += "<td>Product: <select><option></option><option>Singulair</option><option>Hyzaar</option></td>";\par
row += "<td>Priority: <input type='text' size='1'></input></td>";\par
row += "<td>Indication: <select><option></option><option>Allergy</option><option>Asthma</option></td>";\par
row += "<td>Issues: <select><option></option><option>Side effects</option><option>Efficacy</option></td>";\par
row += "<td><input type='button' name='delete' value='delete' onclick='jQuery(this).parent().parent().remove()'></input></td>";\par
row += "</tr>";\par
var html = "<div>";\par
html += "<table id='mrk_details'>";\par
html += row;\par
html += "</table>";\par
html += "</div>";\par
var e = jQuery("[class='buttonChildTitleBarTD']").filter("[id^='CallsProdDetail']").get(0);\par
e.onclick = function() \{\};\par
jQuery("[class='buttonChildTitleBarTD']").filter("[id^='CallsProdDetail']").click(function() \{\par
if ( jQuery("#mrk_details").size() === 0 ) \{\par
jQuery("#CallsProdDetailChildListDiv").next().replaceWith(html);\par
\} else \{\par
jQuery("#mrk_details").append(row);\par
\}\par
\}); \par
\};\par
//***************************************************************************\par
// Plugin Manager\par
//***************************************************************************\par
function PluginManager(pluginDefinitions) \{ this.pluginDefinitions = pluginDefinitions; \}\par
PluginManager.prototype.applyPlugins = function() \{\par
// find out where we're at within the OnDemand application based on the URL\par
var pathname = window.location.pathname;\par
var index = pathname.lastIndexOf('/');\par
var pageName = pathname.substring(index + 1);\par
// apply plugins based on the URL pattern match\par
$.each(this.pluginDefinitions, function(index, plugin) \{ \par
console.log('checking plugin match: ' + plugin.name);\par
if (pathname.match(plugin.invokeOnPattern)) \{\par
console.log('invoking plugin: ' + plugin.name);\par
if (plugin.requiresLogin) \{\par
odlib.login(function(xhr, textStatus) \{\par
plugin.handler.call(plugin);\par
\});\par
\} else \{\par
plugin.handler.call(plugin);\par
\}\par
\}\par
\});\par
\}\par
//***************************************************************************\par
// Plugin Definitions\par
//***************************************************************************\par
var pluginsDefinitions = [\par
\{\par
name: 'Copy Previous Objective',\par
invokeOnPattern: /ContactCallInsert/ig,\par
handler: copyPreviousObjectiveHandler,\par
requiresLogin: true\par
\},\par
\{\par
name: 'Augment Call Details Entry',\par
invokeOnPattern: /ContactCallDetail/ig,\par
handler: augmentCallDetailsEntry,\par
requiresLogin: false\par
\}\par
];\par
//***************************************************************************\par
// Application Logic Entry Point\par
//***************************************************************************\par
// find out where we're at in OnDemand\par
function applyPlugins() \{\par
var pluginManager = new PluginManager(pluginsDefinitions);\par
pluginManager.applyPlugins();\par
\}\par
window.applyPlugins = applyPlugins;\par
applyPlugins();\par
\});\par
/*\par
var fields = \{\par
ActivityId: '',\par
PrimaryContactId: " ='" + contactPerId + "' ",\par
PrimaryContactLastName: '',\par
PrimaryContactFirstName: '',\par
Owner: '',\par
AccountId: '',\par
CallType: '',\par
PrimaryContact: '',\par
CreatedBy: '',\par
Location: '',\par
Objective: '',\par
OwnerId: " ='" + ownerId + "' ",\par
Status: '',\par
Type: '',\par
ActivitySubType: '',\par
CreatedDate: '',\par
ModifiedDate: '',\par
Date: '',\par
StartTime: '',\par
EndTime: ''\par
\};\par
if (pageName === 'ContactCallDetail') \{\par
var valueLabel = $( $("td:contains('Objective')")[1] ).next();\par
// TODO: implement objective exists logic\par
var currentCallObjectiveExists = $.trim( valueLabel.text() ) !== '';\par
if (!currentCallObjectiveExists) \{\par
// autopopulate Objective with previous call objective\par
valueLabel.mouseover();\par
valueLabel.click();\par
var inlineEditor = jQuery('.iled');\par
inlineEditor.val((new Date()).toString() + ': last objective' );\par
var okButton = inlineEditor.parent().next().children().get(0);\par
okButton.click();\par
valueLabel.mouseout();\par
\}\par
\}\par
odlib.activityQuery(fields, function(data) \{\par
alert( JSON.stringify(data) );\par
console.dir(data);\par
\});\par
var userFields = \{AccountName:''\};\par
var entities = [\par
\{\par
name: 'Account',\par
fields: \{AccountName: ''\}\par
\},\par
\{\par
name: 'Contact',\par
fields: \{ContactFullName: '', ContactId: ''\}\par
\},\par
\{\par
name: 'User',\par
fields: \{UserLoginId: '', UserId: ''\}\par
\}\par
];\par
jQuery.each(entities, function(index, entity) \{\par
odlib.entityQuery(entity.name, entity.fields, function(data) \{\par
console.log(entity.name + ' count = ' + data.length);\par
\}); \par
\});\par
odlib.entityQuery('Contact', \{ContactFullName: '', ContactId: ''\}, function(data) \{\par
console.dir(data);\par
\});\par
odlib.user_login(userName, password, function() \{\par
var userFields = ['FirstName', 'LastName'];\par
console.log('begin user_login');\par
odlib.query_user(userFields, function(data) \{\par
console.dir(data);\par
\});\par
console.log('end user_login'); \par
\});\par
*/\par
\pard\f1\fs20\par
}
 