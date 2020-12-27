import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException} from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { Validate } from 'class-validator'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, {metatype}: ArgumentMetadata){
    if(!metatype || this.toValidate(metatype)){
      return value
    }

    const object = plainToClass(metatype, value)
    const errors = await Validate(object)

    if(errors.length > 0){
      throw new BadRequestException('validation Faild')
    }
      return value
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object]
    return !types.includes(metatype)
  }
}


