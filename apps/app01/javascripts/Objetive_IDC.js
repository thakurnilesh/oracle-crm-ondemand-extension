        (function()
		{
		function $get(key) {
		return $("[id='" + key + "']");
		}
		alert("Inside function");
        var ownerId = $get('ContactCallInsert.Owner Id').val();
        var contactPerId = $get('ContactCallInsert.Contact Per Id').val();
	    var $objectiveInputElement = $get('ContactCallInsert.VONDMED Call');
		var objectiveValue = $objectiveInputElement.val();
		if (objectiveValue !== '') { return; }
		alert("ownerId: "+ownerId);
		alert("contactPerId: "+contactPerId);		   
        
        var obj = {ownerId: ownerId, contactPerId: contactPerId, objectiveValue: objectiveValue};
               
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
        
         activityQuery(fields, function(data) {
 
             // no previous activities on contact
             if (data.length === 0) {
                 return;
             }
             
             data.sort(function(item1, item2) {
                 return Date.parse(item1.CreatedDate) - Date.parse(item2.CreatedDate);
             });
             
             var lastObjectiveValue = data[data.length - 1].Objective;
             $objectiveInputElement.val(lastObjectiveValue);
           
    });
	
 function createWebSerConn(callback)
{
alert("creating connection with Web services");
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
alert("created connection with Web services : " + xhr);
callback.call(this, xhr, textStatus);
}
});
}
catch (e) {
alert('Error: ' + e.message);
} 
}  
	
	function manualQuery(entityType, fields, soapAction, soapRequestTemplate, callback) 
	{
	alert("INSIDE manual Query");
    var that = this;
    
    var pageroot = document.location;
    pageroot = pageroot.toString();
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));
    
    var entityTypeLowercase = entityType.toLowerCase();
    var entityTypeCapitalized = entityTypeLowercase.substring(0,1).toUpperCase() + entityTypeLowercase.substring(1);
    
    var fieldsXML = '';
    for (fieldName in fields) {
        fieldsXML += '<' + fieldName + '>' + fields[fieldName] + '</' + fieldName + '>';
    }
    
    var soapRequest = soapRequestTemplate.replace("<%=fields%>", fieldsXML);
      
    jQuery.ajax({
        url: pageroot + '/Services/Integration',
        type: 'POST',
        contentType: 'text/xml',
        dataType: 'xml',
        data: soapRequest,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');
        },
        success: function(xmlData, textStatus) {
            var items = that.getListData(entityTypeCapitalized, xmlData);
 
            if (callback.itemsCache) {
                callback.itemsCache = callback.itemsCache.concat(items);
            } else {
                callback.itemsCache = [].concat(items);
            }
 
            var lastPage = jQuery('ns\\:LastPage', xmlData).text().toLowerCase();
 
            if (lastPage == 'true') {
                callback.more = false;
                callback(callback.itemsCache);
            } else {
                callback.more = true;
                that.entityQuery(entityType, fields, callback);
            }
            window.xmlData = xmlData;
        }
    });
 
}
	function activityQuery (fields, callback){
	alert("Inside ActivityQuery");
    createWebSerConn(function(xhr, textStatus){
    var soapAction = 'document/urn:crmondemand/ws/activity/10/2004:Activity_QueryPage';
    var soapRequestTemplate = '' +
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
        ' <soapenv:Header/>' +
        ' <soapenv:Body>' +
        ' <ActivityNWS_Activity_QueryPage_Input xmlns="urn:crmondemand/ws/activity/10/2004">' +
        ' <PageSize>100</PageSize>' +
        ' <ListOfActivity>' +
        ' <Activity>' +
        ' <%=fields%>' +
        ' </Activity>' +
        ' </ListOfActivity>' +
        ' <StartRowNum>0</StartRowNum>' +
        ' </ActivityNWS_Activity_QueryPage_Input>' +
        ' </soapenv:Body>' +
        '</soapenv:Envelope>';
      alert("before calling manual query");  
    this.manualQuery('Activity', fields, soapAction, soapRequestTemplate, function(data) {
        callback(data);
    });
	});
 }
    
})();