import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  isExpanded: boolean = false;

  toggleDrawer(){
    this.isExpanded = !this.isExpanded;
  }
}
