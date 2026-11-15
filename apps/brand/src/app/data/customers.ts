import { CustomerItem } from '../types';

const BASE_URL = process.env.NEXT_PUBLIC_API_BUCKET

export const CUSTOMERS: CustomerItem[] = [
  {
    id: '01',
    name: 'Dwain Chamber Performance Academy',
    sector: 'ATHLETICS',
    logoSrc: `${BASE_URL}/dcpa-logo (1) (1).png`,
    logoAlt: 'Dwain Chamber Performance Academy logo',
    url: 'https://dcpa.club/?utm_source=devminds&utm_medium=referral&utm_campaign=customer_showcase'
  },
  {
    id: '02',
    name: 'UrOwnStorage Chicago',
    sector: 'MARKETPLACE',
    logoSrc: `${BASE_URL}/UOS-logo.png`,
    logoAlt: 'UrOwnStorage logo',
    url: 'https://urownstorage.com/?utm_source=devminds&utm_medium=referral&utm_campaign=customer_showcase'
  },
  {
    id: '03',
    name: 'E-guide Solutions',
    sector: 'TOURISM TECH',
    logoSrc: `${BASE_URL}/EguideSolutions-light.png`,
    logoAlt: 'E-guide Solutions logo',
    url: 'https://e-guidesolutions.com/?utm_source=devminds&utm_medium=referral&utm_campaign=customer_showcase'
  },
  {
    id: '04',
    name: 'BCE-USA',
    sector: 'ENGINEERING',
    logoSrc: `${BASE_URL}/bcelogo.png`,
    logoAlt: 'BCE-USA logo',
   url: 'https://bca-usa.com/?utm_source=devminds&utm_medium=referral&utm_campaign=customer_showcase'
  },
  {
    id: '05',
    name: 'Emotions Morocco',
    sector: 'TOURISM',
    logoSrc: `${BASE_URL}/LOGO (1).png`,
    logoAlt: 'Emotions Morocco logo',
    url: 'https://emotions-morocco.com/?utm_source=devminds&utm_medium=referral&utm_campaign=customer_showcase'
  },
  {
    id: '06',
    name: 'KBM GYM',
    sector: 'ATHLETICS',
    logoSrc: `${BASE_URL}/issam-logo.png`,
    logoAlt: 'KBM GYM logo',
    url: 'https://kbmgym.com/?utm_source=devminds&utm_medium=referral&utm_campaign=customer_showcase'
  },
];
