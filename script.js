function Compute Interest ()
    {
        let p=document.getElementById('amount').value;
        let n=document.getElementById('year').value;
        let r=document.getElementById('interest rate').value;

        let  SI=(p*n*r/100);

        document.getElementById('si').innerHTML="You will receive an amount of: "+SI;
    }
