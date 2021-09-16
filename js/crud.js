const d=document;
export const editar=(btnedit)=>{
    
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
};
