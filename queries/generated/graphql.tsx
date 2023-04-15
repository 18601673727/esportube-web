import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  money: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "ads" */
export type Ads = {
  __typename?: 'ads';
  click_count?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  link?: Maybe<Scalars['String']>;
  page: Scalars['String'];
  position: Scalars['String'];
  sort: Scalars['Int'];
  thumbnail: Scalars['String'];
};

/** aggregated selection of "ads" */
export type Ads_Aggregate = {
  __typename?: 'ads_aggregate';
  aggregate?: Maybe<Ads_Aggregate_Fields>;
  nodes: Array<Ads>;
};

/** aggregate fields of "ads" */
export type Ads_Aggregate_Fields = {
  __typename?: 'ads_aggregate_fields';
  avg?: Maybe<Ads_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ads_Max_Fields>;
  min?: Maybe<Ads_Min_Fields>;
  stddev?: Maybe<Ads_Stddev_Fields>;
  stddev_pop?: Maybe<Ads_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ads_Stddev_Samp_Fields>;
  sum?: Maybe<Ads_Sum_Fields>;
  var_pop?: Maybe<Ads_Var_Pop_Fields>;
  var_samp?: Maybe<Ads_Var_Samp_Fields>;
  variance?: Maybe<Ads_Variance_Fields>;
};


