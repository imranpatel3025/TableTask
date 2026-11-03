import { Component } from '@angular/core';
import { iempArr } from './models/interface';

import { empArr, studentArr, productArr, courseArr, bookArr } from './const/tableTask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TableTask';
  empArr = empArr;
  studentArr = studentArr;
  productArr = productArr;
  courseArr = courseArr;
  bookArr = bookArr;

}

