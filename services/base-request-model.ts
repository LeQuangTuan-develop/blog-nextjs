import { Observable } from "rxjs";
import { Method, Body } from './types'

export const baseUrl = 'https://blog-django-production-ff19.up.railway.app';

type TRequestInfo = {
    url: string, 
    method: Method,
    headers: HeadersInit,
    body?: Body,
}


export default class BaseRequestModel {
    constructor(private info: TRequestInfo) {
        this.info = info
    }

    async requestServer(): Promise<unknown> {
        console.time(`server request to: ${baseUrl}${this.info.url}`)
        const data = await fetch(
            `${baseUrl}${this.info.url}`,
            {
                method: this.info.method,
                headers: {
                    ...this.info.headers,
                    'CONTENT-TYPE': 'application/json',
                },
                body: this.info.body
            }).then((r: any) => {
                return r.json()     
            })
        console.timeEnd(`server request to: ${baseUrl}${this.info.url}`)
        return data
    }

    requestClient(): Observable<unknown> {
        return new Observable(observer => {
            fetch(
                `${baseUrl}${this.info.url}`,
                {
                    method: this.info.method,
                    headers: this.info.headers,
                    body: this.info.body
                }).then((r: any) => {
                    return r.json()
                }).then((data: any) => {
                    observer.next(data);
                    observer.complete();
                }).catch((e: any) => {
                    observer.error(e);
                })
            return () => {
                // clean up on unsubscribe
            }
        });
    }
}