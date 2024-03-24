import { Injectable } from '@angular/core';
import { Issue } from '../interfaces/issue.interface';
import { HttpClient } from '@angular/common/http';
import { EditIssueForm } from '../interfaces/edit-issue.interface';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private readonly baseUrl = 'http://localhost:3000/issues';

  constructor(private httpClient: HttpClient) {}

  fetchIssues() {
    return this.httpClient.get<Issue[]>(this.baseUrl);
  }

  createIssue(issueForm: EditIssueForm) {
    return this.httpClient.post<Issue>(this.baseUrl, issueForm);
  }

  getIssueById(id: string) {
    return this.httpClient.get<Issue>(`${this.baseUrl}/${id}`);
  }

  deleteById(id: string) {
    return this.httpClient.delete<Issue>(`${this.baseUrl}/${id}`);
  }

  update(id: string, issue: EditIssueForm) {
    return this.httpClient.put<Issue>(`${this.baseUrl}/${id}`, issue);
  }
}
