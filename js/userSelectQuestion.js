var dataAfterConvert;
function getData(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4)
        {
             dataAfterConvert=JSON.parse(this.responseText);
            //console.log(dataAfterConvert);
            for(var i=0;i<dataAfterConvert.length;i++)
            {
                //console.log(dataAfterConvert[i]["name"]);
                const para = document.createElement('a');
                const node = document.createTextNode(dataAfterConvert[i]['name']);
                para.href="../Html/template.html";
                para.id=dataAfterConvert[i]['level'];
                para.appendChild(node);
                document.getElementById("menu").appendChild(para);
                para.addEventListener("click",function (){
                    document.getElementById("choose").innerText=dataAfterConvert[i]["name"];
                });
            }  

        }
    }

    xhttp.open("GET","../json/questionandAnswer.json",true);
    xhttp.send();

}
getData();

