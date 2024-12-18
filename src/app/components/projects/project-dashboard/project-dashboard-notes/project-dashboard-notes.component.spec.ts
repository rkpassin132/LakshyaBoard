import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDashboardNotesComponent } from './project-dashboard-notes.component';

describe('ProjectDashboardNotesComponent', () => {
  let component: ProjectDashboardNotesComponent;
  let fixture: ComponentFixture<ProjectDashboardNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDashboardNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDashboardNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
