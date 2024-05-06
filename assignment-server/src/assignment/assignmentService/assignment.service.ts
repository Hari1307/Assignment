import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assignment } from 'src/schemas/assignment.schema';
import { CreateAssignmentDto } from '../dto/createAssignment.dto';
import { UpdateAssignmentDto } from '../dto/updateAssignment.dto';

@Injectable()
export class AssignmentService {
    constructor(@InjectModel(Assignment.name) private assignmentModel: Model<Assignment>) { }

    createAssignment(createAssignmentDto: CreateAssignmentDto) {
        const newAssignment = new this.assignmentModel(createAssignmentDto);
        return newAssignment.save();
    }

    async updateAssignment(username: string, updateAssignmentDto: UpdateAssignmentDto) {
        console.log("inside update method ");
        return await this.assignmentModel.findOneAndUpdate({ username: username }, updateAssignmentDto, { new: true });
    }

    async findOne(username: string) {
        return await this.assignmentModel.findOne({ username });
    }
}
