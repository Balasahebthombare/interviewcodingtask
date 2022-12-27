import { Component, Input, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ServiseService } from '../servise.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
order:any
  user:any
  data: any;
datalist: any;
isDesc:boolean = false;
Desc:boolean = false;
  constructor(private serviseService:ServiseService) { 
    serviseService.getData().subscribe((data)=>{
      console.warn('data',data);
      this.user=data
    });
    
    
    
  }
  

  ngOnInit(): void {}

sortData(){
  if(this.order){
    let newarr = this.user.sort((a:any , b:any)=> a.id - b.id);
    this.user=newarr
  }
  else{
    let newarr = this.user.sort((a:any ,b:any)=> b.id - a.id);
    this.user=newarr
  }
  this.order = !this.order
}
codeData(){
if(this.order){
  let newarr = this.user.sort((a:any , b:any)=> a.productCode - b.productCode);
  this.user=newarr
}
else{
  let newarr = this.user.sort((a:any ,b:any)=> b.productCode- a.productCode);
  this.user=newarr
}
this.order = !this.order
}
nameData(property:any){
  this.isDesc = !this.isDesc;

  let direction = this.isDesc ? 1: -1;

  this.user.sort(function(a:any,b:any){
    if (a[property] < b[property]){
return -1* direction
    }
    else if (a[property] > b[property]){
      return 1* direction
    }
    else{
      return 0
    }
  })
}
CategoryData(prop:any){
  this.Desc = !this.Desc;

  let direction = this.Desc ? 1: -1;

  this.user.sort(function(a:any,b:any){
    if (a[prop] < b[prop]){
return -1* direction
    }
    else if (a[prop] > b[prop]){
      return 1* direction
    }
    else{
      return 0
    }
  })
}
priceData(){
  if(this.order){
    let newarr = this.user.sort((a:any , b:any)=> a.productPrice - b.productPrice);
    this.user=newarr
  }
  else{
    let newarr = this.user.sort((a:any ,b:any)=> b.productPrice - a.productPrice);
    this.user=newarr
  }
  this.order = !this.order
}


}
