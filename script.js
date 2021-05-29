function Calculate()
    {
        let p=document.getElementById('amount').value;
        let r=document.getElementById('rate').value;
        let n=document.getElementById('year').value;

        let  SI=(p*r*n)/100;

        document.getElementById('si').innerHTML=" You will receive an amount of: "+SI;
    }

