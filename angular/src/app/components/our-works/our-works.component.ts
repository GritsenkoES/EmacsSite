import {Component, OnInit} from '@angular/core';
import {OurWorksService} from '../../services/our-works.service';
import {OurWorks, OurWorksContent} from '../../types/OurWorksTypes';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-our-works',
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './our-works.component.html',
  standalone: true,
  styleUrls: ['./our-works.component.scss','../../commons/styles/buttons.scss','../../commons/styles/title.scss']
})
export class OurWorksComponent implements OnInit{
  ourWorks:OurWorksContent = {content:[]}
  currentOurWork:OurWorks|undefined
  constructor(private mainPageService: OurWorksService) {
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
