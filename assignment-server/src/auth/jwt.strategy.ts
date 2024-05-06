import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { AssignmentService } from "src/assignment/assignmentService/assignment.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private assignmentService: AssignmentService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "hari",
            ignoreExpiration: false
        })
    }

    async validate(payload: any) {
        const foundUser = await this.assignmentService.findOne(payload.name);
        return {
            id: payload.sub,
            username: payload.name,
            userDetails: foundUser
        };
    }
}