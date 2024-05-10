import { Mapper, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TestDto, TestListDto } from 'src/classes/test.dto';
import { TestListViewModel, TestViewModel } from 'src/classes/test.model';

@Injectable()
export class TestProfile extends AutomapperProfile {
  public constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  public override get profile() {
    return (mapper: Mapper): void => {
      createMap(mapper, TestDto, TestViewModel);
      createMap(mapper, TestListDto, TestListViewModel);
    };
  }
}
