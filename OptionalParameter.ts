function greetOptional(name: string, age?: number){
    if(age !== undefined){
        console.log(`Hello your name is ${name} and your age is ${age}`);
        
    }
    else{
        console.log(`your name is ${name}`);
        
    }
}
greetOptional("Amna");
greetOptional("Amna",30);