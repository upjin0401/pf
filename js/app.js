

let number = document.getElementById("number");

let counter = 0;
setInterval(() => {
  if(counter == 80){
    clearInterval();
  }else{
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 35);


let number_2 = document.getElementById("number_2");

let nb = 0;
setInterval(() => {
  if(nb == 85){
    clearInterval();
  }else{
    nb += 1;
    number_2.innerHTML = nb + "%";
  }
}, 35);

let number_3 = document.getElementById("number_3");

let nb3 = 0;
setInterval(() => {
  if(nb3 == 90){
    clearInterval();
  }else{
    nb3 += 1;
    number_3.innerHTML = nb3 + "%";
  }
}, 35);

let number_4 = document.getElementById("number_4");

let nb4 = 0;
setInterval(() => {
  if(nb4 == 60){
    clearInterval();
  }else{
    nb4 += 1;
    number_4.innerHTML = nb4 + "%";
  }
}, 35);

let number_5 = document.getElementById("number_5");

let nb5 = 0;
setInterval(() => {
  if(nb5 == 75){
    clearInterval();
  }else{
    nb5 += 1;
    number_5.innerHTML = nb5 + "%";
  }
}, 35);

let number_6 = document.getElementById("number_6");

let nb6 = 0;
setInterval(() => {
  if(nb6 == 80){
    clearInterval();
  }else{
    nb6 += 1;
    number_6.innerHTML = nb6 + "%";
  }
}, 35);
