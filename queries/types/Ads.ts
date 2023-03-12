/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Ads
// ====================================================

export interface Ads_ads {
  __typename: "ads";
  id: number;
  sort: number;
  link: string;
  page: string;
  pic_url: string;
  position: string;
}

export interface Ads {
  /**
   * fetch data from the table: "ads"
   */
  ads: Ads_ads[];
}

export interface AdsVariables {
  position: string;
  page: string;
}
