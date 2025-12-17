import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import * as bodyParser from 'body-parser';

import { Role } from './roles/roles.entity';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Taille maximale et extendes
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // ---- SEED ADMIN ----
  const userService = app.get(UsersService);
  const roleRepo = app.get(getRepositoryToken(Role));

  // vérifier si le rôle ADMIN existe
  let adminRole = await roleRepo.findOne({ where: { name: 'ADMIN' } });
  if (!adminRole) {
    adminRole = await roleRepo.save({
      name: 'ADMIN',
      description: 'Administrateur absolu du système',
    });
    console.log('✅ Role ADMIN créé');
  }

  // vérifier si l’utilisateur admin existe
  const existingAdmin = await userService.findByUsername('admin');
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await userService.create({
      username: 'admin',
      password: hashedPassword,
      fullName: 'Administrator',
      email: 'infrastructure@inhome-insol.com',
      isActive: true,
      roles: [adminRole], // ici on lie le rôle existant
    });
    console.log('✅ Admin user créé: admin / admin123');
  }
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  });
  // ---- START SERVER ----
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
