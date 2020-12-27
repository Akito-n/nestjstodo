//もともとあるけど、検証のために再確認

import { ArgumentMetadata, BadRequestException, PipeTransform, Injectable} from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number>{
  transform(value: string, metadata: ArgumentMetadata): number{
    const val = parseInt(value, 10)
    if(isNaN(val)) {
      throw new BadRequestException('validatiin falid')
    }

    return val
  }
}
