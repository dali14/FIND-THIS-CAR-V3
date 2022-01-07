import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  bg: string ='../assets/img/vid.mp4';
  constructor() { }

  ngOnInit(): void {
  }

}
