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
          products.map(product => ({
            ...product,
            Price: product.Price * 100,
            NewKey: 'Bharat'
          }))
        )
      )
      .subscribe(next => {
        console.log(next);
      });
    let name: any = [{ name: 'bharat', price: 100 }];
    name.forEach(item => {
      item.Bharat = 'Name';
    });
    console.log(name);
  }
}
