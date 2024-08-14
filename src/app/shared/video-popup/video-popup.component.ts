import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-popup.component.html',
  styleUrl: './video-popup.component.css'
})
export class VideoPopupComponent implements OnInit,OnChanges{
  @Input('show')
  show = true;

  @Output('close')
  onClose = new EventEmitter()

  disableBodyScrolling(){
    document.body.style.setProperty('overflow','hidden')
  }
  enableBodyScrolling(){
    document.body.style.setProperty('overflow','scroll')
  }

  ngOnInit(): void {
    this.init()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init()
  }

  init(){
    if (this.show)
    this.disableBodyScrolling()
  }
  close(){
    this.enableBodyScrolling()
    this.onClose.emit()
  }
}
