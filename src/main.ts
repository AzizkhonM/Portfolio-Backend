import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { writeFileSync } from 'fs';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule)
    const PORT = process.env.PORT || 3030
    app.setGlobalPrefix("api")

    app.useGlobalPipes(new ValidationPipe())

    app.enableCors({
      allowedHeaders: ['content-type'],
      origin: [
        'http://localhost:5174',
        'http://localhost:5173',
        'http://localhost:3000',
        'http://localhost:3001',
        '*',
      ],
      credentials: true,
    });

    const config = new DocumentBuilder()
      .setTitle("MyTicket Project")
      .setDescription("Project MyTicket")
      .setVersion("1.0.0")
      .addTag("NodeJS, NestJS, Postgres, Sequelize")
      .build()

      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('/api/docs', app, document, {
        customCssUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
        customJs: [
          'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
          'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
        ],
      });

      app.use(cookieParser.default());

    app.listen(PORT, () => {
      console.log("Server", PORT, "- portda");
    })

    const pathToSwaggerStaticFolder = resolve(
      process.cwd(),
      'swagger-static',
    );

    const pathToSwaggerJson = resolve(
      pathToSwaggerStaticFolder,
      'swagger.json',
    );
    const swaggerJson = JSON.stringify(document, null, 2);
    writeFileSync(pathToSwaggerJson, swaggerJson);
    console.log(
      `Swagger JSON file written to: '/swagger-static/swagger.json'`,
    );
  } catch (error) {
    console.log(error);
  }
}

start()