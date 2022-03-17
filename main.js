let myDiv = document.querySelector("#character-div")
let myDiv2 = document.querySelector("#character-div2")
let fetchData = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  };

  let onRender = async () => {
              let characterValue = document.querySelector("select[name='character']");
              let characterValue2 = document.querySelector("select[name='character2']");
                
                let characters = await fetchData(`https://swapi.dev/api/${
                            characterValue ? "people/" + characterValue.value : null
                          }`);
                let characters2 = await fetchData(`https://swapi.dev/api/${
                              characterValue2 ? "people/" + characterValue2.value : null
                            }`);
             let infoPara1 = document.createElement("p");  
             infoPara1.classList.add("info-para") 
             let infoPara2 = document.createElement("p");  
             infoPara2.classList.add("info-para");         
            class Character{
              constructor(name, gender, height, mass, hairColor, pictureUrl){
                  this.name = name;
                  this.gender = gender;
                  this.height = height;
                  this.mass = mass;
                  this.hairColor = hairColor;
                  this.pictureUrl = pictureUrl;
              }
              compareGender1 (person2){
                
                if( this.gender === person2){ 
                  infoPara1.innerHTML = `My gender is ${this.gender}. Me and ${myCharacter2.name} have the same gender.`;
                  // console.log("test test")
                  myDiv.appendChild(infoPara1);
                }
                else{
                  infoPara1.innerHTML = `My gender is ${this.gender}.`;
                  myDiv.appendChild(infoPara1);
                }
              }

              compareGender2 (person1){
                
                if( this.gender === person1){ 
                  infoPara2.innerHTML = `My gender is ${this.gender}. Me and ${myCharacter1.name} have the same gender`;
                  // console.log("test test")
                  myDiv2.appendChild(infoPara2);
                }
                else{
                  infoPara2.innerHTML = `My gender is ${this.gender}.`;
                  myDiv2.appendChild(infoPara2);
                }
              }

              compareWeight1(person2){
                
                if(Math.floor(this.mass) > Math.floor(person2)){
                  let weightDifference = this.mass - person2;
                  infoPara1.innerHTML = `My weight is ${this.mass} kg and ${myCharacter2.name}'s weight is ${person2} kg. I'm heavier than ${myCharacter2.name}, the difference between our weights are ${weightDifference} kg.`;
                  myDiv.appendChild(infoPara1);
                  console.log("heavier");
                }
                else if(Math.floor(this.mass) < Math.floor(person2)){
                  let weightDifference2 = person2 - this.mass;
                  infoPara1.innerHTML = `My weight is ${this.mass} kg and ${myCharacter2.name}'s weight is ${person2} kg. I'm lighter than ${myCharacter2.name}, the difference between our weights are ${weightDifference2} kg.`;
                  myDiv.appendChild(infoPara1);
                  console.log("lighter");
                }
                else{
                  infoPara1.innerHTML = `My weight is ${this.mass} kg. Me and ${myCharacter2.name} have the same weight.`;
                  myDiv.appendChild(infoPara1);
                  console.log("same");
                }

              }

              compareWeight2(person1){
                
                if(Math.floor(this.mass) > Math.floor(person1)){
                  let weightDifference = this.mass - person1;
                  infoPara2.innerHTML = `My weight is ${this.mass} kg and ${myCharacter1.name}'s weight is ${person1} kg. I'm heavier than ${myCharacter1.name}, the difference between our weights are ${weightDifference} kg.`;
                  myDiv2.appendChild(infoPara2);
                  console.log("heavier");
                }
                else if(Math.floor(this.mass) < Math.floor(person1)){
                  let weightDifference2 = characters.mass - this.mass;
                  infoPara2.innerHTML = `My weight is ${this.mass} kg and ${myCharacter1.name}'s weight is ${person1} kg. I'm lighter than ${myCharacter1.name}, the difference between our weights are ${weightDifference2} kg.`;
                  myDiv2.appendChild(infoPara2);
                  console.log("lighter");
                }
                else{
                  infoPara2.innerHTML = `My weight is ${this.mass} kg. Me and ${myCharacter2.name} have the same weight.`;
                  myDiv2.appendChild(infoPara2);
                  console.log("same");
                }

              }

              compareHeight1(person2){
                
                if(Math.floor(this.height) > Math.floor(person2)){
                  let heightDifference = this.height - person2;
                  infoPara1.innerHTML = `My height is ${this.height} cm and ${myCharacter2.name}'s height is ${person2} cm. I'm taller than ${myCharacter2.name}, the difference between our heights are ${heightDifference} cm.`;
                  myDiv.appendChild(infoPara1);
                  console.log("taller");
                }
                else if(Math.floor(this.height) < Math.floor(person2)){
                  let heightDifference2 = person2 - this.height;
                  infoPara1.innerHTML =`My height is ${this.height} cm and ${myCharacter2.name}'s height is ${person2} cm. I'm shorter than ${myCharacter2.name}, the difference between our heights are ${heightDifference2} cm.`;
                  myDiv.appendChild(infoPara1);
                  console.log("shorter");
                }
                else{
                  infoPara1.innerHTML = `My height is ${this.height} cm. Me and ${myCharacter2.name} have the same height.`;
                  myDiv.appendChild(infoPara1);
                  console.log("same");
                }

              }

              compareHeight2(person1){
                
                if(Math.floor(this.height) > Math.floor(person1)){
                  let heightDifference = this.height - person1;
                  infoPara2.innerHTML = `My height is ${this.height} cm and ${myCharacter1.name}'s height is ${person1} cm. I'm taller than ${myCharacter1.name}, the difference between our heights are ${heightDifference} cm.`;
                  myDiv2.appendChild(infoPara2);
                  console.log("taller");
                }
                else if(Math.floor(this.height) < Math.floor(person1)){
                  let heightDifference2 = person1 - this.height;
                  infoPara2.innerHTML = `My height is ${this.height} cm and ${myCharacter1.name}'s height is ${person1} cm. I'm shorter than ${myCharacter1.name}, the difference between our heights are ${heightDifference2} cm.`;
                  myDiv2.appendChild(infoPara2);
                  console.log("shorter");
                }
                else{
                  infoPara2.innerHTML = `My height is ${this.height} cm. Me and ${myCharacter1.name} have the same height.`;
                  myDiv2.appendChild(infoPara2);
                  console.log("same");
                }

              }

              compareHair1 (person2){
                
                if( this.hairColor === person2){ 
                  infoPara1.innerHTML = `My hair color is ${this.hairColor}. Me and ${myCharacter2.name} have the same hair color!`;
                  // console.log("test test")
                  myDiv.appendChild(infoPara1);
                }
                else{
                  infoPara1.innerHTML = `My hair color is ${this.hairColor}.`;
                  // console.log("test test")
                  myDiv.appendChild(infoPara1);
                }

              }

              compareHair2 (person1){
                
                if( this.hairColor === person1){ 
                  infoPara2.innerHTML = `My hair color is ${this.hairColor}. Me and ${myCharacter1.name} have the same hair color!`;
                  // console.log("test test")
                  myDiv2.appendChild(infoPara2);
                }
                else{
                  infoPara2.innerHTML = `My hair color is ${this.hairColor}.`;
                  // console.log("test test")
                  myDiv2.appendChild(infoPara2);
                }

              }
          };

          

            let myCharacter1 = new Character(characters.name, characters.gender, characters.height, characters.mass, characters.hair_color, "./images/"+characterValue.value+".jpg");
         
            
            let myCharacter2 = new Character(characters2.name, characters2.gender, characters2.height, characters2.mass, characters2.hair_color, "./images/"+characterValue2.value+".jpg");

            // console.log(myCharacter1.mass);

            let mySection1 = document.createElement("section");
            mySection1.innerHTML = `<h3> ${myCharacter1.name} </h3> <img src="${myCharacter1.pictureUrl}" alt="character">
            <section id="info-section"><p>Ask me about me and ${myCharacter2.name}'s: <br> <br> <button id="mass-btn1">Weight</button><br>
           <button id="height-btn1">Height</button><br> <button id="hair-btn1">Hair Color</button><br><button id="gender-btn1">Gender</button></section>`;
            myDiv.innerHTML=mySection1.innerHTML;

            let mySection2 = document.createElement("section");
            mySection2.innerHTML = `<h3>${characters2.name}</h3><img src="${myCharacter2.pictureUrl}" alt="character"> <section id="info-section2"><p>Ask me about about me and ${characters.name}'s: <br> <br><button id="mass-btn2">Weight</button><br><button id="height-btn2">Height</button><br><button id="hair-btn2">Hair Color</button><br><button id="gender-btn2">Gender</button> </p> </section>`;
            myDiv2.innerHTML=mySection2.innerHTML;


            // let infoSection = document.querySelector("#info-section");
            // infoSection.style.display = "none";
            // let infoBtn = document.querySelector("#info-btn")
            
            // infoBtn.addEventListener("click",()=>{
            //   infoSection.style.display = (mySection1.toggled ^=1) ? "block" : "none";
            // },false);
              
            //   let infoSection2 = document.querySelector("#info-section2");
            //   infoSection2.style.display = "none";
            //   let infoBtn2 = document.querySelector("#info-btn2")

            //   infoBtn2.addEventListener("click",()=>{
                
            //     infoSection2.style.display = (mySection2.toggled ^=1) ? "block" : "none";
            //   }, false);

             let genderBtn1 = document.querySelector("#gender-btn1");
             
             genderBtn1.addEventListener("click",()=>{
              myCharacter1.compareGender1(myCharacter2.gender);
             });

             let genderBtn2 = document.querySelector("#gender-btn2");
             
             genderBtn2.addEventListener("click",()=>{
              myCharacter2.compareGender2(myCharacter1.gender);
             });

             let massBtn1 = document.querySelector("#mass-btn1");
             massBtn1.addEventListener("click",()=>{
               myCharacter1.compareWeight1(myCharacter2.mass);
             });

             let massBtn2 = document.querySelector("#mass-btn2");
             massBtn2.addEventListener("click",()=>{
               myCharacter2.compareWeight2(myCharacter1.mass);
             });

             let heightBtn1 = document.querySelector("#height-btn1");
             heightBtn1.addEventListener("click",()=>{
               myCharacter1.compareHeight1(myCharacter2.height);
             });

             let heightBtn2 = document.querySelector("#height-btn2");
             heightBtn2.addEventListener("click",()=>{
               myCharacter2.compareHeight2(myCharacter1.height);
             });

             let hairBtn1 = document.querySelector("#hair-btn1");
             hairBtn1.addEventListener("click",()=>{
               myCharacter1.compareHair1(myCharacter2.hairColor);
             });

             let hairBtn2 = document.querySelector("#hair-btn2");
             hairBtn2.addEventListener("click",()=>{
               myCharacter2.compareHair2(myCharacter1.hairColor);
             });
  };