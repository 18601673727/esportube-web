/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Categories
// ====================================================

export interface Categories_categories {
  __typename: "categories";
  id: number;
  name: string;
  chinese_name: string | null;
}

export interface Categories {
  /**
   * fetch data from the table: "categories"
   */
  categories: Categories_categories[];
}
