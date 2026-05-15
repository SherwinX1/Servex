import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

//
// AUTH FUNCTIONS
//

// SIGN UP
export const signUpUser = async (email, password, fullName) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (data?.user) {
    await supabase.from("profiles").insert([
      {
        id: data.user.id,
        full_name: fullName,
        email,
      },
    ]);
  }

  return { data, error };
};

// SIGN IN
export const signInUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};

// SIGN OUT
export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// GET USER SESSION
export const getUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data?.user;
};