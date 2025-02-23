import { createClient } from '@supabase/supabase-js'

let URL:string = `${import.meta.env.VITE_URL}`
let Key:string = `${import.meta.env.VITE_KEY}`

export const supabase = createClient(URL, Key)