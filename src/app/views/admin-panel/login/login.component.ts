import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from '../../../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { SocialAuthService, SocialUser } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {NGXLogger} from 'ngx-logger';
import {LoggerService} from '../../../Services/logger.service'
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  // user: SocialUser;
  // loggedIn: boolean;
  loginStatus='0';
  loginUserType:string;
  currentUser;
  responseMsg;
  loginForm: FormGroup;
  constructor(
    // private authService: AuthService, 
    private routes: Router, private activatedRoute: ActivatedRoute, 
    // private socialService: SocialAuthService, 
    private userService: UserService,
    private logger: NGXLogger,
    private customLogger:LoggerService,
    private loaderService:LoaderService) {
    this.loginForm = new FormGroup({
      userType: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, Validators.email),
      userPassword: new FormControl(null, Validators.required)
    })
  }

  // ==================== Use for Rout authentication
  // currentUser = "";
  logIn() {
    // this.logService.log
    // this.loggedIn = true;
    console.log("Login button",this.loginForm.value)
    this.logger.info(this.loginForm.value);
    localStorage.removeItem('token');
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value)
        .subscribe((result) => {
          this.logger.info(result.user);
          localStorage.setItem('token', JSON.stringify(result.token));
          sessionStorage.setItem('loginStatus',this.loginStatus='1');
          sessionStorage.setItem('loginUserType',result.user[0].userType);
          this.loginUserType = sessionStorage.getItem('loginUserType');
          console.log("===>",this.loginUserType)
          this.routes.navigate(['/home'])
        },
          (error) => {
            this.logger.error(error);
            this.customLogger.postLogToServer(error);
            this.responseMsg = error.statusText;
            this.logger.info('response', this.responseMsg);
            this.routes.navigate(['/login']);
          }, () => {
            this.logger.info('Authentication completed');
          });
    }

  };
  ngOnInit() {
    // this.loaderService.isLoading
    // this.socialService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });


  }

  // Social login =========================================>
  // signInWithGoogle(): void {
  //   this.logger.info("sign with google.....")
  //   if (GoogleLoginProvider.PROVIDER_ID != null || '') {
  //     this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
  //     this.logger.info("succesfully", x);
  //       this.routes.navigate(['/home']);
  //     })
  //   } else {
  //     this.routes.navigate(['/login']);
  //   }
  // }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  moveToRegiter() {
    this.routes.navigate(['../register'], { relativeTo: this.activatedRoute })
  }
  moveToHomePage() {
    this.routes.navigate(['../home'], { relativeTo: this.activatedRoute })
  }
}
