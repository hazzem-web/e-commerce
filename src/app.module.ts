import { Module } from '@nestjs/common';
import { UserModule } from './moduls/users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URL'),
        connectionFactory: (connection: Connection) => {
          if (connection.readyState === 1) {
            console.log('MongoDB is already connected and open!');
          }
        },
      }),
    }),

    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
