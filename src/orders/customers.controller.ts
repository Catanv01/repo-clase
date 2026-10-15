import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { OrdersService } from "./orders.service";

@Controller("customers")
export class CustomersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createCustomerDto: CreateCustomerDto,
  ) {
    return this.ordersService.createCustomer(createCustomerDto);
  }
}
