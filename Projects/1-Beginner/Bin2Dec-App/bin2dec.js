function bin2dec(input, output){
    let bin = input.value;
    let dec = 0;
    let msg = '';
    let index = 0;
    let exponent = bin.length-1;

    while(index < bin.length){
        dec += bin[index] * Math.pow(2, exponent);
        msg += dec;
        index++;
        exponent--;
    }

    console.log(dec.length)

    output.innerHTML = msg;
}