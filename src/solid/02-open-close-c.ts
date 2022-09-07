// import axios from "axios";
 
// creamos esto para no depender en todos los metodos de axios y poder cambiarlo en el futuro
export class HttpClient {

  // Usando Axios
  // async get( url: string ) {
  //   const {data, status} = await axios.get(url);
  //   console.log({ status });
  //   return { data, status };
  // }
  
  // Usando fetch Nativo de JavaScript y cumpliendo con el OCP
  async get( url: string ) {
    const resp = await fetch(url);
    const data = await resp.json();
 
    return { data, status: resp.status }; 
  }

}