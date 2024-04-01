import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

import { ApiConfigService } from './services/api-config.service';
import { DatabaseUtilService } from './services/database-util.service';
import { LogService } from './services/logger.service';

const providers = [ApiConfigService, DatabaseUtilService, LogService];

@Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule],
})
export class SharedModule {}
