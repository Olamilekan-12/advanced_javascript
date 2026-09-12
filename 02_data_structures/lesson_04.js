// Hash Maps

class HashMap {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
        this.buckets[index] = [];
    }

    this.buckets[index].push([key, value])
  }

  get(key){
    const index = this.hash(key);
    const bucket = this.buckets[index]

    if(!bucket) return undefined;

    for(let pair of bucket){
        if(pair[0] === key){
            return pair[1];
        }
    }
    return undefined
  }
}

const sample = new HashMap(10);
sample.set("AB", "hello");
sample.get()

