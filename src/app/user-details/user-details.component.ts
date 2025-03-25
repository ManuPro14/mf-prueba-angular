import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: any;
  followers: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.http.get(`https://api.github.com/users/${username}`).subscribe({
        next: (data) => {
          this.user = data;
          console.log('User data:', this.user);
          this.fetchFollowers(username);
        },
        error: (err) => {
          console.error('Error fetching user:', err);
        }
      });
    }
  }

  fetchFollowers(username: string): void {
    this.http.get<any[]>(`https://api.github.com/users/${username}/followers`).subscribe({
      next: (data) => {
        this.followers = data;
        console.log('Followers:', this.followers);
      },
      error: (err) => {
        console.error('Error fetching followers:', err);
      }
    });
  }
}