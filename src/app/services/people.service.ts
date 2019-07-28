import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private readonly httpService: HttpService) { }

  getBy(id: number) {
    return this.httpService.get("people", id);
  }

  getAll() {
    return this.httpService.getAll("people");
  }

  create(person: any) {
    return this.httpService.post("people", person);
  }
}
