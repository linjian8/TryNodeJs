let log = console.log;

//class TrieNode
class TrieNode {
  constructor(ch){
    this.char = ch;
    this.children = [];
  }
}

//class Trie
class Trie{
  constructor(){
    this.root = new TrieNode('/');
  }

  addWord(word){
    let i, j, found;
    let r = this.root;
    for(i=0; i<word.length; i++){
      found = false;
      for(j=0; j<r.children.length; j++){
          if(r.children[j].char === word[i]){
            r = r.children[j];
            found = true;
            break;
          }
      }
      if(!found){
        let tmp = new TrieNode(word[i]);
        r.children.push(tmp);
        r = tmp;
      }
    }
  }

  search(prefix){
    let i, j, found;
    let r = this.root;
    for(i=0; i<prefix.length; i++){
      found = false;
      for(j=0; j<r.children.length; j++){
          if(r.children[j].char === prefix[i]){
            r = r.children[j];
            found = true;
            break;
          }
      }
      if(!found)
        return [];
    }
    return this.getAllFromHere(r, prefix);
  }

  getAllFromHere(root, prefix){
    function _getAllFromHereHelper(root, prefix, str){
      if(root.children.length === 0)
        return [prefix.concat(str)];
      let r = root;
      let rlt = [];
      for(let i=0; i<r.children.length; i++){
        str = str.concat(r.children[i].char);
        rlt = rlt.concat(_getAllFromHereHelper(r.children[i], prefix, str));
        str = str.slice(0, -1); //remove last one, backtrack
      }
      return rlt;
    }
    var str = "";
    return _getAllFromHereHelper(root, prefix, str);
  }

  print(){
    console.log(this.root);
  }

}

let t = new Trie();
t.addWord("dancing");
t.addWord("dance");
t.addWord("danger");
t.addWord("dick");
t.print();
console.log(t.search("dang"));
