const form = document.forms.myform;


function addDiv(value, className, parent){
  const div = document.createElement("div")
  div.classList.add(className)
  div.innerHTML = value;
  parent.append(div)

  if(className=="delete"){
    div.addEventListener("click", ()=>{
     removeItem(div)
   })
 }
}


function addLiItem(name,date,amount){
  const li = document.createElement("li")
  li.classList.add("item")
  document.querySelector(".items").append(li);
  addDiv(name, "nameEx", li)
  addDiv(date, "dateEx", li)
  addDiv(amount, "amountEx", li)
  addDiv(`&times;`, "delete", li)
  checkItem()
  clearInput()
}

function checkItem(){
  if(document.querySelector(".item")){
    document.querySelector(".headMain").style.borderBottom = "none"
  }
  else {
    document.querySelector(".headMain").style.border ="3px solid #128277";
  }
}

function checkInput(){
  let check = 0;
  const listInput = document.querySelectorAll(".req")
  listInput.forEach(el=>{
    if(el.value.trim()===""){
      el.classList.add("error")
      check++
    }
    else {
      el.classList.remove("error")
    }
  })
  return check > 0 ? false : true;

}

function removeItem(el){
  el.parentElement.remove()
  checkItem()
}

function clearInput(){
  form.name.value = "";
  form.amount.value = "";
}

form.addExspense.onclick = function(){
  checkInput() && addLiItem(form.name.value, form.date.value, form.amount.value)
 
  return false
}