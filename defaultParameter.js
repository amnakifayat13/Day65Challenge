function greetDefault(name, age) {
    if (age === void 0) { age = 25; }
    console.log(" Hello Your name is ".concat(name, " and your age is ").concat(age));
}
greetDefault("Amna");
greetDefault("Amna", 30);
