pragma solidity ^0.4.16;
//import "./Tokens.sol";

contract StandardToken {
    
    string public name;                   
    string public symbol;  
     mapping (address => uint256) balances;
     mapping (address => mapping (address => uint256)) allowed;
     uint256 public totalSupply;
   
    address spender;
    uint256 avalue;
  
     function StandardToken() public 
     {
            name = "ULRTOKEN";                                 
            symbol = "ULR"; 
            totalSupply = 1000; 
        balances[msg.sender] = totalSupply;              
                               
    }
    
    
      function approve(address _spender, uint256 _value) public returns (bool success) 
        {
            spender =_spender;
            avalue=_value;
        allowed[msg.sender][spender] = avalue;
       // Approval(msg.sender, spender, avalue);
        return true;
    }
    
    
    function transfer(address _to, uint256 _value) public returns (bool success) 
    {
  
  
      //  if (spender == _to && avalue >= _value)
      //{
        
       require(balances[msg.sender] >= _value && _value > 0) ;
       {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
          //  Transfer(msg.sender, _to, _value);
            return true;
        }
       // }
        
    
    /*else if(spender != _to)
    
    
    
        if (balances[msg.sender] >= _value && _value > 0) 
       {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
           // Transfer(msg.sender, _to, _value);
            return true;
        } else { return false; }  */
        
    }
    

    function balanceOf(address _owner) view public returns (uint256) {
        //balances[msg.sender] = totalSupply;
        return balances[_owner];
    }

      

    function allowance(address _owner, address _spender) constant public returns (uint256) {
      return allowed[_owner][_spender];
    } 
 
}
