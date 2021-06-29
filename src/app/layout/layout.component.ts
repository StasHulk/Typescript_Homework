import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() urlBg: string;
  @Input() colorBg: string;
  myStyle: object;

  constructor() { 
    this.title = "My Title";
    this.description = "My Description";
    this.urlBg = "";
    this.colorBg = "";
    this.myStyle = {};
  }

  ngOnInit(): void {
    if(this.colorBg !=""){
      this.myStyle = {
        "background-color": this.colorBg
      }
    }

    if(this.urlBg != ""){
      this.myStyle = {
        "background-image": 'url("' + this.urlBg + '")'
      }
      console.log(this.myStyle)
    }
  }

}
