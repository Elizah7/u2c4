// write js code here corresponding to index.html
// You should add submit event on the form
var form = document.querySelector("form");
form.addEventListener("submit",myFunction);
var arr = JSON.parse(localStorage.getItem("schedule"))||[];
function myFunction(){
    event.preventDefault()

    var obj ={
        matchnum:form.matchNum.value,
        selectteam:form.teamA.value,
        selectteam2:form.teamB.value,
        date:form.date.value,
        venue:form.venue.value
    }
  arr.push(obj);
  console.log(arr);
 localStorage.setItem("schedule",JSON.stringify(arr));
window.location.reload();

}
