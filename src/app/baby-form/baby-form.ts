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

  submit(event: Event) {
    console.log('BabyForm:submit:start');
    event.preventDefault();
    console.log('BabyForm:sumbit:1');

    // Auto-generate file_number
    if (!this.baby.file_number) {
      this.baby.file_number = 'BN-' + Date.now();
    }
    console.log('BabyForm:sumbit:2');

    // Format dates
    this.baby.date_of_birth = new Date(this.baby.date_of_birth).toISOString().split('T')[0];
    this.baby.hearing_test_date = new Date(this.baby.hearing_test_date).toISOString().split('T')[0];
    console.log('BabyForm:sumbit:3');

    try {
      console.log('BabyForm:sumbit:4');

      this.supabaseService.addBaby(this.baby).then((result) => {
        console.log('BabyForm:sumbit: result: =', result);
        if (result) {
          this.router.navigate(['/baby-list']); // go to list after adding 
        } else {
          console.log('No data is added');
        }
      });
    } catch (error: any) {
      console.error('Failed to add baby:', error);
      alert('Failed to add baby. See console.');
    }
  }
}
