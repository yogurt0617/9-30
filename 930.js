let a=[]
let btn    = document.getElementById("btn")
let add    = document.getElementById("add")
let data   = document.getElementById("data")
let error  = document.getElementById("error")
let btnall = document.getElementById("delete")
let jean   = document.getElementsByClassName("jean")[0]

function del(key){
    a.splice(key,1)
    adddata()
    console.log(a)
}
function adddata(){
    data.innerHTML = null
    for(let i=0;i<a.length;i++){
        data.innerHTML += `<li>${a[i]} &nbsp; <button onclick="del(${i})" >清除</button> </li>`
    }

}

function delokay(){
    jean.innerText = ""
}

function gay(){
    jean.innerText = "我就知道"
    jean.innerHTML += `<button onclick="delokay()">好哦</button>`
}

function okay(){
    jean.innerText = "你不是甲甲嗎"
    jean.innerHTML += `<div style="display:flex;gap:5px;"><button id="ygay" onclick="gay()">不我是</button> <button id="ygay" onclick="gay()">我當然是</button></div>`
   
}

btn.addEventListener("click",()=>{
    error.innerText = ""
    if(add.value == ""){
        error.innerText = "不可為空白"
        return
    }
    a.push(add.value)
    data.innerHTML = null
    adddata()
    add.value = ""
    okay()
})

btnall.addEventListener("click",()=>{
    if(a.length == 0){
        error.innerText = "沒有資料可清除"
        return
    }
    data.innerHTML = null
    a = [];
    
})





