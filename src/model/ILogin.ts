export interface ILogin {
  message: string;
  token: string;
  user: User;
  success: boolean;
}

export interface User {
  id: number;
  email: string;
  email_verified_at: any;
  is_social_media_user: number;
  added_date: string;
  updated_date: string;
  is_migrated_user: number;
  group_id: any;
  agree_terms: any;
  profile: Profile;
}

export interface Profile {
  id: number;
  user_id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  phone_number_verified_at: any;
  postal_address: any;
  birth_date: string;
  occupation_id: any;
  education: any;
  address: string;
  facebook_address: string;
  twitter_address: string;
  gender_id: number;
  image_file_name: any;
  country_id: number;
  nationality_id: any;
  gender: Gender;
  country: Country;
}

export interface Gender {
  id: number;
  name: string;
}

export interface Country {
  id: number;
  name: string;
  code: string;
  national_language: any;
  flag: any;
}
