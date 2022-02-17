    
    let n = 16;
    let x;
    console.log('Bài 4: in số nguyên tố từ 1 đến '+ n );
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
for(let i=2;i<=n;i++){
    if(KTSNT(i))
    {
        console.log(i);
    }
}