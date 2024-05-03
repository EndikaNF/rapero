function xtojsConvert(){
    var x2js = new X2JS();
    var xmlValue = document.getElementById("xml_data").value;
    var jsonObj = x2js.xml_str2json( xmlValue );
    document.getElementById('json_data').innerHTML = JSON.stringify(jsonObj, null, 2)
}

function xtojsDownload(){
    var jsonData = document.getElementById("json_data").value;
    var data_str = "data:text/json;charset=utf-8,"+ encodeURIComponent(jsonData)
    var anchor = document.createElement('a');
    anchor.setAttribute('href',data_str);
    anchor.setAttribute('download',"XmlToJson.json");
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    
}