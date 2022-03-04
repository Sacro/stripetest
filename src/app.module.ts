import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeModule } from '@golevelup/nestjs-stripe';
import { StripeConfigService } from './stripe.config.service';

@Module({
  imports: [
    StripeModule.forRootAsync(StripeModule, {
      useClass: StripeConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
