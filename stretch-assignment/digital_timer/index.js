setInterval(timeUp, 1000);
let count = document.getElementById('secondOnes').innerHTML = "0";


function timeUp() {  
  
  //let count = document.getElementById('secondOnes');
  count = parseInt(count, 10);
  if (count < 9) {
      
      count++;
      document.getElementById("secondOnes").innerHTML = count;
  }
  else 
  {
      document.getElementById('secondOnes').innerHTML = "0";
      count = 0;
      
  }
  
};