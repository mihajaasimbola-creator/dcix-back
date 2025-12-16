import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import chalk from 'chalk';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;
    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: (data) => {
          const res = context.switchToHttp().getResponse();
          const statusCode = res.statusCode;

          let logColor = chalk.white;
          if (statusCode >= 500) logColor = chalk.red;
          else if (statusCode === 401) logColor = chalk.red;
          else if (statusCode === 404) logColor = chalk.yellow;
          else if (statusCode === 200 || statusCode === 201)
            logColor = chalk.green;

          console.log(
            logColor(
              `[${method}] ${url} -> ${statusCode} [${Date.now() - now}ms]`,
              data,
            ),
          );
        },
        error: (err) => {
          console.log(chalk.red(`[${method}] ${url} -> ERROR`, err));
        },
      }),
    );
  }
}
