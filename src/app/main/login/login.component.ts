import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormComponent } from 'src/app/template/form/form.component';
import { CodeService } from 'src/app/template/services/code.service';
import { TemplateService } from 'src/app/template/services/template.service';
import { formData } from './login.component.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends FormComponent {
  @ViewChild('f') formComponent: NgForm;

  constructor(
    protected override fb: FormBuilder,
    protected override cdr: ChangeDetectorRef,
    protected override snackBar: MatSnackBar,
    protected templateService: TemplateService,
    protected codeService: CodeService,
    protected router: Router
  ) {
    super(fb, cdr, snackBar);
  }

  override onFormSubmit(valid?: any) {
    this.addRequiredField({ key: 'username', value: 'Username' });
    this.addRequiredField({ key: 'password', value: 'Password' });
    super.onFormSubmit();
    if (this.onSubmitValidate()) {
      this.templateService.post('login', this.finalData).then(
        (data: any) => {
          this.codeService.getAllCodes();
          this.router.navigate(['/main']);
        },
        (error) => {}
      );
    }
  }

  override ngOnInit() {
    this.formData = formData;
    super.ngOnInit();
  }
}
