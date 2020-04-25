"use strict";

(function(){



    const items = document.getElementsByClassName("catoption");
    const underline = document.querySelector(".underline");

    const cars = document.getElementsByClassName("cars");

    underline.style.width = items[0].offsetWidth +'px';

    console.log(items);
    for(let i=0; i<items.length; i++){
        const li = items[i];
        const car = cars[i];
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

        });
    }

    

})();


