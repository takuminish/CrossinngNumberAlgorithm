import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CrossingNumberAlgorithmService } from 'src/app/service/CrossingNumberAlgorithm.service';

@Component({
  selector: 'app-Canvas',
  templateUrl: './Canvas.component.html',
  styleUrls: ['./Canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  /** canvasタグを特定する用 */
  @ViewChild('crossingNumberAlgorithmCanvas') crossingNumberAlgorithmCanvas;
  
  /** canvasタグ用 */
  public canvas: HTMLCanvasElement; 
  public ctx: CanvasRenderingContext2D;

  /** 範囲判定を行う図形は固定 */
  public lines = this.crossingNumberAlgorithmService.LINES;


  constructor(private crossingNumberAlgorithmService: CrossingNumberAlgorithmService) { }

  ngOnInit() {
  }

  /** viewChildが描画語でなければ参照できないいため使用 */
  ngAfterViewInit() {
    this.canvas = this.crossingNumberAlgorithmCanvas.nativeElement;
    this.ctx = this.canvas.getContext( '2d' );

    // 指定した座標に沿って線を引く
    for (let i = 0; i < this.lines.length - 1; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.lines[i].x, this.lines[i].y);
      this.ctx.lineTo(this.lines[i+1].x, this.lines[i+1].y);
      this.ctx.closePath();
      this.ctx.stroke();  
    }
  }
  
  /**
   * canvas内をクリック時
   * クリックした箇所に点をうつ
   * 範囲内であれば赤点、範囲外であれば青点とする
   * @param event 
   */
  onClickCanvas(event) {

    // canvasの左上を(0,0)とするために座標計算
    let rect = event.currentTarget.getBoundingClientRect();
    let x = event.x - rect.left;
    let y = event.y - rect.top;

    // 点をうつ
    for (let x = 0; x <= 600; x++) {
      for (let y = 0; y <= 600; y++) {
        this.drawPoint(x, y);
      }
    }
    }

    /**
     * 引数として与えられた座標に点をうつ
     * 範囲内であれば赤点、範囲外であれば青点とする
     * @param x 
     * @param y 
     */
    drawPoint(x: number, y: number) {
    // 点をうつ
    this.ctx.beginPath();
    this.ctx.arc( x, y, 1, 0, Math.PI*2, false ) ;

    // 範囲内: Styleを赤, 範囲外: Styleを青
    this.crossingNumberAlgorithmService.checkWithInPoint(x, y)? this.ctx.strokeStyle = "red" : this.ctx.strokeStyle = "blue" ;
    this.ctx.lineWidth = 1 ;
    this.ctx.stroke(); 
    }


}
