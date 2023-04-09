    
    fetch("./data.json")
    .then((res)=>{
       return res.json();
    })
    .then((data)=>{
      console.log(data);
      display(data)
    })
   
  
    function display(data){
    data.map(function(elem){
        var div=document.createElement("div");
        div.setAttribute("class","card");
        div.style.width="18rem";
        var image=document.createElement("img");
        image.src=elem.ImageUrl;
        image.setAttribute("class","card-image-top");
        var div1=document.createElement("div");
        div1.setAttribute("class","card-body");
        
       
        var h5=document.createElement("h5");
        h5.setAttribute("class","card-title");
        h5.innerText=elem.Name;
        var p=document.createElement("p");
        p.setAttribute('class',"card-text");
        p.innerText=elem.ShortDesc;
        var button=document.createElement("button");
        button.setAttribute("class","btn btn-primary");
        button.style.backgroundColor="none"
        button.innerText="View";
        div1.append(h5,p,button);
        div.append(image,div1);
        document.getElementById("Cards").append(div);
    })
  }