import data from 'historydata.json' assert {type: 'json'}
const loads =() =>{
  let datas=[];
  for (let item in data){
    datas.push('<li class="list">'+item+'</li>');
  };
  txt.innerHTML=datas.join('');
}
document.getElementsByClassName("btn")[0].onclick = () => { loads() };
