'use client';
import supabase from "./client";

export async function signInWithGoogle() {
    return await supabase.auth.signInWithOAuth({
        provider: 'google',
        options:{
            queryParams: {
                access_type: 'offline',
                prompt: 'consent'
            }
        }
    })
}

export async function signOut(){
    return await supabase.auth.signOut();
}