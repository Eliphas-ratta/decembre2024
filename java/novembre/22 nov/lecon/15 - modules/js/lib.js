const sum = (...args) => {  
    let total = 0;
    for(const nbr of args) {
        total += nbr;
    }
    return total;
};

export default sum;