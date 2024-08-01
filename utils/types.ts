/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface APITimeSeriesList {
  /** @maxLength 50 */
  theme: string;
  /** @maxLength 50 */
  sub_theme: string;
  /** @maxLength 50 */
  topic: string;
  /** @maxLength 50 */
  geography_type: string;
  /** @maxLength 100 */
  geography: string;
  /** @maxLength 9 */
  geography_code: string | null;
  /** @maxLength 100 */
  metric: string;
  /** @maxLength 50 */
  metric_group?: string | null;
  /** @maxLength 50 */
  stratum: string;
  /** @maxLength 3 */
  sex: string | null;
  /** @maxLength 50 */
  age: string | null;
  /**
   * @min 0
   * @max 32767
   */
  year: number;
  /**
   * @min 0
   * @max 32767
   */
  month: number | null;
  /**
   * @min 0
   * @max 32767
   */
  epiweek: number;
  /** @format date */
  date: string;
  /** @format double */
  metric_value: number;
  /**
   *
   * Whether the record falls within the current reporting delay period.
   * If true, then the value is subject to change in a subsequent retrospective update.
   * @default false
   */
  in_reporting_delay_period?: boolean;
}

export interface GeographyDetail {
  /** @format uri */
  metrics: string;
}

export interface GeographyList {
  name: string;
  /** @format uri */
  link: string;
}

export interface GeographyTypeDetail {
  /** @format uri */
  geographies: string;
}

export interface GeographyTypeList {
  name: string;
  /** @format uri */
  link: string;
}

export interface MetricList {
  name: string;
  /** @format uri */
  link: string;
}

export interface PaginatedAPITimeSeriesListList {
  /** @example 123 */
  count: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results: APITimeSeriesList[];
}

export interface SubThemeDetail {
  /** @format uri */
  topics: string;
}

export interface SubThemeList {
  name: string;
  /** @format uri */
  link: string;
}

export interface ThemeDetail {
  /** @format uri */
  sub_themes: string;
}

export interface ThemeList {
  name: string;
  /** @format uri */
  link: string;
}

export interface TopicDetail {
  /** @format uri */
  geography_types: string;
}

export interface TopicList {
  name: string;
  /** @format uri */
  link: string;
}

export type RootRetrieveData = any;

export interface ApiSchemaRetrieveParams {
  lang?:
    | "af"
    | "ar"
    | "ar-dz"
    | "ast"
    | "az"
    | "be"
    | "bg"
    | "bn"
    | "br"
    | "bs"
    | "ca"
    | "ckb"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "dsb"
    | "el"
    | "en"
    | "en-au"
    | "en-gb"
    | "eo"
    | "es"
    | "es-ar"
    | "es-co"
    | "es-mx"
    | "es-ni"
    | "es-ve"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "fy"
    | "ga"
    | "gd"
    | "gl"
    | "he"
    | "hi"
    | "hr"
    | "hsb"
    | "hu"
    | "hy"
    | "ia"
    | "id"
    | "ig"
    | "io"
    | "is"
    | "it"
    | "ja"
    | "ka"
    | "kab"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "ky"
    | "lb"
    | "lt"
    | "lv"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "my"
    | "nb"
    | "ne"
    | "nl"
    | "nn"
    | "os"
    | "pa"
    | "pl"
    | "pt"
    | "pt-br"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sq"
    | "sr"
    | "sr-latn"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tk"
    | "tr"
    | "tt"
    | "udm"
    | "ug"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "zh-hans"
    | "zh-hant";
}

export type ApiSchemaRetrieveData = Record<string, any>;

export type HealthRetrieveData = any;

export type ThemesRetrieveData = ThemeList;

export type ThemesRetrieve2Data = ThemeDetail;

export type ThemesSubThemesRetrieveData = SubThemeList;

export type ThemesSubThemesRetrieve2Data = SubThemeDetail;

export type ThemesSubThemesTopicsRetrieveData = TopicList;

export type ThemesSubThemesTopicsRetrieve2Data = TopicDetail;

export type ThemesSubThemesTopicsGeographyTypesRetrieveData = GeographyTypeList;

export type ThemesSubThemesTopicsGeographyTypesRetrieve2Data = GeographyTypeDetail;

export type ThemesSubThemesTopicsGeographyTypesGeographiesRetrieveData = GeographyList;

export type ThemesSubThemesTopicsGeographyTypesGeographiesRetrieve2Data = GeographyDetail;

export type ThemesSubThemesTopicsGeographyTypesGeographiesMetricsRetrieveData = MetricList;

export interface ThemesSubThemesTopicsGeographyTypesGeographiesMetricsListParams {
  age?: string;
  /** @format date */
  date?: string;
  epiweek?: number;
  in_reporting_delay_period?: boolean;
  /** A page number within the paginated result set. */
  page?: number;
  /** Number of results to return per page. */
  page_size?: number;
  sex?: string;
  stratum?: string;
  year?: number;
  geography: string;
  geographyType: string;
  metric: string;
  subTheme: string;
  theme: string;
  topic: string;
}

export type ThemesSubThemesTopicsGeographyTypesGeographiesMetricsListData = PaginatedAPITimeSeriesListList;
