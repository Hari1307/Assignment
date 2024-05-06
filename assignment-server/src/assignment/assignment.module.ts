import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { Assignment, AssignmentSchema } from 'src/schemas/assignment.schema';
import { AssignmentController } from './assignmentController/assignment.controller';
import { AssignmentService } from './assignmentService/assignment.service';

@Module({
    imports: [forwardRef(() => AuthModule), AssignmentModule, MongooseModule.
        forFeature([{
            name: Assignment.name,
            schema: AssignmentSchema
        }])],
    providers: [AssignmentService],
    controllers: [AssignmentController],
    exports: [AssignmentService]
})
export class AssignmentModule { }
