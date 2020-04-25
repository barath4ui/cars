"use strict";

(function(){



    const items = document.getElementsByClassName("catoption");
    const underline = document.querySelector(".underline");

    const cars = document.getElementsByClassName("cars");
    const more = document.getElementsByClassName("car-btn");

    underline.style.width = items[0].offsetWidth +'px';

    console.log(items);
    for(let i=0; i<items.length; i++){
        const li = items[i];
        const car = cars[i];
        const detail = more[i];

        detail.addEventListener("click", function(){
            
            document.querySelector(".btn-search").classList.add("d-none");
            document.querySelector(".heading").classList.add("d-none");
            document.querySelector(".cars-details").classList.add("d-block");
            document.querySelector(".btn-back").classList.add("d-block");


        });

        li.addEventListener("click", function(){

            document.querySelector(".active").classList.remove("active");
            li.classList.add("active");

            document.querySelector(".d-block").classList.remove("d-block");
            car.classList.add("d-block")

            let sizeToMove = 0;

            for(let j=0; j<i; j++){
                sizeToMove += items[j].offsetWidth;
            }

            underline.style.left = sizeToMove + 'px';
            underline.style.width = li.offsetWidth + 'px';

        }
        );
    }

    

})();


