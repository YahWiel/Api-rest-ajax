import { editar, eliminar } from "./js/crud.js";

const d=document;


d.addEventListener("DOMContentLoaded",(e)=>{

    const $table=d.querySelector(".crud-table"),
    $form=d.querySelector(".crud-form"),
    $title=d.querySelector(".crud-title"),
    $template=d.getElementById("crud-template").content,
    $fragment=d.createDocumentFragment();

    //console.log($template.querySelector(".nombre"));
    const getAll= async()=>{
        try {
            let res= await fetch("http://localhost:3000/laptops");
            let json = await res.json();
            
            json.forEach(ele=>{
                console.log(ele);
                $template.querySelector(".nombre").textContent=ele.nombre;
                $template.querySelector(".precio").textContent=ele.precio;
                $template.querySelector(".edit").dataset.id=ele.id;
                $template.querySelector(".edit").dataset.name=ele.nombre;
                $template.querySelector(".edit").dataset.precio=ele.precio;
                $template.querySelector(".delete").dataset.id=ele.id;


                let $clone =d.importNode($template,true)
                $fragment.appendChild($clone)
            });
            $table.querySelector("tbody").appendChild($fragment);
            if(!res.ok) throw{status:res.status,statusText:res.statusText};
            
        } catch (err) {
            let message =err.statusText || "Ocurrio un error";
            $table.insertAdjacentHTML("afterend",`<p>Error ${err.status}:${message}</p>`)
        }
    }

    getAll();
    editar(".edit");
    eliminar(".delete");
    
    /*fetch("http://localhost:3000/laptops")
    .then(res=>res.json())
    .then(res2=>console.log(res2))*/

});



