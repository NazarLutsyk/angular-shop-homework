import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotosPromise(): Promise<Array<any>> {
    return this.getPhotos().toPromise();
  }
}
