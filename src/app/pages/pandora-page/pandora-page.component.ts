import { Component, OnInit } from '@angular/core';
import {Time} from '../../shared/interface';
import {PandoraService} from '../../shared/services/pandora.service';

@Component({
  selector: 'app-pandora-page',
  templateUrl: './pandora-page.component.html',
  styleUrls: ['./pandora-page.component.css']
})
export class PandoraPageComponent implements OnInit {

  pandora: Time[];
  error: string;
  constructor(private pandoraService: PandoraService) { }

  ngOnInit(): void {
    this.pandoraService.getPandora().subscribe(
      (data) => {this.pandora = data;},
      (error) => {this.error = error.message;}
    );
  }

}
