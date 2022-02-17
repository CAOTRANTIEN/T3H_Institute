
            console.log('Bài 0: Kiểm tra số nguyên tố ')
let number;
function check_SNT(number){
    if(number<2){
        console.log(number+" không phải là số nguyên tố")
    }
    else if(number==2){
        console.log(number+" là số nguyên tố")
    }
    else if(number%2 ==0){
        console.log(number+" không phải là số nguyên tố")
    }
    else{
        console.log(number+" là số nguyên tố")
    }
}
check_SNT(20);
check_SNT(19);
