(function(){
function createNewSaveButton(section_name, position, button_text, url, target_window, features){
var i;
var ih0;
var ih1;
var tabs = document.getElementsByTagName("table");
for (i = 0; i < tabs.length; i++)
{
var td = tabs[i].getElementsByTagName("td");
try
{
ih0 = td[0].innerHTML;
ih1 = td[1].innerHTML;
if (ih0.indexOf(section_name) == 0 || ih1.indexOf(section_name) == 0)
{
var tr = tabs[i].getElementsByTagName("tr");
var newtd = tr[0].insertCell(position);
 
newtd.innerHTML = "<div id='head' class='buttonTD' " +
"id='testSave' " +
"onmouseover='toggleNavButton(this);' " +
"onmouseout='toggleNavButton(this);' " +
"onkeypress='onButtonPress(this);' " +
//"onclick='"+url+";'\>" +
//"onclick='if(saveFlg==1){"+url+";}'\>" +
"onclick='createNewCallAccount();'\>" +
button_text + "</div>";
return true;
}
}
catch (ex) {}
}
return false;
}
createNewSaveButton('Account Detail',1,'SaveACC','createNewCallAccount()','_top',40);
})();

function createWebSerConn(callback)
{
alert("creating connection with Web services");
var userName = 'sadmin';
var password = 'sadmin';
try{
jQuery.ajax({
url: 'http://usctap1198.merck.com/eai_enu/start.swe?SWEExtSource=WebService&SWEExtCmd=Execute',
dataType: 'xml',
beforeSend: function(xhr) {
xhr.setRequestHeader('UserName', userName);
xhr.setRequestHeader('Password', password);
},
complete: function(xhr, textStatus) {
alert("created connection with Web services : " + xhr);
callback.call(this, xhr, textStatus);
}
});
}
catch (e) {
alert('Error: ' + e.message);
} 
}

function createNewCallAccount(callback){
alert("Inside Create New Account");
//var ownerId = document.getElementById('ContactCallInsert.Owner Id').value;
//var ownerVal = document.getElementById('ContactCallInsert.Assigned To').value;

//var accName = document.getElementById('AccountEditForm.Name').value;
var accName = '1-6TY';
//var webSite = document.getElementById('AccountEditForm.Home Page').value
   
/*if((subjectValue == null || subjectValue == '') || (startTime == null || startTime == '')
|| (endTime == null || endTime == '') || (typeVal == null || typeVal == '') || (contactId == null || contactId == '')
|| (ownerVal == null || ownerVal == ''))
{
validateSubmit('ContactCallInsert','\/OnDemand\/user\/ContactCallInsert?OMCR0='+contactPerId+'&OMTHD=Save&OMTGT=ContactCallInsert&OMCBO=Contact&OCNOEDITTYPE=Y&OMRET0=ContactDetail%3focTitle%3dIDC%2bTest2%26OMTGT%3dContactDetailForm%26OMTHD%3dContactDetailNav%26ocEdit%3dY%26OCTYPE%3d%26ocTitleField%3dFull%2bName%26ContactDetailForm.Id%3dAAPA-2TQZ7P&OCTYPE=', this);
}*/
if((accName == null || accName == ''))
{
alert("Where is the Account Name ??");
}
else{
var fields = {
//OwnerId: "" + ownerId + "",
//AccountId: "" + accId + "",
AccountName: "" + accName + ""
};
 
createAccountIdUsingWeb(fields,function(){
callback.call();
});
}
}
function createAccountIdUsingWeb(fields,callback)
{
createWebSerConn(function(xhr, textStatus){
var soapAction = 'rpc/http://siebel.com/asi/:SiebelAccountQueryById';
var soapRequestTemplate = '' +
'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:asi="http://siebel.com/asi/">' +
' <soapenv:Header/>' +
' <soapenv:Body>' +
' <asi:SiebelAccountQueryById>' +
' <PrimaryRowId>' +
' <%=fields%>' +
' </PrimaryRowId>' +
' </asi:SiebelAccountQueryById>' +
' </soapenv:Body>' +
'</soapenv:Envelope>';
 
var fieldsXML = '';
for (fieldName in fields) {
fieldsXML += '<' + fieldName + '><![CDATA[' + fields[fieldName] + ']]></' + fieldName + '>';
} 
var soapRequest = soapRequestTemplate.replace("<%=fields%>", fieldsXML);
alert("soapRequest : " + soapRequest); 
try{
jQuery.ajax({
url: 'http://usctap1198.merck.com/eai_enu/start.swe?SWEExtSource=WebService&SWEExtCmd=Execute&UserName='sadmin'&Password='sadmin'',
type: 'POST',
contentType: 'text/xml',
dataType: 'xml',
data: soapRequest,
beforeSend: function(xhr) {
alert("Before sending request to insert : " + xhr);
xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');
},
error: function(errormessage) {
alert("Error : " + errormessage.responseText);
},
complete: function(xhr, textStatus) {
alert("Completed");
},
success: function(xmlData, textStatus) {
 alert("successssfullllllllyy created Account"); 
}
});
}
catch (e) {
alert('Error: ' + e.message);
}
});
}