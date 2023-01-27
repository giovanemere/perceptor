import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  form!: UntypedFormGroup;
  chosenFileName: any;
  chosenFile: any;
  viewMode = 'deshabilitado';

  public serverUrl: string = 'http://192.168.137.5:8091/devops/jenkins/job/FOLDER_OPSDEV/job/SCCOLCOMUNES/job/OPTIMIZACION/job/FREE_STYLE/job/TRIGGER_MACROS/buildWithParameters';

  constructor(
    public http: HttpClient,
    private fb: UntypedFormBuilder
  ) { }

  peticion() {
    // this.login().subscribe(res => (
    //   console.log('peticion')
    // ), (error:any) => (console.log(error)));
  }

  login(): Observable<any> {
    console.log('entro al login');

    let authorizationData = 'Basic ' + this.b64EncodeUnicode('giovanemere' + ':' + '11a78018ef44bdc4ebcce077bbcefa36eb');

    const uploadData = new FormData();

      uploadData.append('nameFile', this.chosenFileName);
      uploadData.append('attachedfile', this.chosenFile);

    const headerOptions = {

      headers: new HttpHeaders({
        'Authorization': authorizationData,
      })

    };

    return this.http.post(this.serverUrl, uploadData, headerOptions);

  }
  b64EncodeUnicode(str: string): string {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(('0x' + p1) as any);
    }));
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      email: [''],
      nombreResponsable: [localStorage.getItem('UserName')],
      vicepresidencia: [''],
      estado: ['Activo'],
      archivo: ['']
    });
  }

  onChange(fileInput: Event) {
    const control: any = fileInput.target;
    console.log(fileInput);


    if (!control.files || control.length === 0) {
      this.chosenFileName = null;
      this.chosenFile = null;
    } else {
      this.chosenFileName = control.files[0].name;
      this.chosenFile = control.files[0];
      console.log('archivo cargado');
    }
    this.viewMode = 'habilitado';
  }

  onUploadMacro() {

    this.form.get('nombre')?.setValue(this.chosenFileName);

    if (this.chosenFile != undefined) {

        this.login().subscribe((response) => {
      }
      );
    } else {
      console.log(this.chosenFile);
    }
  }

}

