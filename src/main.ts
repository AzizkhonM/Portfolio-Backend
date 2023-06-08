import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule)
    const PORT = process.env.PORT || 3030
    app.setGlobalPrefix("api")

    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
      .setTitle("MyTicket Project")
      .setDescription("Project MyTicket")
      .setVersion("1.0.0")
      .addTag("NodeJS, NestJS, Postgres, Sequelize")
      .build()

    const documet = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("/api/docs", app, documet)

    app.listen(PORT, () => {
      console.log("Server", PORT, "- portda");
    })
  } catch (error) {
    console.log(error);
  }
}

start()