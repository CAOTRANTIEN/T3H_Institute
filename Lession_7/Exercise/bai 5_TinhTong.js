function inSo(number)
{   
    let total=0;
        for(let i=1;i<=number;i++){
           console.log(i);
           total+=i;
        }   
    console.log("Tính tổng từ 1 đến "+ number + " là:" + total);
}
inSo(3)
