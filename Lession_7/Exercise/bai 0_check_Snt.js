function check_Snt(number)
{
    let a = true;
            for(let i=2;i<number;i++)
                {   
                        if(number%i==0){
                            a = false;
                            }
                }
            if(a==true){
                console.log(number + " là số nguyên tố");
            }
            else{
                console.log(number + " không là số nguyên tố");
            }
}
check_Snt(17)
check_Snt(31)
