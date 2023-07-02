import { GamingInterface } from 'interfaces/gaming';
import { SocialMediaInterface } from 'interfaces/social-media';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  gaming?: GamingInterface[];
  social_media?: SocialMediaInterface[];
  user?: UserInterface;
  _count?: {
    gaming?: number;
    social_media?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
