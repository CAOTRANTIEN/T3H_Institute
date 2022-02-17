console.log('Bài 9: Đối số');
function inPut(n){
    function inVerse(n){ 
        n = n.toString()
        return n.split("").reverse().join("");
    }
    function aRgument(n){ 
        let flag =0;
        if (inVerse(n) == n) flag = 1;
        return flag;
    }
          
    let check = aRgument(n);
      
    if( check == 1 ) console.log(n + " là số đối xứng");
    else console.log(n + " không phải là số đối xứng");
}
inPut(313686313);