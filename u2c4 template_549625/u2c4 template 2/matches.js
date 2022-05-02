// write js code here corresponding to matches.html

var newdata = JSON.parse(localStorage.getItem("schedule"));

display(newdata);
var newarr =JSON.parse(localStorage.getItem("favourites")) ||[];

function display(data){
    data.forEach(function(elem){
    
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
        td6.innerText = "Add as Favourites";
        td6.style.color ="green";
        console.log(elem);
      
        td6.addEventListener("click",function(elem){
            
             console.log(elem);
           
             favourite(elem);
         })

        tr.append(td1,td2,td3,td4,td5,td6);
       var tbody =  document.querySelector("tbody");
        tbody.append(tr);

    })
   
}
function favourite(data){
    newarr.push(data);
    localStorage.setItem("favourites",JSON.stringify(newarr));
   
}