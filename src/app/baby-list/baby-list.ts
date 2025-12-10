import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../supabase-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-baby-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './baby-list.html',
  styleUrls: ['./baby-list.css']
})
export class BabyList implements OnInit {
  babies: any[] = [];

  constructor(private supabaseService: SupabaseService, private router: Router) { }

  async ngOnInit() {
    await this.loadBabies();
  }

  async loadBabies() {
    this.babies = await this.supabaseService.getBabies();
  }

  goToBabyForm() {
    this.router.navigate(['/baby-form']);
  }

  async markPayment(baby: any) {
    await this.supabaseService.updatePayment(baby.id, true);
    await this.loadBabies(); // reload list to reflect payment
  }

  async refreshList() {
    await this.supabaseService.loadBabies();
  }

}
