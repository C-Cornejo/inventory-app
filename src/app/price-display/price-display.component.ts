import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
 template: `<div class="price-display">\${{ price }}</div>`,
  styleUrls: ['./price-display.component.css']
})
// la notacion /$ hace que se escape el simbolo dolar
// y para mostrar la variable price solo se ha utilizado {{ price }}
export class PriceDisplayComponent implements OnInit {

  @Input() price:number;


  constructor() 
  {
    
  }

  ngOnInit() {
  }

}
