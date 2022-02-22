import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  currentCars : CarDetail[]=[];
  currentCar: CarDetail;
  dataLoaded=false

  constructor( 
    private activatedRoute:ActivatedRoute, 
    private carDetailService:CarDetailService,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarDetailId(params["id"])
      }
    })
  }
  getCarDetailId(id:number){
    this.carDetailService.getCarDetailId(id).subscribe(response=>{
      this.currentCars=response.data
    })
  }
  getCarImage(imagePath:string){(console.log(imagePath))
    return this.carImageService.getCarImage(imagePath)
  }


}
