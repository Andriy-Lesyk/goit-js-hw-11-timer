class CountdownTimer{
  constructor(targetDate){
    this.targetDate=targetDate;
  }
  
getFullInfo(){setInterval(()=>{
 function pad(value){
    return String(value).padStart(2,'0')
  }
  function padd(value){
    return String(value).padStart(3,'0')
  }
let date= new Date(this.targetDate)
let time = date.getTime() - Date.now();
const days = padd(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
timeItems[0].textContent=days
timeItems[1].textContent=hours
timeItems[2].textContent=mins
timeItems[3].textContent=secs
timeShape.textContent=(`${days}:${hours}:${mins}:${secs}`)
console.log(`${days}:${hours}:${mins}:${secs}`);

},1000);

const timeItems=document.querySelectorAll('.value')
const timeShape=document.querySelector('.timer')
}}

const countdownTimer = new CountdownTimer ('May 12 , 2022');

countdownTimer.getFullInfo();


