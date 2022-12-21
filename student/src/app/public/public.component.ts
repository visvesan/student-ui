import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
bookId:number = 12345;
authorId:number=9;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((param)=>{
      console.log(param);
    });
  }

}
