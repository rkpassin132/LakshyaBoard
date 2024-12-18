import { EventEmitter } from '@angular/core';
import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isDrawer: boolean = false;
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter;
  
  toggle(){
    this.toggleSidebar.emit();
  }
}
