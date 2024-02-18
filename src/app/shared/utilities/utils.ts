import { AuthService } from "../services/auth.service";

export class utilService {
    constructor(private auth: AuthService) {}

    public getLoggedinstatus(){
        let status: boolean = false;
        this.auth.loginStatus$.subscribe((stat) => status = stat)
        return status;
    }
}