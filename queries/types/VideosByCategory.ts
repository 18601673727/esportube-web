/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VideosByCategory
// ====================================================

export interface VideosByCategory_videos_aggregate_aggregate {
  __typename: "videos_aggregate_fields";
  count: number | null;
}

export interface VideosByCategory_videos_aggregate {
  __typename: "videos_aggregate";
  aggregate: VideosByCategory_videos_aggregate_aggregate | null;
}

export interface VideosByCategory_videos {
  __typename: "videos";
  id: number;
  title: string;
  price: any;
  thumb_url: string | null;
  viewer_count: number;
}

export interface VideosByCategory {
  /**
   * fetch aggregated fields from the table: "videos"
   */
  videos_aggregate: VideosByCategory_videos_aggregate;
  /**
   * fetch data from the table: "videos"
   */
  videos: VideosByCategory_videos[];
}

export interface VideosByCategoryVariables {
  categoryId: number;
  offset: number;
  limit: number;
}
