import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class ContentController {
  constructor() {}

  @Get()
  root(@Res() res: Response) {
    console.log(`__dirname: ${__dirname}`);
    console.log(`joined __dirname: ${join('..', 'public/index.hbs')}`);

    return res.render('index.hbs', {});
  }
}
