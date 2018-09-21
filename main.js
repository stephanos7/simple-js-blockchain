// stephanosCoin
// based on 'Building a Blockchain' by Kore on
// https://medium.com/@akshaykore/building-a-blockchain-7579c53962dd

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

    // unique hash property for the block set as empty
    this.hash = "";
  }

  calculateBlockHash(){
    return this.hash = (this.index + this.timestamp + JSON.stringify(this.data) + this.prevHash).toString();
  }
}