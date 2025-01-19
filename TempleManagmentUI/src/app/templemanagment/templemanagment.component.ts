import { Component, OnInit } from '@angular/core';
import { TempleManagmentServiceService } from '../service/temple-managment-service.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'app-templemanagment',
   imports: [CommonModule],
  templateUrl: './templemanagment.component.html',
  styleUrls: ['./templemanagment.component.css'] ,// Corrected property name
  standalone: true
})
export class TemplemanagmentComponent implements OnInit {
  
  Temple:any[]=[];
  constructor(private _service: TempleManagmentServiceService) {  // Corrected constructor
  }

  ngOnInit(): void {
    // You can initialize logic here if needed
  this.GetTempleData();
  console.log(this.Temple);
  }

  GetTempleData(){

    this._service.GetTempleData().subscribe((Data)=>{this.Temple=Data},(error)=>{console.log("kuch to gadbad hai re baba")})

  }
}
