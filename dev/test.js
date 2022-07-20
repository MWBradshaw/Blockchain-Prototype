const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OINA90SDNF90N', '90ANSD9F0N9009N');
bitcoin.createNewTransaction(100, 'ALEX93497495989', 'JENN3484438849')
bitcoin.createNewBlock(3782, '3O84F4O4HOVTG', 'O48F3OJ3O4CJGHN');

bitcoin.createNewTransaction(50, 'ALEX93497495989', 'JENN3484438849')
bitcoin.createNewTransaction(300, 'ALEX93497495989', 'JENN3484438849')
bitcoin.createNewTransaction(2000, 'ALEX93497495989', 'JENN3484438849')
bitcoin.createNewBlock(4971, '95U43F8HC99EG', '5EUFR8TJ9RCRWJR');


console.log(bitcoin.chain[1]);