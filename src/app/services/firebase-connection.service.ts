import { Injectable } from '@angular/core';
// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Para hacer mapeo entre valores

export interface User { // Bieldfield for Firebase collections
  Name: string;
  Bonding_type: string;
  Email: string;
  Identification_document: number;
  Vehicule_type: string;
  Model_Reference: any;
  Description: any;
}
@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionService {
  private UsersCollection: AngularFirestoreCollection<User>; // Le paso los items que hay en Firenbase
  Users: Observable<User[]>; // Observo los items
  constructor(private AngularFireStoreBD: AngularFirestore) { // Capturo todos los datos de FireStore
    this.UsersCollection = AngularFireStoreBD.collection<User>('Users'); // Le paso a la colección de la app la colección almacena en la BD
    this.Users = this.UsersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))); // Hace una captura del id y todo los dato de cada item de la coleccón.
  }
  getAllUsers() { // Devuelvo todos los usuarios almacenados en la BD
    return this.Users;
  }
}
