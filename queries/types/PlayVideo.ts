/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PlayVideo
// ====================================================

export interface PlayVideo_videos {
  __typename: "videos";
  source_url: string | null;
}

export interface PlayVideo {
  /**
   * fetch data from the table: "videos"
   */
  videos: PlayVideo_videos[];
}

export interface PlayVideoVariables {
  videoId: number;
}
