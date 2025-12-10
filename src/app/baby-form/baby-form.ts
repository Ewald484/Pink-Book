import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../supabase-service';

@Component({
  selector: 'app-baby-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './baby-form.html',
  styleUrls: ['./baby-form.css']
})
export class BabyForm {
  baby = {
    file_number: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    hearing_test_date: '',
    payment_received: false,
    closed: false
  };

  constructor(private supabaseService: SupabaseService, private router: Router) { }

  async submit(event: Event) {
    event.preventDefault();

    // Auto-generate unique file_number if empty
    if (!this.baby.file_number) {
      this.baby.file_number = 'BN-' + Date.now();
    }

    // Format dates correctly for Supabase
    this.baby.date_of_birth = new Date(this.baby.date_of_birth).toISOString().split('T')[0];
    this.baby.hearing_test_date = new Date(this.baby.hearing_test_date).toISOString().split('T')[0];

    try {
      const data = await this.supabaseService.addBaby(this.baby);
      console.log('Baby added:', data);
      this.router.navigate(['/baby-list']);
    } catch (error: any) {
      console.error('Supabase insert error:', error);
      alert('Failed to add baby. See console for details.');
    }
  }
}
