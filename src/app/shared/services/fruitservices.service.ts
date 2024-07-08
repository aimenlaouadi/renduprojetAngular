import { Injectable } from '@angular/core';
import {mockfruits} from '../mockfruits';

@Injectable({
  providedIn: 'root'
})
export class FruitservicesService {

  constructor() { }



  fetchAll() {
    return mockfruits;
  }


}
