(function(){

	createNewSaveButton('Call Details',1,'TestSave','saveAllDetails()','_top',40);
	addSamplesDropSec();
	addProdDeailedSec();

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

					newtd.innerHTML = "<div class='buttonChildTitleBarTD' " +
					"id='testSave' " +
					"onmouseover='toggleNavButton(this);' " +
					"onmouseout='toggleNavButton(this);' " +
					"onkeypress='onButtonPress(this);' " +
					"onclick='saveAllDetails();' \>" +
					button_text + "</div>";
				return true;
			}
		} 
		catch (ex) {}
	}
	return false;
}

function addSamplesDropSec(){
	
	var newTable = "<tr><td colspan='5'>";
	newTable += "<table class='ctb' cellspacing='0' cellpadding='0' id='sampleDrop'>";
	newTable += "<tr><td>Samples Dropped</td>";
	newTable += "<td style='align:left'><div class='buttonChildTitleBarTD' id='sampleDropdiv' onclick='addNewRowSampleDrop();'>New</div></td>";
	newTable += "<td width='100%'></td></tr>";
	newTable += "<tr><td colspan='3'></td></tr></table></td></tr>";
	jQuery("[id='ContactCallInsert.VONDMED Next Call']").parent().parent().parent().append(newTable);
}

function addNewRowSampleDrop()
{
	var row = "<tr width='100%'><td colspan='3'>";
	row += "<table>";
	row += "<tr>";
	row += "<td>Product Category </td>";
	row += "<td><input name='CallSampDropNew.Primary Product Line Name' id='CallSampDropNew.Primary Product Line Name' maxlength='100' class='inputReadOnly' tabindex='-1' readonly='readonly' type='text' value='' size='20' /></td>";
	row += "<td><p style='color:red'>Product* </p></td>";
	row += "<td><select STYLE='width: 130px' id='prodNameSamDrop'><option value='none'></option><option>Arcoxia 120mg</option><option>Arcoxia 60mg</option><option>Arcoxia 90mg</option><option>Singulair 20x40mg</option></select></td>";
	row += "<td>Lot # </td>";
	row += "<td><input name='CallSampDropNew.LOT Name' size='5' maxlength='20' type='text' value='' class='inputControl' id='CallSampDropNew.LOT Name' /></td></td>";
	row += "<td><p style='color:red'>Quantity* </p></td>";
	row += "<td><input name='CallSampDropNew.Quantity' size='20' type='text' value='' class='inputControl' id='CallSampDropNew.Quantity' /></td>";
	row += "<td><input type='button' name='delete' value='delete' onclick='jQuery(this).parent().parent().parent().parent().parent().remove()'></input></td>";
	row += "</tr></table></td></tr>";	

	jQuery("#sampleDrop").append(row);
}

function addProdDeailedSec(){
	var newTable = "<tr><td colspan='5'>";
	newTable += "<table class='ctb' cellspacing='0' cellpadding='0' id='prodDetail'>";
	newTable += "<tr><td>Products Detailed</td>";
	newTable += "<td style='align:left'><div class='buttonChildTitleBarTD' id='testdiv' onclick='addNewRowProdDet();'>New</div></td>";
	newTable += "<td width='100%'></td></tr>";
	newTable += "<tr><td colspan='3'></td></tr></table></td></tr>";
	jQuery("[id='ContactCallInsert.VONDMED Next Call']").parent().parent().parent().append(newTable);
}

