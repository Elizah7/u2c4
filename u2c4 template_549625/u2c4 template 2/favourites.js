// write js code here corresponding to favourites.html

var newa = JSON.parse(localStorage.getItem("favourites"))



newdisplay(newa)

function newdisplay(data){
    data.forEach(function(elem){
    console.log(elem)
        var tr = document.createElement("tr");

       var td1 = document.createElement("td");
        td1.innerText = elem.matchnum;
        var td2 = document.createElement("td");
        td2.innerText = elem.selectteam;
        var td3 = document.createElement("td");
        td3.innerText = elem.selectteam2;
        var td4 = document.createElement("td");
        td4.innerText = elem.date;
        var td5 = document.createElement("td");
        td5.innerText = elem.venue;
        var td6 = document.createElement("td");
        var btn = document.createElement("button");
       
        btn.innerText = "Delete";
         btn.addEventListener("click",mynewfunction);
         function mynewfunction(event){
            console.log(event);
           td6.event.target.parentNode.remove();
        }
         

         
        td6.append(btn);
        tr.append(td1,td2,td3,td4,td5,td6);
       var tbody =  document.querySelector("tbody");
        tbody.append(tr);

    })
   
}
