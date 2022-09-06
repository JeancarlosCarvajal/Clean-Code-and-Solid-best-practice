(()=>{

  // SIIII aplicando el principio de responsabilidad Unica (PRU)
  // Priorizar la composicion frente a la herencia
  // Tratar de evitar los Extends
  type Gender = 'M' | 'F';

  // Props es bastante comun
  interface PersonProps {
    birthDate : Date;
    gender    : Gender;
    nombre      : string;
  }

  // SIII aplica el PRU la clase persona
  class Person {

    public birthDate : Date;
    public gender    : Gender;
    public nombre    : string;

    constructor( {nombre, gender, birthDate} : PersonProps ){
      this.nombre      = nombre;
      this.gender    = gender;
      this.birthDate = birthDate;
    }

  } 


  interface UserProps { 
    email     : string; 
    role      : string;
  }

  class User { // no se hace xtends
    
    public email      : string;
    public lastAccess : Date;
    public role       : string;
    
    constructor({ 
      email,
      role,
    }: UserProps ){ // no se aplica el supper
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredential(){
      return true;
    }

  }


  interface SettingProps { 
    lastOpneFolder   : string; 
    workingDirectory : string;
  }

  class Settings {
    
    public lastOpneFolder  : string;
    public workingDirectory: string;

    constructor({ 
      lastOpneFolder, 
      workingDirectory,
    }: SettingProps){ 
      this.workingDirectory = workingDirectory;
      this.lastOpneFolder = lastOpneFolder;
    }
  }


  interface UserSettingProps {
    birthDate        : Date;
    email            : string;
    gender           : Gender;
    lastOpneFolder   : string;
    nombre           : string;
    role             : string;
    workingDirectory : string;
  }

  class UserSettings {
    public persona : Person;
    public user    : User;
    public settings: Settings;

    constructor({
      nombre, gender, birthDate,
      email, role,
      lastOpneFolder, workingDirectory
    }: UserSettingProps){
      this.persona  = new Person({nombre, gender, birthDate});
      this.user     = new User({ email, role });
      this.settings = new Settings({ lastOpneFolder, workingDirectory });
    }
  }

  // Esta clase viola el princio de eresponsabilidad Unica
  const newUserSettings = new UserSettings({ 
    birthDate: new Date('1984-05-09'),
    email:'jeancarloscarvajalavila@gmail.com',
    gender: 'M',
    lastOpneFolder:'user/home/',
    nombre: 'Jeancarlos',
    role:'Admin',
    workingDirectory:'home',
  });

  console.log( newUserSettings );
  
  

})();