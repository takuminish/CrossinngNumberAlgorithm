import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrossingNumberAlgorithmService {

  /** 範囲判定を行う図形(図形を構成する点の座標を配列として表す) */
  public LINES:{x: number, y: number}[] = [
    {
      x: 100,
      y: 100,
    },
    {
      x: 150,
      y: 150,
    },
    {
      x: 200,
      y: 150,
    },
    {
      x: 300,
      y: 200,
    },
    {
      x: 300,
      y: 50,
    },
    {
      x: 400,
      y: 50,
    },
    {
      x: 450,
      y: 200,
    },
    {
      x: 500,
      y: 200,
    },
    {
      x: 500,
      y: 300,
    },
    {
      x: 350,
      y: 500,
    },
    {
      x: 350,
      y: 300,
    },
    {
      x: 200,
      y: 400,
    },
    {
      x: 200,
      y: 500,
    },
    {
      x: 100,
      y: 300,
    },
    {
      x: 100,
      y: 100,
    },
  ]

  constructor() { }


  /**
   * 引数として渡された点が範囲内であるか判定する
   * @param pointX 
   * @param pointY 
   * @return true: 範囲内, false: 範囲外
   */
  checkWithInPoint(pointX: number, pointY: number): boolean {
    let withIncount: number = 0;

    for (let i = 0; i < this.LINES.length - 1; i++) {
      // 点のY座標が辺の始点と終点の間に存在するか(上向きの辺の場合)
      if( ((this.LINES[i].y <= pointY) && (this.LINES[i + 1].y > pointY))
      /// 点のY座標が辺の始点と終点の間に存在するか(下向きの辺の場合)
          || ((this.LINES[i].y > pointY) && (this.LINES[i + 1].y <= pointY))) {

            // 直線の方程式より、点の水平線(右側のみ)と辺の交点のX座標を求める
            let dx = (pointY - this.LINES[i]. y) * (this.LINES[i + 1].x - this.LINES[i].x) / (this.LINES[i + 1].y - this.LINES[i].y) + this.LINES[i].x; 

            if (pointX < dx) {
              withIncount++;
            }
          }
    }

    // 奇数: 範囲内, 偶数: 範囲外
    return withIncount % 2 !== 0 ? true : false; 
  }
}
