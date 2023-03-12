/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: NewOrder
// ====================================================

export interface NewOrder_insert_orders_returning {
  __typename: "orders";
  id: any;
}

export interface NewOrder_insert_orders {
  __typename: "orders_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: NewOrder_insert_orders_returning[];
}

export interface NewOrder {
  /**
   * insert data into the table: "orders"
   */
  insert_orders: NewOrder_insert_orders | null;
}

export interface NewOrderVariables {
  videoId: number;
  type: string;
  amount: any;
}
