import { Component, OnInit,NgModule } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-specs',
  templateUrl: './product-specs.component.html',
  styleUrls: ['./product-specs.component.css']
})
export class ProductSpecsComponent implements OnInit {

  currentProductId:number;
  datalist=[
    {
      id:"101",
      brand:"iphone",
      model:"iphone XS",
      price:"63,0000 INR"
    },
    {
      id:"102",
      brand:"one plus",
      model:"one plus 7T",
      price:"35,0000 INR"
    },
    {
      id:"103",
      brand:"samsung",
      model:"samsung note 10",
      price:"85,0000 INR"
    }
  ];
  constructor(private activatedRout:ActivatedRoute) { 
    // this.currentProductId = this.activatedRout.snapshot.params.id
    this.activatedRout.params.subscribe((currentId) => {
      this.currentProductId = currentId.id;
    })
  }
  if(currentProductId=window.localStorage.getItem("id")){
    for(var i=0;i<this.datalist.length;i++){
        if(currentProductId=this.datalist[i].id){
          this.datalist[i].brand=window.localStorage.getItem("brand");
          this.datalist[i].model=window.localStorage.getItem("model");
          this.datalist[i].price=window.localStorage.getItem("price");
        }
    }

  }
  ngOnInit(): void {
  }
  
}
// var pro1=document.getElementById("101").getElementsByTagName('tbody')[0];
// var pro2:HTMLTableSectionElement=document.getElementById('102').getElementsByTagName('tbody')[0];
// var pro3:HTMLTableSectionElement=document.getElementById('103').getElementsByTagName('tbody')[0];
// // pro1.rows[0].cells[1].innerHTML=this.datalist[0].brand;
// // pro1.rows[1].cells[1].innerHTML=this.datalist[0].model;
// // pro1.rows[2].cells[1].innerHTML=this.datalist[0].price;
// pro2.rows[0].cells[1].innerHTML=this.datalist[0].brand;
// pro2.rows[1].cells[1].innerHTML=this.datalist[0].model;
// pro2.rows[2].cells[1].innerHTML=this.datalist[0].price;
// pro3.rows[0].cells[1].innerHTML=this.datalist[0].brand;
// pro3.rows[1].cells[1].innerHTML=this.datalist[0].model;
// pro3.rows[2].cells[1].innerHTML=this.datalist[0].price;
