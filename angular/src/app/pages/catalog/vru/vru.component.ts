import {Component, OnInit} from '@angular/core';
import {VruService} from './vru.service';

@Component({
  selector: 'app-vru',
  imports: [],
  templateUrl: './vru.component.html',
  standalone: true,
  styleUrl: './vru.component.scss'
})
export class VruComponent implements OnInit{
  fullImageUrl:string[]=[];
  constructor(private vruService: VruService) {
  }
  ngOnInit(): void {
    this.vruService.getImagesUrl().subscribe({next:data=>{
        this.fullImageUrl=data
      }})
  }
}
