// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let result = {};
    let moneyArr = [['H', 'Q', 'D', 'N', 'P'],[50,25,10,5,1]];
    if (currency>10000){
        return {error:  "You are rich, my friend! We don't have so much coins for exchange"};

    }
    for(var i = 0; i < moneyArr[1].length; i++){
        if(currency/moneyArr[1][i] >= 1){
            result[moneyArr[0][i]] = Math.floor(currency/moneyArr[1][i]);
            currency = currency%moneyArr[1][i];
        }
    }
    return result;
}
