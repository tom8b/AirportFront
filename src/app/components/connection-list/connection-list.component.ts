import { Component, OnInit } from '@angular/core';
import { Connection } from '../../models/Connection';
import { ConnectionService} from '../../services/connection-service';
import { Airport } from '../../models/Airport';

@Component({
  selector: 'app-connection-list',
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.css']
})
export class ConnectionListComponent implements OnInit {

  connections: Connection[];
  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
  this.connectionService.getAll().subscribe(data => {
        this.connections = data;})
  }

}
