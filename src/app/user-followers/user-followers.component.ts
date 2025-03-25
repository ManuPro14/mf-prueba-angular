import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Eye } from 'lucide-angular';



@Component({
  selector: 'app-user-followers',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, LucideAngularModule],
  templateUrl: './user-followers.component.html',
  styleUrl: './user-followers.component.css'
})
export class UserFollowersComponent implements OnInit {
  followers: any[] = [];
  username: string | null = null;
  page = 1;
  perPage = 30;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    if (this.username) {
      this.loadFollowers();
    }
  }

  loadFollowers(): void {
    if (!this.username) return;
    this.http.get<any[]>(`https://api.github.com/users/${this.username}/followers?page=${this.page}&per_page=${this.perPage}`).subscribe({
      next: (data) => {
        this.followers = [...this.followers, ...data];
        this.page++;
      },
      error: (err) => {
        console.error('Error fetching followers:', err);
      }
    });
  }
}