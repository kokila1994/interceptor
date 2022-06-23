import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api_data_binding';

  constructor(private toastr: ToastrService, private http: HttpClient) {

  }
  ngOnInit() {
    this.getdata()
  }

  getdata() {
    this.http.get("https://reqres.in/api/users?page=2").subscribe((res: any) => {
      console.log(res)
    })
  }

  showToasterSuccess() {
    this.toastr.success("Data shown successfully !!", "kokila!")
  }

  showToasterError() {
    this.toastr.error("Something is wrong", "kokila!")
  }

  showToasterInfo() {
    this.toastr.info("This is info", "kokila!")
  }

  showToasterWarning() {
    this.toastr.warning("This is warning", "kokila!")
  }
}





