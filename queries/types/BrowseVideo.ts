/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BrowseVideo
// ====================================================

export interface BrowseVideo_update_videos_returning {
  __typename: "videos";
  id: number;
  title: string;
  price: any;
  thumbnail: any | null;
  viewer_count: number;
}

export interface BrowseVideo_update_videos {
  __typename: "videos_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: BrowseVideo_update_videos_returning[];
}

export interface BrowseVideo {
  /**
   * update data of the table: "videos"
   */
  update_videos: BrowseVideo_update_videos | null;
}

export interface BrowseVideoVariables {
  videoId: number;
}
