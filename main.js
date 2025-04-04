  /* card button-1 start */
document.getElementById("card-btn-1").addEventListener("click",function(){
      alert("Board update successfully");

     /* update task assign part start */
      const myInnerText = getInnerTextById("task-assign-count");
      const covertMyInnerText = parseInt(myInnerText);
      let updateInnerText = covertMyInnerText-1;
      setInnerTextById("task-assign-count",updateInnerText);
    /* update task assign part start */

    /* nav count update start */
      const navCountText = getInnerTextById("nav-count");
      const covertNavCountText = parseInt(navCountText);
      let updateNavCountText = covertNavCountText+1;
      setInnerTextById("nav-count",updateNavCountText)
    /* nav count update end */

    /* add post start */
      const taskTitle1 = getInnerTextById("task1-title");
      const historyContainer = getElementById("history-container");
      const historyElementDiv = document.createElement('div');
      historyElementDiv.classList.add("m-4")
      const date = new Date().toLocaleTimeString();
      historyElementDiv.innerHTML= `
      <p>you have completed the task ${taskTitle1} at+ ${date}</p>`;
      historyContainer.appendChild(historyElementDiv)
     /* add post end */

     /* button disable start */
      const button1 = getElementById("card-btn-1");
      button1.classList.add("opacity-10");
      button1.disabled = true;
     /* button disable end */
    })
    /* card button-1 end */

 /* card button-2 start */
 
