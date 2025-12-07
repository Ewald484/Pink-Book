import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient('https://rgbtluctoguoonxvvfkn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnYnRsdWN0b2d1b29ueHZ2ZmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1OTI0NTIsImV4cCI6MjA4MDE2ODQ1Mn0.gGiMGjZ_KhV9ygXVLY0cH5ZBzI-QFfuAgXOsFgg_C1Y');
  }

  getSupabaseClient(): SupabaseClient {
    return this.supabase;
  }
}


