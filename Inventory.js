

web3.eth.defaultAccount=web3.eth.accounts[0];
var conn=web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "ProductList",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ACC",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "nop",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_Pid",
				"type": "uint256"
			},
			{
				"name": "_Name",
				"type": "bytes32"
			},
			{
				"name": "_Price",
				"type": "uint256"
			},
			{
				"name": "_Gram",
				"type": "uint256"
			},
			{
				"name": "_count",
				"type": "uint256"
			}
		],
		"name": "AddProducts",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_date",
				"type": "uint256"
			},
			{
				"name": "_Cid",
				"type": "address"
			},
			{
				"name": "_Pid",
				"type": "uint256"
			}
		],
		"name": "Buy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "alert",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "am",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "TotalBills",
		"outputs": [
			{
				"name": "BNo__",
				"type": "uint256[]"
			},
			{
				"name": "Date__",
				"type": "uint256[]"
			},
			{
				"name": "CustomerId__",
				"type": "address[]"
			},
			{
				"name": "ProductId__",
				"type": "uint256[]"
			},
			{
				"name": "ProductPrice__",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Messages",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Product",
		"outputs": [
			{
				"name": "Name",
				"type": "bytes32"
			},
			{
				"name": "Weight",
				"type": "uint256"
			},
			{
				"name": "Price",
				"type": "uint256"
			},
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_bno",
				"type": "uint256"
			}
		],
		"name": "BillDetails",
		"outputs": [
			{
				"name": "BNo__",
				"type": "uint256"
			},
			{
				"name": "Date__",
				"type": "uint256"
			},
			{
				"name": "CustomerId__",
				"type": "address"
			},
			{
				"name": "ProductId__",
				"type": "uint256"
			},
			{
				"name": "Weight__",
				"type": "uint256"
			},
			{
				"name": "ProductPrice__",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyToken",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "alt",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "LastBillno",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Bill",
		"outputs": [
			{
				"name": "date",
				"type": "uint256"
			},
			{
				"name": "bno",
				"type": "uint256"
			},
			{
				"name": "Cid",
				"type": "address"
			},
			{
				"name": "Pid",
				"type": "uint256"
			},
			{
				"name": "Weight",
				"type": "uint256"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_Pid",
				"type": "uint256"
			}
		],
		"name": "search",
		"outputs": [
			{
				"name": "ProductName__",
				"type": "bytes32"
			},
			{
				"name": "Weight__",
				"type": "uint256"
			},
			{
				"name": "ProductPrice__",
				"type": "uint256"
			},
			{
				"name": "ProductCount__",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]);

var conAdd=conn.at('0x49f52ab2d7ca0ab48f87abc8c6028e15ff3adde8'); 



if(!web3.isConnected()) {
  
        console.log("no");
        
      } else {
        console.log("Ok");
      }
      web3.version.getNetwork((err, netId) => {
            switch (netId) {
              case "1":
                console.log('This is mainnet')
                break
              case "2":
                console.log('This is the deprecated Morden test network.')
                break
              case "3":
                console.log('This is the ropsten test network.')
                break
              case "4":
                console.log('This is the Rinkeby test network.')
                break
              case "42":
                console.log('This is the Kovan test network.')
                break
              default:
                console.log('This is an unknown network.')
            }
        })



var count;



function AddP()
{
var a=document.getElementById("v1").value;
var b=document.getElementById("v2").value;
var c=document.getElementById("v3").value;
var d=document.getElementById("v4").value;
var de=document.getElementById("v4a").value;
conAdd.AddProducts(a,b,d,c,de, function(err, result){ if(!err)console.log(result); });

}




function Plist()
{
conAdd.ProductList ( 
function(err, result)
{ 
var d=[];
var l=[];
var res=[];



for(j=0;j<count;j++)
{
var a=result[0][j];
    var s = '';

    for (var k = 0; k < a.length; k += 2) 
    {
      s+= String.fromCharCode(parseInt(a.substr(k, 2), 16));

    }
d.push(s);
}

for(i=0;i<count;i++){
var b=result[1][i];
l.push(b);
}

for(y=0;y<count;y++)
res.push("\n " + "* "+d[y]+" -  "+l[y]);
document.getElementById("ps").innerHTML=res;
});
 

}


function SearchProduct()
{

var e=document.getElementById("v5").value;
conAdd.search(e, function(err, result){ 
var o=result[0];
    var nm = '';

    for (var k = 0; k < o.length; k += 2) 
    {
      nm+= String.fromCharCode(parseInt(o.substr(k, 2), 16));

    }

if(!err) alert(" Product Name - "+nm+" Weight - " + result[1]+ "g Price - "+result[2]+" Count - "+result[3]); });

}


var bi=0;

function B()
{

var f=document.getElementById("v6").value;
var g=document.getElementById("v7").value;
var h=document.getElementById("v8").value;
conAdd.Buy(f,g,h, function(err, result){ if(!err)console.log(result); });

}


function Bill()
{
var bd=document.getElementById("v9").value;
conAdd.BillDetails(bd, function(err, result){ if(!err)alert(" Bill No - "+result[0]+ " Date - " + result[1] + " Customer Id -"+result[2]+ " Product Id - "+result[3]+" Weight - " + result[4]+ "g Price - "+result[5]); });

}




function Products()
{
conAdd.nop(function(err, result){ if(!err)
count=result;

alert("No. Of Products Availability: "+result);
});
}




var Bp;

function Bills()
{
conAdd.LastBillno(function(err, result){ if(!err)
Bp=result;

alert("Total No. of Bills : "+Bp);});
}


function TotalBills()
{

var x=[];
var y=[];
var z=[];
var w=[];
var v=[];

var resw=[];


conAdd.TotalBills(function(err, result){ if(!err) 

for(var ia=0;ia<Bp;ia++){
var ab=result[0][ia];
x.push(ab);
}



for(var ib=0;ib<Bp;ib++){
var ac=result[1][ib];
y.push(ac);
}

for(var ic=0;ic<Bp;ic++){
var ad=result[2][ic];
z.push(ad);
}

for(var id=0;id<Bp;id++){
var ae=result[3][id];
w.push(ae);
}

for(var ie=0;ie<Bp;ie++){
var af=result[4][ie];
v.push(af);
}

for(var i=0;i<Bp;i++)
resw.push(" \n"+"*  Bill No - "+x[i]+" Date - "+y[i]+" Customer Id -"+z[i]+" Product Id - "+w[i]+ " Price - "+v[i]);


document.getElementById("tb").innerHTML=resw;
});


conAdd.ACC(function(err, result){ if(!err) 
document.getElementById("ta").innerHTML= "Total Tokens Recieved : " + result;});
}

var amss;

function Message()
{
var tg=[];

conAdd.Messages(function(err, result){ if(!err) 
conAdd.alt(function(err, result){ if(!err) 
amss=result;

conAdd.am(function(err, result){ if(!err) 

for(zq=0;zq<amss;zq++)
{
if(result[zq]!=0)
tg.push(result[zq]);
if(result[zq]==0)
tg.pop(result[zq]);
}
 document.getElementById("ams").innerHTML= "\n * In This Product ("+tg+") Count is  Low";});
}); 
	
});



}