document.getElementById("card-btn-2").addEventListener("click",function(){
    alert("Board update successfully");
    const myInnerText = getInnerTextById("task-assign-count")
    const covertMyInnerText = parseInt(myInnerText);
    let updateInnerText = covertMyInnerText-1;
    setInnerTextById("task-assign-count",updateInnerText)

    // nav count update
    const navCountText = getInnerTextById("nav-count");
    // console.log(navCountText)
    const covertNavCountText = parseInt(navCountText);
    let updateNavCountText = covertNavCountText+1;
    setInnerTextById("nav-count",updateNavCountText)

   
    
//    add post

    const taskTitle2 = getInnerTextById("task2-title");
    const historyContainer = getElementById("history-container");
    const historyElementDiv = document.createElement('div');
     historyElementDiv.classList.add("m-4")
      const date = new Date().toLocaleTimeString();
      historyElementDiv.innerHTML= `
      <p>you have completed the task ${taskTitle2} at+ ${date}</p>`;
      historyContainer.appendChild(historyElementDiv)

    // button disable

    // document.getElementById("card-btn-2").classList.add("opacity-10")
     const button2 = getElementById("card-btn-2");
     button2.classList.add("opacity-10");

     button2.disabled = true;      
          
})
 /*  card button-2 end */

  /* card button-3 start */

 document.getElementById("card-btn-3").addEventListener("click",function(){
    alert("Board update successfully");

   /* update task assign part start */
    const myInnerText = getInnerTextById("task-assign-count");
    const covertMyInnerText = parseInt(myInnerText);
    let updateInnerText = covertMyInnerText-1;
    setInnerTextById("task-assign-count",updateInnerText);
  /* update task assign part start */

  /* nav count update start */
    const navCountText = getInnerTextById("nav-count");
    const covertNavCountText = parseInt(navCountText);
    let updateNavCountText = covertNavCountText+1;
    setInnerTextById("nav-count",updateNavCountText)
  /* nav count update end */

  /* add post start */
    const taskTitle3 = getInnerTextById("task3-title");
    const historyContainer = getElementById("history-container");
    const historyElementDiv = document.createElement('div');
    historyElementDiv.classList.add("m-4")
    const date = new Date().toLocaleTimeString();
    historyElementDiv.innerHTML= `
    <p>you have completed the task ${taskTitle3} at+ ${date}</p>`;
    historyContainer.appendChild(historyElementDiv)
   /* add post end */

   /* button disable start */
    const button1 = getElementById("card-btn-3");
    button1.classList.add("opacity-10");
    button1.disabled = true;
   /* button disable end */
  })

  /* card button-3 end */

   /* card button-4 start */

 document.getElementById("card-btn-4").addEventListener("click",function(){
    alert("Board update successfully");

   /* update task assign part start */
    const myInnerText = getInnerTextById("task-assign-count");
    const covertMyInnerText = parseInt(myInnerText);
    let updateInnerText = covertMyInnerText-1;
    setInnerTextById("task-assign-count",updateInnerText);
  /* update task assign part start */

  /* nav count update start */
    const navCountText = getInnerTextById("nav-count");
    const covertNavCountText = parseInt(navCountText);
    let updateNavCountText = covertNavCountText+1;
    setInnerTextById("nav-count",updateNavCountText)
  /* nav count update end */

  /* add post start */
    const taskTitle4 = getInnerTextById("task4-title");
    const historyContainer = getElementById("history-container");
    const historyElementDiv = document.createElement('div');
    historyElementDiv.classList.add("m-4")
    const date = new Date().toLocaleTimeString();
    historyElementDiv.innerHTML= `
    <p>you have completed the task ${taskTitle4} at+ ${date}</p>`;
    historyContainer.appendChild(historyElementDiv)
   /* add post end */

   /* button disable start */
    const button1 = getElementById("card-btn-4");
    button1.classList.add("opacity-10");
    button1.disabled = true;
   /* button disable end */
  })

  /* card button-4 end */

   /* card button-5 start */

 document.getElementById("card-btn-5").addEventListener("click",function(){
    alert("Board update successfully");

   /* update task assign part start */
    const myInnerText = getInnerTextById("task-assign-count");
    const covertMyInnerText = parseInt(myInnerText);
    let updateInnerText = covertMyInnerText-1;
    setInnerTextById("task-assign-count",updateInnerText);
  /* update task assign part start */

  /* nav count update start */
    const navCountText = getInnerTextById("nav-count");
    const covertNavCountText = parseInt(navCountText);
    let updateNavCountText = covertNavCountText+1;
    setInnerTextById("nav-count",updateNavCountText)
  /* nav count update end */

  /* add post start */
    const taskTitle5 = getInnerTextById("task5-title");
    const historyContainer = getElementById("history-container");
    const historyElementDiv = document.createElement('div');
    historyElementDiv.classList.add("m-4")
    const date = new Date().toLocaleTimeString();
    historyElementDiv.innerHTML= `
    <p>you have completed the task ${taskTitle5} at+ ${date}</p>`;
    historyContainer.appendChild(historyElementDiv)
   /* add post end */

   /* button disable start */
    const button1 = getElementById("card-btn-5");
    button1.classList.add("opacity-10");
    button1.disabled = true;
   /* button disable end */
  })

  /* card button-5 end */

   /* card button-6 start */

 document.getElementById("card-btn-6").addEventListener("click",function(){
    alert("Board update successfully");
    alert("congrats!!! You have completed all Task");

   /* update task assign part start */
    const myInnerText = getInnerTextById("task-assign-count");
    const covertMyInnerText = parseInt(myInnerText);
    let updateInnerText = covertMyInnerText-1;
    setInnerTextById("task-assign-count",updateInnerText);
  /* update task assign part start */

  /* nav count update start */
    const navCountText = getInnerTextById("nav-count");
    const covertNavCountText = parseInt(navCountText);
    let updateNavCountText = covertNavCountText+1;
    setInnerTextById("nav-count",updateNavCountText)
  /* nav count update end */

  /* add post start */
    const taskTitle6 = getInnerTextById("task6-title");
    const historyContainer = getElementById("history-container");
    const historyElementDiv = document.createElement('div');
      historyElementDiv.classList.add("m-4")
      const date = new Date().toLocaleTimeString();
      historyElementDiv.innerHTML= `
      <p>you have completed the task ${taskTitle6} at+ ${date}</p>`;
      historyContainer.appendChild(historyElementDiv)
   /* add post end */

   /* button disable start */
    const button1 = getElementById("card-btn-6");
    button1.classList.add("opacity-10");
    button1.disabled = true;
   /* button disable end */
  })

  /* card button-6 end */




//  clear history
document.getElementById("clear-history-btn").addEventListener("click",function(){
    document.getElementById("history-container").style.display="none"
})

// current date
const d = new Date().toLocaleDateString();

document.getElementById("current-date").innerText=d; 

// background change

document.getElementById("body-background-change").addEventListener("click",function(){
   
    let x= Math.floor(Math.random()*500000) + 500000;
    document.getElementById("bc").style.backgroundColor= `#${x}`;
    
          
  
  
  
  // Call the function every 2 seconds (optional)

  

})
// discover something new
document.getElementById("something-new").addEventListener("click",function(){
    window.location.href="blog.html"
})

