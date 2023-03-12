/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Video
// ====================================================

export interface Video_videos_by_pk {
  __typename: "videos";
  id: number;
  title: string;
  price: any;
}

export interface Video_configs_by_pk {
  __typename: "configs";
  value: string;
}

export interface Video {
  /**
   * fetch data from the table: "videos" using primary key columns
   */
  videos_by_pk: Video_videos_by_pk | null;
  /**
   * fetch data from the table: "configs" using primary key columns
   */
  configs_by_pk: Video_configs_by_pk | null;
}

export interface VideoVariables {
  videoId: number;
}
