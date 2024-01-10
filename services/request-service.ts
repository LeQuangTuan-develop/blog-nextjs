import { Observable } from "rxjs";
import BaseRequestModel from "./base-request-model";
import { Body } from './types'

export const ApiService = {
  // get request
  getServer: (route: string, header = {}): Promise<any> => {
    const headers = {...header};
    const newBase = new BaseRequestModel({url:route, method:'GET', headers});
    return newBase.requestServer();
  },
  // post request
  postServer: (route: string, form: Body): Promise<any> => {
    const headers = { 'Content-Type': 'application/json' };
    const newBase = new BaseRequestModel({url: route, method:'POST', headers, body: form})
    return newBase.requestServer();
  },
  // get request
  getClient: (route: string): Observable<any> => {
    const headers = {};
    const newBase = new BaseRequestModel({url:route, method:'GET', headers});
    return newBase.requestClient();
  },
  // post request
  postClient: (route: string, form: Body): Observable<any> => {
    const headers = {};
    const newBase = new BaseRequestModel({url: route, method:'POST', headers, body: form})
    return newBase.requestClient();
  },
};