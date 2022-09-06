(()=>{

  // No aplicando el principio de responsabilidad Unica
  type Gender = 'M' | 'F';
  class Person {
    // opcion 1
    // public name: string;
    // public gender: Gender;
    // public birthDay: Date;

    // constructor(name: string, gender: Gender, birthDay: Date){
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthDay = birthDay;
    // }

    // opcion 2. mas corta resumida
    constructor( 
      public name    : string,
      public gender  : Gender,
      public birthDay: Date,
    ){} 
  }

  // const newPerson = new Person('Jeancarlos', 'M', new Date('1984-05-09')); 
  // console.log(newPerson);

  class User extends Person {
    
    private lastAccess: Date;
    
    constructor(
      public email: string,
      public role : string,
      name: string,
      gender: Gender,
      birthDay: Date,
    ){
      // el super llama al constructor del padre (Person)
      // aqui debo cumplir todo el requisito del constructor del padre
      super(name, gender, birthDay);
      this.lastAccess = new Date();
    }

    checkCredential(){
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory : string,
      public lastOpneFolder   : string,
      email                   : string,
      role                    : string,
      name                    : string,
      gender                  : Gender,
      birthDay                : Date,
    ){
      super(email, role, name, gender, birthDay);
    }
  }

  // Esta clase viola el princio de eresponsabilidad Unica
  const newUser = new UserSettings(
    'user/home/',
    'home',
    'jeancarloscarvajalavila@gmail.com',
    'Admin',
    'Jeancarlos',
    'M',
    new Date('1984-05-09')
  );

  console.log( newUser );
  
  

})();