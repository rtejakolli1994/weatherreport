import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from './rest.service';
// import 'rxjs/add/operator/catch';
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
        return this.restService.searchCity(this.searchForm.value.cityName).subscribe(data => {
            this.cityData = data
            if(this.cityData){
                this.gridstatus = true;
            } else {
                this.gridstatus = false;
            }
        },
        err => {
            this.gridstatus = false;
            this.errorInfo = err.error.message;
        });
    }
}