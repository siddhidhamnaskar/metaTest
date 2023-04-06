    
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
        var image=document.createElement("img");
        image.src=elem.ImageUrl;
        var h2=document.createElement("h2");
        h2.innerText=elem.Name;
        var p=document.createElement("p");
        p.innerText=elem.ShortDesc;
        var button=document.createElement("button");
        button.innerHTML="View";
        div.append(image,h2,p,button);
        document.getElementById("Container").append(div);
    })
  }