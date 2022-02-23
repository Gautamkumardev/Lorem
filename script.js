let navBar = document.querySelectorAll(".nav-bar");
let menuBtn = document.querySelectorAll(".menu-btn");
let cancelBtn = document.querySelectorAll(".cancel-btn");
let menuList = document.querySelectorAll(".menu-list");
let ed = document.querySelectorAll(".edh2");
let serviceCard = document.querySelectorAll(".service-card");
let viewBtn = document.querySelectorAll(".view-more");
let hideBtn = document.querySelectorAll(".hide-modal");
let modal = document.querySelectorAll('.modal');
let modalData = document.querySelectorAll('.modalData');
let themeBtn = document.querySelector('.theme-btn');

menuBtn[0].addEventListener("click", displayMenu);
cancelBtn[0].addEventListener("click", hideMenu);

function displayMenu() {
       menuList[0].classList.add('active');
       this.classList.add('active');
       document.addEventListener('click', function checkClick(e)
       {
            let clickInside = navBar[0].contains(e.target);
            if (!clickInside) {
                 hideMenu();
            }
       }
       );
}

function hideMenu() {
     menuList[0].classList.remove('active')
     menuBtn[0].classList.remove('active');
}

//Function for Qualification

ed.forEach(function showElement(item)  {
   item.addEventListener('click', function (){
      
       // console.log(`#${item.dataset.classname}`);
      let elementId = (`${item.dataset.classname}`);
      let content = document.querySelector(`#${elementId}`);
      let removeContent = document.querySelectorAll('.split');
        //  console.log(content);
        //   console.log(content.classList);
        if (!content.classList.contains('show')) {
             content.classList.add('show');
             item.classList.add('active');
           
       }
      removeContent.forEach(function (rc){
          if (!rc.id.includes(`${elementId}`)) {
                    rc.classList.remove('show');
                    console.log(`.edh2[data-classname="${rc.id}"]`);
                    document.querySelector(`.edh2[data-classname="${rc.id}"]`).classList.remove('active');
          }
           })
        
     
   } );
});

//function for Modals

viewBtn.forEach(function (btn){
    btn.addEventListener('click', function(){
    btn.parentNode.classList.add('active-modal');
    });
});

hideBtn.forEach(function (btn){
    btn.addEventListener('click', function(){
        btn.closest('.service-card').classList.remove('active-modal');
    });
});

modal.forEach(function (m){
    m.addEventListener('click', function(m){
        let a = m.target.closest('.modal-data');
        //console.log(a);
       if(a == null){
       //console.log(m);
        m.target.closest('.service-card').classList.remove('active-modal');
        
    }
    });
});
themeBtn.addEventListener('click', function(){
   let a =  document.documentElement.classList;
   if (a.contains('light')) {
       a.remove('light');
       a.add('dark');
       themeBtn.querySelector('.uil').className = 'uil uil-sun'
    //   console.log(a);
        return 0;
   }
   if (a.contains('dark')) {
       a.remove('dark');
       a.add('light');
       themeBtn.querySelector('.uil').className = 'uil uil-moon'
    //   console.log(a);
         return 0;
   }
})