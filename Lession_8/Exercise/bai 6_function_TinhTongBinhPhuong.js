
let sum=0;
function Sum_Square(number_square)
{
    for(let i=1;i<=number_square;i++)
        {   
            sum+=Math.pow(i,2);
        }
    console.log('Bài 6: Tổng bình phương các số từ 1 đến 5 là '+sum);
}
Sum_Square(5);