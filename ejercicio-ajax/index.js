const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
    let main=d.querySelector("#main");

    const getHtml=async(url)=>{
        try {

            let options ={
                method:"get",
                headers:{"Content-type":"text/html; charset=utf-8"}
            }

            let res = await fetch(url,options);
            console.log(res);
            console.log(res.status);
            console.log(res.statusText);

            main.innerHTML=await res.text();
            if(!res.ok) throw{"status":res.status,"statusText":res.statusText};
        } catch (error) {
            let message=error.statusText||"ocurrio un error";
            main.insertAdjacentHTML("afterend",`<p>Error ${error.status}:${message}</p>`)
        }
        
    }

    getHtml("assets/home.html")
    d.addEventListener("click",(e)=>{

        if(e.target.matches("#menu a")){
            e.preventDefault();
            getHtml(e.target.href);
        }
      
    });

});