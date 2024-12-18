import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";

@Component({
  selector: "app-project-dashboard-tasks",
  templateUrl: "./project-dashboard-tasks.component.html",
  styleUrls: ["./project-dashboard-tasks.component.scss"],
})
export class ProjectDashboardTasksComponent {
  boards = [
    {
      name: "To Do",
      count: 3,
      tasks: ['1', '2', '3', '4'],
    },
    {
      name: "In progress",
      count: 6,
      tasks: ['1', '2', '3', '4'],
    },
    {
      name: "Need Review",
      count: 7,
      tasks: ['1', '2', '3', '4'],
    },
    {
      name: "Done",
      count: 30,
      tasks: ['1', '2', '3', '4'],
    },
  ];

  connectedLists = this.boards.map((_, i) => `board${i}`);

  onTaskDropped(event: CdkDragDrop<any>, boardIndex: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.boards[boardIndex].tasks,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onBoardDropped(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
  }
  
}
