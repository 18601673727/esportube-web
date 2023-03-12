/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Videos
// ====================================================

export interface Videos_videos_aggregate_aggregate {
  __typename: "videos_aggregate_fields";
  count: number | null;
}

export interface Videos_videos_aggregate {
  __typename: "videos_aggregate";
  aggregate: Videos_videos_aggregate_aggregate | null;
}

export interface Videos_videos {
  __typename: "videos";
  id: number;
  title: string;
  price: any;
  viewer_count: number;
  thumbnail: any | null;
}

export interface Videos {
  /**
   * fetch aggregated fields from the table: "videos"
   */
  videos_aggregate: Videos_videos_aggregate;
  /**
   * fetch data from the table: "videos"
   */
  videos: Videos_videos[];
}

export interface VideosVariables {
  categoryId?: number | null;
  offset: number;
  limit: number;
}
