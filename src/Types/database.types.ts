export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export  type UserMetaData = {
    avatar_url?: string
    email?: string
    email_verified?: boolean
    full_name?: string
    iss?: string
    name?: string
    phone_verified?: boolean
    picture?: string
    provider_id?: string
    sub?: number
}

export type Database = {
    public: {
        Tables: {
            account_settings: {
                Row: {
                    contact_info: Json
                    created_at: string
                    display_prefs: Json | null
                    geofence_settings: Json
                    notification_prefs: Json
                    setting_id: string
                    updated_at: string
                    user_id: string
                }
                Insert: {
                    contact_info: Json
                    created_at?: string
                    display_prefs?: Json | null
                    geofence_settings: Json
                    notification_prefs: Json
                    setting_id?: string
                    updated_at: string
                    user_id?: string
                }
                Update: {
                    contact_info?: Json
                    created_at?: string
                    display_prefs?: Json | null
                    geofence_settings?: Json
                    notification_prefs?: Json
                    setting_id?: string
                    updated_at?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "account_settings_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "user_table"
                        referencedColumns: ["user_id"]
                    },
                ]
            }
            Alerts: {
                Row: {
                    alert_id: string
                    alert_type: string
                    asset_id: string
                    created_at: string
                    geofence_id: string
                    message: string
                    metadata: Json
                    read: boolean
                    user_id: string
                }
                Insert: {
                    alert_id?: string
                    alert_type: string
                    asset_id?: string
                    created_at?: string
                    geofence_id?: string
                    message: string
                    metadata: Json
                    read?: boolean
                    user_id?: string
                }
                Update: {
                    alert_id?: string
                    alert_type?: string
                    asset_id?: string
                    created_at?: string
                    geofence_id?: string
                    message?: string
                    metadata?: Json
                    read?: boolean
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "Alerts_asset_id_fkey"
                        columns: ["asset_id"]
                        isOneToOne: false
                        referencedRelation: "vehicle"
                        referencedColumns: ["vehicle_id"]
                    },
                    {
                        foreignKeyName: "Alerts_geofence_id_fkey"
                        columns: ["geofence_id"]
                        isOneToOne: false
                        referencedRelation: "Geofence"
                        referencedColumns: ["geofence_id"]
                    },
                    {
                        foreignKeyName: "Alerts_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "user_table"
                        referencedColumns: ["user_id"]
                    },
                ]
            }
            Geofence: {
                Row: {
                    active: boolean
                    alert_frequency: string
                    alert_settings: Json
                    center_lat: number
                    center_lng: number
                    created_at: string
                    geofence_id: string
                    name: string
                    radius: number
                    user_id: string
                }
                Insert: {
                    active?: boolean
                    alert_frequency: string
                    alert_settings: Json
                    center_lat: number
                    center_lng: number
                    created_at?: string
                    geofence_id?: string
                    name: string
                    radius: number
                    user_id?: string
                }
                Update: {
                    active?: boolean
                    alert_frequency?: string
                    alert_settings?: Json
                    center_lat?: number
                    center_lng?: number
                    created_at?: string
                    geofence_id?: string
                    name?: string
                    radius?: number
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "Geofence_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "user_table"
                        referencedColumns: ["user_id"]
                    },
                ]
            }
            "Location History": {
                Row: {
                    asset_id: string
                    asset_type: string | null
                    battery_level: number
                    created_at: string
                    latitude: number
                    location_id: string
                    longitude: number
                    speed: number
                }
                Insert: {
                    asset_id?: string
                    asset_type?: string | null
                    battery_level: number
                    created_at?: string
                    latitude: number
                    location_id?: string
                    longitude: number
                    speed: number
                }
                Update: {
                    asset_id?: string
                    asset_type?: string | null
                    battery_level?: number
                    created_at?: string
                    latitude?: number
                    location_id?: string
                    longitude?: number
                    speed?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "Location History_asset_id_fkey"
                        columns: ["asset_id"]
                        isOneToOne: false
                        referencedRelation: "vehicle"
                        referencedColumns: ["vehicle_id"]
                    },
                ]
            }
            security_questions: {
                Row: {
                    answer_hash: string
                    created_at: string
                    question_id: string
                    question_orde: number
                    question_text: string
                    user_id: string
                }
                Insert: {
                    answer_hash: string
                    created_at?: string
                    question_id?: string
                    question_orde: number
                    question_text: string
                    user_id?: string
                }
                Update: {
                    answer_hash?: string
                    created_at?: string
                    question_id?: string
                    question_orde?: number
                    question_text?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "security_questions_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "user_table"
                        referencedColumns: ["user_id"]
                    },
                ]
            }
            user_table: {
                Row: {
                    created_at: string
                    email: string
                    first_name: string
                    id: string
                    last_name: string
                    updated_at: string | null
                    user_id: string
                }
                Insert: {
                    created_at?: string
                    email: string
                    first_name: string
                    id?: string
                    last_name: string
                    updated_at?: string | null
                    user_id?: string
                }
                Update: {
                    created_at?: string
                    email?: string
                    first_name?: string
                    id?: string
                    last_name?: string
                    updated_at?: string | null
                    user_id?: string
                }
                Relationships: []
            }
            vehicle: {
                Row: {
                    color: string
                    created_at: string
                    gps_unit_id: string
                    license_plate: string
                    make: string
                    model: string
                    serial_number: string
                    settings: Json
                    status: string
                    user_id: string
                    vehicle_id: string
                    vehicle_type: string
                    vin: string
                    year: number
                }
                Insert: {
                    color: string
                    created_at?: string
                    gps_unit_id: string
                    license_plate: string
                    make: string
                    model: string
                    serial_number: string
                    settings: Json
                    status: string
                    user_id?: string
                    vehicle_id?: string
                    vehicle_type: string
                    vin: string
                    year: number
                }
                Update: {
                    color?: string
                    created_at?: string
                    gps_unit_id?: string
                    license_plate?: string
                    make?: string
                    model?: string
                    serial_number?: string
                    settings?: Json
                    status?: string
                    user_id?: string
                    vehicle_id?: string
                    vehicle_type?: string
                    vin?: string
                    year?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "vehicle_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "user_table"
                        referencedColumns: ["user_id"]
                    },
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends
            | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
            Database[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
            PublicSchema["Views"])
        ? (PublicSchema["Tables"] &
            PublicSchema["Views"])[PublicTableNameOrOptions] extends {
                Row: infer R
            }
            ? R
            : never
        : never

export type TablesInsert<
    PublicTableNameOrOptions extends
            | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
            Insert: infer I
        }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
        ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                Insert: infer I
            }
            ? I
            : never
        : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
            | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
            Update: infer U
        }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
        ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                Update: infer U
            }
            ? U
            : never
        : never

export type Enums<
    PublicEnumNameOrOptions extends
            | keyof PublicSchema["Enums"]
        | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
        ? PublicSchema["Enums"][PublicEnumNameOrOptions]
        : never

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
            | keyof PublicSchema["CompositeTypes"]
        | { schema: keyof Database },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
            schema: keyof Database
        }
        ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
        : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
    ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
        ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
        : never
