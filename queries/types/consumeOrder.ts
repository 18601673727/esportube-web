/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: consumeOrder
// ====================================================

export interface consumeOrder_update_orders_returning_video {
  __typename: "videos";
  id: number;
  source_url: string;
}

export interface consumeOrder_update_orders_returning_payment {
  __typename: "payments";
  id: number;
  type: string;
}

export interface consumeOrder_update_orders_returning {
  __typename: "orders";
  id: any;
  created_at: any;
  last_used_at: any | null;
  /**
   * An object relationship
   */
  video: consumeOrder_update_orders_returning_video;
  /**
   * An object relationship
   */
  payment: consumeOrder_update_orders_returning_payment | null;
}

export interface consumeOrder_update_orders {
  __typename: "orders_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: consumeOrder_update_orders_returning[];
}

export interface consumeOrder {
  /**
   * update data of the table: "orders"
   */
  update_orders: consumeOrder_update_orders | null;
}

export interface consumeOrderVariables {
  id: any;
}