/** aggregate fields of "ads" */
export type Ads_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ads_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ads_Avg_Fields = {
  __typename?: 'ads_avg_fields';
  click_count?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ads". All fields are combined with a logical 'AND'. */
export type Ads_Bool_Exp = {
  _and?: InputMaybe<Array<Ads_Bool_Exp>>;
  _not?: InputMaybe<Ads_Bool_Exp>;
  _or?: InputMaybe<Array<Ads_Bool_Exp>>;
  click_count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  page?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Int_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ads" */
export enum Ads_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdsPkey = 'ads_pkey'
}

/** input type for incrementing numeric columns in table "ads" */
export type Ads_Inc_Input = {
  click_count?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ads" */
export type Ads_Insert_Input = {
  click_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  link?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ads_Max_Fields = {
  __typename?: 'ads_max_fields';
  click_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ads_Min_Fields = {
  __typename?: 'ads_min_fields';
  click_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  link?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ads" */
export type Ads_Mutation_Response = {
  __typename?: 'ads_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ads>;
};

/** on_conflict condition type for table "ads" */
export type Ads_On_Conflict = {
  constraint: Ads_Constraint;
  update_columns?: Array<Ads_Update_Column>;
  where?: InputMaybe<Ads_Bool_Exp>;
};

/** Ordering options when selecting data from "ads". */
export type Ads_Order_By = {
  click_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  page?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ads */
export type Ads_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ads" */
export enum Ads_Select_Column {
  /** column name */
  ClickCount = 'click_count',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  Page = 'page',
  /** column name */
  Position = 'position',
  /** column name */
  Sort = 'sort',
  /** column name */
  Thumbnail = 'thumbnail'
}

/** input type for updating data in table "ads" */
export type Ads_Set_Input = {
  click_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  link?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ads_Stddev_Fields = {
  __typename?: 'ads_stddev_fields';
  click_count?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ads_Stddev_Pop_Fields = {
  __typename?: 'ads_stddev_pop_fields';
  click_count?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ads_Stddev_Samp_Fields = {
  __typename?: 'ads_stddev_samp_fields';
  click_count?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "ads" */
export type Ads_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ads_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ads_Stream_Cursor_Value_Input = {
  click_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  link?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['Int']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Ads_Sum_Fields = {
  __typename?: 'ads_sum_fields';
  click_count?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

/** update columns of table "ads" */
export enum Ads_Update_Column {
  /** column name */
  ClickCount = 'click_count',
  /** column name */
  Id = 'id',
  /** column name */
  Link = 'link',
  /** column name */
  Page = 'page',
  /** column name */
  Position = 'position',
  /** column name */
  Sort = 'sort',
  /** column name */
  Thumbnail = 'thumbnail'
}

export type Ads_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ads_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ads_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ads_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ads_Var_Pop_Fields = {
  __typename?: 'ads_var_pop_fields';
  click_count?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ads_Var_Samp_Fields = {
  __typename?: 'ads_var_samp_fields';
  click_count?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ads_Variance_Fields = {
  __typename?: 'ads_variance_fields';
  click_count?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  chinese_name: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
};


/** columns and relationships of "categories" */
export type CategoriesVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  chinese_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  videos?: InputMaybe<Videos_Bool_Exp>;
  videos_aggregate?: InputMaybe<Videos_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "chinese_name" */
  CategoriesChineseNameKey = 'categories_chinese_name_key',
  /** unique or primary key constraint on columns "name" */
  CategoriesNameKey = 'categories_name_key',
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  chinese_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  videos?: InputMaybe<Videos_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  chinese_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  chinese_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  chinese_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  videos_aggregate?: InputMaybe<Videos_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  ChineseName = 'chinese_name',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  chinese_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  chinese_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  ChineseName = 'chinese_name',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "configs" */
export type Configs = {
  __typename?: 'configs';
  id: Scalars['Int'];
  key: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "configs" */
export type Configs_Aggregate = {
  __typename?: 'configs_aggregate';
  aggregate?: Maybe<Configs_Aggregate_Fields>;
  nodes: Array<Configs>;
};

/** aggregate fields of "configs" */
export type Configs_Aggregate_Fields = {
  __typename?: 'configs_aggregate_fields';
  avg?: Maybe<Configs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Configs_Max_Fields>;
  min?: Maybe<Configs_Min_Fields>;
  stddev?: Maybe<Configs_Stddev_Fields>;
  stddev_pop?: Maybe<Configs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Configs_Stddev_Samp_Fields>;
  sum?: Maybe<Configs_Sum_Fields>;
  var_pop?: Maybe<Configs_Var_Pop_Fields>;
  var_samp?: Maybe<Configs_Var_Samp_Fields>;
  variance?: Maybe<Configs_Variance_Fields>;
};


/** aggregate fields of "configs" */
export type Configs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Configs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Configs_Avg_Fields = {
  __typename?: 'configs_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "configs". All fields are combined with a logical 'AND'. */
export type Configs_Bool_Exp = {
  _and?: InputMaybe<Array<Configs_Bool_Exp>>;
  _not?: InputMaybe<Configs_Bool_Exp>;
  _or?: InputMaybe<Array<Configs_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "configs" */
export enum Configs_Constraint {
  /** unique or primary key constraint on columns "key" */
  ConfigsKeyKey = 'configs_key_key',
  /** unique or primary key constraint on columns "id" */
  ConfigsPkey = 'configs_pkey'
}

/** input type for incrementing numeric columns in table "configs" */
export type Configs_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "configs" */
export type Configs_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Configs_Max_Fields = {
  __typename?: 'configs_max_fields';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Configs_Min_Fields = {
  __typename?: 'configs_min_fields';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "configs" */
export type Configs_Mutation_Response = {
  __typename?: 'configs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Configs>;
};

/** on_conflict condition type for table "configs" */
export type Configs_On_Conflict = {
  constraint: Configs_Constraint;
  update_columns?: Array<Configs_Update_Column>;
  where?: InputMaybe<Configs_Bool_Exp>;
};

/** Ordering options when selecting data from "configs". */
export type Configs_Order_By = {
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: configs */
export type Configs_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "configs" */
export enum Configs_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "configs" */
export type Configs_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Configs_Stddev_Fields = {
  __typename?: 'configs_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Configs_Stddev_Pop_Fields = {
  __typename?: 'configs_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Configs_Stddev_Samp_Fields = {
  __typename?: 'configs_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "configs" */
export type Configs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Configs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Configs_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Configs_Sum_Fields = {
  __typename?: 'configs_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "configs" */
export enum Configs_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

export type Configs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Configs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Configs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Configs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Configs_Var_Pop_Fields = {
  __typename?: 'configs_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Configs_Var_Samp_Fields = {
  __typename?: 'configs_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Configs_Variance_Fields = {
  __typename?: 'configs_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "ads" */
  delete_ads?: Maybe<Ads_Mutation_Response>;
  /** delete single row from the table: "ads" */
  delete_ads_by_pk?: Maybe<Ads>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "configs" */
  delete_configs?: Maybe<Configs_Mutation_Response>;
  /** delete single row from the table: "configs" */
  delete_configs_by_pk?: Maybe<Configs>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>;
  /** delete single row from the table: "payments" */
  delete_payments_by_pk?: Maybe<Payments>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "videos" */
  delete_videos?: Maybe<Videos_Mutation_Response>;
  /** delete single row from the table: "videos" */
  delete_videos_by_pk?: Maybe<Videos>;
  /** insert data into the table: "ads" */
  insert_ads?: Maybe<Ads_Mutation_Response>;
  /** insert a single row into the table: "ads" */
  insert_ads_one?: Maybe<Ads>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "configs" */
  insert_configs?: Maybe<Configs_Mutation_Response>;
  /** insert a single row into the table: "configs" */
  insert_configs_one?: Maybe<Configs>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>;
  /** insert a single row into the table: "payments" */
  insert_payments_one?: Maybe<Payments>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "videos" */
  insert_videos?: Maybe<Videos_Mutation_Response>;
  /** insert a single row into the table: "videos" */
  insert_videos_one?: Maybe<Videos>;
  /** update data of the table: "ads" */
  update_ads?: Maybe<Ads_Mutation_Response>;
  /** update single row of the table: "ads" */
  update_ads_by_pk?: Maybe<Ads>;
  /** update multiples rows of table: "ads" */
  update_ads_many?: Maybe<Array<Maybe<Ads_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "configs" */
  update_configs?: Maybe<Configs_Mutation_Response>;
  /** update single row of the table: "configs" */
  update_configs_by_pk?: Maybe<Configs>;
  /** update multiples rows of table: "configs" */
  update_configs_many?: Maybe<Array<Maybe<Configs_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>;
  /** update single row of the table: "payments" */
  update_payments_by_pk?: Maybe<Payments>;
  /** update multiples rows of table: "payments" */
  update_payments_many?: Maybe<Array<Maybe<Payments_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "videos" */
  update_videos?: Maybe<Videos_Mutation_Response>;
  /** update single row of the table: "videos" */
  update_videos_by_pk?: Maybe<Videos>;
  /** update multiples rows of table: "videos" */
  update_videos_many?: Maybe<Array<Maybe<Videos_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AdsArgs = {
  where: Ads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ads_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ConfigsArgs = {
  where: Configs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Configs_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_VideosArgs = {
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Videos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AdsArgs = {
  objects: Array<Ads_Insert_Input>;
  on_conflict?: InputMaybe<Ads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ads_OneArgs = {
  object: Ads_Insert_Input;
  on_conflict?: InputMaybe<Ads_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConfigsArgs = {
  objects: Array<Configs_Insert_Input>;
  on_conflict?: InputMaybe<Configs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Configs_OneArgs = {
  object: Configs_Insert_Input;
  on_conflict?: InputMaybe<Configs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>;
  on_conflict?: InputMaybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
  object: Payments_Insert_Input;
  on_conflict?: InputMaybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VideosArgs = {
  objects: Array<Videos_Insert_Input>;
  on_conflict?: InputMaybe<Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Videos_OneArgs = {
  object: Videos_Insert_Input;
  on_conflict?: InputMaybe<Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdsArgs = {
  _inc?: InputMaybe<Ads_Inc_Input>;
  _set?: InputMaybe<Ads_Set_Input>;
  where: Ads_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ads_By_PkArgs = {
  _inc?: InputMaybe<Ads_Inc_Input>;
  _set?: InputMaybe<Ads_Set_Input>;
  pk_columns: Ads_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ads_ManyArgs = {
  updates: Array<Ads_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ConfigsArgs = {
  _inc?: InputMaybe<Configs_Inc_Input>;
  _set?: InputMaybe<Configs_Set_Input>;
  where: Configs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Configs_By_PkArgs = {
  _inc?: InputMaybe<Configs_Inc_Input>;
  _set?: InputMaybe<Configs_Set_Input>;
  pk_columns: Configs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Configs_ManyArgs = {
  updates: Array<Configs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: InputMaybe<Payments_Inc_Input>;
  _set?: InputMaybe<Payments_Set_Input>;
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
  _inc?: InputMaybe<Payments_Inc_Input>;
  _set?: InputMaybe<Payments_Set_Input>;
  pk_columns: Payments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payments_ManyArgs = {
  updates: Array<Payments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VideosArgs = {
  _inc?: InputMaybe<Videos_Inc_Input>;
  _set?: InputMaybe<Videos_Set_Input>;
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_By_PkArgs = {
  _inc?: InputMaybe<Videos_Inc_Input>;
  _set?: InputMaybe<Videos_Set_Input>;
  pk_columns: Videos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_ManyArgs = {
  updates: Array<Videos_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  available_playback_count: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_sub: Scalars['Boolean'];
  last_played_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  payment: Payments;
  payment_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  /** An object relationship */
  video?: Maybe<Videos>;
  video_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Orders_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Orders_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Bool_And = {
  arguments: Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orders_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  available_playback_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  available_playback_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_sub?: InputMaybe<Boolean_Comparison_Exp>;
  last_played_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  payment?: InputMaybe<Payments_Bool_Exp>;
  payment_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  video?: InputMaybe<Videos_Bool_Exp>;
  video_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  available_playback_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  available_playback_count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_sub?: InputMaybe<Scalars['Boolean']>;
  last_played_at?: InputMaybe<Scalars['timestamptz']>;
  payment?: InputMaybe<Payments_Obj_Rel_Insert_Input>;
  payment_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video?: InputMaybe<Videos_Obj_Rel_Insert_Input>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  available_playback_count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_played_at?: Maybe<Scalars['timestamptz']>;
  payment_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  video_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_played_at?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  available_playback_count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_played_at?: Maybe<Scalars['timestamptz']>;
  payment_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
  video_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_played_at?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_sub?: InputMaybe<Order_By>;
  last_played_at?: InputMaybe<Order_By>;
  payment?: InputMaybe<Payments_Order_By>;
  payment_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Videos_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  AvailablePlaybackCount = 'available_playback_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSub = 'is_sub',
  /** column name */
  LastPlayedAt = 'last_played_at',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

/** select "orders_aggregate_bool_exp_bool_and_arguments_columns" columns of table "orders" */
export enum Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsSub = 'is_sub'
}

/** select "orders_aggregate_bool_exp_bool_or_arguments_columns" columns of table "orders" */
export enum Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsSub = 'is_sub'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  available_playback_count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_sub?: InputMaybe<Scalars['Boolean']>;
  last_played_at?: InputMaybe<Scalars['timestamptz']>;
  payment_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  available_playback_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  available_playback_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  available_playback_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  available_playback_count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_sub?: InputMaybe<Scalars['Boolean']>;
  last_played_at?: InputMaybe<Scalars['timestamptz']>;
  payment_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  video_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  available_playback_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  AvailablePlaybackCount = 'available_playback_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsSub = 'is_sub',
  /** column name */
  LastPlayedAt = 'last_played_at',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VideoId = 'video_id'
}

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  available_playback_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  available_playback_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  available_playback_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  available_playback_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: 'payments';
  amount: Scalars['money'];
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  gateway?: Maybe<Scalars['String']>;
  gateway_order_number?: Maybe<Scalars['String']>;
  gateway_pay_number?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  refuned_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "payments" */
export type PaymentsOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "payments" */
export type PaymentsOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  __typename?: 'payments_aggregate';
  aggregate?: Maybe<Payments_Aggregate_Fields>;
  nodes: Array<Payments>;
};

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  __typename?: 'payments_aggregate_fields';
  avg?: Maybe<Payments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Payments_Max_Fields>;
  min?: Maybe<Payments_Min_Fields>;
  stddev?: Maybe<Payments_Stddev_Fields>;
  stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>;
  sum?: Maybe<Payments_Sum_Fields>;
  var_pop?: Maybe<Payments_Var_Pop_Fields>;
  var_samp?: Maybe<Payments_Var_Samp_Fields>;
  variance?: Maybe<Payments_Variance_Fields>;
};


/** aggregate fields of "payments" */
export type Payments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  __typename?: 'payments_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: InputMaybe<Array<Payments_Bool_Exp>>;
  _not?: InputMaybe<Payments_Bool_Exp>;
  _or?: InputMaybe<Array<Payments_Bool_Exp>>;
  amount?: InputMaybe<Money_Comparison_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  gateway?: InputMaybe<String_Comparison_Exp>;
  gateway_order_number?: InputMaybe<String_Comparison_Exp>;
  gateway_pay_number?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  refuned_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payments" */
export enum Payments_Constraint {
  /** unique or primary key constraint on columns "gateway_pay_number", "gateway", "gateway_order_number" */
  PaymentsGatewayGatewayPayNumberGatewayOrderNumberKey = 'payments_gateway_gateway_pay_number_gateway_order_number_key',
  /** unique or primary key constraint on columns "id" */
  PaymentsPkey = 'payments_pkey'
}

/** input type for incrementing numeric columns in table "payments" */
export type Payments_Inc_Input = {
  amount?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  amount?: InputMaybe<Scalars['money']>;
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  gateway?: InputMaybe<Scalars['String']>;
  gateway_order_number?: InputMaybe<Scalars['String']>;
  gateway_pay_number?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  refuned_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Payments_Max_Fields = {
  __typename?: 'payments_max_fields';
  amount?: Maybe<Scalars['money']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gateway?: Maybe<Scalars['String']>;
  gateway_order_number?: Maybe<Scalars['String']>;
  gateway_pay_number?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  refuned_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Payments_Min_Fields = {
  __typename?: 'payments_min_fields';
  amount?: Maybe<Scalars['money']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gateway?: Maybe<Scalars['String']>;
  gateway_order_number?: Maybe<Scalars['String']>;
  gateway_pay_number?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  refuned_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  __typename?: 'payments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payments>;
};

/** input type for inserting object relation for remote table "payments" */
export type Payments_Obj_Rel_Insert_Input = {
  data: Payments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payments_On_Conflict>;
};

/** on_conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint;
  update_columns?: Array<Payments_Update_Column>;
  where?: InputMaybe<Payments_Bool_Exp>;
};

/** Ordering options when selecting data from "payments". */
export type Payments_Order_By = {
  amount?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  gateway?: InputMaybe<Order_By>;
  gateway_order_number?: InputMaybe<Order_By>;
  gateway_pay_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  refuned_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payments */
export type Payments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "payments" */
export enum Payments_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Gateway = 'gateway',
  /** column name */
  GatewayOrderNumber = 'gateway_order_number',
  /** column name */
  GatewayPayNumber = 'gateway_pay_number',
  /** column name */
  Id = 'id',
  /** column name */
  RefunedAt = 'refuned_at'
}

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  amount?: InputMaybe<Scalars['money']>;
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  gateway?: InputMaybe<Scalars['String']>;
  gateway_order_number?: InputMaybe<Scalars['String']>;
  gateway_pay_number?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  refuned_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  __typename?: 'payments_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  __typename?: 'payments_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  __typename?: 'payments_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "payments" */
export type Payments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payments_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['money']>;
  completed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  gateway?: InputMaybe<Scalars['String']>;
  gateway_order_number?: InputMaybe<Scalars['String']>;
  gateway_pay_number?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  refuned_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  __typename?: 'payments_sum_fields';
  amount?: Maybe<Scalars['money']>;
};

/** update columns of table "payments" */
export enum Payments_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Gateway = 'gateway',
  /** column name */
  GatewayOrderNumber = 'gateway_order_number',
  /** column name */
  GatewayPayNumber = 'gateway_pay_number',
  /** column name */
  Id = 'id',
  /** column name */
  RefunedAt = 'refuned_at'
}

export type Payments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  __typename?: 'payments_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  __typename?: 'payments_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  __typename?: 'payments_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ads" */
  ads: Array<Ads>;
  /** fetch aggregated fields from the table: "ads" */
  ads_aggregate: Ads_Aggregate;
  /** fetch data from the table: "ads" using primary key columns */
  ads_by_pk?: Maybe<Ads>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "configs" */
  configs: Array<Configs>;
  /** fetch aggregated fields from the table: "configs" */
  configs_aggregate: Configs_Aggregate;
  /** fetch data from the table: "configs" using primary key columns */
  configs_by_pk?: Maybe<Configs>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};


export type Query_RootAdsArgs = {
  distinct_on?: InputMaybe<Array<Ads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ads_Order_By>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Query_RootAds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ads_Order_By>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Query_RootAds_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootConfigsArgs = {
  distinct_on?: InputMaybe<Array<Configs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Configs_Order_By>>;
  where?: InputMaybe<Configs_Bool_Exp>;
};


export type Query_RootConfigs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Configs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Configs_Order_By>>;
  where?: InputMaybe<Configs_Bool_Exp>;
};


export type Query_RootConfigs_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Query_RootPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Query_RootPayments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "ads" */
  ads: Array<Ads>;
  /** fetch aggregated fields from the table: "ads" */
  ads_aggregate: Ads_Aggregate;
  /** fetch data from the table: "ads" using primary key columns */
  ads_by_pk?: Maybe<Ads>;
  /** fetch data from the table in a streaming manner: "ads" */
  ads_stream: Array<Ads>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "configs" */
  configs: Array<Configs>;
  /** fetch aggregated fields from the table: "configs" */
  configs_aggregate: Configs_Aggregate;
  /** fetch data from the table: "configs" using primary key columns */
  configs_by_pk?: Maybe<Configs>;
  /** fetch data from the table in a streaming manner: "configs" */
  configs_stream: Array<Configs>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table in a streaming manner: "payments" */
  payments_stream: Array<Payments>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
  /** fetch data from the table in a streaming manner: "videos" */
  videos_stream: Array<Videos>;
};


export type Subscription_RootAdsArgs = {
  distinct_on?: InputMaybe<Array<Ads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ads_Order_By>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Subscription_RootAds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ads_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ads_Order_By>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Subscription_RootAds_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAds_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ads_Stream_Cursor_Input>>;
  where?: InputMaybe<Ads_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootConfigsArgs = {
  distinct_on?: InputMaybe<Array<Configs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Configs_Order_By>>;
  where?: InputMaybe<Configs_Bool_Exp>;
};


export type Subscription_RootConfigs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Configs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Configs_Order_By>>;
  where?: InputMaybe<Configs_Bool_Exp>;
};


export type Subscription_RootConfigs_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootConfigs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Configs_Stream_Cursor_Input>>;
  where?: InputMaybe<Configs_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPayments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Payments_Stream_Cursor_Input>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVideos_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Videos_Stream_Cursor_Input>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_admin: Scalars['Boolean'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['bigint']>;
  wechat_user_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "users" */
export type UsersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<Bigint_Comparison_Exp>;
  wechat_user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "wechat_user_id" */
  UsersWechatUserIdKey = 'users_wechat_user_id_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  phone?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['bigint']>;
  wechat_user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['bigint']>;
  wechat_user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['bigint']>;
  wechat_user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  wechat_user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  WechatUserId = 'wechat_user_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['bigint']>;
  wechat_user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['bigint']>;
  wechat_user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  phone?: Maybe<Scalars['bigint']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  WechatUserId = 'wechat_user_id'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  phone?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: 'videos';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  is_draft: Scalars['Boolean'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  single_play_cost: Scalars['money'];
  source_url: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  total_playback_count: Scalars['Int'];
  view_count: Scalars['Int'];
};


/** columns and relationships of "videos" */
export type VideosOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "videos" */
export type VideosOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "videos" */
export type Videos_Aggregate = {
  __typename?: 'videos_aggregate';
  aggregate?: Maybe<Videos_Aggregate_Fields>;
  nodes: Array<Videos>;
};

export type Videos_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Videos_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Videos_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Videos_Aggregate_Bool_Exp_Count>;
};

export type Videos_Aggregate_Bool_Exp_Bool_And = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Videos_Select_Column_Videos_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Videos_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Videos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Videos_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "videos" */
export type Videos_Aggregate_Fields = {
  __typename?: 'videos_aggregate_fields';
  avg?: Maybe<Videos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Videos_Max_Fields>;
  min?: Maybe<Videos_Min_Fields>;
  stddev?: Maybe<Videos_Stddev_Fields>;
  stddev_pop?: Maybe<Videos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Videos_Stddev_Samp_Fields>;
  sum?: Maybe<Videos_Sum_Fields>;
  var_pop?: Maybe<Videos_Var_Pop_Fields>;
  var_samp?: Maybe<Videos_Var_Samp_Fields>;
  variance?: Maybe<Videos_Variance_Fields>;
};


/** aggregate fields of "videos" */
export type Videos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Videos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "videos" */
export type Videos_Aggregate_Order_By = {
  avg?: InputMaybe<Videos_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Videos_Max_Order_By>;
  min?: InputMaybe<Videos_Min_Order_By>;
  stddev?: InputMaybe<Videos_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Videos_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Videos_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Videos_Sum_Order_By>;
  var_pop?: InputMaybe<Videos_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Videos_Var_Samp_Order_By>;
  variance?: InputMaybe<Videos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "videos" */
export type Videos_Arr_Rel_Insert_Input = {
  data: Array<Videos_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Videos_On_Conflict>;
};

/** aggregate avg on columns */
export type Videos_Avg_Fields = {
  __typename?: 'videos_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  single_play_cost?: Maybe<Scalars['Float']>;
  total_playback_count?: Maybe<Scalars['Float']>;
  view_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "videos" */
export type Videos_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: InputMaybe<Array<Videos_Bool_Exp>>;
  _not?: InputMaybe<Videos_Bool_Exp>;
  _or?: InputMaybe<Array<Videos_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_draft?: InputMaybe<Boolean_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  single_play_cost?: InputMaybe<Money_Comparison_Exp>;
  source_url?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  total_playback_count?: InputMaybe<Int_Comparison_Exp>;
  view_count?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "videos" */
export enum Videos_Constraint {
  /** unique or primary key constraint on columns "id" */
  VideosPkey = 'videos_pkey',
  /** unique or primary key constraint on columns "title" */
  VideosTitleKey = 'videos_title_key'
}

/** input type for incrementing numeric columns in table "videos" */
export type Videos_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  single_play_cost?: InputMaybe<Scalars['money']>;
  total_playback_count?: InputMaybe<Scalars['Int']>;
  view_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "videos" */
export type Videos_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_draft?: InputMaybe<Scalars['Boolean']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  single_play_cost?: InputMaybe<Scalars['money']>;
  source_url?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  total_playback_count?: InputMaybe<Scalars['Int']>;
  view_count?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: 'videos_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  single_play_cost?: Maybe<Scalars['money']>;
  source_url?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total_playback_count?: Maybe<Scalars['Int']>;
  view_count?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "videos" */
export type Videos_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  source_url?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: 'videos_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  single_play_cost?: Maybe<Scalars['money']>;
  source_url?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total_playback_count?: Maybe<Scalars['Int']>;
  view_count?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "videos" */
export type Videos_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  source_url?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "videos" */
export type Videos_Mutation_Response = {
  __typename?: 'videos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Videos>;
};

/** input type for inserting object relation for remote table "videos" */
export type Videos_Obj_Rel_Insert_Input = {
  data: Videos_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Videos_On_Conflict>;
};

/** on_conflict condition type for table "videos" */
export type Videos_On_Conflict = {
  constraint: Videos_Constraint;
  update_columns?: Array<Videos_Update_Column>;
  where?: InputMaybe<Videos_Bool_Exp>;
};

/** Ordering options when selecting data from "videos". */
export type Videos_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_draft?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  source_url?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: videos */
export type Videos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "videos" */
export enum Videos_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDraft = 'is_draft',
  /** column name */
  SinglePlayCost = 'single_play_cost',
  /** column name */
  SourceUrl = 'source_url',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  Title = 'title',
  /** column name */
  TotalPlaybackCount = 'total_playback_count',
  /** column name */
  ViewCount = 'view_count'
}

/** select "videos_aggregate_bool_exp_bool_and_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDraft = 'is_draft'
}

/** select "videos_aggregate_bool_exp_bool_or_arguments_columns" columns of table "videos" */
export enum Videos_Select_Column_Videos_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDraft = 'is_draft'
}

/** input type for updating data in table "videos" */
export type Videos_Set_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_draft?: InputMaybe<Scalars['Boolean']>;
  single_play_cost?: InputMaybe<Scalars['money']>;
  source_url?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  total_playback_count?: InputMaybe<Scalars['Int']>;
  view_count?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Videos_Stddev_Fields = {
  __typename?: 'videos_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  single_play_cost?: Maybe<Scalars['Float']>;
  total_playback_count?: Maybe<Scalars['Float']>;
  view_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "videos" */
export type Videos_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Videos_Stddev_Pop_Fields = {
  __typename?: 'videos_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  single_play_cost?: Maybe<Scalars['Float']>;
  total_playback_count?: Maybe<Scalars['Float']>;
  view_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "videos" */
export type Videos_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Videos_Stddev_Samp_Fields = {
  __typename?: 'videos_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  single_play_cost?: Maybe<Scalars['Float']>;
  total_playback_count?: Maybe<Scalars['Float']>;
  view_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "videos" */
export type Videos_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "videos" */
export type Videos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Videos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Videos_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_draft?: InputMaybe<Scalars['Boolean']>;
  single_play_cost?: InputMaybe<Scalars['money']>;
  source_url?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  total_playback_count?: InputMaybe<Scalars['Int']>;
  view_count?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Videos_Sum_Fields = {
  __typename?: 'videos_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  single_play_cost?: Maybe<Scalars['money']>;
  total_playback_count?: Maybe<Scalars['Int']>;
  view_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "videos" */
export type Videos_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** update columns of table "videos" */
export enum Videos_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDraft = 'is_draft',
  /** column name */
  SinglePlayCost = 'single_play_cost',
  /** column name */
  SourceUrl = 'source_url',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  Title = 'title',
  /** column name */
  TotalPlaybackCount = 'total_playback_count',
  /** column name */
  ViewCount = 'view_count'
}

export type Videos_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Videos_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Videos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Videos_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Videos_Var_Pop_Fields = {
  __typename?: 'videos_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  single_play_cost?: Maybe<Scalars['Float']>;
  total_playback_count?: Maybe<Scalars['Float']>;
  view_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "videos" */
export type Videos_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Videos_Var_Samp_Fields = {
  __typename?: 'videos_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  single_play_cost?: Maybe<Scalars['Float']>;
  total_playback_count?: Maybe<Scalars['Float']>;
  view_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "videos" */
export type Videos_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Videos_Variance_Fields = {
  __typename?: 'videos_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  single_play_cost?: Maybe<Scalars['Float']>;
  total_playback_count?: Maybe<Scalars['Float']>;
  view_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "videos" */
export type Videos_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  single_play_cost?: InputMaybe<Order_By>;
  total_playback_count?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

export type AdsQueryVariables = Exact<{
  position: Scalars['String'];
  page: Scalars['String'];
}>;


export type AdsQuery = { __typename?: 'query_root', ads: Array<{ __typename?: 'ads', id: any, sort: number, link?: string | null, page: string, position: string, thumbnail: string }> };

export type AfterPayMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type AfterPayMutation = { __typename?: 'mutation_root', update_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', id: any, created_at: any, last_played_at?: any | null, is_sub: boolean, video?: { __typename?: 'videos', id: any, source_url: string } | null, payment: { __typename?: 'payments', id: any } }> } | null };

export type BrowseVideoMutationVariables = Exact<{
  videoId: Scalars['uuid'];
}>;


export type BrowseVideoMutation = { __typename?: 'mutation_root', update_videos?: { __typename?: 'videos_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'videos', id: any, title: string, thumbnail?: string | null, single_play_cost: any, total_playback_count: number }> } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: number, name: string, chinese_name: string }> };

export type NewOrderMutationVariables = Exact<{
  videoId: Scalars['uuid'];
  userId: Scalars['uuid'];
  isSub: Scalars['Boolean'];
  amount: Scalars['money'];
}>;


export type NewOrderMutation = { __typename?: 'mutation_root', insert_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', id: any }> } | null };

export type PlayVideoMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['uuid']>;
  videoId?: InputMaybe<Scalars['uuid']>;
}>;


export type PlayVideoMutation = { __typename?: 'mutation_root', update_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', video?: { __typename?: 'videos', source_url: string } | null }> } | null };

export type VideoQueryVariables = Exact<{
  videoId: Scalars['uuid'];
}>;


export type VideoQuery = { __typename?: 'query_root', videos_by_pk?: { __typename?: 'videos', id: any, title: string, single_play_cost: any, thumbnail?: string | null, total_playback_count: number } | null };

export type VideoSourceQueryVariables = Exact<{
  videoId: Scalars['uuid'];
}>;


export type VideoSourceQuery = { __typename?: 'query_root', videos_by_pk?: { __typename?: 'videos', source_url: string } | null };

export type VideosQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['Int']>;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type VideosQuery = { __typename?: 'query_root', videos_aggregate: { __typename?: 'videos_aggregate', aggregate?: { __typename?: 'videos_aggregate_fields', count: number } | null }, videos: Array<{ __typename?: 'videos', id: any, title: string, single_play_cost: any, view_count: number, thumbnail?: string | null }> };


export const AdsDocument = gql`
    query Ads($position: String!, $page: String!) {
  ads(where: {position: {_eq: $position}, page: {_eq: $page}}) {
    id
    sort
    link
    page
    position
    thumbnail
  }
}
    `;

/**
 * __useAdsQuery__
 *
 * To run a query within a React component, call `useAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdsQuery({
 *   variables: {
 *      position: // value for 'position'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAdsQuery(baseOptions: Apollo.QueryHookOptions<AdsQuery, AdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdsQuery, AdsQueryVariables>(AdsDocument, options);
      }
export function useAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdsQuery, AdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdsQuery, AdsQueryVariables>(AdsDocument, options);
        }
export type AdsQueryHookResult = ReturnType<typeof useAdsQuery>;
export type AdsLazyQueryHookResult = ReturnType<typeof useAdsLazyQuery>;
export type AdsQueryResult = Apollo.QueryResult<AdsQuery, AdsQueryVariables>;
export const AfterPayDocument = gql`
    mutation AfterPay($id: uuid!) {
  update_orders(where: {id: {_eq: $id}}, _set: {last_played_at: "now()"}) {
    returning {
      id
      created_at
      last_played_at
      is_sub
      video {
        id
        source_url
      }
      payment {
        id
      }
    }
  }
}
    `;
export type AfterPayMutationFn = Apollo.MutationFunction<AfterPayMutation, AfterPayMutationVariables>;

/**
 * __useAfterPayMutation__
 *
 * To run a mutation, you first call `useAfterPayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAfterPayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [afterPayMutation, { data, loading, error }] = useAfterPayMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAfterPayMutation(baseOptions?: Apollo.MutationHookOptions<AfterPayMutation, AfterPayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AfterPayMutation, AfterPayMutationVariables>(AfterPayDocument, options);
      }
export type AfterPayMutationHookResult = ReturnType<typeof useAfterPayMutation>;
export type AfterPayMutationResult = Apollo.MutationResult<AfterPayMutation>;
export type AfterPayMutationOptions = Apollo.BaseMutationOptions<AfterPayMutation, AfterPayMutationVariables>;
export const BrowseVideoDocument = gql`
    mutation BrowseVideo($videoId: uuid!) {
  update_videos(where: {id: {_eq: $videoId}}, _inc: {view_count: 1}) {
    affected_rows
    returning {
      id
      title
      thumbnail
      single_play_cost
      total_playback_count
    }
  }
}
    `;
export type BrowseVideoMutationFn = Apollo.MutationFunction<BrowseVideoMutation, BrowseVideoMutationVariables>;

/**
 * __useBrowseVideoMutation__
 *
 * To run a mutation, you first call `useBrowseVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBrowseVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [browseVideoMutation, { data, loading, error }] = useBrowseVideoMutation({
 *   variables: {
 *      videoId: // value for 'videoId'
 *   },
 * });
 */
export function useBrowseVideoMutation(baseOptions?: Apollo.MutationHookOptions<BrowseVideoMutation, BrowseVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BrowseVideoMutation, BrowseVideoMutationVariables>(BrowseVideoDocument, options);
      }
export type BrowseVideoMutationHookResult = ReturnType<typeof useBrowseVideoMutation>;
export type BrowseVideoMutationResult = Apollo.MutationResult<BrowseVideoMutation>;
export type BrowseVideoMutationOptions = Apollo.BaseMutationOptions<BrowseVideoMutation, BrowseVideoMutationVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories(order_by: {id: asc}) {
    id
    name
    chinese_name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const NewOrderDocument = gql`
    mutation NewOrder($videoId: uuid!, $userId: uuid!, $isSub: Boolean!, $amount: money!) {
  insert_orders(
    objects: {payment: {data: {amount: $amount}}, is_sub: $isSub, video_id: $videoId, user_id: $userId}
  ) {
    returning {
      id
    }
  }
}
    `;
export type NewOrderMutationFn = Apollo.MutationFunction<NewOrderMutation, NewOrderMutationVariables>;

/**
 * __useNewOrderMutation__
 *
 * To run a mutation, you first call `useNewOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newOrderMutation, { data, loading, error }] = useNewOrderMutation({
 *   variables: {
 *      videoId: // value for 'videoId'
 *      userId: // value for 'userId'
 *      isSub: // value for 'isSub'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useNewOrderMutation(baseOptions?: Apollo.MutationHookOptions<NewOrderMutation, NewOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewOrderMutation, NewOrderMutationVariables>(NewOrderDocument, options);
      }
export type NewOrderMutationHookResult = ReturnType<typeof useNewOrderMutation>;
export type NewOrderMutationResult = Apollo.MutationResult<NewOrderMutation>;
export type NewOrderMutationOptions = Apollo.BaseMutationOptions<NewOrderMutation, NewOrderMutationVariables>;
export const PlayVideoDocument = gql`
    mutation PlayVideo($userId: uuid, $videoId: uuid) {
  update_orders(
    where: {is_sub: {_eq: false}, available_playback_count: {_gt: 1}, user_id: {_eq: $userId}, video_id: {_eq: $videoId}, _or: {is_sub: {_eq: true}, user_id: {_eq: $userId}}}
    _set: {last_played_at: "now()"}
    _inc: {available_playback_count: -1}
  ) {
    returning {
      video {
        source_url
      }
    }
  }
}
    `;
export type PlayVideoMutationFn = Apollo.MutationFunction<PlayVideoMutation, PlayVideoMutationVariables>;

/**
 * __usePlayVideoMutation__
 *
 * To run a mutation, you first call `usePlayVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlayVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [playVideoMutation, { data, loading, error }] = usePlayVideoMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      videoId: // value for 'videoId'
 *   },
 * });
 */
export function usePlayVideoMutation(baseOptions?: Apollo.MutationHookOptions<PlayVideoMutation, PlayVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlayVideoMutation, PlayVideoMutationVariables>(PlayVideoDocument, options);
      }
export type PlayVideoMutationHookResult = ReturnType<typeof usePlayVideoMutation>;
export type PlayVideoMutationResult = Apollo.MutationResult<PlayVideoMutation>;
export type PlayVideoMutationOptions = Apollo.BaseMutationOptions<PlayVideoMutation, PlayVideoMutationVariables>;
export const VideoDocument = gql`
    query Video($videoId: uuid!) {
  videos_by_pk(id: $videoId) {
    id
    title
    single_play_cost
    thumbnail
    total_playback_count
  }
}
    `;

/**
 * __useVideoQuery__
 *
 * To run a query within a React component, call `useVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoQuery({
 *   variables: {
 *      videoId: // value for 'videoId'
 *   },
 * });
 */
export function useVideoQuery(baseOptions: Apollo.QueryHookOptions<VideoQuery, VideoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideoQuery, VideoQueryVariables>(VideoDocument, options);
      }
export function useVideoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoQuery, VideoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideoQuery, VideoQueryVariables>(VideoDocument, options);
        }
export type VideoQueryHookResult = ReturnType<typeof useVideoQuery>;
export type VideoLazyQueryHookResult = ReturnType<typeof useVideoLazyQuery>;
export type VideoQueryResult = Apollo.QueryResult<VideoQuery, VideoQueryVariables>;
export const VideoSourceDocument = gql`
    query VideoSource($videoId: uuid!) {
  videos_by_pk(id: $videoId) {
    source_url
  }
}
    `;

/**
 * __useVideoSourceQuery__
 *
 * To run a query within a React component, call `useVideoSourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoSourceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoSourceQuery({
 *   variables: {
 *      videoId: // value for 'videoId'
 *   },
 * });
 */
export function useVideoSourceQuery(baseOptions: Apollo.QueryHookOptions<VideoSourceQuery, VideoSourceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideoSourceQuery, VideoSourceQueryVariables>(VideoSourceDocument, options);
      }
export function useVideoSourceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoSourceQuery, VideoSourceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideoSourceQuery, VideoSourceQueryVariables>(VideoSourceDocument, options);
        }
export type VideoSourceQueryHookResult = ReturnType<typeof useVideoSourceQuery>;
export type VideoSourceLazyQueryHookResult = ReturnType<typeof useVideoSourceLazyQuery>;
export type VideoSourceQueryResult = Apollo.QueryResult<VideoSourceQuery, VideoSourceQueryVariables>;
export const VideosDocument = gql`
    query Videos($categoryId: Int, $offset: Int!, $limit: Int!) {
  videos_aggregate(where: {category_id: {_eq: $categoryId}}) {
    aggregate {
      count
    }
  }
  videos(
    where: {category_id: {_eq: $categoryId}}
    order_by: {id: desc}
    offset: $offset
    limit: $limit
  ) {
    id
    title
    single_play_cost
    view_count
    thumbnail
  }
}
    `;

/**
 * __useVideosQuery__
 *
 * To run a query within a React component, call `useVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useVideosQuery(baseOptions: Apollo.QueryHookOptions<VideosQuery, VideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
      }
export function useVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosQuery, VideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideosQuery, VideosQueryVariables>(VideosDocument, options);
        }
export type VideosQueryHookResult = ReturnType<typeof useVideosQuery>;
export type VideosLazyQueryHookResult = ReturnType<typeof useVideosLazyQuery>;
export type VideosQueryResult = Apollo.QueryResult<VideosQuery, VideosQueryVariables>;