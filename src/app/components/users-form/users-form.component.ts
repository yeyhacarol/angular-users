import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})
export class UsersFormComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Output() onSubmit = new EventEmitter<User>();
  @Output() onDelete = new EventEmitter<User>();

  userForm!: FormGroup;
  users = new Array<User>();

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      full_name: new FormControl('', [Validators.required]),
      birth_date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      profession: new FormControl(''),
      tel: new FormControl('', Validators.minLength(10)),
      cel: new FormControl('', [Validators.required, Validators.minLength(11)]),
      cel_has_whatsapp: new FormControl(''),
      notify_email: new FormControl(''),
      notify_sms: new FormControl(''),
    });

    this.fetchData();
  }

  get full_name() {
    return this.userForm.get('full_name')!;
  }
  get email() {
    return this.userForm.get('email')!;
  }
  get birth_date() {
    return this.userForm.get('birth_date')!;
  }
  get tel() {
    return this.userForm.get('tel')!;
  }
  get cel() {
    return this.userForm.get('cel')!;
  }

  edit(user: User) {
    this.userForm = new FormGroup({
      id: new FormControl(user.id),
      full_name: new FormControl(user.full_name, [Validators.required]),
      birth_date: new FormControl(user.birth_date, [Validators.required]),
      email: new FormControl(user.email, [
        Validators.required,
        Validators.email,
      ]),
      profession: new FormControl(user.profession),
      tel: new FormControl(user.tel, Validators.minLength(10)),
      cel: new FormControl(user.cel, [
        Validators.required,
        Validators.minLength(11),
      ]),
      cel_has_whatsapp: new FormControl(user.cel_has_whatsapp),
      notify_email: new FormControl(user.notify_email),
      notify_sms: new FormControl(user.notify_sms),
    });
  }

  delete(user: User) {
    this.userService.delete(user).subscribe(() => this.fetchData());
    this.fetchData();
  }

  fetchData() {
    this.userService.list().subscribe((response) => {
      this.users = response.map((resp) => new User(resp));
    });
  }

  async submit(formDirective: FormGroupDirective) {
    if (this.userForm.invalid) {
      return;
    }

    if (this.userForm.value.id)
      this.userService
        .update(this.userForm.value)
        .subscribe(() => this.fetchData());
    else
      this.userService
        .create(this.userForm.value)
        .subscribe(() => this.fetchData());

    formDirective.resetForm();
    this.userForm.reset();
  }
}
