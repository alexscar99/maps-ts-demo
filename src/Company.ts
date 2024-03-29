import faker from 'faker';
import { MapItem } from './Map';

export class Company implements MapItem {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
            <div>
                <h1>Company Name: ${this.name}</h1>
                <h3>Catchphrase: ${this.catchPhrase}<h3>
            </div>
        `;
    }
}
