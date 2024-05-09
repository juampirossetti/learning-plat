import { ENV } from '../config';

export const isProduction = () => RegExp('prod', 'gi').test(ENV);
