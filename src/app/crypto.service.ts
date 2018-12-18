import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService 
{
  
  public Currency;
  
  //base URL for API 
  public baseUrl = 'https://api.coinmarketcap.com/v2/ticker/';
 
  constructor(private _http : HttpClient) { }
  

  //method to get all currency in table
  public getAllCurrency() :any
  {
     let Currency = this._http.get(this.baseUrl);
     //console.log(Currency);
      return Currency;
  }

  //method to get single currency from table
   public getCurrentCoinInfo(currentCoinId): any
  {
    let myResponse = this._http.get(this.baseUrl + currentCoinId + "/");
    return myResponse;
  }

  //method to get specific currency for graph
    public specific(s):any 
    {
    let res=this._http.get(this.baseUrl + s + "/");
    //console.log(res);
    return res;
    }
}
