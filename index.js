let add= document.getElementById('add');
let TextValue= document.getElementById('todo-text');
let listitem = document.getElementById('list-item');
let RefreshText;
let body=document.getElementById('body')
let dark=document.getElementById('dark')
let data=[]
 
//enter
 TextValue.addEventListener("keypress",function(e){
   if(e.key==="Enter"){
        add.click()
      }
})

//create Todo
function CreateToDo(){
  
  if(TextValue.value===''){
    alert("Please Enter Your ToDo");
    TextValue.focus()
  }
  else{
    listitem=document.getElementById('list-item')
    let li=document.createElement('li')
    let Todoitem=`<div class='value'>${TextValue.value}</div>
    <div>
    <img onclick='updateToDo(this)' src='edit.png' class='edit control'>
    <img onclick='doneToDo(this)' src='green-png.webp' class='green control' id='green'>
    <img onclick='deleteToDo(this)'id='del' src='delete.png' class='delete control'>
    </div>`;
    li.innerHTML=Todoitem;
    listitem.appendChild(li);
    TextValue.value=''
    setLocalStorage() 
   
  }
  
  
 
} 
//refresh
function RefreshItems(){
  RefreshText.innerText= TextValue.value;
  add.setAttribute('onclick','doneToDo()');
  add.setAttribute('src','plus.png')
  TextValue.value=''
  setLocalStorage()
    }

//done
function doneToDo(e){
    if(e.parentElement.parentElement.querySelector('div').style.textDecoration===''){
    e.parentElement.parentElement.querySelector('div').style.textDecoration='line-through'
     e.parentElement.parentElement.querySelector('div').style.color='#248f24'
    e.parentElement.querySelector('img.edit').remove()
setLocalStorage()    }
    }
//update
function updateToDo(e){
  if(e.parentElement.parentElement.querySelector('div').style.textDecoration===''){
    TextValue.value= e.parentElement.parentElement.querySelector('div').innerText;
    add.setAttribute('onclick','RefreshItems()');
    add.setAttribute('src','refresh.png')
RefreshText=e.parentElement.parentElement.querySelector('div')
TextValue.focus()
setLocalStorage()}
  }

  //delete
     function deleteToDo(e){ 
       let deleteValue=e.parentElement.parentElement.querySelector('div').innerText;
       if(confirm(`Are You sure? Do You Want Delete This ${deleteValue}`)){
         e.parentElement.parentElement.remove()
         TextValue.focus()     
   setLocalStorage()
     }}
//localStorage

//dark mode
dark.onclick=function(){
  body.classList.toggle('active')
  setLocalStorage()
}


 function setLocalStorage(){

  
  localStorage.setItem('data',listitem.innerHTML)
  
}
function showData(){
  listitem.innerHTML=localStorage.getItem('data')
}

showData()



       