import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Prevent crash if env vars are missing
let client;

if (supabaseUrl && supabaseKey) {
  client = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("Supabase URL or Key missing! Uploads will not work.");
  // Mock client to prevent app crash
  client = {
    storage: {
      from: () => ({
        upload: async () => ({ error: { message: "Configuration Error: Missing `.env` variables for Supabase." } })
      })
    },
    from: () => ({
      insert: async () => ({ error: { message: "Configuration Error: Missing `.env` variables." } })
    })
  };
}

export const supabase = client;