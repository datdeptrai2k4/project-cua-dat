var height=5;
for (let i = 1; i <= height; i++) {
     var symb='';
    for (let j = 1; j <= i; j++) {
        if (i %2 ==0) {
            symb+='x';
        } else{
            symb+='+'
        }  
    }
    console.log(i + symb);
}

