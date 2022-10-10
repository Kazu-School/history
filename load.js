import data from './historydata.json' assert {type: 'json'}
const loads =() =>{
  let datalist=[];
  for (let item in data){
    datalist.push('<li class="list">'+item+'</li>');
  };
  txt.innerHTML = datalist.join('');
}
document.getElementsByClassName("btn")[0].onclick = () => { loads() };
