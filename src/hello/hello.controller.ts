import { Controller, Get, HttpCode, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
@Controller()
export class HelloController {
  @Get()
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    return response.status(200).json({
      msg: 'Hello wordl',
    });
  }

  @Get('notfund')
  @HttpCode(404)
  notFoundPage() {
    return 'pagina no encontrada';
  }

  @Get('ticket/:num')
  getNumber(@Param('num',ParseIntPipe) num: number) {
    return num + 14;
  }
}
