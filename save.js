const save =() =>{
  const fileName = "historydata.json";
  const savedata = JSON.stringify(data);
  const link = document.createElement("a");
  link.href = "data:text/plain," + encodeURIComponent(savedata);
  a.download = fileName;
  a.click();
};
document.getElementsByClassName("save")[0].onclick = () => { save() };
