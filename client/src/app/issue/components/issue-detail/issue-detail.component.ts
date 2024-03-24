import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../../interfaces/issue.interface';
import { IssueService } from '../../services/issue.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class IssueDetailComponent implements OnInit {
  issue?: Issue;

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.issueService.getIssueById(id).subscribe((issue) => {
      this.issue = issue;
    });
  }

  delete() {
    if (this.issue) {
      this.issueService.deleteById(this.issue.id).subscribe(() => {
        this.issue = undefined;
        this.router.navigate(['/issues/create']);
      });
    }
  }
}
