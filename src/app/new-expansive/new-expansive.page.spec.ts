import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewExpansivePage } from './new-expansive.page';

describe('NewExpansivePage', () => {
  let component: NewExpansivePage;
  let fixture: ComponentFixture<NewExpansivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExpansivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewExpansivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
