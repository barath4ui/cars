"use strict";

(function(){



    const items = document.getElementsByClassName("catoption");
    const underline = document.querySelector(".underline");
    underline.style.width = items[0].offsetWidth +'px';


    const cars = document.getElementsByClassName("cars");
    const more = document.getElementsByClassName("car-btn");



    /* Cars Data */
    const carsdata = [
        {
            "car_Title":"Toyota FT1",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-01.png",
            "car_Type" : "Popular",
            "car_Price": "$49,990",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        },
        {
            "car_Title":"Lotus 3 Eleven",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-02.png",
            "car_Type" : "Popular",
            "car_Price": "$69,590",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        },
        {
            "car_Title":"Honda NSX",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-03.png",
            "car_Type" : "Popular",
            "car_Price": "$32,990",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        },
        {
            "car_Title":"Audi z100",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-04.png",
            "car_Type" : "Latest",
            "car_Price": "$19,990",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        },
        {
            "car_Title":"Audi z100",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-05.png",
            "car_Type" : "Latest",
            "car_Price": "$19,990",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        },
        {
            "car_Title":"Audi z100",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-06.png",
            "car_Type" : "Latest",
            "car_Price": "$19,990",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        },
        {
            "car_Title":"Audi z100",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-07.png",
            "car_Type" : "OurPick",
            "car_Price": "$19,990",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        },
        {
            "car_Title":"Audi z100",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-08.png",
            "car_Type" : "OurPick",
            "car_Price": "$19,990",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        },
        {
            "car_Title":"Audi z100",
            "car_Subtitle":"The new hybrid super car",
            "car_Image": "images/car-09.png",
            "car_Type" : "OurPick",
            "car_Price": "$19,990",
            "car_Details": "The global reception to the Toyota 86, as well as the FT-1 concept, proved that the public still carried a deep love for Toyota sports cars. Toyota Motor Company (TMC) in Japan, with the guidance of Akio Toyoda, confirmed that the time was right to bring back the Supra. It's one thing to create a dream concept; creating a sports car for production is an entirely different beast. Many platforms, powertrains and even exterior designs would have to be analyzed to ensure they were worthy of the Supra badge.",
            "car_Design": "PREMIUM"
        }
    ];


    /* Cars List */
    const carListWrap = document.getElementById("carListWrap");
    const carDetailWrap = document.getElementById("carDetailWrap");
    const carlists = [];
    const carDetails = [];

    carsdata.forEach((car,carIndex)=>{
    
        carlists.push(
            `
            <li class="${car.car_Type} cartype">
            <div id="carID-${carIndex}" class="car theme${carIndex}" >
                <div id="car_Title_ID-${carIndex}" class="car-subtitle">${car.car_Subtitle}</div>
                <div id="car_Subtitle_ID-${carIndex}" class="car-title">${car.car_Title}</div>
                <div id="car_info_ID-${carIndex}" class="car-btn"><span class="icon-round"><i class="fas fa-plus"></i></span></div>
                <div id="car-image_ID-${carIndex}" class="car-image"><img src="${car.car_Image}" alt="" title="" class="img-car"></div>
            </div>
            </li>
            `
        )

        carDetails.push(
            `
            <div id="carID-details-${carIndex}" class="cars-details-wrap d-none">
            <div id="carDetails-image_ID-${carIndex}" class="details-img">
              <img src="${car.car_Image}" alt="" title="" class="img-car" />
            </div>
            <div id="carDetails_info_ID-${carIndex}" class="details-content">
              <div id="carDetails_Title_ID-${carIndex}" class="car-title">${car.car_Title} <span class="car-headline"></span></div>
              <div id="carDetails_Subtitle_ID-${carIndex}" class="car-subtitle">${car.car_Subtitle}</div>
              <div id="carDetails_Price_ID-${carIndex}" class="car-price">
                <div class="car-col">
                  <h3>${car.car_Price}</h3>
                  <p>starting price</p>
                </div>
              </div>
              <div class="car-text">
                <p>${car.car_Details}</p>
              </div>
              <div class="car-spec">
                <h3>Desgin</h3>
                <div class="car-spec-box theme${carIndex} m-l-0" >
                  <h5>${car.car_Design}</h5>
                  <p>Design Pack</p>
                </div>
                <div class="car-spec-box" >
                  <h5>Sports</h5>
                  <p>Design Pack</p>
                </div>
              </div>
            </div>
            </div>

            `
        )

    }
    );
    carListWrap.innerHTML = carlists.join('');
    carDetailWrap.innerHTML = carDetails.join('');


    /* Btn Moreinfo */
    for(let i=0; i<more.length; i++){
   
        const detail = more[i];

        detail.addEventListener("click", function(){

            console.log(detail.id);

            /* Btn change */
            document.querySelector(".btn-search").classList.add("d-none");
            document.querySelector(".btn-back").classList.add("d-block");

            /* Heading Hide */
            document.querySelector(".heading").classList.add("d-none");
            document.querySelector(".cars-details").classList.add("d-block");
            
            
            let currentDetails = "carID-details-"+i;
            document.getElementById(currentDetails).classList.add("d-block");

            function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
            
            topFunction();

        });
    }

    /* Default Popular */
    var x = document.getElementsByClassName("cartype");
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
        x[i].classList.add("d-none");
    }
    var y = document.getElementsByClassName("Popular");
    for (let i = 0; i < y.length; i++) {
        y[i].classList.add("active");
        y[i].classList.remove("d-none");
    }

    /* Active menu */
    for(let i=0; i<items.length; i++){
        const li = items[i];
        
            li.addEventListener("click", function(){

        
            document.querySelector(".active").classList.remove("active");
            li.classList.add("active");

            let sizeToMove = 0;

            for(let j=0; j<i; j++){
                sizeToMove += items[j].offsetWidth;
            }

            underline.style.left = sizeToMove + 'px';
            underline.style.width = li.offsetWidth + 'px';

            const ctype = li.id;
       
            var x = document.getElementsByClassName("cartype");
            for (let i = 0; i < x.length; i++) {
                x[i].classList.remove("active");
                x[i].classList.add("d-none");

            }


            var y = document.getElementsByClassName(ctype);

            if(ctype=="All"){
                console.log("All_Working");
                var x = document.getElementsByClassName("cartype");
                for (let i = 0; i < x.length; i++) {
                    x[i].classList.add("active");
                    x[i].classList.remove("d-none");
                }
            }
            else{
                for (let i = 0; i < y.length; i++) {
                    y[i].classList.add("active");
                    y[i].classList.remove("d-none");
                }
            }
            
            
        });
    }

    

    const filtered_data = carsdata.filter(c => c.car_Type == "Latest");
    console.log(filtered_data)

})();




