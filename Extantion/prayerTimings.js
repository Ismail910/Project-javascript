function run()
{
   

var TimingHours = new Date().getHours();
var TimingMinutes = new Date().getMinutes();

 function getData()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {

        if(this.status==200 && this.readyState==4)
        {
            var dataAfterConvert = JSON.parse(this.responseText);
            console.log(dataAfterConvert.Prayer_Timings[0].Asr.Hours);
            console.log(TimingHours);
            if ((dataAfterConvert.Prayer_Timings[0].Fajr.Hours ==  TimingHours)&& 
            (dataAfterConvert.Prayer_Timings[0].Fajr.Minutes ==TimingMinutes) )
                {
                   console.log("this is Fagr");    
                   document.getElementById("audio1").play();
                   alert("Azan  Fagr");
               } 
           else if ((dataAfterConvert.Prayer_Timings[0].Dhuhr.Hours ==  TimingHours) &&
               (dataAfterConvert.Prayer_Timings[0].Dhuhr.Minutes == TimingMinutes))
               {
                   console.log("Dhuhr");        
                    document.getElementById("audio1").play();
                    alert("Azan  Dhuhr"); 
           } 
           else if ((dataAfterConvert.Prayer_Timings[0].Asr.Hours ==  TimingHours-12) &&
               (dataAfterConvert.Prayer_Timings[0].Asr.Minutes == TimingMinutes))
               {
                   console.log("Asr");
                   document.getElementById("audio1").play();
                   alert("Azan  Asr");      
           } 
           else if (((dataAfterConvert.Prayer_Timings[0].Maghrib.Hours) ==  TimingHours-12) &&
               ((dataAfterConvert.Prayer_Timings[0].Maghrib.Minutes) == TimingMinutes))
               {
                   console.log("Maghrib");     
                   document.getElementById("audio1").play();
                   alert("Azan  Maghrib");
           } 
           else if ((dataAfterConvert.Prayer_Timings[0].Isha.Hours ==  TimingHours-12) &&
               (dataAfterConvert.Prayer_Timings[0].Isha.Minutes == TimingMinutes))
               {
                   console.log("Isha");
                   document.getElementById("audio1").play();
                   alert("Azan  Isha");
           }
           else
           {console.log("Azan time is not now")};
           alert("any");
           
           
        }
             
        // console.log(dataAfterConvert.Prayer_Timings[0].Fajr[0].Minutes);
        // console.log((dataAfterConvert.Prayer_Timings[0].Fajr[0].Hours));
        // console.log((dataAfterConvert.Prayer_Timings[0].Fajr[0].Minutes) );
        //  console.log(dataAfterConvert.Prayer_Timings[0].Fajr[0].Minutes);
        // console.log(TimingHours);
        // console.log(TimingMinutes);
    }
    xhttp.open("GET","manifest.json",true);
    xhttp.send();
    
}
getData()




    
}
  
window.onload = run ;
