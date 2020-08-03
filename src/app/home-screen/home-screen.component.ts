import { Component, OnInit } from '@angular/core';
import {TabOption} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  activeTab:TabOption = null;

  constructor() { }

  ngOnInit(): void {
  }

  public tabChanged(t) {
    this.activeTab = t;
    console.log(this.activeTab);
  }

}
