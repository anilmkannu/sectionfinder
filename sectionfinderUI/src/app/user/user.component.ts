import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "./user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  public loginForm : FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.login();
  }

  private login() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  public loginUser() {
    this.userService.loginUser(this.loginForm.value).subscribe((data) => {
    });
  }
}
