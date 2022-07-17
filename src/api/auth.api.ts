import { User } from '~/types/user';
import { baseUrl, instance } from './api';

const signUp = (data: User): any => {
	return instance.post(baseUrl + '/signup', data);
};
const signIn = (data: User): any => {
	return instance.post(baseUrl + '/users/signin', data);
};
export { signUp, signIn };
