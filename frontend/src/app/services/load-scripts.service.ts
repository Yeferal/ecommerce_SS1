import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  constructor() { }

  load(archivos: string[]){
    
    for( let archivo of archivos){
      let script = document.createElement("script");
      script.src = archivo;
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }

  loadLinks(archivos: any[]){
    
    for( let archivo of archivos){
      let links = document.createElement("link");
      links.rel = archivo.rel;
      links.type = archivo.type;
      links.href = archivo.href;
      let body = document.getElementsByTagName("head")[0];
      body.appendChild(links);
    }
  }
}
