import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}


    async authenticate(user): Promise<User> {
        return this.userModel.findOne(user)
    }
}
