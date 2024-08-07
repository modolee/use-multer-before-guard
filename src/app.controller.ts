import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AppGuard } from './app/app.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AppGuard)
  @Post('upload')
  uploadFile(@Req() req: Request) {
    return {
      message: '파일 업로드 성공',
      file: req.files,
    };
  }
}
