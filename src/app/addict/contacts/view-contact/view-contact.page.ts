import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/data/firestore.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Contact } from '../../../models/contact.interface'
import { AlertController } from '@ionic/angular';
import {Location} from '@angular/common';
 
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.page.html',
  styleUrls: ['./view-contact.page.scss'],
})
export class ViewContactPage implements OnInit {
  public contact: Observable<Contact>;
  public iID;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    
    public alertController: AlertController,
    public fservice: FirestoreService,
    private _location: Location,

  ) { }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.iID = contactId;
    this.contact = this.fservice.getDetail("userContacts", contactId).valueChanges();
  }

  back(){
    this._location.back();
  }

  async deleteContact(){
    const alert = this.alertController.create({
      message: 'Are you sure you want to delete this contact?',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: ca => {
          console.log('cancel ca');
        },
      },
      {
        text: 'Delete',
        handler: () => {
          this.fservice.delete("userContacts", this.iID);


          /////HERE ROUTE BACK
          this._location.back();
        },
      },
    ],
    });

    (await alert).present();
  }

}
