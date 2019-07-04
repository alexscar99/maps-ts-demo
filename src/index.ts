import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();
const customMap = new Map('map');

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
