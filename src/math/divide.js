export const divide = (a, b) => {
    if(b === 0){
        throw new Error('divide at Zero forbinded!');
    }
    return a / b;
}