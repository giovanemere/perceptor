import { Component } from '@angular/core';
import { Observable, catchError, of } from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public url: string = 'http://192.168.137.5:8091/devops/jenkins/job/FOLDER_OPSDEV/job/SCCOLCOMUNES/job/OPTIMIZACION/job/FREE_STYLE/job/TRIGGER_MACROS_SIN_PARAMS/build?token=11a78018ef44bdc4ebcce077bbcefa36eb';

  constructor(
    public http: HttpClient
  ) {  }
  
  peticion()
    {
      this.login().subscribe(res => (
        console.log('peticion')
      ), (error:any) => (console.log(error)));
    }

  login():Observable<any>{
    console.log('entro al login');
    
      const headerOptions = {
           headers: new HttpHeaders({
            'Authorization': 'Basic Z2lvdmFuZW1lcmU6MTFhNzgwMThlZjQ0YmRjNGViY2NlMDc3YmJjZWZhMzZlYg=='
           })
      };
      
      return this.http.post('http://192.168.137.5:8091/devops/jenkins/job/FOLDER_OPSDEV/job/SCCOLCOMUNES/job/OPTIMIZACION/job/FREE_STYLE/job/TRIGGER_MACROS_SIN_PARAMS/build','', headerOptions);
  
  }
}

