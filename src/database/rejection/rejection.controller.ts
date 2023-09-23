import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Rejection, RejectionDocument } from './rejection.schema';
import { RejectionService } from './rejection.service';
import { RejectionDto } from './rejection.types';

@Controller('rejection')
export class RejectionController {
  @Get()
  findAllProducts(): Promise<RejectionDocument[]> {
    return this.rejectionService.getRejections();
  }

  @Post()
  addPart(@Body() rejectionDto: RejectionDto): Promise<RejectionDocument> {
    return this.rejectionService.addRejection(rejectionDto);
  }

  @Put()
  updatePart(
    @Body() rejectionDto: RejectionDocument,
  ): Promise<RejectionDocument> {
    return this.rejectionService.editRejection(rejectionDto);
  }

  @Delete()
  deletePart(@Body() body: RejectionDocument): Promise<Rejection> {
    return this.rejectionService.deleteRejection(body);
  }

  constructor(private rejectionService: RejectionService) {}
}
