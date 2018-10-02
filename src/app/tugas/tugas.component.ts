import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada server baru yang telah dibuat!';
  userName = '';

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreationStatus(userName) {
    // this.userName =(<HTMLInputElement>event.target).value;
    if(this.userName){
      this.serverCreationStatus = this.userName;
      this.allowNewServer = false;
      this.userName = ''
    } else{
      this.allowNewServer = true;
    }
    
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
    
  }


}
