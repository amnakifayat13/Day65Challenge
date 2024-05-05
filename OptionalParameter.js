function greetOptional(name, age) {
    if (age !== undefined) {
        console.log("Hello your name is ".concat(name, " and your age is ").concat(age));
    }
    else {
        console.log("your name is ".concat(name));
    }
}
greetOptional("Amna");
greetOptional("Amna", 30);
