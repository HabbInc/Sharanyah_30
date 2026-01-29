import { Body,Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';
@Controller('car')
export class CarController {
    constructor(private CarService: CarService){}

    @Get()
    public getCars(){
      return this.CarService.getCars();

    }
    @Post()
    public postCar(@Body() car: CarDto){
        return this.CarService.postCar(car);
    }
    @Get(':id')
    public getCarById(@Param('id') id:number){
        return this.CarService.getCarById(id);
    }

    
    @Delete()
    public deleteCarById(@Param('id')id: number){
        this.CarService.deleteCarById(id);

    }
    @Put(':id')
    public putCarById(@Param('id')id: number, @Query() query ){
        const propertyName=query.property_name;
        const propertyValue=query.property_value;
        return this.CarService.putCarById(id,propertyName,propertyValue);
    }

    }


