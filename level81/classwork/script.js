

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if(i == 50){
        break;
    }
    
    if(i % 5 && i % 7 && i % 9){
        continue;
    }
}