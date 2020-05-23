import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CrossingNumberAlgorithmService } from 'src/app/service/CrossingNumberAlgorithm.service';

@Component({
  selector: 'app-Canvas',
  templateUrl: './Canvas.component.html',
  styleUrls: ['./Canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('crossingNumberAlgorithmCanvas') crossingNumberAlgorithmCanvas;
  public canvas: HTMLCanvasElement = null; 
  public ctx: CanvasRenderingContext2D = null;
  public lines = this.crossingNumberAlgorithmService.LINES;
  constructor(private crossingNumberAlgorithmService: CrossingNumberAlgorithmService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.canvas = this.crossingNumberAlgorithmCanvas.nativeElement;
    this.ctx = this.canvas.getContext( '2d' );

    for (let i = 0; i < this.lines.length - 1; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.lines[i].x, this.lines[i].y);
      this.ctx.lineTo(this.lines[i+1].x, this.lines[i+1].y);
      this.ctx.closePath();
      this.ctx.stroke();  
    }
  }
  
  onClickCanvas(event) {
    let rect = event.currentTarget.getBoundingClientRect();
    let x = event.x - rect.left;
    let y = event.y - rect.top;

    this.ctx.beginPath();
    this.ctx.arc( x, y, 1, 0, Math.PI*2, false ) ;
    this.crossingNumberAlgorithmService.checkWithInPoint(x, y)? this.ctx.strokeStyle = "red" : this.ctx.strokeStyle = "blue" ;
    this.ctx.lineWidth = 1 ;
    this.ctx.stroke(); 
    }


}
