import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParam =>{
      console.log(queryParam);
    })
  }
  goToSignUp():void{
    this.router.navigate(['auth/signup']);
  }
  goToBookDetails():void{
    this.router.navigate(['/public/bookdetails/',100,'author',300]);
  }

}
