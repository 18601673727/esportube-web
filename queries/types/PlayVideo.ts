/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PlayVideo
// ====================================================

export interface PlayVideo_update_orders_returning_video {
  __typename: "videos";
  id: number;
  source_url: string;
}

export interface PlayVideo_update_orders_returning {
  __typename: "orders";
  created_at: any;
  last_used_at: any | null;
  /**
   * An object relationship
   */
  video: PlayVideo_update_orders_returning_video;
}

export interface PlayVideo_update_orders {
  __typename: "orders_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: PlayVideo_update_orders_returning[];
}

export interface PlayVideo {
  /**
   * update data of the table: "orders"
   */
  update_orders: PlayVideo_update_orders | null;
}

export interface PlayVideoVariables {
  neverUsed: boolean;
  orderNumber?: any | null;
}
