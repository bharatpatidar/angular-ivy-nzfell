import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  productList = [
    {
      Name: 'Apple',
      Price: 100
    },
    {
      Name: 'Banna',
      Price: 80
    }
  ];
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    of(this.productList)
      .pipe(
        map(products =>
          // products.map(product => ({
          //   ...product,
          //   Price: product.Price * 100,
          //   NewKey: 'Bharat'
          // }))
          products.map(product => product.Price * 100)
        )
      )
      .subscribe(next => {
        console.log(next);
      });
      let produ = this.productList.map(product=> ({...product, Price :product.Price * 100}));
      let produ1 = this.productList.map(product=> product.Price * 100);
      console.log(produ)
      console.log(produ1)
  }
}
