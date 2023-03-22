import { Component, OnInit, HostListener ,Input} from '@angular/core';
import { AuthService } from '../../Services/auth.service'
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { UserService } from '../../Services/user.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: AuthService, private socialService: SocialAuthService, private userService: UserService, private routes: Router, private activatedRoute: ActivatedRoute) {
    this.socialService.authState.subscribe((user) => {
      this.user = user;
      console.log("email users", this.user);
      this.loggedIn = (user != null);
    });


    // const UserData = this.userService.getUserById(_id)
    //   .subscribe(
    //     data => data,
    //     error => this.routes.navigate(['/login'])
    //   )
  }




  ngOnInit() {

  }

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  logout(){
    localStorage.removeItem('token');
    this.routes.navigate(['/slids']);
    // location.reload();
  }
  
  signOut(): void {
    this.authService.signOut();
  }



  

}
