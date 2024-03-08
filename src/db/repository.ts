import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config({ path: '.env.local' });

const client = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string,
);