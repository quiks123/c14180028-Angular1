import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public papan: any[][];

  constructor() {
    this.papan = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
  }
    baris=null;
    kolom=null;
    giliran=1;

    

    input(){
      if(this.baris<=4 && this.kolom <=4 && this.baris >=0 && this.kolom>=0){
        if(this.giliran == 0 && this.papan[this.baris][this.kolom]=="*"){
          this.papan[this.baris][this.kolom]="0"
          this.giliran = 1
        }
        else if(this.giliran == 1 && this.papan[this.baris][this.kolom]=="*"){
          this.papan[this.baris][this.kolom]="1"
          this.giliran = 0
        }
      }

      if(this.papan[this.baris][this.kolom+0]=="1" &&
        this.papan[this.baris+1][this.kolom+0]=="1" && 
        this.papan[this.baris+2][this.kolom+0]=="1" &&
        this.papan[this.baris+3][this.kolom+0]=="1"){
          alert("player 1 menang")
        }
      if(this.papan[this.baris+0][this.kolom]=="1" &&
        this.papan[this.baris+0][this.kolom+1]=="1" &&
        this.papan[this.baris+0][this.kolom+2]=="1" &&
        this.papan[this.baris+0][this.kolom+3]=="1"){
          alert("player 1 menang")
        }
      if(this.papan[this.baris][this.kolom]=="0" &&
        this.papan[this.baris+1][this.kolom]=="0" && 
        this.papan[this.baris+2][this.kolom]=="0" &&
        this.papan[this.baris+3][this.kolom]=="0"){
          alert("player 0 menang")
        }
      if(this.papan[this.baris][this.kolom]=="0" &&
        this.papan[this.baris+1][this.kolom]=="0" && 
        this.papan[this.baris+2][this.kolom]=="0" &&
        this.papan[this.baris+3][this.kolom]=="0"){
          alert("player 0 menang")
        }
    }
    reset(){
      this.papan = [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"]
    ];
      this.giliran=1;
    }
}