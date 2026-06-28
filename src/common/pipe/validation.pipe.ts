
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

import { ZodType } from 'zod';
@Injectable()
export class CustomValidationPipe implements PipeTransform {
    constructor(private schema: ZodType){}
  transform(value: any, metadata: ArgumentMetadata) {
    const result = this.schema.safeParse(value)
    if(!result.success){
        throw new BadRequestException({message: "validation error" ,error: result.error})
    }
    return value;
  }
}
