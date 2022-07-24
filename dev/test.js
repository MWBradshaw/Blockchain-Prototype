const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = '34H948V8JP905JG05V9J0HBN9RHR9HG8H9R8H';
const currentBlockData = [
    {
        amount: 10,
        sender: '9842H398HF0J4094H6G84J98GHG8',
        recipient: '9849J9409HF094HGV988J50JV'
    },
    {
        amount: 30,
        sender: 'J0D49J08J9GJF505J0V59J0G5',
        recipient: 'W49J40HGJ98RJV895V5J0J8B'
    },
    {
        amount: 150,
        sender: 'E09G506UJ9V50HJ0J50BJJV58',
        recipient: '90G906K0JK509J58BJ05JB0'
    },
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));