function klik(name,option,temp=0){
    const cekboks= document.querySelectorAll(`input[name="${name}"]`);
    cekboks.forEach((ch)=>{
        if(option==1){
            ch.disabled = false
            ch.checked = false
        }else{
            ch.disabled = true
        }
     
    });
}

let temp=0
document.querySelectorAll('input[name="pizza"]').forEach((elem) => {
    elem.addEventListener("click", function(event){
        klik("size",1)
        console.log(event.target.value)
        hasil.textContent=temp=parseInt(event.target.value);
        if(document.getElementById("pizza1").checked){
            klik("pizza1",1)
            klik("pizza2",0)
            klik("pizza3",0)
        }else if(document.getElementById("pizza2").checked){
            klik("pizza2",1)
            klik("pizza1",0)
            klik("pizza3",0)
        }else if(document.getElementById("pizza3").checked){
            klik("pizza3",1)
            klik("pizza1",0)
            klik("pizza2",0)
        }
        
    });
});

document.querySelectorAll('input[name="size"]').forEach((elem) => {
    elem.addEventListener("click", function(event){
        if(event.target.checked){
            hasil.textContent=temp=temp+parseInt(event.target.value);
        }else{
            hasil.textContent=temp=temp-parseInt(event.target.value);
        }
    });
});
document.querySelectorAll('input[name="pizza1"]').forEach((elem) => {
    elem.addEventListener("click", function(event){
        if(event.target.checked){
            hasil.textContent=temp=temp+parseInt(event.target.value);
        }else{
            hasil.textContent=temp=temp-parseInt(event.target.value);
        }
        
    });
});
document.querySelectorAll('input[name="pizza2"]').forEach((elem) => {
    elem.addEventListener("click", function(event){
        if(event.target.checked){
            hasil.textContent=temp=temp+parseInt(event.target.value);
        }else{
            hasil.textContent=temp=temp-parseInt(event.target.value);
        }
        
    });
});
document.querySelectorAll('input[name="pizza3"]').forEach((elem) => {
    elem.addEventListener("click", function(event){
        if(event.target.checked){
            hasil.textContent=temp=temp+parseInt(event.target.value);
        }else{
            hasil.textContent=temp=temp-parseInt(event.target.value);
        }
        
    });
});
