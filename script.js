var int_rate = document.getElementById("int_rate");
var int_display = document.getElementById("init");
int_display.innerHTML = int_rate.value;
  
int_rate.oninput = function() {
  int_display.innerHTML = this.value;
		}
    
function compute()
	{
  var pr = document.getElementById("principal").value;
	var ir = document.getElementById("int_rate").value;
	var num_yrs = document.getElementById("years").value;
  var current_yr = new Date().getFullYear();     
    
  if (pr < 1) 
  	{ alert("Please enter principal Amount > 0")
      document.getElementById("principal").focus() }
  else
  	{ var int = (pr * ir/100 * num_yrs)
    	var yr_date = parseInt(current_yr) + parseInt(num_yrs)
      var out_display = document.getElementById("final_out")
out_display.innerHTML = ("If you deposit " + pr + ", at an interest rate of " + ir + "%. You will receive an amount of " + int + ", in the year " + yr_date)
     	}
 	}
 