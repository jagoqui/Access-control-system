import { Component, OnInit } from '@angular/core';
// Connection
import {FirebaseConnectionService} from '../../services/firebase-connection.service'
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  UsersView: any;
  constructor(private connection: FirebaseConnectionService) {
    connection.getAllUsers().subscribe(returnUsers => { // Le paso los items de la base de datos a la conexión
      this.UsersView = returnUsers;
      console.log(this.UsersView);
    });
  }

  ngOnInit(): void {
  }

}
