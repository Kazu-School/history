import data from './historydata.json' assert {type: 'json'}
const loads =() =>{
  for (let i=0; i < data.length; i++){
    var mytable = document.getElementById("table");
    var mytr = mytable.insertRow(i+1);
    var myth = document.createElement("th");
    myth.innerHTML = data[i][0];
    console.log(data[i][0]);
    mytr.appendChild(myth);
    var ans = mytr.insertCell(1);
    ans.innerHTML = data[i][1];
    console.log(data[i][1]);
    for (let n=2; n < data[i].length; n++){
      var def = mytr.insertCell(n);
      def.innerHTML=data[i][n];
      console.log(data[i][n]);
    };
  };
};
document.getElementsByClassName("btn")[0].onclick = () => { loads() };
