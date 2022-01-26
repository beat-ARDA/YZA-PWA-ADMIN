import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('Test Login', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent]
    }).compileComponents();
  });

  it('Debe de existir el LoginComponent', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  })

  it('Debe de retornar el formulario invalido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    fixture.detectChanges();

    let input = fixture.debugElement.query(By.css('input#id'));
    input.nativeElement.value = "23";

    expect(login).toBeTruthy();
  })
})
