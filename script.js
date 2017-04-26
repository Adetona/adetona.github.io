	function setYear(){
	               

	             var date = new Date () ;

	                date = date.getFullYear() ;  

	                var footer =  document.getElementById("yearfooter") ; 

	                footer.innerHTML = date ; 
	            }