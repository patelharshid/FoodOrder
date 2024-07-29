import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  @Input() visible:boolean=false;
  @Input() notFoundMessage:string='Nothing Found!';
  @Input() resetLinkText:string='reset';
  @Input() resetLinkRoute:string='/';

  constructor(){}

  ngOnInit(): void {
  }

}
