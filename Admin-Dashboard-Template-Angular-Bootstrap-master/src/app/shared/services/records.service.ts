
import { Injectable } from '@angular/core';
import { Client } from 'cassandra-driver';


@Injectable()
export class RecordsService {

    constructor(){
    }

    async run(){
        const client = new Client({
            contactPoints: ['127.0.0.1'],
            localDataCenter: 'datacenter1'
        });

        await client.connect();

        const rs = await client.execute('SELECT * FROM system.local');
        const row = rs.first();
        console.log(`Connected to cluster: ${row['cluster_name']}`);

        await client.shutdown();
    }
}
