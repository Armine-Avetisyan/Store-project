import { Component, OnInit } from '@angular/core';
import {EmporioarmaniService} from '../../shared/services/emporioarmani.service';
import {Time} from '../../shared/interface';
@Component({
  selector: 'app-emporioarmani-page',
  templateUrl: './emporioarmani-page.component.html',
  styleUrls: ['./emporioarmani-page.component.css']
})
export class EmporioarmaniPageComponent implements OnInit {
  constructor(private emporioarmaniService: EmporioarmaniService) { }
  armani: Time[];
  error: string;
  ngOnInit(): void {
    this.emporioarmaniService.getArmani().subscribe(
      (data) => {this.armani = data; },
      (error) => {this.error = error.message; }
    )
  }
}
