


    setInterval(showtime,1000)



    function showtime(){
        var date = new Date();


        h = date.getHours();
        m= date.getMinutes();
        s= date.getSeconds();
        var session ='AM';
        count=0;

        if(h>12){
            h=h-12
            session="PM"
        }


        if(h==0){
            h=12;
        }
        

        
        h = (h<10) ? "0"+h : h;
        m = (m<10) ? "0"+m : m;
        s = (s<10) ? "0"+s : s;



        




        var time = h+":"+m+":"+s+" "+session

        document.getElementById("clockdisplay").innerHTML=time
        console.log("WTF")

    }


    














