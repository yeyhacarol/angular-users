export interface UserDTO {
  id?: number;
  full_name: string;
  birth_date: Date;
  email: string;
  profession?: string;
  tel?: string;
  cel: string;
  cel_has_whatsapp: string;
  notify_email: string;
  notify_sms: string;
  created_at?: Date;
  updated_at?: Date;
}
