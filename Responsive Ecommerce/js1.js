runClock();
setInterval("runClock()", 1000);

function runClock() {

   document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";


   /* Store the current date and time*/

   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();


   /** Display the current date and time */

   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;


   /* Calculate the days until January 1st*/

   var newYear = new Date("May 1, 2020");
   var nextYear = currentDay.getFullYear();
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);

   /**Display the time left until New Year's Eve */

   // document.getElementById("days").textContent = Math.floor(daysLeft);

   /** Calculate the hours left in the current day */

   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

   /** Calculate the minutes and seconds left in current hour */

   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;



   /* Display the time left until New Year's Eve */

   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);


}