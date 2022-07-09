import { Controller, Post } from "@nestjs/common";
import { EmailsService } from "../providers";

@Controller('emails')
export class EmailsController {
    constructor (private readonly _service: EmailsService) {}

    @Post()
    sendEmail() {
        this._service.sendEmail()
    }
}