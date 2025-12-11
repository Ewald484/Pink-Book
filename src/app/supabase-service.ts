import { Injectable } from '@angular/core';
import { supabase } from './supabase.client';


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {


  constructor() {

  }

  // Users table
  async addUser(user: any) {

    const { data, error } = await supabase.from('users').insert([user]);
    if (error) throw error;
    return data;
  }

  // Babies table
  async getBabies() {

    const { data, error } = await supabase.from('babies').select('*');
    if (error) throw error;
    return data;
  }

  async loadBabies(): Promise<any[]> {

    return await this.getBabies();
  }

  async addBaby(baby: any) {

    console.log('Supabaseservice:addbaby: baby: =', baby);

    const { data, error } = await supabase.from('babies').insert([baby]).select().single();
    console.log('Supabaseservice:addbaby: data: =', data);
    if (error) throw error;
    return data;
  }

  async updatePayment(id: string, paymentReceived: boolean) {
    const { data, error } = await supabase
      .from('babies')
      .update({ payment_received: paymentReceived, closed: paymentReceived })
      .eq('id', id);
    if (error) throw error;
    return data;
  }
}
