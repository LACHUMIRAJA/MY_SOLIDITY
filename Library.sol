pragma solidity ^0.4.0;

contract forlibrary
{
    
    address owner;
    
    struct book{
        string name;
        uint avail;
        
    }
    
    mapping(uint=>book) BOOKS;
    
    struct people{
        string pname;
        uint age;
        uint nob;
        uint fine;
    }
        
    
    mapping(uint=>people) PEOPLE;
    
    
    struct time{
        uint256 timein;
        uint256 timeout;
    }
    mapping(uint=>mapping(uint=>time)) GB;
    
    modifier onlyowner(){
        require(msg.sender==owner);
        _;
    }
    
    
    function forlibrary(){
        owner = msg.sender;
    }
    
    
    function AddBooks(uint _isbn,string _bname) payable onlyowner
    {
        BOOKS[_isbn].name=_bname;
        BOOKS[_isbn].avail=BOOKS[_isbn].avail+1;
    }
    
    function AddPeople(uint _idno, string _pname, uint _age) onlyowner
    {
        PEOPLE[_idno].pname=_pname;
        PEOPLE[_idno].age=_age;
        
    }
    
    function GetBook(uint _isbn, uint _idno, uint256 _time) returns(bool SUCCESS_)
    {
        if (BOOKS[_isbn].avail>0 && PEOPLE[_idno].fine==0)
        {
        PEOPLE[_idno].nob=PEOPLE[_idno].nob+1;
        BOOKS[_isbn].avail=BOOKS[_isbn].avail-1;
        GB[_isbn][_idno].timein=_time;
        return true;
        }
        else
        {
            return false;
        }
        
    }
    
     function returnBook(uint _isbn, uint _idno, uint256 _time) public returns(uint FINE_)
    {
        PEOPLE[_idno].nob=PEOPLE[_idno].nob-1;
        BOOKS[_isbn].avail=BOOKS[_isbn].avail+1;
        GB[_isbn][_idno].timeout=_time;
        uint ch =GB[_isbn][_idno].timeout - GB[_isbn][_idno].timein;
        
         uint ck=((ch/60)/60)/24;
        if(ck>5)
        {
           PEOPLE[_idno].fine=(ck-5)*2;
            return (PEOPLE[_idno].fine);
        }
    }
    
    
    
    function searchbooks(uint _isbn) public view returns(string NAME_, uint AVAILABILITY_)
    {
        return (BOOKS[_isbn].name, BOOKS[_isbn].avail);
    }
    
    
     function searchPeople(uint _idno) public view returns(string NAME_, uint NOB_, uint FINE_)
    {
        return (PEOPLE[_idno].pname, PEOPLE[_idno].nob, PEOPLE[_idno].fine);
    }
    

    
    }
    
    
    
    
   

