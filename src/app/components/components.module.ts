import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectItemComponent } from "./projects/project-item/project-item.component";
import { TeamItemComponent } from "./projects/team-item/team-item.component";
import { ComponentRoutingModule } from "./component-routing.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { ComponentsComponent } from "./components.component";
import { ProjectDashboardComponent } from "./projects/project-dashboard/project-dashboard.component";
import { ProjectDashboardHeaderComponent } from "./projects/project-dashboard/project-dashboard-header/project-dashboard-header.component";
import { ProjectDashboardOverviewComponent } from "./projects/project-dashboard/project-dashboard-overview/project-dashboard-overview.component";
import { ProjectDashboardNotesComponent } from "./projects/project-dashboard/project-dashboard-notes/project-dashboard-notes.component";
import { ProjectDashboardTasksComponent } from "./projects/project-dashboard/project-dashboard-tasks/project-dashboard-tasks.component";
import { TaskItemComponent } from "./projects/project-dashboard/project-dashboard-tasks/task-item/task-item.component";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  CdkDropListGroup,
} from "@angular/cdk/drag-drop";
import { NgChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    ComponentsComponent,
    SidebarComponent,
    ProjectsComponent,
    ProjectItemComponent,
    TeamItemComponent,
    HeaderComponent,
    ProjectDashboardComponent,
    ProjectDashboardHeaderComponent,
    ProjectDashboardOverviewComponent,
    ProjectDashboardNotesComponent,
    ProjectDashboardTasksComponent,
    TaskItemComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    CKEditorModule,
    ReactiveFormsModule,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    CdkDropListGroup,
    NgChartsModule,
  ],
})
export class ComponentsModule {}
