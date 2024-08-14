import { CommonModule } from '@angular/common';
import { AfterViewInit,ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewChild ,Inject, PLATFORM_ID, ContentChild, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SlideConfig } from '../../models/slide-config.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input('items')
  items: any[] = [];

  dots: number[] = [];
  activeSlideID = 1;

  @ContentChild('template')
  template: TemplateRef<any> | undefined;

  @Output('select')
  onSelect:EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('slideContainer')
  slideContainer!: ElementRef;

  @Input('slideConfig')
  slideConfig = new SlideConfig();

  sliderContainerWidth = 0;
  slideWidth = 0;
  elementsToShow = 1;
  sliderWidth = 0;

  sliderMarginLeft = 0;

  isSlidesOver = false;
  
  constructor(@Inject(PLATFORM_ID) private platformId: any,private cdr: ChangeDetectorRef) {}

  @HostListener('window:resize', ['$event'])
  onScreenResize() {
    if (isPlatformBrowser(this.platformId)){
      this.setUpSlider()
    }
    
  }

  ngOnInit(): void{
    console.log(this.slideConfig)
  }

  getItems() {
    return this.items as any[]
  }

  ngAfterViewInit(): void{
    // console.log(this.slider)
    if (isPlatformBrowser(this.platformId)) {
      this.setUpSlider();
      this.cdr.detectChanges();
    }
  }
  
  setUpSlider() {
    if (isPlatformBrowser(this.platformId)){
      if (window.innerWidth < 500)
        this.elementsToShow = this.slideConfig.breakpoints.sm;
      else if (window.innerWidth < 900)
        this.elementsToShow = this.slideConfig.breakpoints.md;
      else if (window.innerWidth < 1300)
        this.elementsToShow = this.slideConfig.breakpoints.lg;
      else
        this.elementsToShow = this.slideConfig.breakpoints.xl;



      if (this.items.length < this.elementsToShow) {
        this.elementsToShow = this.items.length;
      }
      this.dots = Array(this.items.length - this.elementsToShow + 1);

      let container = this.slideContainer.nativeElement as HTMLElement;

      this.sliderContainerWidth = container.clientWidth;
      this.slideWidth = this.sliderContainerWidth / this.elementsToShow;
      this.sliderWidth = this.slideWidth * this.items.length;

      console.log(this.sliderContainerWidth)
      console.log(this.sliderWidth)
      console.log(this.slideWidth)
      if(this.slideConfig.autoPlay) this.autoPlay()
    }
  }



  prev() {
    console.log(this.sliderMarginLeft)
    if (this.sliderMarginLeft === 0) {
      return
    }
    this.activeSlideID--;
    this.sliderMarginLeft = this.sliderMarginLeft + this.slideWidth;
    if (this.sliderMarginLeft > 0) {
      this.sliderMarginLeft = 0;
    }
  }

  next() {
    const notShowingElementsCount = this.items.length - this.elementsToShow;
    const possibleMargin = -(notShowingElementsCount * this.slideWidth);
    if (this.sliderMarginLeft <= possibleMargin) {
      this.isSlidesOver = true;
      return
    }
    this.isSlidesOver = false;
    this.activeSlideID++;
    this.sliderMarginLeft = this.sliderMarginLeft - this.slideWidth;
  }

  move(slideID: number) {
    console.log("Slide ID" + slideID)
    console.log("activeSlideID" + this.activeSlideID)
    let difference = slideID - this.activeSlideID;
    if (difference > 0) {
      // Next
      for (let index = 0; index < difference; index++) {
        this.next()
      }
    } else if (difference < 0) {
      //prev
      for (let index = 0; index < Math.abs(difference); index++) {
        this.prev()
      }
    }
  }

  autoPlayInterval: any;

  // autoPlay(){
  //   setTimeout(() => {
  //     if(this.isSlidesOver === true){
  //       this.sliderMarginLeft = this.slideWidth;
  //     }
  //     this.next()
  //     this.autoPlay()
  //   }, 1000);
  // }

  autoPlay() {
      if (this.autoPlayInterval) {
          clearTimeout(this.autoPlayInterval);
      }
  
      this.autoPlayInterval = setTimeout(() => {
          if (this.isSlidesOver === true) {
            this.sliderMarginLeft = this.slideWidth; 
          }
          this.next();
          this.autoPlay();
      }, this.getAutoPlayInterval());
  }
  
  getAutoPlayInterval() {
      if (window.innerWidth < 500) {
          return 2000; // Slower on mobile devices
      } else {
          return 2000; // Default for larger screens
      }
  }
  
  ngOnDestroy(): void {
      // Ensure to clear the interval when the component is destroyed
      if (this.autoPlayInterval) {
          clearTimeout(this.autoPlayInterval);
      }
  }

  selectedClub: string | null = null;
  
  selectClub(club: string) {
    this.selectedClub = club;
    this.onSelect.emit(club);
  }

}
