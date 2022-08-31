// Don't Repeat Yourself

type Size = '' | 'S' | 'M' | 'XL';
class Product {
  constructor(
    // public name: string = '', // opcional
    public name: string,
    public price: number = 0,
    public size: Size = '',
  ){}

  
  isNotProductEmpty(): boolean {
    for(const key in this) {
      switch (typeof this[key]) {
        case 'string':
            if( !(<string><unknown>this[key]) ) throw new Error(`${key} is empty`);
        break;
        case 'number':
            if( !(<number><unknown>this[key]) ) throw new Error(`${key} is empty`);
          break;
          default:
            throw new Error(`${typeof this[key]} is not valid`);            
      }
    }
    return true;
  }


  toString(){
    // TODO: NO hay DRY. Sin refactorizar
    // if(!this.name) throw new Error('name is empty');
    // if(!this.price) throw new Error('price is empty');
    // if(!this.size) throw new Error('size is empty');

    // refactorizado
    if (!this.isNotProductEmpty) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }

}

(() => {
  // const bluePants = new Product();
  const bluePants = new Product('Blue large Pants', 10);
  console.log(bluePants.toString());


})();