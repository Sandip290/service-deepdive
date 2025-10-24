import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
    log(messages:string){
      const timeStamp = new Date().toLocaleTimeString;
      console.log(`[${timeStamp}] : ${messages}`)
    }
    
 
}
