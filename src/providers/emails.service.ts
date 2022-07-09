import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailsService {
    constructor(private readonly _mailerService: MailerService) {}

    public async sendEmail(): Promise<void> {
        await this._mailerService.sendMail({
            to: 'nailz2kua@gmail.com',
            subject: 'Test',
            template: './temp'
        })
    } 

}