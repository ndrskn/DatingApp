import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor() {} //Im Kurs stand die Zeile da

  ngOnInit(): void {} //Im Kurs stand die Zeile da

  login() {
    console.log(this.model);
  }
}
