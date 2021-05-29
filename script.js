function compute()
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");
                
                result.innerHTML = "The interest is " + (p*n*r/100);
    
    function compute()
    {
        let p=document.getElementById('amount').value;
        let n=document.getElementById('years').value;
        let r=document.getElementById('interest rate').value;

        let  SI=(p*n*r)/100;

        document.getElementById('si').innerHTML="You will receive an amount of: "+SI;
    }
    
}
        
