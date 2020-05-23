import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrossingNumberAlgorithmService {

  public LINES:{x: number, y:number}[] = [
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


  checkWithInPoint(pointX:number, pointY:number): boolean {
    let withIncount: number = 0;

    for (let i = 0; i < this.LINES.length - 1; i++) {
      // 上向きの辺。点Pがy軸方向について、始点と終点の間にある。ただし、終点は含まない。(ルール1)
      if( ((this.LINES[i].y <= pointY) && (this.LINES[i+1].y > pointY))
      // 下向きの辺。点Pがy軸方向について、始点と終点の間にある。ただし、始点は含まない。(ルール2)
          || ((this.LINES[i].y > pointY) && (this.LINES[i+1].y <= pointY))) {
            let dx = (pointY - this.LINES[i]. y) * (this.LINES[i+1].x - this.LINES[i].x) / (this.LINES[i+1].y - this.LINES[i].y) + this.LINES[i].x; 
            if (pointX < dx) {
              withIncount++;
            }
          }
    }

    return withIncount%2 !== 0? true : false; 
  }
}
