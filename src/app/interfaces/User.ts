import { UserDTO } from './UserDTO';

export class User {
  public id?: number;
  public full_name: string;
  public birth_date: Date;
  public email: string;
  public profession?: string;
  public tel?: string;
  public cel: string;
  public cel_has_whatsapp: boolean;
  public notify_email: boolean;
  public notify_sms: boolean;
  public created_at?: Date;
  public updated_at?: Date;

  constructor(data: UserDTO) {
    this.id = data.id;
    this.full_name = data.full_name;
    this.birth_date = data.birth_date;
    this.email = data.email;
    this.profession = data.profession;
    this.cel = data.cel;
    this.cel_has_whatsapp = this.convertStringResponseToBoolean(
      data.cel_has_whatsapp
    );
    this.notify_email = this.convertStringResponseToBoolean(data.notify_email);
    this.notify_sms = this.convertStringResponseToBoolean(data.notify_sms);
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }

  private convertStringResponseToBoolean(value: any) {
    return value ? value === '1' : false;
  }
}
