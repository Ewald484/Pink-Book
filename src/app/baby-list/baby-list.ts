import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../supabase-service';

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
    console.log('BabyList:ngOnInit:start');
    await this.loadBabies();
  }
  async loadBabies() {
    console.log('BabyList:loadBabies:start');
    console.log('BabyList:loadBabies:babies:before:=', this.babies);
    this.babies = await this.supabaseService.getBabies();
    console.log('BabyList:loadBabies:babies:after:=', this.babies);
  }
  // loadBabies() {
  //   console.log('BabyList:loadBabies:start');
  //   console.log('BabyList:loadBabies:babies:before:=', this.babies);
  //   this.supabaseService.getBabies().then((results) => {
  //     this.babies = results;
  //     console.log('BabyList:loadBabies:babies:after:=', this.babies);
  //   });
  // }

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
