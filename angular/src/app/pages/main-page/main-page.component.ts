import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {YMapsComponent} from './ymaps/ymaps.component';
import {interval} from 'rxjs';
import {MainPageService} from './main-page.service';
import {OurWorks, OurWorksContent} from './types';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    YMapsComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

  currentDiv: number = 1;
  ourWorks:OurWorksContent = {content:[]}
  currentOurWork:OurWorks|undefined

  constructor(private mainPageService: MainPageService) {
    interval(2000).subscribe({
        next: () => {
          this.currentDiv = this.currentDiv + 1
          if (this.currentDiv >6) {
            this.currentDiv=1}}}
    )
  }

  ngOnInit(): void {
    this.mainPageService.getOurWorksData().subscribe({next:data=>{
      this.ourWorks = data
        this.currentOurWork=data.content[0]
      }})
  }

  clickLeft() {
    const length = this.ourWorks.content.length
    const index = this.ourWorks.content.findIndex(item => item === this.currentOurWork)
    if(index===0){
      this.currentOurWork=this.ourWorks.content[length-1]
      return
    }
    this.currentOurWork = this.ourWorks.content[index-1]
  }

  clickRight() {
    const length = this.ourWorks.content.length
    const index = this.ourWorks.content.findIndex(item => item === this.currentOurWork)
    if(index===length-1){
      this.currentOurWork=this.ourWorks.content[0]
      return
    }
    this.currentOurWork = this.ourWorks.content[index+1]
  }
}
