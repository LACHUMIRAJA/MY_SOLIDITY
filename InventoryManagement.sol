pragma solidity ^0.4.0;
import "./StandardToken.sol";
contract Inventory is StandardToken
{
    address owner;
    uint public nop=0;
    uint public  ACC=0;
    uint public LastBillno=0;
    uint public alt=0;
    
    bytes32[] pname;
    uint256[] pid;
    
    uint[] bbno;
    uint[] date;
    address[] cid;
    uint[] bpid;
    uint[] bprice;
    
    uint [] public alert;
    
   
    modifier onlyowner()
    {
        require(msg.sender==owner);
        _;
        
    }
    
    struct P {
        bytes32 Name;
        uint Weight;
        uint256 Price;
        uint count;
        
    }
    
    struct S{
        uint date;
        uint bno;
        address Cid;
        uint Pid;
        uint Weight;
        uint price;
    }
    
    
    mapping(uint=>P) public Product;
    mapping(uint=>S)  public Bill;
    mapping(uint=>bool) Vpid;
    
    
    function Inventory() public
    {
        owner=msg.sender;
    }
    
    
    function AddProducts(uint _Pid, bytes32 _Name, uint _Price, uint _Gram, uint _count)public onlyowner
    {
        if(!(Vpid[_Pid]))
        {
                  Vpid[_Pid]=true;
             nop=nop+1;
             
              Product[_Pid].Name=_Name;
        Product[_Pid].Weight=_Gram;
        Product[_Pid].Price=_Price;
        Product[_Pid].count=Product[_Pid].count+_count;
        
        pname.push(_Name);
        pid.push(_Pid);
        
        
        }
        else {
        Product[_Pid].Name=_Name;
        Product[_Pid].Weight=_Gram;
        Product[_Pid].Price=_Price;
        Product[_Pid].count=Product[_Pid].count+_count;
        
       
        
        }
        
        if(Product[_Pid].count<5)
      {
          alt=alt+1;
         alert.push(_Pid) ;
      }
      
        
     
      
    }
    
    function ProductList() view public returns(bytes32[] memory, uint[] )
    {
        return (pname,pid);
        
    }
   
  
    function Buy(uint _date, address _Cid, uint _Pid) public
    {
        
        if(Product[_Pid].count>=1)
        {
       ACC = ACC + Product[_Pid].Price;
       
       transfer(owner, Product[_Pid].Price);
       
       Product[_Pid].count=Product[_Pid].count-1;
     uint bno=++LastBillno;
      Bill[bno].date=_date;
      Bill[bno].Cid=_Cid;
      Bill[bno].Pid=_Pid;
      Bill[bno].Weight=Product[_Pid].Weight;
      Bill[bno].price=Product[_Pid].Price;
      
      bbno.push(bno);
      date.push(_date);
      cid.push(_Cid);
      bpid.push(_Pid);
      bprice.push(Product[_Pid].Price);
      
      if(Product[_Pid].count<5)
      {
          alt=alt+1;
         alert.push(_Pid) ;
      }
      
        
       }
        
        
    }
    
    function BillDetails(uint _bno) view public onlyowner returns(uint BNo__,uint Date__,address CustomerId__,uint ProductId__,uint Weight__, uint ProductPrice__)
    {
       return ( _bno, Bill[_bno].date,Bill[_bno].Cid,Bill[_bno].Pid,Bill[_bno].Weight, Bill[_bno].price);
    }
    
   
    
    
     function search(uint _Pid) view public returns(bytes32 ProductName__ ,uint Weight__,uint ProductPrice__, uint ProductCount__)
     {
         return(Product[_Pid].Name,Product[_Pid].Weight,Product[_Pid].Price,Product[_Pid].count);
     }
     
     function TotalBills() public view onlyowner returns(uint[] BNo__,uint[] Date__,address[] CustomerId__,uint[] ProductId__, uint[] ProductPrice__)
     {
        return(bbno,date,cid,bpid,bprice);
     }
     
     uint k=0;
     
     function Messages() public returns(bool)
     {
        k=alt;
         while(k>=0)
         {
             
         uint zo= alert[k-1];
         uint y=Product[zo].count;
         if(y>5)
         alert[k-1]=0;
           k=k-1;
         return true;
          
         }
        
       return false;
     }
     
     
     function am() public view  returns(uint[])
     {
         return alert;
     }
  
    uint256 constant price=0.5 ether;
    
    
    function buyToken() public payable
    {
        uint256 tokens=msg.value/price;
        require(msg.value==(tokens * price)&& tokens <=balances[owner]);
        balances[msg.sender]+=tokens;
        balances[owner]-=tokens;
        owner.transfer(msg.value);
       
    }

   
     
}
