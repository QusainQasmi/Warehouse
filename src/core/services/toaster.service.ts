import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) {}

  Success(message: string, title: string = 'Success') {
    this.toastr.success(message, title);
  }

  Error(message: string | string[], title: string = 'Error') {
    let text = "";
    if (Array.isArray(message)) {
      text = message.join('<br>');
    } else {
      text = message;
    }
    this.toastr.error(text, title, {
      enableHtml: true
    });
  }

  Warning(message: string, title: string = 'Warning') {
    this.toastr.warning(message, title);
  }

  Info(message: string, title: string = 'Info') {
    this.toastr.info(message, title);
  }

}