import { createClient } from '@supabase/supabase-js'
import {type Database} from '../Types/database.types.ts'

let URL:string = `${import.meta.env.VITE_URL}`
let Key:string = `${import.meta.env.VITE_KEY}`

export const supabase = createClient<Database>(URL, Key)