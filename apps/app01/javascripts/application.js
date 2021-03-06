//sandbox ourselves to guarantee we don't interfere with OnDemand platform NILESH THAKUR
// JS internals
jQuery(function($) {
// bail if we don't have our main lib
if (typeof jQuery === 'undefined') {
alert('Custom application extension failed: jQuery not available');
return;
}
function $get(key) {
return $("[id='" + key + "']");
}
//***************************************************************************
// Plugin Handlers
//***************************************************************************
//Trying to Get Product Detail
var InsertProduct = function() {
odlib.add_header_button('Call Details',2,'NILESH','https://secure-ausomxapa.crmondemand.com/OnDemand/user/Homepage','_top',40);

var newTable = "<tr><td colspan='4'><table class='ctb' cellspacing='0' cellpadding='0'><tr><td>Products Detailed</td><td><div class='buttonChildTitleBarTD'>New</div></td><td width='100%'></td></tr></table></td></tr>";
	//jQuery("#childviewlayout").append(newTable);
	jQuery("[id='ContactCallInsert.VONDMED Next Call']").parent().parent().parent().append(newTable);
	alert("Added new section");
	
/*var row = "<tr width='100%'>";
row += "<td>Product: <select><option></option><option>Singulair</option><option>Hyzaar</option></td>";
row += "<td>Priority: <input type='text' size='1'></input></td>";
row += "<td>Indication: <select><option></option><option>Allergy</option><option>Asthma</option></td>";
row += "<td>Issues: <select><option></option><option>Side effects</option><option>Efficacy</option></td>";
row += "<td><input type='button' name='delete' value='delete' onclick='jQuery(this).parent().parent().remove()'></input></td>";
row += "<td><input type='button' name='save' value='save' onclick='odlib.saveProdDetail();'></input></td>";
row += "</tr>";
var html = "<div>";
html += "<table id='mrk_details'>";
html += row;
html += "</table>";
html += "</div>";
var e = jQuery("[class='buttonChildTitleBarTD']").filter("[id^='CallsProdDetail']").get(0);
e.onclick = function() {};
jQuery("[class='buttonChildTitleBarTD']").filter("[id^='CallsProdDetail']").click(function() 
{
if ( jQuery("#mrk_details").size() === 0 ) 
{
jQuery("#CallsProdDetailChildListDiv").next().replaceWith(html);
} 
else 
{
jQuery("#mrk_details").append(row);
}
}); */


};
//Trying to Populate the Subject Field
var copyPreviousSubjectHandler = function() {
var ownerId = $get('ContactCallInsert.Owner Id').val();
var contactPerId = $get('ContactCallInsert.Contact Per Id').val();
var $subjectInputElement = $get('ContactCallInsert.Description');
var subjectValue = $subjectInputElement.val();
// already has a value so don't overwrite
if (subjectValue !== '') { return; }
var obj = {ownerId: ownerId, contactPerId: contactPerId, subjectValue: subjectValue};
console.dir(obj);
var fields = {
ActivityId: '',
PrimaryContactId: " ='" + contactPerId + "' ",
PrimaryContactLastName: '',
PrimaryContactFirstName: '',
Owner: '',
AccountId: '',
CallType: '',
PrimaryContact: '',
CreatedBy: '',
Location: '',
Objective: '',
Subject: '',
OwnerId: " ='" + ownerId + "' ",
Status: '',
Type: '',
ActivitySubType: '',
CreatedDate: '',
ModifiedDate: '',
Date: '',
StartTime: '',
EndTime: ''
};
odlib.activityQuery(fields, function(data) {
// no previous activities on contact
if (data.length === 0) {
return;
}
data.sort(function(item1, item2) {
return Date.parse(item1.StartTime) - Date.parse(item2.StartTime);
});
var lastSubjectValue = data[data.length - 1].Subject;
$subjectInputElement.val(lastSubjectValue);
console.dir(data);
});
};
var copyPreviousObjectiveHandler = function() {
var ownerId = $get('AccountCallInsert.Owner Id').val();
var contactPerId = $get('AccountCallInsert.Contact Per Id').val();
var $objectiveInputElement = $get('AccountCallInsert.VONDMED Call');
var objectiveValue = $objectiveInputElement.val();
// already has a value so don't overwrite
if (objectiveValue !== '') { return; }
var obj = {ownerId: ownerId, contactPerId: contactPerId, objectiveValue: objectiveValue};
console.dir(obj);
var fields = {
ActivityId: '',
PrimaryContactId: " ='" + contactPerId + "' ",
PrimaryContactLastName: '',
PrimaryContactFirstName: '',
Owner: '',
AccountId: '',
CallType: '',
PrimaryContact: '',
CreatedBy: '',
Location: '',
Objective: '',
OwnerId: " ='" + ownerId + "' ",
Status: '',
Type: '',
ActivitySubType: '',
CreatedDate: '',
ModifiedDate: '',
Date: '',
StartTime: '',
EndTime: ''
};
odlib.activityQuery(fields, function(data) {
// no previous activities on contact
if (data.length === 0) {
return;
}
data.sort(function(item1, item2) {
return Date.parse(item1.StartTime) - Date.parse(item2.StartTime);
});
var lastObjectiveValue = data[data.length - 1].Objective;
$objectiveInputElement.val(lastObjectiveValue);
console.dir(data);
});
};
var copyContactPreviousObjectiveHandler = function() {
var ownerId = $get('ContactCallInsert.Owner Id').val();
var contactPerId = $get('ContactCallInsert.Contact Per Id').val();
var $objectiveInputElement = $get('ContactCallInsert.VONDMED Call');
var objectiveValue = $objectiveInputElement.val();
// already has a value so don't overwrite
if (objectiveValue !== '') { return; }
var obj = {ownerId: ownerId, contactPerId: contactPerId, objectiveValue: objectiveValue};
console.dir(obj);
var fields = {
ActivityId: '',
PrimaryContactId: " ='" + contactPerId + "' ",
PrimaryContactLastName: '',
PrimaryContactFirstName: '',
Owner: '',
AccountId: '',
CallType: '',
PrimaryContact: '',
CreatedBy: '',
Location: '',
Objective: '',
OwnerId: " ='" + ownerId + "' ",
Status: '',
Type: '',
ActivitySubType: '',
CreatedDate: '',
ModifiedDate: '',
Date: '',
StartTime: '',
EndTime: ''
};
odlib.activityQuery(fields, function(data) {
// no previous activities on contact
if (data.length === 0) {
return;
}
data.sort(function(item1, item2) {
return Date.parse(item1.StartTime) - Date.parse(item2.StartTime);
});
var lastObjectiveValue = data[data.length - 1].Objective;
$objectiveInputElement.val(lastObjectiveValue);
console.dir(data);
});
};
var augmentCallDetailsEntry = function() 
{
var row = "<tr width='100%'>";
row += "<td>Product: <select><option></option><option>Singulair</option><option>Hyzaar</option></td>";
row += "<td>Priority: <input type='text' size='1'></input></td>";
row += "<td>Indication: <select><option></option><option>Allergy</option><option>Asthma</option></td>";
row += "<td>Issues: <select><option></option><option>Side effects</option><option>Efficacy</option></td>";
row += "<td><input type='button' name='delete' value='delete' onclick='jQuery(this).parent().parent().remove()'></input></td>";
row += "<td><input type='button' name='save' value='save' onclick='odlib.saveProdDetail();'></input></td>";
row += "</tr>";
var html = "<div>";
html += "<table id='mrk_details'>";
html += row;
html += "</table>";
html += "</div>";
var e = jQuery("[class='buttonChildTitleBarTD']").filter("[id^='CallsProdDetail']").get(0);
e.onclick = function() {};
jQuery("[class='buttonChildTitleBarTD']").filter("[id^='CallsProdDetail']").click(function() {
if ( jQuery("#mrk_details").size() === 0 ) {
jQuery("#CallsProdDetailChildListDiv").next().replaceWith(html);
} else {
jQuery("#mrk_details").append(row);
}
});
};
//***************************************************************************
// Plugin Manager
//***************************************************************************
function PluginManager(pluginDefinitions) { this.pluginDefinitions = pluginDefinitions; }
PluginManager.prototype.applyPlugins = function() {
// find out where we're at within the OnDemand application based on the URL
var pathname = window.location.pathname;
var index = pathname.lastIndexOf('/');
var pageName = pathname.substring(index + 1);
// apply plugins based on the URL pattern match
$.each(this.pluginDefinitions, function(index, plugin) {
console.log('checking plugin match: ' + plugin.name);
if (pathname.match(plugin.invokeOnPattern)) {
console.log('invoking plugin: ' + plugin.name);
if (plugin.requiresLogin) {
odlib.login(function(xhr, textStatus) {
plugin.handler.call(plugin);
});
} else {
plugin.handler.call(plugin);
}
}
});
}
//***************************************************************************
// Plugin Definitions
//***************************************************************************
var pluginsDefinitions = [
{
name: 'Copy Previous Objective',
invokeOnPattern: /AccountCallInsert/ig,
handler: copyPreviousObjectiveHandler,
requiresLogin: true
},
{
name: 'Copy Previous Objective',
invokeOnPattern: /ContactCallInsert/ig,
handler: copyContactPreviousObjectiveHandler,
requiresLogin: true
},
{
name: 'Augment Call Details Entry',
invokeOnPattern: /ContactCallDetail/ig,
handler: augmentCallDetailsEntry,
requiresLogin: false
},
//Trying to populate the Subject
{
name: 'Copy Previous Subject',
invokeOnPattern: /ContactCallInsert/ig,
handler: copyPreviousSubjectHandler,
requiresLogin: true
},
{
name: 'Insert Product',
invokeOnPattern: /ContactCallInsert/ig,
handler: InsertProduct,
requiresLogin: true
}
];
//***************************************************************************
// Application Logic Entry Point
//***************************************************************************
// find out where we're at in OnDemand
function applyPlugins() {
var pluginManager = new PluginManager(pluginsDefinitions);
pluginManager.applyPlugins();
}
window.applyPlugins = applyPlugins;
applyPlugins();
});
