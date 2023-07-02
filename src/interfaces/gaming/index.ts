import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface GamingInterface {
  id?: string;
  game_name: string;
  description?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface GamingGetQueryInterface extends GetQueryInterface {
  id?: string;
  game_name?: string;
  description?: string;
  company_id?: string;
}
