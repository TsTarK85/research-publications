import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ffnaodgwzdzcaedhqyqh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmbmFvZGd3emR6Y2FlZGhxeXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNzc3NDEsImV4cCI6MjA3OTY1Mzc0MX0.7KyVwB3qqkC-dTmy5v-6blZyWyBYf95y1-hlMyDG_ps";

export const supabase = createClient(supabaseUrl, supabaseKey);