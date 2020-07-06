import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  
  

id:string;
brand:string;
model:string;
price:string;
constructor() {
  setTimeout(function () { 
this.id=((document.getElementById("pid") as HTMLInputElement).value);
this.brand=((document.getElementById("brand") as HTMLInputElement).value);
this.model=((document.getElementById("model") as HTMLInputElement).value);
this.price=((document.getElementById("price") as HTMLInputElement).value);
}, 0);

}
edit(){
 window.localStorage.setItem("id",this.id);
 window.localStorage.setItem("brand",this.brand);
 window.localStorage.setItem("model",this.model);
 window.localStorage.setItem("price",this.price);
 alert("Your changes are saved!");
}
ngOnInit(): void {
}
}
console.log(window.localStorage.getItem("id"));
