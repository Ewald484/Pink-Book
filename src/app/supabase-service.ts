import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rgbtluctoguoonxvvfkn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnYnRsdWN0b2d1b29ueHZ2ZmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1OTI0NTIsImV4cCI6MjA4MDE2ODQ1Mn0.gGiMGjZ_KhV9ygXVLY0cH5ZBzI-QFfuAgXOsFgg_C1Y';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  // Babies CRUD
  async getBabies() {
    const { data, error } = await this.supabase.from('babies').select('*');
    if (error) throw error;
    return data;
  }

  async addBaby(baby: any) {
    const { data, error } = await this.supabase.from('babies').insert([baby]);
    if (error) throw error;
    return data;
  }

  async updatePayment(id: string, paymentReceived: boolean) {
    const { data, error } = await this.supabase
      .from('babies')
      .update({ payment_received: paymentReceived, closed: paymentReceived })
      .eq('id', id);
    if (error) throw error;
    return data;
  }

  // Users table
  async addUser(user: any) {
    const { data, error } = await this.supabase.from('users').insert([user]);
    if (error) throw error;
    return data;
  }
}
