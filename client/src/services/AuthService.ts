import { AuthResponse } from './../models/response/AuthResponse';
import $api from "../http";
import { AxiosResponse } from "axios";

export default class AuthService {
	static async login( email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/login', {email, password})
	}

	static async registration(username: string, email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/registration', {username, email, password})
	}

	static async logout():Promise<void> {
		return $api.post('/logout')
	}
}	