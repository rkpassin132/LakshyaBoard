import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDashboardOverviewComponent } from './project-dashboard-overview.component';

describe('ProjectDashboardOverviewComponent', () => {
  let component: ProjectDashboardOverviewComponent;
  let fixture: ComponentFixture<ProjectDashboardOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDashboardOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDashboardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
