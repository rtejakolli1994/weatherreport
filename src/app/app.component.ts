import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from './rest.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    searchForm: FormGroup;
    gridstatus = false;
    errorInfo = '';
    Sunrise :any;
    Sunset :any;
    cityData :any;
    constructor(private restService: RestService, private formBuilder: FormBuilder,) { }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            cityName: ['', Validators.required],
        });
    }

    search() {
        try {
            this.restService.searchCity(this.searchForm.value.cityName).subscribe(data=>{
                this.cityData = data;
                if(this.cityData){
                    this.gridstatus = true;
                } else {
                    this.gridstatus = false;
                }
            });
        } catch (errInfo) {
            this.gridstatus = false;
            this.errorInfo = errInfo.message;
        }
    }
}