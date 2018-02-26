import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()
export class DatabaseService {
  constructor() {
    // if (!environment.production) PouchDB.debug.enable('pouchdb:api');

    this.db = new PouchDB('poe', { adapter: 'idb', revs_limit: 25 });
    // PouchDB.sync(environment.remote, 'poe', { live: true, retry: true });
  }

  protected db;
}
