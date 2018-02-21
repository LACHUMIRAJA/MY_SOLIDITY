<html >
<head> 

<script src="web3.min.js"></script>
<script src="Inventory.js"></script>

<meta charset="utf-8">

<title> IMS </title>

<h1 style="color:red;" > <center> NANBAN ICECREAMS </center> </h1>
<center><img src="ice2.jpg" width="30%">
</head>
<body>

<p id="date" ></p>
<script>
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "Date: "+ d + ""+  m  +""+ y;
</script>

  
	<center>
		
		<h2 style="color:green;">Send ethers to buy tokens</h2>
	
		<table border="0" width="10%">

<tr><td> </tr></ td> 

		 <tr><td> 
		 Enter  Your Accout Number: </td> </tr> 
<tr><td> </tr></ td> 
		<tr><td> <input type="text" placeholder="Account Number" id="account"> </td> </tr>
<tr><td> </tr></ td> 
		<tr><td> Specify Ether Amount To Send: </td> </tr>
<tr><td> </tr></ td> 
		<tr><td> <input type="text" placeholder="Ether value..." id="Rs"> </td> </tr>
<tr><td> </tr></ td> 
		<tr><td> <input type="button" onclick="Tokens()" value="Send"> <tr><td>
	</center>

	<script>
		web3.eth.defaultAccount
		function Tokens()
		{
alert("Wait For The Transaction to Complete!! \n If the Transaction is Does not Complete ...  You Can't Buy Anything");
		var ft=document.getElementById("Rs").value;
		ft=web3.toWei(ft, "ether");
		web3.eth.defaultAccount=document.getElementById("account").value;
		conAdd.buyToken({value:ft}, function(err, result){ if(!err) 


window.location="Customerpage.html"; });	
		}
	</script>
  </body>
</html>


			
			
			
