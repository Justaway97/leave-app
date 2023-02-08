import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingService } from './template/services/loading.service';
import { TemplateService } from './template/services/template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'leave-app';
  loading = false;
  ACCESS_TOKEN: any =
    'sl.BWzTSXYNxSgYD5qTkQsQ7prXvZmrga1S2wqgBd_DjGO-XXMovU4bqsIo00UoYHVqjnbCyKFguLTjv0s66K5yJMLCRQctA--ASjg_9nxH1jadGmTFEoQwwBTt9b7m3CsmwGS1mkE';
  CLIENT_ID: any = 'nnama4iyjd9a1d6';

  constructor(
    protected loadingService: LoadingService,
    protected templateService: TemplateService,
    protected http: HttpClient
  ) {
    this.loadingService.onLoadingChanged.subscribe((isLoading) => {
      setTimeout(() => {
        this.loading = isLoading;
      }, 0);
    });
  }
}
