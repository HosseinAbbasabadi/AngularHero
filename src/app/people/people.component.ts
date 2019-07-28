import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleComponent]
})
export class PeopleComponent implements OnInit {

  people: any;
  person: any;
  personFrm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  constructor(private readonly peopleService: PeopleService) {
    this.getPeople();
  }

  ngOnInit() {
  }

  getPeople() {
    this.peopleService.getAll().subscribe(data => {
      this.people = data;
    });
  }

  getPersonDetails(id: number) {
    this.peopleService.getBy(id).subscribe(data => {
      this.person = data;
    });
  }

  addPerson() {
    const person = this.personFrm.value;
    this.peopleService.create(person).subscribe(data => {
      this.getPeople();
    });
  }
}
