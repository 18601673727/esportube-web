import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
};

/** columns and relationships of "ads" */
export type Ads = {
  __typename?: "ads";
  click_count: Scalars["Int"];
  id: Scalars["Int"];
  link: Scalars["String"];
  page: Scalars["String"];
  pic_url: Scalars["String"];
  position: Scalars["String"];
  sort: Scalars["Int"];
};

/** aggregated selection of "ads" */
export type Ads_Aggregate = {
  __typename?: "ads_aggregate";
  aggregate?: Maybe<Ads_Aggregate_Fields>;
  nodes: Array<Ads>;
};

/** aggregate fields of "ads" */
export type Ads_Aggregate_Fields = {
  __typename?: "ads_aggregate_fields";
  avg?: Maybe<Ads_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
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
  columns?: Maybe<Array<Ads_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "ads" */
export type Ads_Aggregate_Order_By = {
  avg?: Maybe<Ads_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ads_Max_Order_By>;
  min?: Maybe<Ads_Min_Order_By>;
  stddev?: Maybe<Ads_Stddev_Order_By>;
  stddev_pop?: Maybe<Ads_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ads_Stddev_Samp_Order_By>;
  sum?: Maybe<Ads_Sum_Order_By>;
  var_pop?: Maybe<Ads_Var_Pop_Order_By>;
  var_samp?: Maybe<Ads_Var_Samp_Order_By>;
  variance?: Maybe<Ads_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ads" */
export type Ads_Arr_Rel_Insert_Input = {
  data: Array<Ads_Insert_Input>;
  on_conflict?: Maybe<Ads_On_Conflict>;
};

/** aggregate avg on columns */
export type Ads_Avg_Fields = {
  __typename?: "ads_avg_fields";
  click_count?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "ads" */
export type Ads_Avg_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ads". All fields are combined with a logical 'AND'. */
export type Ads_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ads_Bool_Exp>>>;
  _not?: Maybe<Ads_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ads_Bool_Exp>>>;
  click_count?: Maybe<Integer_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  link?: Maybe<Text_Comparison_Exp>;
  page?: Maybe<Text_Comparison_Exp>;
  pic_url?: Maybe<Text_Comparison_Exp>;
  position?: Maybe<Text_Comparison_Exp>;
  sort?: Maybe<Integer_Comparison_Exp>;
};

/** unique or primary key constraints on table "ads" */
export enum Ads_Constraint {
  /** unique or primary key constraint */
  AdsPkey = "ads_pkey"
}

/** input type for incrementing integer columne in table "ads" */
export type Ads_Inc_Input = {
  click_count?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "ads" */
export type Ads_Insert_Input = {
  click_count?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  link?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["String"]>;
  pic_url?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Ads_Max_Fields = {
  __typename?: "ads_max_fields";
  click_count?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  link?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["String"]>;
  pic_url?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "ads" */
export type Ads_Max_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  pic_url?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ads_Min_Fields = {
  __typename?: "ads_min_fields";
  click_count?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  link?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["String"]>;
  pic_url?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "ads" */
export type Ads_Min_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  pic_url?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** response of any mutation on the table "ads" */
export type Ads_Mutation_Response = {
  __typename?: "ads_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Ads>;
};

/** input type for inserting object relation for remote table "ads" */
export type Ads_Obj_Rel_Insert_Input = {
  data: Ads_Insert_Input;
  on_conflict?: Maybe<Ads_On_Conflict>;
};

/** on conflict condition type for table "ads" */
export type Ads_On_Conflict = {
  constraint: Ads_Constraint;
  update_columns: Array<Ads_Update_Column>;
};

/** ordering options when selecting data from "ads" */
export type Ads_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  pic_url?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** select columns of table "ads" */
export enum Ads_Select_Column {
  /** column name */
  ClickCount = "click_count",
  /** column name */
  Id = "id",
  /** column name */
  Link = "link",
  /** column name */
  Page = "page",
  /** column name */
  PicUrl = "pic_url",
  /** column name */
  Position = "position",
  /** column name */
  Sort = "sort"
}

/** input type for updating data in table "ads" */
export type Ads_Set_Input = {
  click_count?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  link?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["String"]>;
  pic_url?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Ads_Stddev_Fields = {
  __typename?: "ads_stddev_fields";
  click_count?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "ads" */
export type Ads_Stddev_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ads_Stddev_Pop_Fields = {
  __typename?: "ads_stddev_pop_fields";
  click_count?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "ads" */
export type Ads_Stddev_Pop_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ads_Stddev_Samp_Fields = {
  __typename?: "ads_stddev_samp_fields";
  click_count?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "ads" */
export type Ads_Stddev_Samp_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Ads_Sum_Fields = {
  __typename?: "ads_sum_fields";
  click_count?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "ads" */
export type Ads_Sum_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** update columns of table "ads" */
export enum Ads_Update_Column {
  /** column name */
  ClickCount = "click_count",
  /** column name */
  Id = "id",
  /** column name */
  Link = "link",
  /** column name */
  Page = "page",
  /** column name */
  PicUrl = "pic_url",
  /** column name */
  Position = "position",
  /** column name */
  Sort = "sort"
}

/** aggregate var_pop on columns */
export type Ads_Var_Pop_Fields = {
  __typename?: "ads_var_pop_fields";
  click_count?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "ads" */
export type Ads_Var_Pop_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ads_Var_Samp_Fields = {
  __typename?: "ads_var_samp_fields";
  click_count?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "ads" */
export type Ads_Var_Samp_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Ads_Variance_Fields = {
  __typename?: "ads_variance_fields";
  click_count?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "ads" */
export type Ads_Variance_Order_By = {
  click_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort?: Maybe<Order_By>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: "categories";
  chinese_name?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  name: Scalars["String"];
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: "categories_aggregate";
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: "categories_aggregate_fields";
  avg?: Maybe<Categories_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
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
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  avg?: Maybe<Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Categories_Max_Order_By>;
  min?: Maybe<Categories_Min_Order_By>;
  stddev?: Maybe<Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Categories_Sum_Order_By>;
  var_pop?: Maybe<Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Categories_Var_Samp_Order_By>;
  variance?: Maybe<Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: "categories_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "categories" */
export type Categories_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  chinese_name?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = "categories_pkey"
}

/** input type for incrementing integer columne in table "categories" */
export type Categories_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  chinese_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: "categories_max_fields";
  chinese_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  chinese_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: "categories_min_fields";
  chinese_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  chinese_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: "categories_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  chinese_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  ChineseName = "chinese_name",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name"
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  chinese_name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: "categories_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "categories" */
export type Categories_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: "categories_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "categories" */
export type Categories_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: "categories_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "categories" */
export type Categories_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: "categories_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "categories" */
export type Categories_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  ChineseName = "chinese_name",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name"
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: "categories_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "categories" */
export type Categories_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: "categories_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "categories" */
export type Categories_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: "categories_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "categories" */
export type Categories_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "configs" */
export type Configs = {
  __typename?: "configs";
  id: Scalars["Int"];
  key: Scalars["String"];
  value: Scalars["String"];
};

/** aggregated selection of "configs" */
export type Configs_Aggregate = {
  __typename?: "configs_aggregate";
  aggregate?: Maybe<Configs_Aggregate_Fields>;
  nodes: Array<Configs>;
};

/** aggregate fields of "configs" */
export type Configs_Aggregate_Fields = {
  __typename?: "configs_aggregate_fields";
  avg?: Maybe<Configs_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
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
  columns?: Maybe<Array<Configs_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "configs" */
export type Configs_Aggregate_Order_By = {
  avg?: Maybe<Configs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Configs_Max_Order_By>;
  min?: Maybe<Configs_Min_Order_By>;
  stddev?: Maybe<Configs_Stddev_Order_By>;
  stddev_pop?: Maybe<Configs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Configs_Stddev_Samp_Order_By>;
  sum?: Maybe<Configs_Sum_Order_By>;
  var_pop?: Maybe<Configs_Var_Pop_Order_By>;
  var_samp?: Maybe<Configs_Var_Samp_Order_By>;
  variance?: Maybe<Configs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "configs" */
export type Configs_Arr_Rel_Insert_Input = {
  data: Array<Configs_Insert_Input>;
  on_conflict?: Maybe<Configs_On_Conflict>;
};

/** aggregate avg on columns */
export type Configs_Avg_Fields = {
  __typename?: "configs_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "configs" */
export type Configs_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "configs". All fields are combined with a logical 'AND'. */
export type Configs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Configs_Bool_Exp>>>;
  _not?: Maybe<Configs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Configs_Bool_Exp>>>;
  id?: Maybe<Integer_Comparison_Exp>;
  key?: Maybe<Text_Comparison_Exp>;
  value?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "configs" */
export enum Configs_Constraint {
  /** unique or primary key constraint */
  ConfigsKeyKey = "configs_key_key",
  /** unique or primary key constraint */
  ConfigsPkey = "configs_pkey"
}

/** input type for incrementing integer columne in table "configs" */
export type Configs_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "configs" */
export type Configs_Insert_Input = {
  id?: Maybe<Scalars["Int"]>;
  key?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Configs_Max_Fields = {
  __typename?: "configs_max_fields";
  id?: Maybe<Scalars["Int"]>;
  key?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "configs" */
export type Configs_Max_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Configs_Min_Fields = {
  __typename?: "configs_min_fields";
  id?: Maybe<Scalars["Int"]>;
  key?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "configs" */
export type Configs_Min_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "configs" */
export type Configs_Mutation_Response = {
  __typename?: "configs_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Configs>;
};

/** input type for inserting object relation for remote table "configs" */
export type Configs_Obj_Rel_Insert_Input = {
  data: Configs_Insert_Input;
  on_conflict?: Maybe<Configs_On_Conflict>;
};

/** on conflict condition type for table "configs" */
export type Configs_On_Conflict = {
  constraint: Configs_Constraint;
  update_columns: Array<Configs_Update_Column>;
};

/** ordering options when selecting data from "configs" */
export type Configs_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "configs" */
export enum Configs_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Value = "value"
}

/** input type for updating data in table "configs" */
export type Configs_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  key?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Configs_Stddev_Fields = {
  __typename?: "configs_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "configs" */
export type Configs_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Configs_Stddev_Pop_Fields = {
  __typename?: "configs_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "configs" */
export type Configs_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Configs_Stddev_Samp_Fields = {
  __typename?: "configs_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "configs" */
export type Configs_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Configs_Sum_Fields = {
  __typename?: "configs_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "configs" */
export type Configs_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "configs" */
export enum Configs_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Value = "value"
}

/** aggregate var_pop on columns */
export type Configs_Var_Pop_Fields = {
  __typename?: "configs_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "configs" */
export type Configs_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Configs_Var_Samp_Fields = {
  __typename?: "configs_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "configs" */
export type Configs_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Configs_Variance_Fields = {
  __typename?: "configs_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "configs" */
export type Configs_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = "ignore",
  /** update the row with the given values */
  Update = "update"
}

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "ads" */
  delete_ads?: Maybe<Ads_Mutation_Response>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete data from the table: "configs" */
  delete_configs?: Maybe<Configs_Mutation_Response>;
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>;
  /** delete data from the table: "videos" */
  delete_videos?: Maybe<Videos_Mutation_Response>;
  /** insert data into the table: "ads" */
  insert_ads?: Maybe<Ads_Mutation_Response>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert data into the table: "configs" */
  insert_configs?: Maybe<Configs_Mutation_Response>;
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>;
  /** insert data into the table: "videos" */
  insert_videos?: Maybe<Videos_Mutation_Response>;
  /** update data of the table: "ads" */
  update_ads?: Maybe<Ads_Mutation_Response>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update data of the table: "configs" */
  update_configs?: Maybe<Configs_Mutation_Response>;
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>;
  /** update data of the table: "videos" */
  update_videos?: Maybe<Videos_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_AdsArgs = {
  where: Ads_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ConfigsArgs = {
  where: Configs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_VideosArgs = {
  where: Videos_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_AdsArgs = {
  objects: Array<Ads_Insert_Input>;
  on_conflict?: Maybe<Ads_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ConfigsArgs = {
  objects: Array<Configs_Insert_Input>;
  on_conflict?: Maybe<Configs_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>;
  on_conflict?: Maybe<Payments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VideosArgs = {
  objects: Array<Videos_Insert_Input>;
  on_conflict?: Maybe<Videos_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AdsArgs = {
  _inc?: Maybe<Ads_Inc_Input>;
  _set?: Maybe<Ads_Set_Input>;
  where: Ads_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ConfigsArgs = {
  _inc?: Maybe<Configs_Inc_Input>;
  _set?: Maybe<Configs_Set_Input>;
  where: Configs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: Maybe<Payments_Inc_Input>;
  _set?: Maybe<Payments_Set_Input>;
  where: Payments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_VideosArgs = {
  _inc?: Maybe<Videos_Inc_Input>;
  _set?: Maybe<Videos_Set_Input>;
  where: Videos_Bool_Exp;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars["numeric"]>;
  _gt?: Maybe<Scalars["numeric"]>;
  _gte?: Maybe<Scalars["numeric"]>;
  _in?: Maybe<Array<Maybe<Scalars["numeric"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["numeric"]>;
  _lte?: Maybe<Scalars["numeric"]>;
  _neq?: Maybe<Scalars["numeric"]>;
  _nin?: Maybe<Array<Maybe<Scalars["numeric"]>>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: "payments";
  amount: Scalars["numeric"];
  category_id: Scalars["Int"];
  completed_at?: Maybe<Scalars["timestamptz"]>;
  created_at: Scalars["timestamptz"];
  gateway: Scalars["String"];
  id: Scalars["Int"];
  refunded_at?: Maybe<Scalars["timestamptz"]>;
  type: Scalars["String"];
};

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  __typename?: "payments_aggregate";
  aggregate?: Maybe<Payments_Aggregate_Fields>;
  nodes: Array<Payments>;
};

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  __typename?: "payments_aggregate_fields";
  avg?: Maybe<Payments_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
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
  columns?: Maybe<Array<Payments_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payments" */
export type Payments_Aggregate_Order_By = {
  avg?: Maybe<Payments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payments_Max_Order_By>;
  min?: Maybe<Payments_Min_Order_By>;
  stddev?: Maybe<Payments_Stddev_Order_By>;
  stddev_pop?: Maybe<Payments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payments_Stddev_Samp_Order_By>;
  sum?: Maybe<Payments_Sum_Order_By>;
  var_pop?: Maybe<Payments_Var_Pop_Order_By>;
  var_samp?: Maybe<Payments_Var_Samp_Order_By>;
  variance?: Maybe<Payments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payments" */
export type Payments_Arr_Rel_Insert_Input = {
  data: Array<Payments_Insert_Input>;
  on_conflict?: Maybe<Payments_On_Conflict>;
};

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  __typename?: "payments_avg_fields";
  amount?: Maybe<Scalars["Float"]>;
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "payments" */
export type Payments_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payments_Bool_Exp>>>;
  _not?: Maybe<Payments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payments_Bool_Exp>>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  category_id?: Maybe<Integer_Comparison_Exp>;
  completed_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gateway?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  refunded_at?: Maybe<Timestamptz_Comparison_Exp>;
  type?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "payments" */
export enum Payments_Constraint {
  /** unique or primary key constraint */
  PaymentsPkey = "payments_pkey"
}

/** input type for incrementing integer columne in table "payments" */
export type Payments_Inc_Input = {
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  amount?: Maybe<Scalars["numeric"]>;
  category_id?: Maybe<Scalars["Int"]>;
  completed_at?: Maybe<Scalars["timestamptz"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  gateway?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  refunded_at?: Maybe<Scalars["timestamptz"]>;
  type?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Payments_Max_Fields = {
  __typename?: "payments_max_fields";
  amount?: Maybe<Scalars["numeric"]>;
  category_id?: Maybe<Scalars["Int"]>;
  completed_at?: Maybe<Scalars["timestamptz"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  gateway?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  refunded_at?: Maybe<Scalars["timestamptz"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "payments" */
export type Payments_Max_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gateway?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  refunded_at?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payments_Min_Fields = {
  __typename?: "payments_min_fields";
  amount?: Maybe<Scalars["numeric"]>;
  category_id?: Maybe<Scalars["Int"]>;
  completed_at?: Maybe<Scalars["timestamptz"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  gateway?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  refunded_at?: Maybe<Scalars["timestamptz"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "payments" */
export type Payments_Min_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gateway?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  refunded_at?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  __typename?: "payments_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Payments>;
};

/** input type for inserting object relation for remote table "payments" */
export type Payments_Obj_Rel_Insert_Input = {
  data: Payments_Insert_Input;
  on_conflict?: Maybe<Payments_On_Conflict>;
};

/** on conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint;
  update_columns: Array<Payments_Update_Column>;
};

/** ordering options when selecting data from "payments" */
export type Payments_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gateway?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  refunded_at?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** select columns of table "payments" */
export enum Payments_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "category_id",
  /** column name */
  CompletedAt = "completed_at",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Gateway = "gateway",
  /** column name */
  Id = "id",
  /** column name */
  RefundedAt = "refunded_at",
  /** column name */
  Type = "type"
}

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  amount?: Maybe<Scalars["numeric"]>;
  category_id?: Maybe<Scalars["Int"]>;
  completed_at?: Maybe<Scalars["timestamptz"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  gateway?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  refunded_at?: Maybe<Scalars["timestamptz"]>;
  type?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  __typename?: "payments_stddev_fields";
  amount?: Maybe<Scalars["Float"]>;
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "payments" */
export type Payments_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  __typename?: "payments_stddev_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "payments" */
export type Payments_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  __typename?: "payments_stddev_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "payments" */
export type Payments_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  __typename?: "payments_sum_fields";
  amount?: Maybe<Scalars["numeric"]>;
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "payments" */
export type Payments_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "payments" */
export enum Payments_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "category_id",
  /** column name */
  CompletedAt = "completed_at",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Gateway = "gateway",
  /** column name */
  Id = "id",
  /** column name */
  RefundedAt = "refunded_at",
  /** column name */
  Type = "type"
}

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  __typename?: "payments_var_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "payments" */
export type Payments_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  __typename?: "payments_var_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "payments" */
export type Payments_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  __typename?: "payments_variance_fields";
  amount?: Maybe<Scalars["Float"]>;
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "payments" */
export type Payments_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: "query_root";
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
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};

/** query root */
export type Query_RootAdsArgs = {
  distinct_on?: Maybe<Array<Ads_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Ads_Order_By>>;
  where?: Maybe<Ads_Bool_Exp>;
};

/** query root */
export type Query_RootAds_AggregateArgs = {
  distinct_on?: Maybe<Array<Ads_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Ads_Order_By>>;
  where?: Maybe<Ads_Bool_Exp>;
};

/** query root */
export type Query_RootAds_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** query root */
export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** query root */
export type Query_RootCategories_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootConfigsArgs = {
  distinct_on?: Maybe<Array<Configs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Configs_Order_By>>;
  where?: Maybe<Configs_Bool_Exp>;
};

/** query root */
export type Query_RootConfigs_AggregateArgs = {
  distinct_on?: Maybe<Array<Configs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Configs_Order_By>>;
  where?: Maybe<Configs_Bool_Exp>;
};

/** query root */
export type Query_RootConfigs_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};

/** query root */
export type Query_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};

/** query root */
export type Query_RootPayments_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootVideosArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** query root */
export type Query_RootVideos_AggregateArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** query root */
export type Query_RootVideos_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
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
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};

/** subscription root */
export type Subscription_RootAdsArgs = {
  distinct_on?: Maybe<Array<Ads_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Ads_Order_By>>;
  where?: Maybe<Ads_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAds_AggregateArgs = {
  distinct_on?: Maybe<Array<Ads_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Ads_Order_By>>;
  where?: Maybe<Ads_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAds_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootConfigsArgs = {
  distinct_on?: Maybe<Array<Configs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Configs_Order_By>>;
  where?: Maybe<Configs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootConfigs_AggregateArgs = {
  distinct_on?: Maybe<Array<Configs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Configs_Order_By>>;
  where?: Maybe<Configs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootConfigs_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootVideosArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVideos_AggregateArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVideos_By_PkArgs = {
  id: Scalars["Int"];
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Maybe<Scalars["timestamptz"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Maybe<Scalars["timestamptz"]>>>;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: "videos";
  /** An object relationship */
  category: Categories;
  category_id: Scalars["Int"];
  id: Scalars["Int"];
  price: Scalars["numeric"];
  source_url?: Maybe<Scalars["String"]>;
  thumb_url?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  viewer_count: Scalars["Int"];
};

/** aggregated selection of "videos" */
export type Videos_Aggregate = {
  __typename?: "videos_aggregate";
  aggregate?: Maybe<Videos_Aggregate_Fields>;
  nodes: Array<Videos>;
};

/** aggregate fields of "videos" */
export type Videos_Aggregate_Fields = {
  __typename?: "videos_aggregate_fields";
  avg?: Maybe<Videos_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
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
  columns?: Maybe<Array<Videos_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "videos" */
export type Videos_Aggregate_Order_By = {
  avg?: Maybe<Videos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Videos_Max_Order_By>;
  min?: Maybe<Videos_Min_Order_By>;
  stddev?: Maybe<Videos_Stddev_Order_By>;
  stddev_pop?: Maybe<Videos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Videos_Stddev_Samp_Order_By>;
  sum?: Maybe<Videos_Sum_Order_By>;
  var_pop?: Maybe<Videos_Var_Pop_Order_By>;
  var_samp?: Maybe<Videos_Var_Samp_Order_By>;
  variance?: Maybe<Videos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "videos" */
export type Videos_Arr_Rel_Insert_Input = {
  data: Array<Videos_Insert_Input>;
  on_conflict?: Maybe<Videos_On_Conflict>;
};

/** aggregate avg on columns */
export type Videos_Avg_Fields = {
  __typename?: "videos_avg_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  viewer_count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "videos" */
export type Videos_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Videos_Bool_Exp>>>;
  _not?: Maybe<Videos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Videos_Bool_Exp>>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Integer_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  source_url?: Maybe<Text_Comparison_Exp>;
  thumb_url?: Maybe<Text_Comparison_Exp>;
  title?: Maybe<Text_Comparison_Exp>;
  viewer_count?: Maybe<Integer_Comparison_Exp>;
};

/** unique or primary key constraints on table "videos" */
export enum Videos_Constraint {
  /** unique or primary key constraint */
  VideosPkey = "videos_pkey"
}

/** input type for incrementing integer columne in table "videos" */
export type Videos_Inc_Input = {
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  viewer_count?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "videos" */
export type Videos_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["numeric"]>;
  source_url?: Maybe<Scalars["String"]>;
  thumb_url?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  viewer_count?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: "videos_max_fields";
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["numeric"]>;
  source_url?: Maybe<Scalars["String"]>;
  thumb_url?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  viewer_count?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "videos" */
export type Videos_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  source_url?: Maybe<Order_By>;
  thumb_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: "videos_min_fields";
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["numeric"]>;
  source_url?: Maybe<Scalars["String"]>;
  thumb_url?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  viewer_count?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "videos" */
export type Videos_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  source_url?: Maybe<Order_By>;
  thumb_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** response of any mutation on the table "videos" */
export type Videos_Mutation_Response = {
  __typename?: "videos_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Videos>;
};

/** input type for inserting object relation for remote table "videos" */
export type Videos_Obj_Rel_Insert_Input = {
  data: Videos_Insert_Input;
  on_conflict?: Maybe<Videos_On_Conflict>;
};

/** on conflict condition type for table "videos" */
export type Videos_On_Conflict = {
  constraint: Videos_Constraint;
  update_columns: Array<Videos_Update_Column>;
};

/** ordering options when selecting data from "videos" */
export type Videos_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  source_url?: Maybe<Order_By>;
  thumb_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** select columns of table "videos" */
export enum Videos_Select_Column {
  /** column name */
  CategoryId = "category_id",
  /** column name */
  Id = "id",
  /** column name */
  Price = "price",
  /** column name */
  SourceUrl = "source_url",
  /** column name */
  ThumbUrl = "thumb_url",
  /** column name */
  Title = "title",
  /** column name */
  ViewerCount = "viewer_count"
}

/** input type for updating data in table "videos" */
export type Videos_Set_Input = {
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["numeric"]>;
  source_url?: Maybe<Scalars["String"]>;
  thumb_url?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  viewer_count?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Videos_Stddev_Fields = {
  __typename?: "videos_stddev_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  viewer_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "videos" */
export type Videos_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Videos_Stddev_Pop_Fields = {
  __typename?: "videos_stddev_pop_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  viewer_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "videos" */
export type Videos_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Videos_Stddev_Samp_Fields = {
  __typename?: "videos_stddev_samp_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  viewer_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "videos" */
export type Videos_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Videos_Sum_Fields = {
  __typename?: "videos_sum_fields";
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["numeric"]>;
  viewer_count?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "videos" */
export type Videos_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** update columns of table "videos" */
export enum Videos_Update_Column {
  /** column name */
  CategoryId = "category_id",
  /** column name */
  Id = "id",
  /** column name */
  Price = "price",
  /** column name */
  SourceUrl = "source_url",
  /** column name */
  ThumbUrl = "thumb_url",
  /** column name */
  Title = "title",
  /** column name */
  ViewerCount = "viewer_count"
}

/** aggregate var_pop on columns */
export type Videos_Var_Pop_Fields = {
  __typename?: "videos_var_pop_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  viewer_count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "videos" */
export type Videos_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Videos_Var_Samp_Fields = {
  __typename?: "videos_var_samp_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  viewer_count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "videos" */
export type Videos_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Videos_Variance_Fields = {
  __typename?: "videos_variance_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  viewer_count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "videos" */
export type Videos_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  viewer_count?: Maybe<Order_By>;
};
