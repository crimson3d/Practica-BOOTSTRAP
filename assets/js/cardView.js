document.getElementById("grid-view").addEventListener("click", () => {
   const view = document.getElementById("switch");
   if (!view.classList.contains("row-cols-3") ) {
    view.classList.remove("row-cols-1")
    view.classList.add("row-cols-3");
    const occultTextTop = document.querySelectorAll(".card-header");
    occultTextTop.forEach(element => {
        element.classList.add("d-none");
    });

    const occultTextBottom = document.querySelectorAll(".card-body");
    occultTextBottom.forEach(element => {
        element.classList.add("d-none");
    });
   }
})

document.getElementById("list-view").addEventListener("click", () => {
    const view = document.getElementById("switch");
    if (!view.classList.contains("row-cols-1") ) {
     view.classList.remove("row-cols-3")   
     view.classList.add("row-cols-1");
    
     const occultTextTop = document.querySelectorAll(".card-header");
       occultTextTop.forEach(element => {
           element.classList.remove("d-none");
       });

       const occultTextBottom = document.querySelectorAll(".card-body");
       occultTextBottom.forEach(element => {
           element.classList.remove("d-none");
       });
    }
 })

