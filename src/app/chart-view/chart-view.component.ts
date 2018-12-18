import {Component, OnInit, NgModule,Directive,Input,Output,EventEmitter,HostBinding,ViewChild, HostListener} from '@angular/core';
import {ActivatedRoute, Router, Params, ParamMap} from '@angular/router';
import { CryptoService } from '../crypto.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {


  chart: Chart;
  public alldata:any=[];
  public val1:any;
  public val2:any;
  public comparearray:any=[];
  public d = new Date();

  constructor(private _route: ActivatedRoute, private router: Router, public currencyService: CryptoService) { }

  public specific(s):any {
    this.currencyService.specific(s).subscribe(
      data =>{
        
          if(s==data.data.id ){
            this.d.setHours(
              this.comparearray.push(data.data),
             24);
      
          }
      
        //chart data 
    let chart = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'Price Chart'
      },
      xAxis: {
      type: 'Price Chart',
      title: {
        text: 'Coins'
      }
    },
    credits: {
      enabled: false
    },
      yAxis: {
        title: {
            text: 'Price'
        }
    },
    series: [{
      name: 'Price',
      data:  [{
        id: this.comparearray[0].symbol,
          name: this.comparearray[0].name,
          y: this.comparearray[0].quotes.USD.price
      }]
    }, 
    {
      name:"Volume_24h",
      data: [{
        id: this.comparearray[0].symbol,
          name: this.comparearray[0].name,
          y: this.comparearray[0].quotes.USD.volume_24h
      }]
    }
  ]
  });
      //console.log(this.comparearray[0].id);
    this.chart = chart;
    chart.ref$.subscribe(console.log);


      },
      error=>{
        console.log("Error");
        console.log(error.status);
            
      })
 }

 goBack= () => {
    this.router.navigateByUrl("/");
  }
 

  ngOnInit() {

    this._route.queryParams.subscribe((params: Params) => {
      if(params!=undefined)
      {
       console.log(params.pc);
       this.val1=params.pc;
      }
      else {
        console.log("No such request");
      }
     
   });
   this.specific(this.val1); 
  }
    
}
