import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import controllers from "./controllers";
import entities from "./entities";
import interceptor from "./interceptor";
import * as ormConfig from "./ormconfig";
import providers from "./providers";

console.log("config", { ...ormConfig, password: "***" });

@Module({
  imports: [
    // TypeOrmModule.forRoot(ormConfig),
    // TypeOrmModule.forFeature(entities),
    // JwtModule.register({ secret: "secret" }),
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: "smtp.elasticemail.com",
        port: 2525,
        secure: false,
        auth: {
          user: "nailz2kua@gmail.com",
          pass: "5CA6D7291433E777E67B3B39AEEDC86EC227",
        },
      },
      defaults: {
        from: "makeup@shop.com",
      },
      template: {
        dir: join(__dirname, "templates"),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: controllers,
  providers: [...providers, ...interceptor],
})
export class AppModule {}
