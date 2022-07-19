const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OINA90SDNF90N', '90ANSD9F0N9009N');
bitcoin.createNewBlock(3782, '3O84F4O4HOVTG', 'O48F3OJ3O4CJGHN');
bitcoin.createNewBlock(4971, '95U43F8HC99EG', '5EUFR8TJ9RCRWJR');

console.log(bitcoin);