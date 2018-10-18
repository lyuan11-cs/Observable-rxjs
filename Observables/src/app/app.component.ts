import {from, interval, Observable, range, Subject, timer} from 'rxjs';
import {Component} from "@angular/core";
import {fromEvent} from 'rxjs';
import {Http , Response} from "@angular/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // title = 'Observables';

  constructor(private http:Http){}

  ngOnInit():void {


    //Observable & Promise
    // let promise = new Promise(resolve => {
    //   console.log('promise execution');
    //   setTimeout(() => {
    //     resolve('promise resolved');
    // }, 1000);
    //
    // });

    //   promise.then(value => console.log(value));
    //
    //   let stream$ = Observable.create(function subscribe(observer){
    //     console.log('observable execution');
    //     observer.next(1);
    //     observer.next(2);
    //     let timeout = setTimeout(() => {
    //       observer.next('observer next value');
    //     }, 1000);
    //     observer.next(3);
    //     observer.complete();
    //     observer.next(4);
    //     observer.error(new Error('error!!!'));
    //
    //     return function unsubscribe(){
    //       clearTimeout(timeout);
    //     }
    //
    //   });
    //
    //   let observer = {
    //     next:value =>console.log(value),
    //     error:err => console.error(err),
    //     complete: () => console.log('completed!')
    //   };
    //
    //   let subscription = stream$.subscribe(observer);
    //   setTimeout(() => {
    //     subscription.unsubscribe();
    //   },500);
    // }

    //Subject Topic:
    // let subject = new Subject();
    // subject.subscribe(
    //   v => console.log('observerA' + v)
    // );
    //
    // subject.subscribe(
    //   v => console.log('observerB' + v)
    // );
    // subject.next(1);
    // subject.next(2);
    // subject.subscribe(
    //   v => console.log('observerC' + v)
    // );
    //
    // subject.next(3);
    //
    // let observable = new Observable(observer => {
    //   observer.next(1);
    //   observer.next(2);
    // });
    //
    // observable.subscribe(
    //   v => console.log('observerAnew' + v)
    // );
    //
    // observable.subscribe(
    //   v => console.log('observerAnew' + v)
    // );

    // const btn = document.querySelector('#btn');
    // const btnStream$ = fromEvent(btn,'click');
    //
    // btnStream$.subscribe(
    //   (e:any) => console.log(e.target.innerHTML),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );
    //
    //
    // const input = document.querySelector('#input');
    // const inputStream$ = fromEvent(input,'keyup');
    //
    // inputStream$.subscribe(
    //   (e:any) => console.log(e.target.value),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );
    //
    // const numbers = [3,4,7,9,12];
    // const numbers$ =from(numbers);
    // numbers$.subscribe(
    //   v => console.log(v),
    //     err => console.error(err),
    //     () => console.log('completed')
    // );
    //

  //   this.getUser('lyuan11-cs')
  //     .subscribe(
  //       // v => console.log(v);
  //       (res: Response) => console.log(res.json())
  //     );
  //
  // }
  //
  // getUser(username){
  //   return this.http.get('http://api.github.com/users/' + username);

    //
    // const source$ = timer(5000,2000).take(5);
    // source$.subscribe(
    //   v => console.log(v),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );
    //Observable timer & range
    // const source$ = range(25,10);
    // source$.subscribe(
    //   v => console.log(v),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );

    // const source$ = Observable.from(['Adam','Bill','Cow'])
    //   .map(v => v.toUpperCase())
    //   .map(v => 'I am ' + v);
    // source$.subscribe(
    //   v => console.log(v),
    //   err => console.error(err),
    //   () => console.log('completed')
    // );
  }

}
