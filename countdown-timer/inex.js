const newYears='01 jan 2023';
function countdown()
{
    const NewYearsDate=new Date(newYears);
    const currDate=new Date();
    console.log(NewYearsDate-currDate);
    const seconds=(NewYearsDate-currDate)/1000;
    const secs=Math.floor(seconds%60);
    const minutes=Math.floor(seconds/60)%60;
    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    console.log(days ,hours,minutes,secs);
    const dayup=document.querySelector('#days');
    const minup=document.querySelector('#mins');
    const hoursup=document.querySelector('#hours');
    const secup=document.querySelector('#seconds');
    dayup.innerHTML=days;
    minup.innerHTML=minutes;
    hoursup.innerHTML=hours;
    secup.innerHTML=secs;
}

countdown();
setInterval(countdown,1000)