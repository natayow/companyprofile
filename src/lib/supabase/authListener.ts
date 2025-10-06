'use client';

import supabase from "./client";

export async function initAuthListener(){
    const { data: { user }, } = await supabase.auth.getUser();
    console.log(user);

}