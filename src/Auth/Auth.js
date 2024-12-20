import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hjghbmjzdtyukejkpsjy.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqZ2hibWp6ZHR5dWtlamtwc2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NDkyNjcsImV4cCI6MjA1MDAyNTI2N30.CXwL2wUfvB4CTQCipMzVVVHe3uwVQsNGwLHRMWHPC7Y";

const SUPABASE_SERVICE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqZ2hibWp6ZHR5dWtlamtwc2p5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDQ0OTI2NywiZXhwIjoyMDUwMDI1MjY3fQ.2YRCOYSjj7rYDMA4CWSTz_Sx10qTCG9DY_FCNVY8_iw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

export async function logInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  return { data, error };
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  return error;
}

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { error, data };
}

//------------------for Register-------------------
export async function registerMail(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
}
