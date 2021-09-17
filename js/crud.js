const d=document;

export const insertar=(frm)=>{

    addEventListener("submit",async(e)=>{
        e.preventDefault();
        let $etFrm=e.target;
        
        if($etFrm===frm){

            if(!$etFrm.id.value){
                try {
                    let precioNu=Number($etFrm.precio.value);

                    let options ={
                        method:"post",
                        body:JSON.stringify({"nombre":$etFrm.nombre.value, "precio":precioNu}),
                        headers:{"Content-type":"application/json; charset=utf-8"}
                    }
                    let res= await fetch("http://localhost:3000/laptops",options);
                    //console.log(await res.json());
                   
                    if(!res.ok) throw{"status":res.status,"statusText":res.statusText}  
                    location.reload();
                } catch (err) {
                    let message= err.statusText||"ocurrio un error"; 
                    frm.insertAdjacentHTML("afterbegin",`<p>Error ${err.status}:${message}</p>`)    
                }         
            }else{
                //console.log($etFrm.id.value);
                try {
                    let precioNu=Number($etFrm.precio.value);
                    let options ={
                        method:"put",
                        body:JSON.stringify({"nombre":$etFrm.nombre.value, "precio":precioNu}),
                        headers:{"Content-type":"application/json; charset=utf-8"}
                    }
                    let res= await fetch(`http://localhost:3000/laptops/${$etFrm.id.value}`,options);
                    console.log(res);
                    
                    if(!res.ok) throw{"status":res.status,"statusText":res.statusText}  
                    location.reload();
                } catch (err) {
                    let message= err.statusText||"ocurrio un error"; 
                    frm.insertAdjacentHTML("afterbegin",`<p>Error ${err.status}:${message}</p>`)    
                }         
            }
        }  
    });
};

export const DeAndEd=(frm,title)=>{
    
    addEventListener("click",async(e)=>{

        if(e.target.matches(".edit")){
            let edit=e.target;
           // console.log(edit.dataset.id);
            title.textContent="Editar laptop"
            frm.nombre.value=edit.dataset.name;
            frm.precio.value=edit.dataset.precio;
            frm.id.value=edit.dataset.id;
        }
       
        if(e.target.matches(".delete")){
            let delet=e.target;
            let aDelete =confirm(`seguro que quieres eliminar el registro: ${delet.dataset.id}` )
            
            if(aDelete){
                try {
                    let options ={
                        method:"delete",
                        headers:{"Content-type":"application/json; charset=utf-8"}
                    }
                    let res= await fetch(`http://localhost:3000/laptops/${e.target.dataset.id}`,options);
                    console.log(res);
                    
                    if(!res.ok) throw{"status":res.status,"statusText":res.statusText}  
                    location.reload();
                }catch (err) {
                    let message= err.statusText||"ocurrio un error"; 
                    alert(`Error ${err.status}:${message}`); 
                }    
            }
            console.log(e.target.dataset.id);
        }

       
    });
};



/*export const editar=(btnedit)=>{
    
    addEventListener("click",(e)=>{
        if(e.target.matches(".edit")){
            console.log(e.target.dataset.id);

        }
       
    });
};

export const eliminar=(btndelete)=>{
    
    addEventListener("click",(e)=>{
        if(e.target.matches(".delete")){
            console.log(e.target.dataset.id);

        }
       
    });
};*/


