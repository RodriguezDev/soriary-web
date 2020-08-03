import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export enum TabOption {
  Read,
  Write,
  Settings
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  selectedTab: TabOption = TabOption.Write;
  tabOption = TabOption;

  @Output() tabChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.tabChange.emit(this.selectedTab);
  }

  public changeTab(tab: TabOption) {
    this.selectedTab = tab;
    this.tabChange.emit(this.selectedTab);
  }

}
