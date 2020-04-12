// import { writingStatus } from './../post.model';
import { writingStatus } from '../post.write.status';

import { PipeTransform, BadRequestException } from '@nestjs/common';

export class WriteStatusValidationPipe implements PipeTransform {
  readonly statusArr = [
    writingStatus.END,
    writingStatus.ING,
    writingStatus.NotStarted,
  ];
  // 实现一个方法
  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatus(value)) {
      throw new BadRequestException(`写作的状态不对`);
    }
    return value;
  }

  //  定义是否是三种状态中的一种
  private isStatus(status: any) {
    const idx = this.statusArr.indexOf(status);
    return idx != -1;
  }
}
