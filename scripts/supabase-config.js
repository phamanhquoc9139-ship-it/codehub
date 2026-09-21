const SUPABASE_URL = 'https://drfcejvmyhzorwepndta.supabase.co';

const SUPABASE_KEY = 'sb_publishable_M-5Ej4P-OSnY7QY9y0LwpA_T5tUaOlI';

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
