import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDashboardTasksComponent } from './project-dashboard-tasks.component';

describe('ProjectDashboardTasksComponent', () => {
  let component: ProjectDashboardTasksComponent;
  let fixture: ComponentFixture<ProjectDashboardTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDashboardTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDashboardTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
