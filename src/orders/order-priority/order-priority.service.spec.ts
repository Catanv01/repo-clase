// src/orders/order-priority.service.spec.ts
import { OrderEntity } from "../entities/order.entity";
import { describe, it, expect } from "@jest/globals";
import { OrderPriorityService } from "./order-priority.service";

describe("OrderPriorityService", () => {
  const service = new OrderPriorityService();

  it("returns normal priority when order is pending and quantity is 1", () => {
    const orderMock = {
      quantity: 1,
      status: "pending",
    } as OrderEntity;

    expect(service.classify(orderMock)).toStrictEqual({
      priority: "normal",
      message: "Order has normal priority",
    });
  });

  it("returns medium priority when order is pending and quantity is 3", () => {
    const orderMock = {
      quantity: 3,
      status: "pending",
    } as OrderEntity;

    expect(service.classify(orderMock)).toStrictEqual({
      priority: "medium",
      message: "Order has medium priority",
    });
  });

  it("returns high priority when order is pending and quantity is 4", () => {
    const orderMock = {
      quantity: 4,
      status: "pending",
    } as OrderEntity;

    expect(service.classify(orderMock)).toStrictEqual({
      priority: "high",
      message: "Prepare this order soon",
    });
  });

  it("returns completed priority when order is ready regardless of quantity", () => {
    const orderMock = {
      quantity: 5,
      status: "ready",
    } as OrderEntity;

    expect(service.classify(orderMock)).toStrictEqual({
      priority: "completed",
      message: "Order is ready",
    });
  });
});
