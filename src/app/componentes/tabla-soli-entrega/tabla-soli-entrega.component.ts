import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-soli-entrega',
  templateUrl: './tabla-soli-entrega.component.html',
  styles: [
  ]
})
export class TablaSoliEntregaComponent implements OnInit,OnDestroy {
  dtOptions: DataTables.Settings = {};
  data:any;
  dtTrigger = new Subject();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
     pagingType: 'full_numbers',
     pageLength: 15,
     scrollX:false
   };
   /*this.http.get('http://dummy.restapiexample.com/api/v1/employees')
     .subscribe((res:any) => {
       this.data=res.data;
       this.dtTrigger.next();
     });*/
  }
  ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
  }

}
