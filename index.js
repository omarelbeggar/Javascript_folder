async function getusers(){
const api='http://localhost:8080/employees';
const response = await fetch(api);

 if(response.ok==true){
const data= await response.json();
for (let i=0;i<data.length;i++){
document.querySelector("#emp").innerHTML+=`<span>${data[i].nom}</span> <hr/><br/>`;
}
console.log(data[0].nom);


 }

 
 else{
    console.log('problème');
 }
 
}
getusers();
/*
free API to use in our exercice with ILISI: https://restcountries.com/

*/ 