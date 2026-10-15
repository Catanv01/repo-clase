import { Injectable } from "@nestjs/common";
import { OrderEntity } from "../entities/order.entity";

@Injectable()
export class OrderPriorityService {
  classify(order: OrderEntity): { priority: string; message: string } {
    if (order.status === "ready") {
      return {
        priority: "completed",
        message: "Order is ready",
      };
    }

    if (order.quantity >= 4) {
      return {
        priority: "high",
        message: "Prepare this order soon",
      };
    }

    if (order.quantity >= 2 && order.quantity <= 3) {
      return {
        priority: "medium",
        message: "Order has medium priority",
      };
    }

    return {
      priority: "normal",
      message: "Order has normal priority",
    };
  }
}
