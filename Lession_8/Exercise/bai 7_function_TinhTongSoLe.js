
let sum_odd=0;
function Total_Odd(Number_Odd){
    for(let i=1;i<=Number_Odd;i++)
    {
        if(i%2!=0)
        {
            sum_odd+=i;
        }
    }
    console.log('Bài 7: tổng các số lẻ trong khoảng 1 đến 9 là '+ sum_odd);
}
Total_Odd(10);