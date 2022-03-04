import { ModuleConfigFactory } from '@golevelup/nestjs-modules';
import { StripeModuleConfig } from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StripeConfigService
  implements ModuleConfigFactory<StripeModuleConfig>
{
  async createModuleConfig(): Promise<StripeModuleConfig> {
    return {
      apiKey: 'this.stripeCfg.apiKey',
    };
  }
}
