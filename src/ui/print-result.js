export const printResult = (label, value) => {
    const output = document.querySelector('#output');
    const line = `${label}: ${value}`;

    if(output){
        output.insertAdjacentHTML('beforeend', `<p>${line}</p>`);
    } else {
        console.log(line);
    }
}