function addNewRowProdDet(){
	var row = "<tr width='100%'><td colspan='3'>";
	row += "<table>";
	row += "<tr>";
	row += "<td><p style='color:red'>Product* </p></td>";
	row += "<td><select STYLE='width: 130px' id='prodNamePrDet'><option value='none'></option><option>Arcoxia 120mg</option><option>Arcoxia 60mg</option><option>Arcoxia 90mg</option><option>Singulair 20x40mg</option></select></td>";
	row += "<td>Priority: </td>";
	row += "<td><input name=CallProdDetailNew.Priority size='5' tabindex='4' type='text' value='' class=inputControl id='CallProdDetailNew.Priority' /></td>";
	row += "<td><p style='color:red'>Indication*:</p></td>";
	row += "<td><select name='CallProdDetailNew.Indication' tabindex='5' onchange=onDropDownChange (this); class=inputControl id='CallProdDetailNew.Indication'><option /><option value='Allergy'>Allergy</option><option value='Asthma'>Asthma</option><option value='Arrhythmia'>Arrhythmia</option><option value='Heart Failure'>Heart Failure</option><option value='Syncope'>Syncope</option><option value='Other'>Other</option></select></td>";
	row += "<td>Issues:</td>";
	row += "<td><select name='CallProdDetailNew.Issue' tabindex='6' onchange=onDropDownChange (this); class='inputControl' id='CallProdDetailNew.Issue'><option /><option value='Side Effects'>Side Effects</option><option value='Efficacy'>Efficacy</option><option value='Cost vs. Generics'>Cost vs. Generics</option><option value='Price'>Price</option></select></td>";
	row += "<td><input type='button' name='delete' value='delete' onclick='jQuery(this).parent().parent().parent().parent().parent().remove()'></input></td>";
	row += "</tr></table></td></tr>";	
	jQuery("#prodDetail").append(row);
}

function saveAllDetails()
{
	//alert("Inside Save All details");
	var actId = createNewCallActivity();

	//createProductDetailed(actId);
}

function createWebSerConn(callback)
{
	//alert("creating connection with Web services");
	var userName = 'MERCKTEST_CTE01/pfeil';
	var password = 'method00';
	try{
		jQuery.ajax({
		   url: '/Services/Integration?command=login',
		   dataType: 'xml',
		   beforeSend: function(xhr) {
			   xhr.setRequestHeader('UserName', userName);
			   xhr.setRequestHeader('Password', password);               
		   },
		   complete: function(xhr, textStatus) {
				//alert("created connection with Web services : " + xhr);
				callback.call(this, xhr, textStatus);    
		   }
	   });	
	}
	catch (e) {
		alert('Error: ' + e.message);
	}

}

function getListData(type, xmlData) {
	var arr = [];
	jQuery(type, xmlData).each(function(index, item) {
		var obj = {};
		jQuery(item).children().each(function(index, item) {
		  var fieldName = jQuery(item).get(0).tagName;
		  var fieldValue = jQuery(item).text();
		  obj[fieldName] = fieldValue;
		});
		arr.push(obj);
	});
	return arr;    
}

function loadCallDetailsPage()
{
	alert("will load the Call Details page");
	var e= $(".vlk");
	var f= e[0];
	doNavigate(f);
}

