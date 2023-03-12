/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VideoSource
// ====================================================

export interface VideoSource_videos_by_pk {
  __typename: "videos";
  source_url: string;
}

export interface VideoSource {
  /**
   * fetch data from the table: "videos" using primary key columns
   */
  videos_by_pk: VideoSource_videos_by_pk | null;
}

export interface VideoSourceVariables {
  videoId: number;
}
