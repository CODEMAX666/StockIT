import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.scss']
})
export class CustomerReportComponent implements OnInit {
  public pageBasicText = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
