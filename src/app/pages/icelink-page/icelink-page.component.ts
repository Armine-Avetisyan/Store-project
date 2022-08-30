import { Component, OnInit } from '@angular/core';
import {IcelinkService} from '../../shared/services/icelink.service';
import {Time} from '../../shared/interface';

@Component({
  selector: 'app-icelink-page',
  templateUrl: './icelink-page.component.html',
  styleUrls: ['./icelink-page.component.css']
})
export class IcelinkPageComponent implements OnInit {

  constructor(private icelinkService: IcelinkService) { }

  icelink: Time[];
  error: string;

  ngOnInit(): void {
    this.icelinkService.getIcelink().subscribe(
      (data) => {this.icelink = data;},
      (error) => {this.error = error.message;}
    );
  }

}
