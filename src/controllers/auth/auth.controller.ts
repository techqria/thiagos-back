import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../../database/schemas/user.schema';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('signin')
    async authenticate(@Body() user: User): Promise<User> {
        try {
            let response = await this.authService.authenticate(user);

            return response
        } catch (e) {
            return e
        }
    }
}
