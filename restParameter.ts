function addAll(...nums: number[]): number {
    let result = 0;
    for(let i = 0; i < nums.length; i ++){
        result += nums[i]
    }
    return result;
}
 console.log(addAll(100, 150, 70, 90, 45, +true));
 