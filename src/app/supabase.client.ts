import { createClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';


const SUPABASE_URL = environment.supabaseUrl;
const SUPABASE_ANON_KEY = environment.supabaseKey;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
