var siteNameInput = document.getElementById("bookmarkName");
var siteURLInput = document.getElementById("bookmarkURL");
var subBtn = document.getElementById("sub-Btn");
var siteList =[];


siteList = JSON.parse(localStorage.getItem('siteList'));
 displayData();



 function addsite(){
   
  if(vaild() && vaildmail()){
    var site={
      name : siteNameInput.value,
      url : siteURLInput.value
      }
      siteList.push(site)
      localStorage.setItem ("siteList",JSON.stringify (siteList));
     displayLastindex();
     clearForm();
  }
  else{
      siteNameInput.style.color="red";
      siteURLInput.style.color="red";
      siteNameInput.style.borderColor="red";
      siteNameInput.style.borderWidth="2px";
      siteURLInput.style.borderColor="red";
      siteURLInput.style.borderWidth="2px";
      alert("invalid input, Please capitalize the first letter of the site name and let the site url begin with 'https://'");
  
  }
  
  
  }

function clearForm() {
    siteNameInput.value=null;
    siteURLInput.value=null;
  }

  function displayLastindex(){
    var data=`<tr>
                    <td>${siteList.length}</td>
                    <td>${siteList[siteList.length-1].name}</td>
                    <td><button onclick="visitItem();"  class="Btn1 btn-warning btn-sm"><i class="fa-solid fa-eye" style="color: #fdfcfc;"></i> Vist</button></td>
                    <td><button onclick="deleteSite();" class="Btn2  btn-danger btn-sm"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i> Delete</button></td>
                </tr>`
                document.getElementById("tableContent").innerHTML+=data;
  }
    
    function displayData(){
        var data='';
        for(var i=0;i<siteList.length;i++){
         data+=`<tr>
          <td>${i+1}</td>
          <td>${siteList[i].name}</td>
          <td><button onclick="visitItem(${i});" class="Btn1 btn-warning"><i class="fa-solid fa-eye" style="color: #fdfcfc;"></i> Vist</button></td>
         <td><button onclick="deleteSite(${i});" class="Btn2  btn-danger "><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i> Delete</button></td>
          </tr>`
          document.getElementById("tableContent").innerHTML=data;
      }
}

function deleteSite(index){
  siteList.splice(index,1)
   localStorage.setItem ("siteList",JSON.stringify (siteList))
   displayData();

}
function visitItem(index){
  window.open(siteList[index].url);
}

function vaild(){
  var nameregex =/^[A-Z][a-z]{1,9}$/gm;

var testing =nameregex.test(siteNameInput.value);
if(testing===true){
siteNameInput.style.color="green";
siteNameInput.style.borderColor="green";
siteNameInput.style.borderWidth="2px";

return true;


}else{
  return false
}
}

function vaildmail(){
  var urlregex =/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
var test =urlregex.test(siteURLInput.value);
if(test===true){
siteURLInput.style.color="green";
siteURLInput.style.borderColor="green";
siteURLInput.style.borderWidth="2px";
return true;


}
else{
  return false
}
}

