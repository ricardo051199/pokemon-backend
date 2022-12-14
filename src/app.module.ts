import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadersModule } from './resourses/leaders/leaders.module';
import { GymsModule } from './resourses/gyms/gyms.module';
import { PokemonsModule } from './resourses/pokemons/pokemons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './resourses/users/users.module';
import { AuthModule } from './resourses/auth/auth.module';

@Module({
  imports: [
    LeadersModule,
    GymsModule,
    PokemonsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'pokemon',
      synchronize: false,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
