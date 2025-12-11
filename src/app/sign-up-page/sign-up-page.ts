import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../supabase-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up-page.html'
})
export class SignUpPage {
  user = {
    first_name: '',
    last_name: '',
    email: ''
  };

  constructor(private supabaseService: SupabaseService, private router: Router) { }

  async signUp() {
    await this.supabaseService.addUser(this.user); // save to database
    this.router.navigate(['/baby-list']); // navigate to baby list
  }
}