function createNewCallActivity(){
	//alert("Inside Create New Activity : This will return Activity Id");
	var ownerId = document.getElementById('ContactCallInsert.Owner Id').value;
	var contactPerId = document.getElementById('ContactCallInsert.Contact Per Id').value;
	var subjectValue = document.getElementById('ContactCallInsert.Description').value;
	var objectiveVal = document.getElementById('ContactCallInsert.VONDMED Call').value;
	var startTime = document.getElementById('ContactCallInsert.Planned').value;
	var accId = document.getElementById('ContactCallInsert.Account Id').value;
	//var addressVal = document.getElementById('ContactCallInsert.Personal Location Id').value;
	var smartCallId = document.getElementById('ContactCallInsert.Template Id').value;
	var endTime = document.getElementById('ContactCallInsert.Planned Completion').value;
	var typeVal = document.getElementById('ContactCallInsert.Type').value;
	var statusVal = document.getElementById('ContactCallInsert.Status').value;
	var durationVal = document.getElementById('ContactCallInsert.VONDMED Calc Duration').value;
	var carrencyVal = document.getElementById('ContactCallInsert.Currency Code').value;
	var displayVal = document.getElementById('ContactCallInsert.Display').value;
	var refId = document.getElementById('ContactCallInsert.Sample Reference Number').value;
	var costVal = document.getElementById('ContactCallInsert.Associated Cost').value;
	var paperSignVal = document.getElementById('ContactCallInsert.VONDMED Paper Signature').value;
	var privateVal = document.getElementById('ContactCallInsert.Private').value;
	var descVal = document.getElementById('ContactCallInsert.Comment').value;
	var nextCallVal = document.getElementById('ContactCallInsert.VONDMED Next Call').value;

	var startTimeMod;	
	var endTimeMod;

	if(startTime != null && (startTime.indexOf(' PM') > -1)){
		startTimeMod = startTime.replace(' PM', ':00');
	}
	else if(startTime != null && (startTime.indexOf(' AM') > -1)){
		startTimeMod = startTime.replace(' AM', ':00');	
	}
	else{
		startTimeMod = '';
	}

	if(endTime != null && (endTime.indexOf(' PM') > -1)){
		endTimeMod = endTime.replace(' PM', ':00');
	}
	else if(endTime != null && (endTime.indexOf(' AM') > -1)){
		endTimeMod = endTime.replace(' AM', ':00');	
	}
	else{
		endTimeMod = '';
	}

	if(subjectValue == null || contactPerId == null){
		alert("Subject is the required field!!");
		return;
	}
	else{
		var fields = {
			Objective: "" + objectiveVal + "",
			Subject: "" + subjectValue + "",
			OwnerId: "" + ownerId + "",
			Type: "" + typeVal + "",
			AccountId: "" + accId + "",
			SmartCall: "" + smartCallId + "",
			Status: "" + statusVal + "",
			Duration:  "" + durationVal + "",
			CurrencyCode: "" + carrencyVal + "",
			Display: "" + displayVal + "",
			RefNum: "" + refId + "",
			Cost: "" + costVal + "",
			PaperSign: "" + paperSignVal + "",
			Private: "" + privateVal + "",
			Description: "" + descVal + "",
			NextCall: "" + nextCallVal + "",
			StartTime: "" + startTimeMod + "",
			EndTime: "" + endTimeMod + ""
		};
		
		var fieldsCont = {
			ContactId: "" + contactPerId + ""
		};
		createActivityIdUsingWeb(fields, fieldsCont);	
	}
}

function createActivityIdUsingWeb(fields, fieldsCont)
{
	var activityId;
	createWebSerConn(function(xhr, textStatus){
		var soapAction = 'document/urn:crmondemand/ws/contact/10/2004:ContactInsertChild';
		var soapRequestTemplate = '' +
			'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
			'   <soapenv:Header/>' +
			'   <soapenv:Body>' +
			'      <ContactWS_ContactInsertChild_Input xmlns="urn:crmondemand/ws/contact/10/2004">' +
			'         <ListOfContact>' +
			'            <Contact>' +
			'               <%=fieldsCont%>' +
			' 		        <ListOfActivity>' +
			'					<Activity>'	+
			'		               <%=fields%>' +				
			'					</Activity>' +				
			'         		</ListOfActivity>' +				
			'            </Contact>' +
			'         </ListOfContact>' +
			'      </ContactWS_ContactInsertChild_Input>' +
			'   </soapenv:Body>' +
			'</soapenv:Envelope>';		

		var fieldsXML = '';
		for (fieldName in fields) {
			fieldsXML += '<' + fieldName + '>' + fields[fieldName] + '</' + fieldName + '>';
		}
		
		var fieldsXMLCont = '';
		for (fieldNameCont in fieldsCont) {
			fieldsXMLCont += '<' + fieldNameCont + '>' + fieldsCont[fieldNameCont] + '</' + fieldNameCont + '>';
		}			

		var soapRequest = soapRequestTemplate.replace("<%=fields%>", fieldsXML);	
		var soapRequestFinal = soapRequest.replace("<%=fieldsCont%>", fieldsXMLCont);	

		alert("soapRequest : " + soapRequestFinal);

		try{
			jQuery.ajax({
						url: 'https://secure-ausomxapa.crmondemand.com/Services/Integration',
						type: 'POST',
						contentType: 'text/xml',
						dataType: 'xml',
						data: soapRequestFinal,
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
							alert("successssfullllllll");
							var items = getListData('Activity', xmlData);
							//alert("items : " + items);
							activityId = items[0].ActivityId;
							//alert("activityId : " + activityId);
							createProductDetailInfo(activityId);
						}
					});	
		}
		catch (e) {
			alert('Error: ' + e.message);
		}
		//return true;
	});

}

})();