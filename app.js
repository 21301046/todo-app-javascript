let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
button.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
   let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value="";
    let delbtns = document.getElementsByClassName("delete");
    for(delbtn of delbtns){
        delbtn.addEventListener("click",function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
        });
    }
});

