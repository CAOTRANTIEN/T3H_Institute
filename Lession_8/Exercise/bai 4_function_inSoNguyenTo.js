        
    console.log('Bài 4:in số nguyên tố từ 1 đến 20 là ');
let x;
function KTSNT(x){
    for(let i=2;i<=Math.sqrt(x);i++)
    {
        if(x%i==0)
        {
            return false;
        }
    }
    return true;
}
function InSNT(snt){
    for(let i=2;i<=snt;i++)
    {
        if(KTSNT(i))
        {
            console.log(i)
        }
    }
}
InSNT(20);
