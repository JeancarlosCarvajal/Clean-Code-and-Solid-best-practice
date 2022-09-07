import  localPosts  from "../data/local-database.json";
import { Post } from './05-dependency-b';


// para aplicar el princio de inversion de dependencias se debe trabajr con abstracciones
export abstract class PostProvider {

  abstract getPost(): Promise<Post[]>;

}

// se coloca implements para poder usar la clase abstracta y poder hacerle override
export class LocalDataBaseService implements PostProvider {

  constructor() { }

  async getPost() {
    return [
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
      }]
  }

}

// se coloca implements para poder usar la clase abstracta y poder hacerle override
export class JsonDataBaseService implements PostProvider{

  async getPost(){
    return localPosts;
  }

}


// WebPostService, implements PostProvider
// llamar al API https://jsonplaceholder.typicode.com/posts
export class WebPostService implements PostProvider {

  private http: HttpClient;

  constructor(http: HttpClient){
    this.http = http;
  }

  async getPost(): Promise<Post[]> { 
      const data = await this.http.get(); 
      return data;  
  } 

}

export class HttpClient {

  // Usando Axios
  // async get( url: string ) {
  //   const {data, status} = await axios.get(url);
  //   console.log({ status });
  //   return { data, status };
  // }
  
  // Usando fetch Nativo de JavaScript y cumpliendo con el OCP
  async get() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json(); 
    return data; 
  }

}