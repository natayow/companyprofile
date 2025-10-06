import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://lepbklgyppoxpsformas.supabase.co";
const SUPABASE_KEY = "sb_publishable_F8Z4QWAstkes9n_PZbnOpA_4UPl3orv";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;

