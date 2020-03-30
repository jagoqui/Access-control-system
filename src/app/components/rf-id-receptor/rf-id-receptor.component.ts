import { Component, OnInit } from '@angular/core';
// Firebase connection service
import {FirebaseConnectionService} from '../../services/firebase-connection.service';
@Component({
  selector: 'app-rf-id-receptor',
  templateUrl: './rf-id-receptor.component.html',
  styleUrls: ['./rf-id-receptor.component.css'],
})
export class RFIdReceptorComponent implements OnInit {
  UsersView: any;
  RF_ID: string;
  action: string;
  constructor(private connection: FirebaseConnectionService) {
    this.RF_ID = '';
    this.action = '';
    // Firebase connection init
    connection.getAllUsers().subscribe(returnUsers => { // Le paso los items de la base de datos a la conexión
      this.UsersView = returnUsers;
      console.log(this.UsersView);
    });
  }
  ngOnInit(): void {
  }
  // Vallidation RF ID
  /////////////////////////////////////////////////
  public getRF_ID() {
    return this.RF_ID;
  }
  searchDB(id: string) {
    if (id === '1007316465') {
      return 'List user';
    } else {
      return 'Create new user';
    }
  }
  doAction() {
    if (this.RF_ID !== '') {
      this.action = this.searchDB(this.RF_ID);
    } else {
      this.action = '';
      alert('Enter some value on input');
    }
  }
  //////////////////////////////////////////////////

}
