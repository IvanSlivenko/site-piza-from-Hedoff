import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  numeric: { input: any; output: any };
  uuid: { input: any; output: any };
};

export type AdminRegisterInput = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type AdminRegisterOutput = {
  __typename?: "AdminRegisterOutput";
  accessToken: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: "admin";
  id: Scalars["uuid"]["output"];
  password: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: "admin_aggregate";
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: "admin_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = "admin_pkey",
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = "admin_username_key",
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: "admin_max_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: "admin_min_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: "admin_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Password = "password",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Password = "password",
  /** column name */
  Username = "username",
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  /** filter the rows which have to be updated */
  where: Admin_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "menu" */
export type Menu = {
  __typename?: "menu";
  id: Scalars["uuid"]["output"];
  image: Scalars["String"]["output"];
  ingredients: Scalars["String"]["output"];
  price: Scalars["numeric"]["output"];
  title: Scalars["String"]["output"];
  weight: Scalars["numeric"]["output"];
};

/** columns and relationships of "menuOrder" */
export type MenuOrder = {
  __typename?: "menuOrder";
  date: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  image: Scalars["String"]["output"];
  ingredients: Scalars["String"]["output"];
  price: Scalars["numeric"]["output"];
  quantity: Scalars["numeric"]["output"];
  summ: Scalars["numeric"]["output"];
  title: Scalars["String"]["output"];
  unit: Scalars["String"]["output"];
  user: Scalars["String"]["output"];
  weight: Scalars["numeric"]["output"];
};

/** aggregated selection of "menuOrder" */
export type MenuOrder_Aggregate = {
  __typename?: "menuOrder_aggregate";
  aggregate?: Maybe<MenuOrder_Aggregate_Fields>;
  nodes: Array<MenuOrder>;
};

/** aggregate fields of "menuOrder" */
export type MenuOrder_Aggregate_Fields = {
  __typename?: "menuOrder_aggregate_fields";
  avg?: Maybe<MenuOrder_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<MenuOrder_Max_Fields>;
  min?: Maybe<MenuOrder_Min_Fields>;
  stddev?: Maybe<MenuOrder_Stddev_Fields>;
  stddev_pop?: Maybe<MenuOrder_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MenuOrder_Stddev_Samp_Fields>;
  sum?: Maybe<MenuOrder_Sum_Fields>;
  var_pop?: Maybe<MenuOrder_Var_Pop_Fields>;
  var_samp?: Maybe<MenuOrder_Var_Samp_Fields>;
  variance?: Maybe<MenuOrder_Variance_Fields>;
};

/** aggregate fields of "menuOrder" */
export type MenuOrder_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MenuOrder_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type MenuOrder_Avg_Fields = {
  __typename?: "menuOrder_avg_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  summ?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "menuOrder". All fields are combined with a logical 'AND'. */
export type MenuOrder_Bool_Exp = {
  _and?: InputMaybe<Array<MenuOrder_Bool_Exp>>;
  _not?: InputMaybe<MenuOrder_Bool_Exp>;
  _or?: InputMaybe<Array<MenuOrder_Bool_Exp>>;
  date?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  summ?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  unit?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "menuOrder" */
export enum MenuOrder_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuOrderPkey = "menuOrder_pkey",
}

/** input type for incrementing numeric columns in table "menuOrder" */
export type MenuOrder_Inc_Input = {
  price?: InputMaybe<Scalars["numeric"]["input"]>;
  quantity?: InputMaybe<Scalars["numeric"]["input"]>;
  summ?: InputMaybe<Scalars["numeric"]["input"]>;
  weight?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** input type for inserting data into table "menuOrder" */
export type MenuOrder_Insert_Input = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  ingredients?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["numeric"]["input"]>;
  quantity?: InputMaybe<Scalars["numeric"]["input"]>;
  summ?: InputMaybe<Scalars["numeric"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  unit?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** aggregate max on columns */
export type MenuOrder_Max_Fields = {
  __typename?: "menuOrder_max_fields";
  date?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  ingredients?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["numeric"]["output"]>;
  quantity?: Maybe<Scalars["numeric"]["output"]>;
  summ?: Maybe<Scalars["numeric"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["numeric"]["output"]>;
};

/** aggregate min on columns */
export type MenuOrder_Min_Fields = {
  __typename?: "menuOrder_min_fields";
  date?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  ingredients?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["numeric"]["output"]>;
  quantity?: Maybe<Scalars["numeric"]["output"]>;
  summ?: Maybe<Scalars["numeric"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["numeric"]["output"]>;
};

/** response of any mutation on the table "menuOrder" */
export type MenuOrder_Mutation_Response = {
  __typename?: "menuOrder_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<MenuOrder>;
};

/** on_conflict condition type for table "menuOrder" */
export type MenuOrder_On_Conflict = {
  constraint: MenuOrder_Constraint;
  update_columns?: Array<MenuOrder_Update_Column>;
  where?: InputMaybe<MenuOrder_Bool_Exp>;
};

/** Ordering options when selecting data from "menuOrder". */
export type MenuOrder_Order_By = {
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  summ?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  unit?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: menuOrder */
export type MenuOrder_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "menuOrder" */
export enum MenuOrder_Select_Column {
  /** column name */
  Date = "date",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Ingredients = "ingredients",
  /** column name */
  Price = "price",
  /** column name */
  Quantity = "quantity",
  /** column name */
  Summ = "summ",
  /** column name */
  Title = "title",
  /** column name */
  Unit = "unit",
  /** column name */
  User = "user",
  /** column name */
  Weight = "weight",
}

/** input type for updating data in table "menuOrder" */
export type MenuOrder_Set_Input = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  ingredients?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["numeric"]["input"]>;
  quantity?: InputMaybe<Scalars["numeric"]["input"]>;
  summ?: InputMaybe<Scalars["numeric"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  unit?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** aggregate stddev on columns */
export type MenuOrder_Stddev_Fields = {
  __typename?: "menuOrder_stddev_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  summ?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type MenuOrder_Stddev_Pop_Fields = {
  __typename?: "menuOrder_stddev_pop_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  summ?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type MenuOrder_Stddev_Samp_Fields = {
  __typename?: "menuOrder_stddev_samp_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  summ?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "menuOrder" */
export type MenuOrder_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MenuOrder_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MenuOrder_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  ingredients?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["numeric"]["input"]>;
  quantity?: InputMaybe<Scalars["numeric"]["input"]>;
  summ?: InputMaybe<Scalars["numeric"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  unit?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** aggregate sum on columns */
export type MenuOrder_Sum_Fields = {
  __typename?: "menuOrder_sum_fields";
  price?: Maybe<Scalars["numeric"]["output"]>;
  quantity?: Maybe<Scalars["numeric"]["output"]>;
  summ?: Maybe<Scalars["numeric"]["output"]>;
  weight?: Maybe<Scalars["numeric"]["output"]>;
};

/** update columns of table "menuOrder" */
export enum MenuOrder_Update_Column {
  /** column name */
  Date = "date",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Ingredients = "ingredients",
  /** column name */
  Price = "price",
  /** column name */
  Quantity = "quantity",
  /** column name */
  Summ = "summ",
  /** column name */
  Title = "title",
  /** column name */
  Unit = "unit",
  /** column name */
  User = "user",
  /** column name */
  Weight = "weight",
}

export type MenuOrder_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MenuOrder_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MenuOrder_Set_Input>;
  /** filter the rows which have to be updated */
  where: MenuOrder_Bool_Exp;
};

/** aggregate var_pop on columns */
export type MenuOrder_Var_Pop_Fields = {
  __typename?: "menuOrder_var_pop_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  summ?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type MenuOrder_Var_Samp_Fields = {
  __typename?: "menuOrder_var_samp_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  summ?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type MenuOrder_Variance_Fields = {
  __typename?: "menuOrder_variance_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  summ?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregated selection of "menu" */
export type Menu_Aggregate = {
  __typename?: "menu_aggregate";
  aggregate?: Maybe<Menu_Aggregate_Fields>;
  nodes: Array<Menu>;
};

/** aggregate fields of "menu" */
export type Menu_Aggregate_Fields = {
  __typename?: "menu_aggregate_fields";
  avg?: Maybe<Menu_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Menu_Max_Fields>;
  min?: Maybe<Menu_Min_Fields>;
  stddev?: Maybe<Menu_Stddev_Fields>;
  stddev_pop?: Maybe<Menu_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Menu_Stddev_Samp_Fields>;
  sum?: Maybe<Menu_Sum_Fields>;
  var_pop?: Maybe<Menu_Var_Pop_Fields>;
  var_samp?: Maybe<Menu_Var_Samp_Fields>;
  variance?: Maybe<Menu_Variance_Fields>;
};

/** aggregate fields of "menu" */
export type Menu_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menu_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Menu_Avg_Fields = {
  __typename?: "menu_avg_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "menu". All fields are combined with a logical 'AND'. */
export type Menu_Bool_Exp = {
  _and?: InputMaybe<Array<Menu_Bool_Exp>>;
  _not?: InputMaybe<Menu_Bool_Exp>;
  _or?: InputMaybe<Array<Menu_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "menu" */
export enum Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuPkey = "menu_pkey",
}

/** input type for incrementing numeric columns in table "menu" */
export type Menu_Inc_Input = {
  price?: InputMaybe<Scalars["numeric"]["input"]>;
  weight?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** input type for inserting data into table "menu" */
export type Menu_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  ingredients?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["numeric"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** aggregate max on columns */
export type Menu_Max_Fields = {
  __typename?: "menu_max_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  ingredients?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["numeric"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["numeric"]["output"]>;
};

/** aggregate min on columns */
export type Menu_Min_Fields = {
  __typename?: "menu_min_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  ingredients?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["numeric"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["numeric"]["output"]>;
};

/** response of any mutation on the table "menu" */
export type Menu_Mutation_Response = {
  __typename?: "menu_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Menu>;
};

/** on_conflict condition type for table "menu" */
export type Menu_On_Conflict = {
  constraint: Menu_Constraint;
  update_columns?: Array<Menu_Update_Column>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** Ordering options when selecting data from "menu". */
export type Menu_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: menu */
export type Menu_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "menu" */
export enum Menu_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Ingredients = "ingredients",
  /** column name */
  Price = "price",
  /** column name */
  Title = "title",
  /** column name */
  Weight = "weight",
}

/** input type for updating data in table "menu" */
export type Menu_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  ingredients?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["numeric"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** aggregate stddev on columns */
export type Menu_Stddev_Fields = {
  __typename?: "menu_stddev_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Menu_Stddev_Pop_Fields = {
  __typename?: "menu_stddev_pop_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Menu_Stddev_Samp_Fields = {
  __typename?: "menu_stddev_samp_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "menu" */
export type Menu_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Menu_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Menu_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  ingredients?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["numeric"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  weight?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** aggregate sum on columns */
export type Menu_Sum_Fields = {
  __typename?: "menu_sum_fields";
  price?: Maybe<Scalars["numeric"]["output"]>;
  weight?: Maybe<Scalars["numeric"]["output"]>;
};

/** update columns of table "menu" */
export enum Menu_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Ingredients = "ingredients",
  /** column name */
  Price = "price",
  /** column name */
  Title = "title",
  /** column name */
  Weight = "weight",
}

export type Menu_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Menu_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menu_Set_Input>;
  /** filter the rows which have to be updated */
  where: Menu_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Menu_Var_Pop_Fields = {
  __typename?: "menu_var_pop_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Menu_Var_Samp_Fields = {
  __typename?: "menu_var_samp_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Menu_Variance_Fields = {
  __typename?: "menu_variance_fields";
  price?: Maybe<Scalars["Float"]["output"]>;
  weight?: Maybe<Scalars["Float"]["output"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** Admin registration */
  adminRegister?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "menu" */
  delete_menu?: Maybe<Menu_Mutation_Response>;
  /** delete data from the table: "menuOrder" */
  delete_menuOrder?: Maybe<MenuOrder_Mutation_Response>;
  /** delete single row from the table: "menuOrder" */
  delete_menuOrder_by_pk?: Maybe<MenuOrder>;
  /** delete single row from the table: "menu" */
  delete_menu_by_pk?: Maybe<Menu>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "menu" */
  insert_menu?: Maybe<Menu_Mutation_Response>;
  /** insert data into the table: "menuOrder" */
  insert_menuOrder?: Maybe<MenuOrder_Mutation_Response>;
  /** insert a single row into the table: "menuOrder" */
  insert_menuOrder_one?: Maybe<MenuOrder>;
  /** insert a single row into the table: "menu" */
  insert_menu_one?: Maybe<Menu>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "menu" */
  update_menu?: Maybe<Menu_Mutation_Response>;
  /** update data of the table: "menuOrder" */
  update_menuOrder?: Maybe<MenuOrder_Mutation_Response>;
  /** update single row of the table: "menuOrder" */
  update_menuOrder_by_pk?: Maybe<MenuOrder>;
  /** update multiples rows of table: "menuOrder" */
  update_menuOrder_many?: Maybe<Array<Maybe<MenuOrder_Mutation_Response>>>;
  /** update single row of the table: "menu" */
  update_menu_by_pk?: Maybe<Menu>;
  /** update multiples rows of table: "menu" */
  update_menu_many?: Maybe<Array<Maybe<Menu_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};

/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_MenuArgs = {
  where: Menu_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_MenuOrderArgs = {
  where: MenuOrder_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_MenuOrder_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Menu_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MenuArgs = {
  objects: Array<Menu_Insert_Input>;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MenuOrderArgs = {
  objects: Array<MenuOrder_Insert_Input>;
  on_conflict?: InputMaybe<MenuOrder_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MenuOrder_OneArgs = {
  object: MenuOrder_Insert_Input;
  on_conflict?: InputMaybe<MenuOrder_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Menu_OneArgs = {
  object: Menu_Insert_Input;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_MenuArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  where: Menu_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_MenuOrderArgs = {
  _inc?: InputMaybe<MenuOrder_Inc_Input>;
  _set?: InputMaybe<MenuOrder_Set_Input>;
  where: MenuOrder_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_MenuOrder_By_PkArgs = {
  _inc?: InputMaybe<MenuOrder_Inc_Input>;
  _set?: InputMaybe<MenuOrder_Set_Input>;
  pk_columns: MenuOrder_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MenuOrder_ManyArgs = {
  updates: Array<MenuOrder_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Menu_By_PkArgs = {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  pk_columns: Menu_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Menu_ManyArgs = {
  updates: Array<Menu_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["numeric"]["input"]>;
  _gt?: InputMaybe<Scalars["numeric"]["input"]>;
  _gte?: InputMaybe<Scalars["numeric"]["input"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["numeric"]["input"]>;
  _lte?: InputMaybe<Scalars["numeric"]["input"]>;
  _neq?: InputMaybe<Scalars["numeric"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch data from the table: "menuOrder" */
  menuOrder: Array<MenuOrder>;
  /** fetch aggregated fields from the table: "menuOrder" */
  menuOrder_aggregate: MenuOrder_Aggregate;
  /** fetch data from the table: "menuOrder" using primary key columns */
  menuOrder_by_pk?: Maybe<MenuOrder>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
};

export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Query_RootAdmin_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Query_RootMenuOrderArgs = {
  distinct_on?: InputMaybe<Array<MenuOrder_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<MenuOrder_Order_By>>;
  where?: InputMaybe<MenuOrder_Bool_Exp>;
};

export type Query_RootMenuOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MenuOrder_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<MenuOrder_Order_By>>;
  where?: InputMaybe<MenuOrder_Bool_Exp>;
};

export type Query_RootMenuOrder_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Query_RootMenu_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "menu" */
  menu: Array<Menu>;
  /** fetch data from the table: "menuOrder" */
  menuOrder: Array<MenuOrder>;
  /** fetch aggregated fields from the table: "menuOrder" */
  menuOrder_aggregate: MenuOrder_Aggregate;
  /** fetch data from the table: "menuOrder" using primary key columns */
  menuOrder_by_pk?: Maybe<MenuOrder>;
  /** fetch data from the table in a streaming manner: "menuOrder" */
  menuOrder_stream: Array<MenuOrder>;
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table in a streaming manner: "menu" */
  menu_stream: Array<Menu>;
};

export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

export type Subscription_RootMenuArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Subscription_RootMenuOrderArgs = {
  distinct_on?: InputMaybe<Array<MenuOrder_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<MenuOrder_Order_By>>;
  where?: InputMaybe<MenuOrder_Bool_Exp>;
};

export type Subscription_RootMenuOrder_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MenuOrder_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<MenuOrder_Order_By>>;
  where?: InputMaybe<MenuOrder_Bool_Exp>;
};

export type Subscription_RootMenuOrder_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootMenuOrder_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<MenuOrder_Stream_Cursor_Input>>;
  where?: InputMaybe<MenuOrder_Bool_Exp>;
};

export type Subscription_RootMenu_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Menu_Order_By>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

export type Subscription_RootMenu_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootMenu_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Menu_Stream_Cursor_Input>>;
  where?: InputMaybe<Menu_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

export type InsertAdminMutationVariables = Exact<{
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
}>;

export type InsertAdminMutation = {
  __typename?: "mutation_root";
  insert_admin?: {
    __typename?: "admin_mutation_response";
    returning: Array<{ __typename?: "admin"; id: any }>;
  } | null;
};

export const InsertAdminDocument = gql`
  mutation InsertAdmin($password: String!, $username: String!) {
    insert_admin_one(object: { password: $password, username: $username }) {
      id
    }
  }
`;


export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    InsertAdmin(
      variables: InsertAdminMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<InsertAdminMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertAdminMutation>(InsertAdminDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "InsertAdmin",
        "mutation",
        variables
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
