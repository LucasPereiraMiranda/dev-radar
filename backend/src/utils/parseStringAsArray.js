
module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim()); //remove espaçamentos antes e depois de uma String
}