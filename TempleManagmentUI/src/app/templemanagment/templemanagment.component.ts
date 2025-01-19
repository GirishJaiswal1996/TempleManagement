import { Component, OnInit } from '@angular/core';
import { TempleManagmentServiceService } from '../service/temple-managment-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-templemanagment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './templemanagment.component.html',
  styleUrls: ['./templemanagment.component.css'],
})
export class TemplemanagmentComponent implements OnInit {
  Temple: any[] = [];
  errorMessage: string | null = null;

  constructor(private _service: TempleManagmentServiceService) {}

  ngOnInit(): void {
    this.GetTempleData();
  }

  GetTempleData(): void {
    this._service.GetTempleData().subscribe({
      next: (data) => {
        this.Temple = data;
        console.log('Temple data fetched successfully:', this.Temple);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('Error while fetching data:', error);
      },
    });
  }
}
