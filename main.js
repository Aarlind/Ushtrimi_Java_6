//funksion i thjeshte
/* function kalkulo(x, y){
    return x+y;
}

//arrow function
var kalkulo = (x, y) => x+y;

var vargu = [1, 1.11, true, 'test'];
//for in , for of 

for(let i = 0; i<vargu.length; i++){
    console.log(vargu[i]);
}

for(let i in vargu){
    console.log(i);
    //iteron neper indexa
}
for(let i of vargu){
    console.log(i);
    //iteron neper elemente si for loop
}
 */




  function funksioni(){
    const Personi ={
        emri : document.getElementById('emri').value,
        mbiemri : document.getElementById('mbiemri').value,
        email : document.getElementById('lenda').value,
        mosha : document.getElementById('mosha').value,
        qyteti : document.getElementById('nota').value
    }
    //Personi.emri = 'test'

    var vargu = [Personi.emri, Personi.mbiemri, Personi.email, Personi.mosha, Personi.qyteti];
    //deklarimi i objektit
    if(Personi.emri == '' || Personi.mbiemri == '' || Personi.email == '' || Personi.mosha == '' || Personi.qyteti == ''){
        alert('Plotesoni tabelat e meposhtme')
    } 

 


} 
values = [];
mosha = [];
function addRecord() {
    var inp = document.getElementById('emri');
    values.push(inp.value);
    inp.value = "";  
    var mInp = document.getElementById('mosha');   
            mosha.push(mInp.value);
            mInp.value = "";  
  }
  function displayRecord() {
    for(let i = 0; i<values.length; i++){
        console.log(values[i]);
    }
  }

  function personatMbiMoshen18(){
  }



