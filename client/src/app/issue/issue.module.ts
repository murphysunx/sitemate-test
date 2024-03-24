import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { EditIssueComponent } from './components/edit-issue/edit-issue.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'create',
        component: CreateIssueComponent,
      },
      {
        path: 'view/:id',
        component: IssueDetailComponent,
      },
      {
        path: 'edit/:id',
        component: EditIssueComponent,
      },
    ]),
  ],
  exports: [],
})
export class IssueModule {}
