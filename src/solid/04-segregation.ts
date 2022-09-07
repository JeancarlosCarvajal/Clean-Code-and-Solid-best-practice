

// SII cumple con ISP, Viola el principio de segregaciond e interface
// En caso que se modifique alfuna interface solo se veran afectadas las clases que tengan ese metodo
// y no todas las clases
interface Bird { 
  eat(): void;
}

interface FlyingBird {
  fly(): number; 
}

interface RunningBird {
  run(): void; 
}

interface SwimmerBird {
  swim(): void; 
}

class Tucan implements Bird, FlyingBird {
  public fly(){ return 50 };
  public eat(){};
  public run(){}; 
}

class Humminbird implements Bird, FlyingBird {
  public fly(){ return 50 };
  public eat(){};
  public run(){}; 
}

class Ostrich implements Bird, RunningBird {   
  public eat(){};
  public run(){}; 
}

class Pinguin implements Bird, SwimmerBird {  
  public eat(){};
  public swim(){};
}


// NOO cumple con el principio de segregaciond e interface
// interface Bird {
//   fly(): void;
//   eat(): void;
//   run(): void;
//   swim(): void;
// }

// class Tucan implements Bird {
//   public fly(){};
//   public eat(){};
//   public run(){};
//   public swim() {
//     throw new Error('This bird does not swim')
//   };
// }

// class Humminbird implements Bird {
//   public fly(){};
//   public eat(){};
//   public run(){};
//   public swim() {
//     throw new Error('This bird does not swim')
//   };
// }

// class Ostrich implements Bird {
//   public fly() {
//     throw new Error('This bird does not fly')
//   };
  
//   public eat(){};
//   public run(){};
//   public swim() {
//     throw new Error('This bird does not swim')
//   };
// }

// class Pinguin implements Bird {
//   public fly() {
//     throw new Error('This bird does not fly')
//   };
  
//   public eat(){};
//   public run(){};
//   public swim(){};
// }