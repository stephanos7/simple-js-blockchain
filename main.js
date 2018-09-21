// stephanosCoin
// based on 'Building a Blockchain' by Kore on
// https://medium.com/@akshaykore/building-a-blockchain-7579c53962dd


//importing the SHA256 library
const SHA256 = require('crypto-js/sha256');


class Block {

  // index [optional] = position of block in the chain
  // timestamp        = time stamp against the creation of the block
  // data             = payload values 
  // prevHash    = String of the previous block's hash value

  constructor(index, timestamp, data, prevHash = ""){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;

    // unique hash property for the block generated via the calculatedBlockHash method
    this.hash = this.calculateBlockHash();
  }

  // concatinate and stringify the block properties and compute a hash using SHA256
  calculateBlockHash(){
    return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.prevHash).toString();
  }
}

class Blockchain {
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }

  // generate the first block on the chain
  createGenesisBlock(){
    return new Block(0, new Date(), "Genesis Block, hello blochain!", "0");
  }

  // simple method to retrieve the lates (head) block on the chain
  getHead(){
    return this.chain[this.chain.length-1];
  }

  // add a block to the chain method takes a newBlock as an argument
  addBlock(newBlock){
    // 1. get the previous block's HASH on the chain (the head-block)
    newBlock.prevHash = this.getHead().hash
    // 2. compute the hash of the new block (based also on the hash of the prevBlock we got in step 1)
    newBlock.hash = newBlock.calculateBlockHash(); 
    // 3. add the new block to the chain
    this.chain.push(newBlock);
  }
}

let StephanosCoin = new Blockchain();

StephanosCoin.addBlock(new Block(1, "01/01/1970", {amount:60}));
StephanosCoin.addBlock(new Block(2, "01/01/1970", {amount:30}));
StephanosCoin.addBlock(new Block(3, "01/01/1970", {amount:40}));


console.log(JSON.stringify(StephanosCoin.chain, null, 4));
