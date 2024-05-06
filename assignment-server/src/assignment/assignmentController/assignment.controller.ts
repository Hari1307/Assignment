import { Body, Controller, Get, Patch, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';
import { LocalGuard } from 'src/auth/local-auth.guard';
import { AssignmentService } from '../assignmentService/assignment.service';
import { CreateAssignmentDto } from '../dto/createAssignment.dto';
import { UpdateAssignmentDto } from '../dto/updateAssignment.dto';

@Controller('assignment')
export class AssignmentController {
    constructor(private assignmentService: AssignmentService, private authService: AuthService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createAssignmentDto: CreateAssignmentDto) {
        return this.assignmentService.createAssignment(createAssignmentDto);
    }

    @UseGuards(LocalGuard)
    @Post("/login")
    login(@Request() request): any {
        return this.authService.login(request.user); // so here we will be getting the access token of jwt 
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getUser(@Request() req): any {
        // console.log("verification is done , now trying to print the response from the strategy : ");
        // console.log(req);
        // console.log("from controller ===> " + req.user);
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe())
    @Patch()
    updateUser(@Request() req, @Body() updateAssignmentDto: UpdateAssignmentDto): any {
        const username = req.user.username;
        // console.log("inside the patch update");
        // console.log(updateAssignmentDto + " ====> from controller ");
        return this.assignmentService.updateAssignment(username, updateAssignmentDto);
    }
}
