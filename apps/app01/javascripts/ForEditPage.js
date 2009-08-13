{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1515;}\viewkind4\uc1\pard\f0\fs20 (function()\{\par
del_footer_button(1);\par
add_footer_button(1,'Save','saveMidway1()','_top',40);\par
//del_footer_button(2);\par
//add_footer_button2(2,'Save & New Call','saveandnewMidway1()','_top',40);\par
\par
delete_button('Call Detail', 1);\par
//delete_button('Call Details', 1);\par
createNewSaveButton('Call Detail',1,'Save','saveMidway1()','_top',40);\par
//createNewSaveButton2('Call Details',2,'Save & New Call','saveandnewMidway1()','_top',40);\par
addProdDeailedSec();\par
addSamplesDropSec();\par
\par
function del_footer_button(position) \{\par
    var i;\par
    var mytables = document.getElementsByTagName("table");\par
    for (i = 0; i < mytables.length;i++) \{\par
        try \{\par
\tab\tab     if (mytables[i].className == "footbar") \par
\tab\tab\tab\{\par
\tab\tab\tab   var mytr = mytables[i].getElementsByTagName("tr");\par
\tab\tab\tab   var newtd = mytr[0].deleteCell(position);\par
            \}\par
        \} catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
    return false;\par
\}\par
\par
function add_footer_button(position, button_text, url, target_window, features) \{\par
    var i;\par
    var mytables = document.getElementsByTagName("table");\par
    for (i = 0; i < mytables.length; i++) \{\par
        try \{\par
            if (mytables[i].className == "footbar") \{\par
                 var mytr = mytables[i].getElementsByTagName("tr");\tab\tab\tab\tab\par
                 var newtd = mytr[0].insertCell(position);\par
                    newtd.innerHTML = "<div id='foot' class='buttonTD' " +\par
                    "onmouseover='toggleNavButton(this);' " +\par
                    "onmouseout='toggleNavButton(this);' " +\par
\tab\tab\tab\tab\tab "onclick='if(saveFlg==1)\{"+url+";\}'\\>" +\par
                   // "onclick=\\"window.open('" + url + "', '" + target_window + "', '" + features + "');\\" >" +\par
                    button_text + "</div>";\par
                return true;\par
            \}\par
        \} catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
    return false;\par
\}\par
/*\par
function add_footer_button2(position, button_text, url, target_window, features) \{\par
    var i;\par
    var mytables = document.getElementsByTagName("table");\par
    for (i = 0; i < mytables.length; i++) \{\par
        try \{\par
            if (mytables[i].className == "footbar") \{\par
                 var mytr = mytables[i].getElementsByTagName("tr");\tab\tab\tab\tab\par
                 var newtd = mytr[0].insertCell(position);\par
                    newtd.innerHTML = "<div id='foot2' class='buttonTD' " +\par
                    "onmouseover='toggleNavButton(this);' " +\par
                    "onmouseout='toggleNavButton(this);' " +\par
\tab\tab\tab\tab\tab "onclick='if(saveFlg==1)\{"+url+";\}'\\>" +\par
                   // "onclick=\\"window.open('" + url + "', '" + target_window + "', '" + features + "');\\" >" +\par
                    button_text + "</div>";\par
                return true;\par
            \}\par
        \} catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
    return false;\par
\}\par
*/\par
function delete_button(section_name, position) \{\par
    var i;\par
    var ih;\par
    var tabs = document.getElementsByTagName("table");\par
    for (i = 0; i < tabs.length; i++) \{\par
        var td = tabs[i].getElementsByTagName("td");\par
        try \{\par
            // This can generate an exception we ignore, if so it means\par
            // it's not the ones we're looking for\par
            ih = td[0].innerHTML;\par
            if (ih.indexOf(section_name) == 0) \{\par
                var tr = tabs[i].getElementsByTagName("tr");\par
                tr[0].deleteCell(position);\par
                return true;\par
            \}\par
        \} catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
    return false;\par
\}\par
\par
function createNewSaveButton(section_name, position, button_text, url, target_window, features)\{\par
\tab var i;\par
\tab var ih0;\par
\tab var ih1;\par
\tab var tabs = document.getElementsByTagName("table");\par
\tab for (i = 0; i < tabs.length; i++) \par
\tab\{\par
\tab   var td = tabs[i].getElementsByTagName("td");\par
\tab\tab try \par
\tab\tab   \{\par
\tab\tab\tab ih0 = td[0].innerHTML;\par
\tab\tab\tab ih1 = td[1].innerHTML;\par
\tab\tab\tab if (ih0.indexOf(section_name) == 0 || ih1.indexOf(section_name) == 0) \par
\tab\tab\tab\tab\{\par
\tab\tab\tab\tab var tr = tabs[i].getElementsByTagName("tr");\par
\tab\tab\tab\tab var newtd = tr[0].insertCell(position);\par
\par
\tab\tab\tab\tab newtd.innerHTML = "<div id='head' class='buttonTD' " +\par
\tab\tab\tab\tab "id='testSave' " +\par
\tab\tab\tab\tab "onmouseover='toggleNavButton(this);' " +\par
\tab\tab\tab\tab "onmouseout='toggleNavButton(this);' " +\par
\tab\tab\tab\tab "onkeypress='onButtonPress(this);' " +\par
\tab\tab\tab\tab //"onclick='"+url+";'\\>" +\par
\tab\tab\tab\tab "onclick='if(saveFlg==1)\{"+url+";\}'\\>" +\par
\tab\tab\tab\tab button_text + "</div>";\par
\tab\tab\tab\tab return true;\par
\tab\tab\tab\}\par
\tab\tab\} \par
\tab\tab catch (ex) \{\}\par
\tab\}\par
\tab return false;\par
\}\par
/*\par
function createNewSaveButton2(section_name, position, button_text, url, target_window, features)\{\par
\tab var i;\par
\tab var ih0;\par
\tab var ih1;\par
\tab var tabs = document.getElementsByTagName("table");\par
\tab for (i = 0; i < tabs.length; i++) \par
\tab\{\par
\tab   var td = tabs[i].getElementsByTagName("td");\par
\tab\tab try \par
\tab\tab   \{\par
\tab\tab\tab ih0 = td[0].innerHTML;\par
\tab\tab\tab ih1 = td[1].innerHTML;\par
\tab\tab\tab if (ih0.indexOf(section_name) == 0 || ih1.indexOf(section_name) == 0) \par
\tab\tab\tab\tab\{\par
\tab\tab\tab\tab var tr = tabs[i].getElementsByTagName("tr");\par
\tab\tab\tab\tab var newtd = tr[0].insertCell(position);\par
\tab\tab\tab\tab newtd.innerHTML = "<div id='head2' class='buttonTD' " +\par
\tab\tab\tab\tab "id='testSave' " +  \par
\tab\tab\tab\tab "onmouseover='toggleNavButton(this);' " +\par
\tab\tab\tab\tab "onmouseout='toggleNavButton(this);' " +\par
\tab\tab\tab\tab "onkeypress='onButtonPress(this);' " +\par
\tab\tab\tab\tab //"onclick='"+url+";'\\>" +\par
\tab\tab\tab\tab "onclick='if(saveFlg==1)\{"+url+";\}'\\>" +\par
\tab\tab\tab\tab button_text + "</div>";\par
\tab\tab\tab\tab return true;\par
\tab\tab\tab\}\par
\tab\tab\} \par
\tab\tab catch (ex) \{\}\par
\tab\}\par
\tab return false;\par
\}\par
*/\par
\par
function addSamplesDropSec()\{\par
\tab\par
\tab var newTable = "<tr><td colspan='5'>";\par
\tab newTable += "<table class='ctb' cellspacing='0' cellpadding='0' id='sampleDrop'>";\par
\tab newTable += "<tr><td>Samples Dropped</td>";\par
\tab newTable += "<td style='align:left'><div class='buttonChildTitleBarTD' id='sampleDropdiv' onclick='addNewRowSampleDrop();'>New</div></td>";\par
\tab newTable += "<td width='100%'></td></tr>";\par
\tab newTable += "<tr><td colspan='3'></td></tr></table></td></tr>";\par
\tab jQuery("[id='ContactCallEditForm.VONDMED Next Call']").parent().parent().parent().append(newTable);\par
\}\par
\par
function addProdDeailedSec()\{\par
\tab var newTable = "<tr><td colspan='5'>";\par
\tab newTable += "<table class='ctb' cellspacing='0' cellpadding='0' id='prodDetail'>";\par
\tab newTable += "<tr><td>Products Detailed</td>";\par
\tab newTable += "<td style='align:left'><div class='buttonChildTitleBarTD' id='testdiv' onclick='addNewRowProdDet();'>New</div></td>";\par
\tab newTable += "<td width='100%'></td></tr>";\par
\tab newTable += "<tr><td colspan='3'></td></tr></table></td></tr>";\par
\tab jQuery("[id='ContactCallEditForm.VONDMED Next Call']").parent().parent().parent().append(newTable);\par
\}\par
\par
\})();\par
\par
function addNewRowSampleDrop()\par
\{\par
\tab var row = "<tr width='100%'><td colspan='3'>";\par
\tab row += "<table>";\par
\tab row += "<tr>";\par
\tab //row += "<td>Product Category </td>";\par
\tab //row += "<td><input name='CallSampDropNew.Primary Product Line Name' id='CallSampDropNew.Primary Product Line Name' maxlength='100' class='inputReadOnly' tabindex='-1' readonly='readonly' type='text' value='' size='20' /></td>";\par
\tab row += "<td><span style='color:red' class='requiredText'>Product* </span></td>";\par
\tab row += "<td><select STYLE='width: 130px' id='prodNameSamDrop'><option value='none'></option><option value='Arcoxia 120mg'>Arcoxia 120mg</option><option value='Crocin'>Crocin</option><option value='Omez'>Omez</option><option value='Singulair 10x100mg'>Singulair 10x100mg</option><option value='Singulair 20x40mg'>Singulair 20x40mg</option></select></td>";\par
\tab row += "<td><span id=div3 style='color:red' style='visibility:hidden' class='requiredText'>required</span></td>";\par
\tab row += "<td>Lot # </td>";\par
\tab row += "<td><input name='CallSampDropNew.LOT Name' size='5' maxlength='20' type='text' value='' class='inputControl' id='CallSampDropNew.LOT Name'/></td></td>";\par
\tab row += "<td><span style='color:red' class='requiredText'>Quantity* </span></td>";\par
\tab row += "<td><input name='CallSampDropNew.Quantity' size='20' type='text' value='' class='inputControl' id='CallSampDropNew.Quantity' /></td>";\par
\tab row += "<td><span id=div4 style='color:red' style='visibility:hidden' class='requiredText'>required</span></td>";\par
\tab row += "<td><input type='button' name='delete' id='ROWID' value='delete' onclick= rowDelete();></input></td>";\par
\tab row += "</tr></table></td></tr>";\tab\par
\tab jQuery("#sampleDrop").append(row);\par
\tab ctrowsamp++; \par
    //alert("ROW COUNTER Initial ctrowsamp : "+ctrowsamp);\par
\}\par
\par
function rowDelete() \{\par
ctrowsamp--;\par
jQuery("#ROWID").parent().parent().parent().parent().parent().remove();\par
\}\par
\par
\par
function addNewRowProdDet()\{\par
\tab var row = "<tr width='100%'><td colspan='3'>";\par
\tab row += "<table>";\par
\tab row += "<tr>";\par
\tab row += "<td><span style='color:red' class='requiredText'>Product* </span></td>";\par
\tab row += "<td><select STYLE='width: 130px' id='prodNamePrDet'><option value='none'></option><option value='Arcoxia 120mg'>Arcoxia 120mg</option><option value='Crocin'>Crocin</option><option value='Omez'>Omez</option><option value='Singulair 10x100mg'>Singulair 10x100mg</option><option value='Singulair 20x40mg'>Singulair 20x40mg</option></select></td>";\par
\tab row += "<td><span id=div1 style='color:red' style='visibility:hidden' class='requiredText'>required</span></td>";\par
\tab row += "<td>Priority: </td>";\par
\tab row += "<td><input name=CallProdDetailNew.Priority size='5' tabindex='4' type='text' value='' class=inputControl id='CallProdDetailNew.Priority' /></td>";\par
\tab row += "<td><span style='color:red' class='requiredText'>Indication*:</span></td>";\par
\tab row += "<td><select name='CallProdDetailNew.Indication' tabindex='5' onchange=onDropDownChange (this); class=inputControl id='CallProdDetailNew.Indication'><option /><option value='Allergy'>Allergy</option><option value='Asthma'>Asthma</option><option value='Arrhythmia'>Arrhythmia</option><option value='Heart Failure'>Heart Failure</option><option value='Syncope'>Syncope</option><option value='Other'>Other</option></select></td>";\par
\tab row += "<td><span id=div2 style='color:red' style='visibility:hidden' class='requiredText'>required</span></td>";\par
\tab row += "<td>Issues:</td>";\par
\tab row += "<td><select name='CallProdDetailNew.Issue' tabindex='6' onchange=onDropDownChange (this); class='inputControl' id='CallProdDetailNew.Issue'><option /><option value='Side Effects'>Side Effects</option><option value='Efficacy'>Efficacy</option><option value='Cost vs. Generics'>Cost vs. Generics</option><option value='Price'>Price</option></select></td>";\par
\tab row += "<td><input type='button' name='delete' id='ROWID2' value='delete' onclick=rowDelete2();></input></td>";\par
\tab row += "</tr></table></td></tr>";\tab\par
\tab jQuery("#prodDetail").append(row);\par
\tab ctrowprod++; \par
   // alert("ROW COUNTER Initial ctrowprod : "+ctrowprod);\par
\}\par
\par
function rowDelete2()\{\par
ctrowprod--;\par
jQuery("#ROWID2").parent().parent().parent().parent().parent().remove();\par
\}\par
\par
function saveMidway1()\par
\{\par
document.getElementById('foot').disabled=true;\par
document.getElementById('head').disabled=true;\par
//document.getElementById('foot2').disabled=true;\par
//document.getElementById('head2').disabled=true;\par
saveFlg=0;\par
//alert('Inside saveMidway1');\par
saveAllDetails();\par
\}\par
function saveMidway2()\par
\{\par
document.getElementById('foot').disabled=false;\par
document.getElementById('head').disabled=false;\par
//document.getElementById('foot2').disabled=false;\par
//document.getElementById('head2').disabled=false;\par
//alert('Inside SaveMidway2');\par
saveFlg=1;\par
\}\par
\par
/*\par
function saveandnewMidway1()\par
\{\par
newbutton=1;\par
document.getElementById('foot2').disabled=true;\par
document.getElementById('head2').disabled=true;\par
document.getElementById('foot').disabled=true;\par
document.getElementById('head').disabled=true;\par
saveFlg=0;\par
saveAndNewAllDetails();\par
\}\par
function saveandnewMidway2()\par
\{\par
document.getElementById('foot2').disabled=false;\par
document.getElementById('head2').disabled=false;\par
document.getElementById('foot').disabled=false;\par
document.getElementById('head').disabled=false;\par
saveFlg=1;\par
//return;\par
\}\par
*/\par
\par
\par
function saveAllDetails()\par
\{\par
\tab createNewCallActivity(function() \{\par
\tab\tab loadCallDetailsPage();\par
\tab\});\par
\}\par
/*\par
function saveAndNewAllDetails()\par
\{\par
\tab //alert("Inside Save All details");\par
\tab createNewCallActivity(function() \{\par
\tab //var pathname = window.location;\par
\tab //alert(pathname);\tab\par
\tab newcall();\par
\tab\});\par
\}\par
\par
function newcall()\{\par
window.location.reload();\par
//doNavigate("https://secure-ausomxapa.crmondemand.com/OnDemand/user/ContactCallInsert?OMCR0=AAPA-2WJ5PW&OMTGT=ContactCallInsert&OMTHD=ActivityNewNav&OMCBO=Contact&OMRET0=ContactDetail%3focTitle%3dIDC%2bTest3%26OMTGT%3dContactDetailForm%26OMTHD%3dContactDetailNav%26ocEdit%3dY%26OCTYPE%3d%26ocTitleField%3dFull%2bName%26ContactDetailForm.Id%3dAAPA-2WJ5PW&OCNOEDITTYPE=Y&OCTYPE=")\par
\}\par
*/\par
\par
function createWebSerConn(callback)\par
\{\par
\tab //alert("creating connection with Web services");\par
\tab var userName = 'MERCKTEST_CTE01/pfeil';\par
\tab var password = 'method00';\par
\tab try\{\par
\tab\tab jQuery.ajax(\{\par
\tab\tab    url: '/Services/Integration?command=login',\par
\tab\tab    dataType: 'xml',\par
\tab\tab    beforeSend: function(xhr) \{\par
\tab\tab\tab    xhr.setRequestHeader('UserName', userName);\par
\tab\tab\tab    xhr.setRequestHeader('Password', password);               \par
\tab\tab    \},\par
\tab\tab    complete: function(xhr, textStatus) \{\par
\tab\tab\tab\tab //alert("created connection with Web services : " + xhr);\par
\tab\tab\tab\tab callback.call(this, xhr, textStatus);    \par
\tab\tab    \}\par
\tab    \});\tab\par
\tab\}\par
\tab catch (e) \{\par
\tab\tab alert('Error: ' + e.message);\par
\tab\}\par
\par
\}\par
\par
function getListData(type, xmlData) \{\par
\tab var arr = [];\par
\tab jQuery(type, xmlData).each(function(index, item) \{\par
\tab\tab var obj = \{\};\par
\tab\tab jQuery(item).children().each(function(index, item) \{\par
\tab\tab   var fieldName = jQuery(item).get(0).tagName;\par
\tab\tab   var fieldValue = jQuery(item).text();\par
\tab\tab   obj[fieldName] = fieldValue;\par
\tab\tab\});\par
\tab\tab arr.push(obj);\par
\tab\});\par
\tab return arr;    \par
\}\par
\par
function loadCallDetailsPage()\par
\{\par
\tab //alert("will load the Call Details page");\par
\tab var e= $(".vlk");\par
\tab var f= e[0];\par
\tab doNavigate(f);\par
\}\par
\par
function createNewCallActivity(callback)\{\par
\tab //alert("Inside Create New Activity : This will return Activity Id");\par
\tab var ownerId = document.getElementById('ContactCallEditForm.Owner Id').value;\par
\tab var contactPerId = document.getElementById('ContactCallEditForm.Id').value;\par
\tab //var contactPerId = 'AAPA-2YBYRF';\par
\tab var subjectValue = document.getElementById('ContactCallEditForm.Description').value;\par
\tab var objectiveVal = document.getElementById('ContactCallEditForm.VONDMED Call').value;\par
\tab var startTime = document.getElementById('ContactCallEditForm.Planned').value;\par
\tab var accId = document.getElementById('ContactCallEditForm.Account Id').value;\par
\tab //var addressVal = document.getElementById('ContactCallEditForm.Personal Location Id').value;\par
\tab var smartCallId = document.getElementById('ContactCallEditForm.Template Id').value;\par
\tab var endTime = document.getElementById('ContactCallEditForm.Planned Completion').value;\par
\tab var typeVal = document.getElementById('ContactCallEditForm.Type').value;\par
\tab var statusVal = document.getElementById('ContactCallEditForm.Status').value;\par
\tab var durationVal = document.getElementById('ContactCallEditForm.VONDMED Calc Duration').value;\par
\tab var carrencyVal = document.getElementById('ContactCallEditForm.Currency Code').value;\par
\tab var displayVal = document.getElementById('ContactCallEditForm.Mod Id').value;\par
\tab var refId = document.getElementById('ContactCallEditForm.Sample Reference Number').value;\par
\tab var costVal = document.getElementById('ContactCallEditForm.Associated Cost').value;\par
\tab var paperSignVal = document.getElementById('ContactCallEditForm.VONDMED Paper Signature').value;\par
\tab var privateVal = document.getElementById('ContactCallEditForm.Private').value;\par
\tab var descVal = document.getElementById('ContactCallEditForm.Comment').value;\par
\tab var nextCallVal = document.getElementById('ContactCallEditForm.VONDMED Next Call').value;\par
\par
\tab var startTimeMod;\tab\par
\tab var endTimeMod;\par
\par
\tab if(startTime != null && (startTime.indexOf(' PM') > -1))\{\par
\tab\tab startTimeMod = startTime.replace(' PM', ':00');\par
\tab\}\par
\tab else if(startTime != null && (startTime.indexOf(' AM') > -1))\{\par
\tab\tab startTimeMod = startTime.replace(' AM', ':00');\tab\par
\tab\}\par
\tab else\{\par
\tab\tab startTimeMod = '';\par
\tab\}\par
\par
\tab if(endTime != null && (endTime.indexOf(' PM') > -1))\{\par
\tab\tab endTimeMod = endTime.replace(' PM', ':00');\par
\tab\}\par
\tab else if(endTime != null && (endTime.indexOf(' AM') > -1))\{\par
\tab\tab endTimeMod = endTime.replace(' AM', ':00');\tab\par
\tab\}\par
\tab else\{\par
\tab\tab endTimeMod = '';\par
\tab\}\par
\par
\tab var contactId = $("input[id='ContactCallEditForm.Contact Full Name']").val();\par
\tab var ownerVal = $("input[id='ContactCallEditForm.Assigned To']").val();\par
\tab\par
\tab var prodIDC='Test';\par
\tab var prodIDC2='Test';\par
\tab if(ctrowprod!=0)\{\par
\tab prodIDC= document.getElementById('prodNamePrDet').value;\par
\tab prodIDC2= document.getElementById('CallProdDetailNew.Indication').value;\par
    //alert("prodIDC fetched: "+prodIDC);\par
\tab\}\par
\tab\par
\tab var sampIDC='Test';\par
\tab var sampIDC2='Test';\par
\tab if(ctrowsamp!=0)\{\par
\tab sampIDC= document.getElementById('prodNameSamDrop').value;\par
\tab sampIDC2= document.getElementById('CallSampDropNew.Quantity').value;\par
\tab\}\par
\tab\par
\tab if((subjectValue == null || subjectValue == '') || (startTime == null || startTime == '')\par
\tab\tab || (endTime == null || endTime == '') || (typeVal == null || typeVal == '') || (contactId == null || contactId == '') \par
\tab\tab || (ownerVal == null || ownerVal == ''))\par
\tab\{\par
\tab\tab validateSubmit('ContactCallEditForm','\\/OnDemand\\/user\\/ContactCallEditForm?OMCR0='+contactPerId+'&OMTHD=Save&OMTGT=ContactCallEditForm&OMCBO=Contact&OCNOEDITTYPE=Y&OMRET0=ContactDetail%3focTitle%3dIDC%2bTest2%26OMTGT%3dContactDetailForm%26OMTHD%3dContactDetailNav%26ocEdit%3dY%26OCTYPE%3d%26ocTitleField%3dFull%2bName%26ContactDetailForm.Id%3dAAPA-2TQZ7P&OCTYPE=', this);\par
\tab\tab //if(newbutton==1)\par
\tab\tab //    saveandnewMidway2();\par
\tab\tab //else\tab\par
\tab\tab\tab saveMidway2();\par
\tab\}\par
\tab else if ((prodIDC == null || prodIDC == '' || prodIDC == 'none') && (prodIDC2 == null || prodIDC2 == '' || prodIDC2 == 'none'))\par
\tab\{\par
\tab\tab //if(newbutton==1)\par
\tab\tab //    saveandnewMidway2();\par
\tab\tab //else\tab\par
\tab\tab\tab saveMidway2();\par
\tab\tab //alert('inside 2nd elseif');\par
\tab div1.style.visibility="visible";\par
\tab div2.style.visibility="visible";\par
\tab\}\par
\tab else if (prodIDC == null || prodIDC == '' || prodIDC == 'none')\par
\tab\{\tab\par
\tab //alert('Inside 3rd Else if');\par
\tab div1.style.visibility="visible";\par
\tab //if(newbutton==1)\par
\tab\tab //    saveandnewMidway2();\par
\tab\tab //else\tab\par
\tab\tab\tab saveMidway2();\par
\tab\}\par
\tab else if(prodIDC2 == null || prodIDC2 == '' || prodIDC2 == 'none')\par
\tab\{   div2.style.visibility="visible";  \par
\tab //if(newbutton==1)\par
\tab\tab //    saveandnewMidway2();\par
\tab\tab //else\tab\par
\tab\tab\tab saveMidway2();\par
\tab\}\par
\tab else if ((sampIDC == null || sampIDC == '' || sampIDC == 'none') && (sampIDC2 == null || sampIDC2 == '' || sampIDC2 == 'none'))\par
\tab\{\par
\tab\tab //if(newbutton==1)\par
\tab\tab //    saveandnewMidway2();\par
\tab\tab //else\tab\par
\tab\tab\tab saveMidway2();\par
\tab div3.style.visibility="visible"; \par
\tab div4.style.visibility="visible"; \par
\tab\}\par
\tab else if (sampIDC == null || sampIDC == '' || sampIDC == 'none')\par
\tab\{ div3.style.visibility="visible"; \par
\tab //if(newbutton==1)\par
\tab\tab //    saveandnewMidway2();\par
\tab\tab //else\tab\par
\tab\tab\tab saveMidway2();\par
\tab\}\par
\tab else if (sampIDC2 == null || sampIDC2 == '' || sampIDC2 == 'none')\par
\tab\{ div4.style.visibility="visible"; \par
\tab  //if(newbutton==1)\par
\tab\tab //    saveandnewMidway2();\par
\tab\tab //else\tab\par
\tab\tab\tab saveMidway2();\par
\tab\}\par
\tab else\{\par
\tab\tab var fields = \{\par
\tab\tab     ActivityId: "" + contactPerId + "",\par
\tab\tab\tab Objective: "" + objectiveVal + "",\par
\tab\tab\tab Subject: "" + subjectValue + "",\par
\tab\tab\tab OwnerId: "" + ownerId + "",\par
\tab\tab\tab Type: "" + typeVal + "",\par
\tab\tab\tab AccountId: "" + accId + "",\par
\tab\tab\tab SmartCall: "" + smartCallId + "",\par
\tab\tab\tab Status: "" + statusVal + "",\par
\tab\tab\tab Duration:  "" + durationVal + "",\par
\tab\tab\tab CurrencyCode: "" + carrencyVal + "",\par
\tab\tab\tab //Display: "" + displayVal + "",\par
\tab\tab\tab RefNum: "" + refId + "",\par
\tab\tab\tab Cost: "" + costVal + "",\par
\tab\tab\tab PaperSign: "" + paperSignVal + "",\par
\tab\tab\tab Private: "" + privateVal + "",\par
\tab\tab\tab Description: "" + descVal + "",\par
\tab\tab\tab NextCall: "" + nextCallVal + "",\par
\tab\tab\tab StartTime: "" + startTimeMod + "",\par
\tab\tab\tab EndTime: "" + endTimeMod + ""\par
\tab\tab\};\par
\tab\tab\par
\tab /*\tab var fieldsCont = \{\par
\tab\tab\tab ContactId: "" + contactPerId + ""\par
\tab\tab\};*/\par
\tab\tab createActivityIdUsingWeb(fields,function()\{\par
\tab\tab\tab callback.call();\par
\tab\tab\});\tab\par
\tab\}\par
\}\par
\par
function createActivityIdUsingWeb(fields, callback)\par
\{\par
\tab var activityId;\par
\tab //alert('Inside createActivityUsingWeb');\par
\tab createWebSerConn(function(xhr, textStatus)\{\par
\tab\tab var soapAction = 'document/urn:crmondemand/ws/activity/10/2004:Activity_Update';\par
\tab\tab var soapRequestTemplate = '' +\par
\tab\tab\tab '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +\par
\tab\tab\tab '   <soapenv:Header/>' +\par
\tab\tab\tab '   <soapenv:Body>' +\par
\tab\tab\tab '      <ActivityNWS_Activity_Update_Input xmlns="urn:crmondemand/ws/activity/10/2004">' +\par
\tab\tab //\tab '         <ListOfContact>' +\par
\tab\tab //\tab '            <Contact>' +\par
\tab\tab //\tab '               <%=fieldsCont%>' +\par
\tab\tab\tab ' \tab\tab         <ListOfActivity>' +\par
\tab\tab\tab '         \tab\tab\tab <Activity>'\tab +\par
\tab\tab\tab '\tab\tab                <%=fields%>' +\tab\tab\tab\tab\par
\tab\tab\tab '\tab\tab\tab\tab\tab </Activity>' +\tab\tab\tab\tab\par
\tab\tab\tab '         \tab\tab </ListOfActivity>' +\tab\tab\tab\tab\par
\tab\tab //\tab '            </Contact>' +\par
\tab\tab //\tab '         </ListOfContact>' +\par
\tab\tab\tab '      </ActivityNWS_Activity_Update_Input>' +\par
\tab\tab\tab '   </soapenv:Body>' +\par
\tab\tab\tab '</soapenv:Envelope>';\tab\tab\par
\par
\tab\tab var fieldsXML = '';\par
\tab\tab for (fieldName in fields) \{\par
\tab\tab\tab fieldsXML += '<' + fieldName + '><![CDATA[' + fields[fieldName] + ']]></' + fieldName + '>';\par
\tab\tab\}\par
\tab\tab\par
\tab /*\tab var fieldsXMLCont = '';\par
\tab\tab for (fieldNameCont in fieldsCont) \{\par
\tab\tab\tab fieldsXMLCont += '<' + fieldNameCont + '>' + fieldsCont[fieldNameCont] + '</' + fieldNameCont + '>';\par
\tab\tab\}\tab */\par
\par
\tab\tab var soapRequest = soapRequestTemplate.replace("<%=fields%>", fieldsXML);\tab\par
\tab\tab //var soapRequestFinal = soapRequest.replace("<%=fieldsCont%>", fieldsXMLCont);\tab\par
\par
\tab\tab //alert("soapRequest : " + soapRequestFinal);\par
\tab\tab //alert("soapRequest : " + soapRequest);\par
\par
\tab\tab try\{\par
\tab\tab\tab jQuery.ajax(\{\par
\tab\tab\tab\tab\tab\tab url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',\par
\tab\tab\tab\tab\tab\tab type: 'POST',\par
\tab\tab\tab\tab\tab\tab contentType: 'text/xml',\par
\tab\tab\tab\tab\tab\tab dataType: 'xml',\par
\tab\tab\tab\tab\tab\tab data: soapRequest,\par
\tab\tab\tab\tab\tab\tab beforeSend: function(xhr) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("Before sending request to insert : " + xhr);\par
\tab\tab\tab\tab\tab\tab\tab xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');  \par
\tab\tab\tab\tab\tab\tab\},   \par
\tab\tab\tab\tab\tab\tab error: function(errormessage) \{\par
\tab\tab\tab\tab\tab\tab\tab alert("Error : " + errormessage.responseText);\par
\tab\tab\tab\tab\tab\tab\},   \par
\tab\tab\tab\tab\tab\tab complete: function(xhr, textStatus) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("Completed");\par
\tab\tab\tab\tab\tab\tab\},\tab\tab\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab success: function(xmlData, textStatus) \{\par
\tab\tab\tab\tab\tab\tab //\tab alert("successssfullllllllyy created Activity");\par
\tab\tab\tab\tab\tab\tab\tab var items = getListData('Activity', xmlData);\par
\tab\tab\tab\tab\tab\tab\tab //alert("items : " + items);\par
\tab\tab\tab\tab\tab\tab\tab activityId = items[0].ActivityId;\par
\tab\tab\tab\tab\tab\tab\tab //alert("activityId : " + activityId);\par
\tab\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab\tab //createProductDetailInfo(activityId, function()\{\par
\tab\tab\tab\tab\tab\tab\tab //\tab callback.call();\par
\tab\tab\tab\tab\tab\tab\tab midway(activityId, function()\{\par
\tab\tab\tab\tab\tab\tab\tab callback.call();\par
\tab\tab\tab\tab\tab\tab\tab\});\par
\tab\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab\tab //\});\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\});\tab\par
\tab\tab\}\par
\tab\tab catch (e) \{\par
\tab\tab\tab alert('Error: ' + e.message);\par
\tab\tab\}\par
\tab\tab //return true;\par
\tab\});\par
\par
\}\par
function midway(activityId, callback)\par
\{\par
if(ctrowsamp!=0 || ctrowprod!=0)\{\par
//alert("ROW COUNTER before calling ProductDetailInfo SAMPLE: "+ctrowsamp); \par
//alert("ROW COUNTER before calling ProductDetailInfo PRODUCT: "+ctrowprod);\par
//Currently when the below mentioned function is called the 2nd time the Sample is not created as it is taking \par
//the same row twice because of the similar ID tag in the HTML. \par
createProductDetailInfo(activityId, function()\{midway(activityId, function()\{callback.call();\par
\});\});\par
\}\par
else \par
\{\par
callback.call();\par
\}\par
\}\par
\par
function createProductDetailInfo(activityId, callback)\par
\{\par
\tab //alert("Getting Product Info");\par
\tab //counter++;\par
\tab //alert("Productcallinfo Call No." +counter);\par
\tab var productNameProdet;\par
\tab var productNameSamp;\par
\tab var bothPresent = false;\par
\par
\tab if(document.getElementById('prodNamePrDet') != null && document.getElementById('prodNamePrDet') != '')\par
\tab\{\par
\tab\tab productNameProdet = document.getElementById('prodNamePrDet').value;\par
\tab\}\par
\tab if(document.getElementById('prodNameSamDrop') != null && document.getElementById('prodNameSamDrop') != '')\par
\tab\{\par
\tab\tab productNameSamp = document.getElementById('prodNameSamDrop').value;\par
\tab\}\par
\par
\tab if(productNameProdet != null && productNameProdet != '' && productNameSamp != null && productNameSamp != '')\par
\tab\{\par
\tab\tab bothPresent = true;\par
\par
\tab\tab //alert('productNameProdet : ' + productNameProdet);\par
\tab\tab var fieldsProdet = \{\par
\tab\tab\tab ProductId: '',\par
\tab\tab\tab Name: " ='" + productNameProdet + "' "\par
\tab\tab\};\tab\par
\tab\tab callWebServToGetProdInfo(fieldsProdet, activityId, 'ProdDetail', function()\{\par
\tab\tab\tab if(bothPresent == true)\{ \}\par
\tab\tab\});\tab\par
\par
\tab\tab //alert('productNameSamp : ' + productNameSamp);\par
\tab\tab var fieldsSampDrop = \{\par
\tab\tab\tab ProductId: '',\par
\tab\tab\tab Name: " ='" + productNameSamp + "' "\par
\tab\tab\};\tab\par
\tab\tab callWebServToGetProdInfo(fieldsSampDrop, activityId, 'SampDrop', function()\{\par
\tab\tab\tab if(bothPresent == true)\par
\tab\tab\tab\{\par
\tab\tab\tab\tab callback.call();\par
\tab\tab\tab\}\par
\tab\tab\});\par
\tab\}\par
\tab else if(productNameProdet != null && productNameProdet != '' && productNameSamp == null)\par
\tab\{\par
\tab\tab //alert('productNameProdet : ' + productNameProdet);\par
\tab\tab var fieldsProdet = \{\par
\tab\tab\tab ProductId: '',\par
\tab\tab\tab Name: " ='" + productNameProdet + "' "\par
\tab\tab\};\tab\par
\tab\tab callWebServToGetProdInfo(fieldsProdet, activityId, 'ProdDetail', function()\{\par
\tab\tab\tab callback.call();\par
\tab\tab\});\tab\tab\par
\tab\}\par
\tab else if(productNameProdet == null && productNameSamp != null && productNameSamp != '')\par
\tab\{\par
\tab\tab //alert('productNameSamp : ' + productNameSamp);\par
\tab\tab var fieldsSampDrop = \{\par
\tab\tab\tab ProductId: '',\par
\tab\tab\tab Name: " ='" + productNameSamp + "' "\par
\tab\tab\};\tab\par
\tab\tab callWebServToGetProdInfo(fieldsSampDrop, activityId, 'SampDrop', function()\{\par
\tab\tab\tab\tab callback.call();\par
\tab\tab\});\par
\tab\}\par
\tab else\par
\tab\{\par
\tab\tab callback.call();\par
\tab\}\par
\}\par
\par
function callWebServToGetProdInfo(fieldsProdet, activityId, reqFrom, callback)\par
\{\par
\tab //alert('Inside callWebServToGetProdInfo');\par
\tab createWebSerConn(function(xhr, textStatus)\{\par
\tab\tab var soapAction = 'document/urn:crmondemand/ws/product/10/2004:ProductQueryPage';\par
\tab\tab var soapRequestTemplate = '' +\par
\tab\tab\tab '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +\par
\tab\tab\tab '   <soapenv:Header/>' +\par
\tab\tab\tab '   <soapenv:Body>' +\par
\tab\tab\tab '      <ProductWS_ProductQueryPage_Input xmlns="urn:crmondemand/ws/product/10/2004">' +\par
\tab\tab\tab '         <PageSize>100</PageSize>' +\par
\tab\tab\tab '         <ListOfProduct>' +\par
\tab\tab\tab '            <Product>' +\par
\tab\tab\tab '               <%=fieldsProdet%>' +\par
\tab\tab\tab '            </Product>' +\par
\tab\tab\tab '         </ListOfProduct>' +\par
\tab\tab\tab '         <StartRowNum>0</StartRowNum>' +\par
\tab\tab\tab '      </ProductWS_ProductQueryPage_Input>' +\par
\tab\tab\tab '   </soapenv:Body>' +\par
\tab\tab\tab '</soapenv:Envelope>';\tab\tab\par
\par
\tab\tab var fieldsXML = '';\par
\tab\tab for (fieldName in fieldsProdet) \{\par
\tab\tab\tab fieldsXML += '<' + fieldName + '>' + fieldsProdet[fieldName] + '</' + fieldName + '>';\par
\tab\tab\}\par
\par
\tab\tab var soapRequest = soapRequestTemplate.replace("<%=fieldsProdet%>", fieldsXML);\tab\par
\par
\tab\tab //alert("soapRequest : " + soapRequest);\par
\par
\tab\tab try\{\par
\tab\tab\tab jQuery.ajax(\{\par
\tab\tab\tab\tab\tab\tab url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',\par
\tab\tab\tab\tab\tab\tab type: 'POST',\par
\tab\tab\tab\tab\tab\tab contentType: 'text/xml',\par
\tab\tab\tab\tab\tab\tab dataType: 'xml',\par
\tab\tab\tab\tab\tab\tab data: soapRequest,\par
\tab\tab\tab\tab\tab\tab beforeSend: function(xhr) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("Before sending request to insert : " + xhr);\par
\tab\tab\tab\tab\tab\tab\tab xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');  \par
\tab\tab\tab\tab\tab\tab\},   \par
\tab\tab\tab\tab\tab\tab complete: function(xhr, textStatus) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("Completed");\par
\tab\tab\tab\tab\tab\tab\},\tab\tab\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab success: function(xmlData, textStatus) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("successssfullllllll getting the product Info");\par
\tab\tab\tab\tab\tab\tab\tab var items = getListData('Product', xmlData);\par
\tab\tab\tab\tab\tab\tab\tab ////alert("items : " + items);\par
\tab\tab\tab\tab\tab\tab\tab var productId = items[0].ProductId;\par
\tab\tab\tab\tab\tab\tab\tab //alert("productId : " + productId);\par
\tab\tab\tab\tab\tab\tab\tab //createProductDetailed(activityId, productId);\par
\par
\tab\tab\tab\tab\tab\tab\tab if(productId != null)\par
\tab\tab\tab\tab\tab\tab\tab\{\par
\tab\tab\tab\tab\tab\tab\tab\tab if(reqFrom != null && reqFrom == 'ProdDetail')\par
\tab\tab\tab\tab\tab\tab\tab\tab\{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab callWebServToCreateProdDet(productId, activityId, function()\{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab callback.call();\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\});\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab else if(reqFrom != null && reqFrom == 'SampDrop')\par
\tab\tab\tab\tab\tab\tab\tab\tab\{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab //alert('Control Came from SampDrop');\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab callWebServToCreateSampDrop(productId, activityId, function()\{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab callback.call();\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\});\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab else\par
\tab\tab\tab\tab\tab\tab\tab\tab\{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab alert('Control not identified');\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab return;\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab else\par
\tab\tab\tab\tab\tab\tab\tab\{\par
\tab\tab\tab\tab\tab\tab\tab\tab alert('Product Name is not valid!!!');\par
\tab\tab\tab\tab\tab\tab\tab\tab return;\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\});\tab\par
\tab\tab\}\par
\tab\tab catch (e) \{\par
\tab\tab\tab alert('Error: ' + e.message);\par
\tab\tab\}\par
\tab\tab //return true;\par
\tab\});\par
\}\par
\par
function callWebServToCreateProdDet(productId, activityId, callback)\par
\{\par
\tab var indicationVal = document.getElementById('CallProdDetailNew.Indication').value;\par
\tab var priorityVal = document.getElementById('CallProdDetailNew.Priority').value;\par
\tab var issueVal = document.getElementById('CallProdDetailNew.Issue').value;\par
\par
\tab var fieldsAct = \{\par
\tab\tab ActivityId: "" + activityId + ""\par
\tab\};\par
\par
\tab var fieldsProd = \{\par
\tab\tab ProductId: "" + productId + "",\par
\tab\tab Indication: "" + indicationVal + "",\par
\tab\tab Priority: "" + priorityVal + "",\par
\tab\tab Issue: "" + issueVal + ""\par
\tab\};\par
\par
\tab createWebSerConn(function(xhr, textStatus)\{\par
\tab\tab var soapAction = 'document/urn:crmondemand/ws/activity/10/2004:Activity_InsertChild';\par
\tab\tab var soapRequestTemplate = '' +\par
\tab\tab\tab '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +\par
\tab\tab\tab '   <soapenv:Header/>' +\par
\tab\tab\tab '   <soapenv:Body>' +\par
\tab\tab\tab '      <ActivityNWS_Activity_InsertChild_Input xmlns="urn:crmondemand/ws/activity/10/2004">' +\par
\tab\tab\tab '         <ListOfActivity>' +\par
\tab\tab\tab '            <Activity>' +\par
\tab\tab\tab '\tab\tab         <%=fieldsAct%>' +\par
\tab\tab\tab '\tab             <ListOfProductsDetailed>' +\par
\tab\tab\tab '\tab\tab             <ProductsDetailed>' +\tab\tab\tab\tab\tab\par
\tab\tab\tab '\tab\tab                <%=fieldsProd%>' +\par
\tab\tab\tab '\tab\tab             </ProductsDetailed>' +\par
\tab\tab\tab '\tab             </ListOfProductsDetailed>' +\par
\tab\tab\tab '            </Activity>' +\par
\tab\tab\tab '         </ListOfActivity>' +\par
\tab\tab\tab '      </ActivityNWS_Activity_InsertChild_Input>' +\par
\tab\tab\tab '   </soapenv:Body>' +\par
\tab\tab\tab '</soapenv:Envelope>';\tab\tab\par
\par
\tab\tab var fieldsXML = '';\par
\tab\tab for (fieldName in fieldsProd) \{\par
\tab\tab\tab fieldsXML += '<' + fieldName + '>' + fieldsProd[fieldName] + '</' + fieldName + '>';\par
\tab\tab\}\par
\tab\tab\par
\tab\tab var fieldsActXML = '';\par
\tab\tab for (fieldNameAct in fieldsAct) \{\par
\tab\tab\tab fieldsActXML += '<' + fieldNameAct + '>' + fieldsAct[fieldNameAct] + '</' + fieldNameAct + '>';\par
\tab\tab\}\tab\tab\tab\par
\par
\tab\tab var soapRequest = soapRequestTemplate.replace("<%=fieldsProd%>", fieldsXML);\tab\par
\tab\tab var finalSoapRequest = soapRequest.replace("<%=fieldsAct%>", fieldsActXML);\tab\par
\par
\tab\tab //alert("soapRequest : " + finalSoapRequest);\par
\par
\tab\tab try\{\par
\tab\tab\tab jQuery.ajax(\{\par
\tab\tab\tab\tab\tab\tab url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',\par
\tab\tab\tab\tab\tab\tab type: 'POST',\par
\tab\tab\tab\tab\tab\tab contentType: 'text/xml',\par
\tab\tab\tab\tab\tab\tab dataType: 'xml',\par
\tab\tab\tab\tab\tab\tab data: finalSoapRequest,\par
\tab\tab\tab\tab\tab\tab beforeSend: function(xhr) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("Before sending request to insert : " + xhr);\par
\tab\tab\tab\tab\tab\tab\tab xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');  \par
\tab\tab\tab\tab\tab\tab\},   \par
\tab\tab\tab\tab\tab\tab complete: function(xhr, textStatus) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("Completed");\par
\tab\tab\tab\tab\tab\tab\},\tab\tab\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab success: function(xmlData, textStatus) \{\par
\tab\tab\tab\tab\tab\tab     ctrowprod--;\par
\tab\tab\tab\tab\tab\tab\tab //alert("ROW COUNTER DECreasing ctrowprod: "+ctrowprod);\par
\tab\tab\tab\tab\tab\tab\tab //alert("successssfullllllllyy created the Product detailed");\par
\tab\tab\tab\tab\tab\tab\tab jQuery("#ROWID2").parent().parent().parent().parent().parent().remove();\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab\tab callback.call();\par
\tab\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\});\tab\par
\tab\tab\}\par
\tab\tab catch (e) \{\par
\tab\tab\tab alert('Error: ' + e.message);\par
\tab\tab\}\par
\tab\tab //return true;\par
\tab\});\par
\}\par
\par
function callWebServToCreateSampDrop(productId, activityId, callback)\par
\{\par
    //alert('INSIDE callWebServToCreateSampDrop!!');\par
\tab //var prodCategory = document.getElementById('CallSampDropNew.Primary Product Line Name').value;\par
\tab var lotNumber = document.getElementById('CallSampDropNew.LOT Name').value;\par
\tab var qtyVal = document.getElementById('CallSampDropNew.Quantity').value;\par
\par
\tab var fieldsAct = \{\par
\tab\tab ActivityId: "" + activityId + ""\par
\tab\};\par
\par
\tab var fieldsProd = \{\par
\tab\tab ProductId: "" + productId + "",\par
\tab\tab //ProductCategory: "" + prodCategory + "",\par
\tab\tab Quantity: "" + qtyVal + "",\par
\tab\tab LotNumber: "" + lotNumber + ""\par
\tab\};\par
\par
\tab createWebSerConn(function(xhr, textStatus)\{\par
\tab\tab var soapAction = 'document/urn:crmondemand/ws/activity/10/2004:Activity_InsertChild';\par
\tab\tab var soapRequestTemplate = '' +\par
\tab\tab\tab '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +\par
\tab\tab\tab '   <soapenv:Header/>' +\par
\tab\tab\tab '   <soapenv:Body>' +\par
\tab\tab\tab '      <ActivityNWS_Activity_InsertChild_Input xmlns="urn:crmondemand/ws/activity/10/2004">' +\par
\tab\tab\tab '         <ListOfActivity>' +\par
\tab\tab\tab '            <Activity>' +\par
\tab\tab\tab '\tab\tab         <%=fieldsAct%>' +\par
\tab\tab\tab '\tab             <ListOfSampleDropped>' +\par
\tab\tab\tab '\tab\tab             <SampleDropped>' +\tab\tab\tab\tab\tab\par
\tab\tab\tab '\tab\tab                <%=fieldsProd%>' +\par
\tab\tab\tab '\tab\tab             </SampleDropped>' +\par
\tab\tab\tab '\tab             </ListOfSampleDropped>' +\par
\tab\tab\tab '            </Activity>' +\par
\tab\tab\tab '         </ListOfActivity>' +\par
\tab\tab\tab '      </ActivityNWS_Activity_InsertChild_Input>' +\par
\tab\tab\tab '   </soapenv:Body>' +\par
\tab\tab\tab '</soapenv:Envelope>';\tab\tab\par
\par
\tab\tab var fieldsXML = '';\par
\tab\tab for (fieldName in fieldsProd) \{\par
\tab\tab\tab fieldsXML += '<' + fieldName + '>' + fieldsProd[fieldName] + '</' + fieldName + '>';\par
\tab\tab\}\par
\tab\tab\par
\tab\tab var fieldsActXML = '';\par
\tab\tab for (fieldNameAct in fieldsAct) \{\par
\tab\tab\tab fieldsActXML += '<' + fieldNameAct + '>' + fieldsAct[fieldNameAct] + '</' + fieldNameAct + '>';\par
\tab\tab\}\tab\tab\tab\par
\par
\tab\tab var soapRequest = soapRequestTemplate.replace("<%=fieldsProd%>", fieldsXML);\tab\par
\tab\tab var finalSoapRequest = soapRequest.replace("<%=fieldsAct%>", fieldsActXML);\tab\par
\par
\tab\tab //alert("soapRequest : " + finalSoapRequest);\par
\par
\tab\tab try\{\par
\tab\tab\tab jQuery.ajax(\{\par
\tab\tab\tab\tab\tab\tab url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',\par
\tab\tab\tab\tab\tab\tab type: 'POST',\par
\tab\tab\tab\tab\tab\tab contentType: 'text/xml',\par
\tab\tab\tab\tab\tab\tab dataType: 'xml',\par
\tab\tab\tab\tab\tab\tab data: finalSoapRequest,\par
\tab\tab\tab\tab\tab\tab beforeSend: function(xhr) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("Before sending request to insert : " + xhr);\par
\tab\tab\tab\tab\tab\tab\tab xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');  \par
\tab\tab\tab\tab\tab\tab\},   \par
\tab\tab\tab\tab\tab\tab complete: function(xhr, textStatus) \{\par
\tab\tab\tab\tab\tab\tab\tab //alert("Completed");\par
\tab\tab\tab\tab\tab\tab\},\tab\tab\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab success: function(xmlData, textStatus) \{\par
\tab\tab\tab\tab\tab\tab     ctrowsamp--;\par
\tab\tab\tab\tab\tab\tab\tab //alert("ROW COUNTER DECreasing ctrowsamp: "+ctrowsamp);\par
\tab\tab\tab\tab\tab\tab\tab //alert("successssfullllllllyy created the Sample dropped");\par
\tab\tab\tab\tab\tab\tab\tab jQuery("#ROWID").parent().parent().parent().parent().parent().remove();\tab\tab\tab\par
\tab\tab\tab\tab\tab\tab\tab callback.call();\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\});\tab\par
\tab\tab\}\par
\tab\tab catch (e) \{\par
\tab\tab\tab alert('Error: ' + e.message);\par
\tab\tab\}\par
\tab\tab //return true;\par
\tab\});\par
\}\par
}
 