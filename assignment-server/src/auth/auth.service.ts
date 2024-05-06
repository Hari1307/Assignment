import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AssignmentService } from 'src/assignment/assignmentService/assignment.service';

@Injectable()
export class AuthService {
    constructor(private assignmentService: AssignmentService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.assignmentService.findOne(username);

        if (user && user.password === password) {
            return user;
        }

        return null;
    }

    async login(user: any) {
        const foundUser = await this.assignmentService.findOne(user.username);
        const role = foundUser.roles;
        const payload = {
            name: user.username,
            sub: user._id
        }
        return {
            role: role,
            access_token: this.jwtService.sign(payload)
        };
    }
}
