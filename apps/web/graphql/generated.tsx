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
  timestamptz: any;
  uuid: any;
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "photos" */
  delete_photos?: Maybe<Photos_Mutation_Response>;
  /** delete single row from the table: "photos" */
  delete_photos_by_pk?: Maybe<Photos>;
  /** insert data into the table: "photos" */
  insert_photos?: Maybe<Photos_Mutation_Response>;
  /** insert a single row into the table: "photos" */
  insert_photos_one?: Maybe<Photos>;
  /** update data of the table: "photos" */
  update_photos?: Maybe<Photos_Mutation_Response>;
  /** update single row of the table: "photos" */
  update_photos_by_pk?: Maybe<Photos>;
  /** update multiples rows of table: "photos" */
  update_photos_many?: Maybe<Array<Maybe<Photos_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_PhotosArgs = {
  where: Photos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Photos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_PhotosArgs = {
  objects: Array<Photos_Insert_Input>;
  on_conflict?: InputMaybe<Photos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photos_OneArgs = {
  object: Photos_Insert_Input;
  on_conflict?: InputMaybe<Photos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PhotosArgs = {
  _set?: InputMaybe<Photos_Set_Input>;
  where: Photos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Photos_By_PkArgs = {
  _set?: InputMaybe<Photos_Set_Input>;
  pk_columns: Photos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Photos_ManyArgs = {
  updates: Array<Photos_Updates>;
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

/** columns and relationships of "photos" */
export type Photos = {
  __typename?: 'photos';
  author: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** aggregated selection of "photos" */
export type Photos_Aggregate = {
  __typename?: 'photos_aggregate';
  aggregate?: Maybe<Photos_Aggregate_Fields>;
  nodes: Array<Photos>;
};

/** aggregate fields of "photos" */
export type Photos_Aggregate_Fields = {
  __typename?: 'photos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Photos_Max_Fields>;
  min?: Maybe<Photos_Min_Fields>;
};


/** aggregate fields of "photos" */
export type Photos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Photos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "photos". All fields are combined with a logical 'AND'. */
export type Photos_Bool_Exp = {
  _and?: InputMaybe<Array<Photos_Bool_Exp>>;
  _not?: InputMaybe<Photos_Bool_Exp>;
  _or?: InputMaybe<Array<Photos_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "photos" */
export enum Photos_Constraint {
  /** unique or primary key constraint on columns "id" */
  PhotosPkey = 'photos_pkey'
}

/** input type for inserting data into table "photos" */
export type Photos_Insert_Input = {
  author?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Photos_Max_Fields = {
  __typename?: 'photos_max_fields';
  author?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Photos_Min_Fields = {
  __typename?: 'photos_min_fields';
  author?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "photos" */
export type Photos_Mutation_Response = {
  __typename?: 'photos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Photos>;
};

/** on_conflict condition type for table "photos" */
export type Photos_On_Conflict = {
  constraint: Photos_Constraint;
  update_columns?: Array<Photos_Update_Column>;
  where?: InputMaybe<Photos_Bool_Exp>;
};

/** Ordering options when selecting data from "photos". */
export type Photos_Order_By = {
  author?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: photos */
export type Photos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "photos" */
export enum Photos_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "photos" */
export type Photos_Set_Input = {
  author?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "photos" */
export type Photos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Photos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Photos_Stream_Cursor_Value_Input = {
  author?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "photos" */
export enum Photos_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Photos_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Photos_Set_Input>;
  where: Photos_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "photos" */
  photos: Array<Photos>;
  /** fetch aggregated fields from the table: "photos" */
  photos_aggregate: Photos_Aggregate;
  /** fetch data from the table: "photos" using primary key columns */
  photos_by_pk?: Maybe<Photos>;
};


export type Query_RootPhotosArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type Query_RootPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type Query_RootPhotos_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "photos" */
  photos: Array<Photos>;
  /** fetch aggregated fields from the table: "photos" */
  photos_aggregate: Photos_Aggregate;
  /** fetch data from the table: "photos" using primary key columns */
  photos_by_pk?: Maybe<Photos>;
  /** fetch data from the table in a streaming manner : "photos" */
  photos_stream: Array<Photos>;
};


export type Subscription_RootPhotosArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type Subscription_RootPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photos_Order_By>>;
  where?: InputMaybe<Photos_Bool_Exp>;
};


export type Subscription_RootPhotos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPhotos_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Photos_Stream_Cursor_Input>>;
  where?: InputMaybe<Photos_Bool_Exp>;
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

export type PhotosQueryVariables = Exact<{ [key: string]: never; }>;


export type PhotosQuery = { __typename?: 'query_root', photos: Array<{ __typename?: 'photos', id: any, author: string, url: string, description: string, created_at: any, updated_at: any }> };


export const PhotosDocument = gql`
    query Photos {
  photos {
    id
    author
    url
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __usePhotosQuery__
 *
 * To run a query within a React component, call `usePhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhotosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePhotosQuery(baseOptions?: Apollo.QueryHookOptions<PhotosQuery, PhotosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, options);
      }
export function usePhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PhotosQuery, PhotosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, options);
        }
export type PhotosQueryHookResult = ReturnType<typeof usePhotosQuery>;
export type PhotosLazyQueryHookResult = ReturnType<typeof usePhotosLazyQuery>;
export type PhotosQueryResult = Apollo.QueryResult<PhotosQuery, PhotosQueryVariables>;