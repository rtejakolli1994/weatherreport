import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from './rest.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    searchForm: FormGroup;
    searchData: any;
    searchedData: any;
    localstoreData = [];
    constructor(
        private formBuilder: FormBuilder,
        private restService: RestService
    ) { }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            searchValue: ['', Validators.required],
        });
    }

    search() {
        return this.restService.searchCity(this.searchForm.value.searchValue).subscribe(data => {
            this.localstoreData.push(this.searchForm.value.searchValue);
            this.searchData = data;
            localStorage.setItem('localstore', JSON.stringify(this.localstoreData));
        },
        err => {
        });
    }

    getPhoto(value){
        return this.restService.searchCity(value).subscribe(data => {
            this.searchedData = data;
        },
        err => {
        });
    }
}