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