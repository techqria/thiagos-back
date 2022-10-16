import { Model } from 'mongoose';
import { User, UserDocument } from 'src/database/schemas/user.schema';
export declare class AuthService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    authenticate(user: User): Promise<User>;
}
