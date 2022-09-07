
import { LocalDataBaseService, JsonDataBaseService, PostProvider } from './05-dependency-c';

export interface Post {
  body:   string;
  id:     number;
  title:  string;
  userId: number;
}


export class PostService {

  private posts: Post[] = [];

  // se puede usar los dos constructores pprque tienen open/close y Inversion de Dependencias
  // constructor( private postProvider: JsonDataBaseService ) { } // 
  constructor( private postProvider: PostProvider ) { } //  

  async getPosts() {
    
    this.posts = await this.postProvider.getPost(); // esta es una dependencia muy conectada

    return this.posts;
  }
}