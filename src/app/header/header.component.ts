import { Component, Input } from "@angular/core"
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class Header{
   @Input() title: string;
   @Input() description: string;

    constructor(){
        this.title = "My Title";
        this.description = "My Description";
    }
}