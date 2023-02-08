import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from 'src/app/template/form/form.component';
import { FileService } from 'src/app/template/services/file.service';
import { TemplateService } from 'src/app/template/services/template.service';
import { formData, updateFormData } from './leave-modal.component.constant';

@Component({
  selector: 'app-leave-modal',
  templateUrl: './leave-modal.component.html',
  styleUrls: ['./leave-modal.component.scss'],
})
export class LeaveModalComponent extends FormComponent {
  constructor(
    protected override fb: FormBuilder,
    protected override cdr: ChangeDetectorRef,
    protected override snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<LeaveModalComponent>,
    protected templateService: TemplateService,
    protected fileService: FileService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(fb, cdr, snackBar);
  }

  actionType: any = 'add';

  override initFind(): void {
    if (this.data?.data) {
      this.actionType = 'update';
      // this.templateService.get('home').then((data) => {
      this.formData = JSON.parse(JSON.stringify(updateFormData));
      this.originalFormData = JSON.parse(JSON.stringify(updateFormData));
      this.generateFormValue(this.data.data);
      super.initFind();
      // });
    } else {
      this.formData = JSON.parse(JSON.stringify(formData));
      this.originalFormData = JSON.parse(JSON.stringify(formData));
      super.initFind();
    }
  }

  onDialogClose() {
    this.dialogRef.close({ event: 'Close' });
  }

  override onFormSubmit() {
    super.onFormSubmit();
    if (this.form.get('attachment')?.value) {
      this.fileService
        .upload(this.fileService.getFile(), this.form.get('attachment')?.value)
        .then(() => {
          // this.templateService.post('table/add', this.data);
          this.clearAllData();
          this.dialogRef.close({ event: 'add' });
        });
    }
  }
}
