(()=>{

  // NOO aplicando el principio de responsabilidad Unica
  type Gender = 'M' | 'F';

  // Props es bastante comun
  interface PersonProps {
    birthDate : Date;
    gender    : Gender;
    nombre      : string;
  }

  class Person {

    public birthDate : Date;
    public gender    : Gender;
    public nombre      : string;

    constructor( {nombre, gender, birthDate} : PersonProps ){
      this.nombre      = nombre;
      this.gender    = gender;
      this.birthDate = birthDate;
    }

  } 


  interface UserProps {
    birthDate : Date;
    email     : string;
    gender    : Gender;
    nombre      : string;
    role      : string;
  }

  class User extends Person {
    
    private lastAccess: Date;
    public email      : string;
    public role       : string;
    
    constructor({
      birthDate,
      email,
      gender,
      nombre,
      role,
    }: UserProps ){
      // el super llama al constructor del padre (Person)
      // aqui debo cumplir todo el requisito del constructor del padre
      // con el super se asigna el valor del padre al hijo
      super({nombre, gender, birthDate});
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredential(){
      return true;
    }

  }


  interface UserSettingProps {
    birthDate         : Date;
    email            : string;
    gender           : Gender;
    lastOpneFolder   : string;
    nombre             : string;
    role             : string;
    workingDirectory : string;
  }

  class UserSettings extends User {
    
    public lastOpneFolder  : string;
    public workingDirectory: string;

    constructor({
      birthDate,
      email,
      gender,
      lastOpneFolder,
      nombre,
      role,
      workingDirectory,
    }: UserSettingProps){
      super({birthDate, email, gender, nombre, role});
      this.workingDirectory = workingDirectory;
      this.lastOpneFolder = lastOpneFolder;
    }
  }

  // Esta clase viola el princio de eresponsabilidad Unica
  const newUser = new UserSettings({ 
    birthDate: new Date('1984-05-09'),
    email:'jeancarloscarvajalavila@gmail.com',
    gender: 'M',
    lastOpneFolder:'user/home/',
    nombre: 'Jeancarlos',
    role:'Admin',
    workingDirectory:'home',
  });

  console.log( newUser );
  
  

})();