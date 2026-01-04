import { IsOptional, IsString, IsInt, Min, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQueryDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  limit?: number = 50;
}

export class SearchQueryDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  search?: string;
}

export class GroupsQueryDto extends SearchQueryDto {
  @IsOptional()
  @IsIn(['all', 'drawn', 'pending'])
  status?: 'all' | 'drawn' | 'pending' = 'all';
}

export class DrawsQueryDto extends SearchQueryDto {
  @IsOptional()
  @IsIn(['all', 'notified', 'pending'])
  status?: 'all' | 'notified' | 'pending' = 'all';
}

export class RegistrationChartQueryDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  days?: number = 7;
}

export class LimitQueryDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  limit?: number = 10;
}
