import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 40;
  progreso2: number = 60;

  constructor() { }

  ngOnInit() {
  }

}
