import { Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response, Headers} from '@angular/http';
import { Router} from '@angular/router';
import { Injectable} from '@angular/core';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class MyCustomHttp extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private _router : Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, options));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => {
            console.log('CustomHttp Error status:  ' + err.status);
            return Observable.throw(err); 
        });
    }

}