function Number_Odd(num)
{
    let check_number=true;
    while(num>0){
        if((num % 10) %2==0)
        {
           check_number=false;
            break;
        }
        num=parseInt(num/10);
    }
        console.log('Bài 8: Kiểm tra số n có toàn số lẻ tạo thành hay không:');
    if(check_number==true){
        console.log(num + ' được tạo thành từ các số lẻ');
    }
    else{
    console.log(num + ' không được tạo thành từ các số lẻ');
    }
}
Number_Odd(224);