import { Component, OnInit } from '@angular/core';
import { GUESTS } from '../../mocks';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public guests = GUESTS;

  constructor() {}

  ngOnInit() {}
}
