import { User } from 'src/database/schemas/user.schema';
import { AuthService } from 'src/services/auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authenticate(user: User): Promise<User>;
}
