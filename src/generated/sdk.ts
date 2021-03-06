import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

import { Json } from './dato-scalars';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents `true` or `false` values. */
  BooleanType: boolean;
  CustomData: Json;
  /** A ISO 8601 compliant date value */
  Date: string;
  /** A ISO 8601 compliant datetime value */
  DateTime: string;
  /** Represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). */
  FloatType: number;
  /** Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  IntType: number;
  ItemId: string;
  JsonField: Json;
  MetaTagAttributes: Json;
  UploadId: string;
};

export type ArticleModelCitationField = {
  __typename?: 'ArticleModelCitationField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type ArticleModelExtraitField = {
  __typename?: 'ArticleModelExtraitField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type ArticleModelFilter = {
  OR: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  auteurCitation: InputMaybe<StringFilter>;
  citation: InputMaybe<StructuredTextFilter>;
  createdAt: InputMaybe<CreatedAtFilter>;
  date: InputMaybe<DateFilter>;
  extrait: InputMaybe<StructuredTextFilter>;
  galerie: InputMaybe<GalleryFilter>;
  id: InputMaybe<ItemIdFilter>;
  image: InputMaybe<FileFilter>;
  texte: InputMaybe<StructuredTextFilter>;
  titre: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<UpdatedAtFilter>;
};

export enum ArticleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  auteurCitation_ASC = 'auteurCitation_ASC',
  auteurCitation_DESC = 'auteurCitation_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  titre_ASC = 'titre_ASC',
  titre_DESC = 'titre_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type ArticleModelTexteField = {
  __typename?: 'ArticleModelTexteField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Article du blog (article) */
export type ArticleRecord = RecordInterface & {
  __typename?: 'ArticleRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  auteurCitation: Maybe<Scalars['String']>;
  citation: Maybe<ArticleModelCitationField>;
  createdAt: Scalars['DateTime'];
  date: Maybe<Scalars['Date']>;
  extrait: Maybe<ArticleModelExtraitField>;
  galerie: Array<FileField>;
  id: Scalars['ItemId'];
  image: Maybe<FileField>;
  texte: Maybe<ArticleModelTexteField>;
  titre: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Article du blog (article) */
export type ArticleRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['BooleanType']>;
};

export type CagnotteModelTexteField = {
  __typename?: 'CagnotteModelTexteField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Appel ?? contribution !  (cagnotte) */
export type CagnotteRecord = RecordInterface & {
  __typename?: 'CagnotteRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  aujourdhui: Maybe<Scalars['FloatType']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  objectif: Maybe<Scalars['IntType']>;
  paliers: Array<PalierRecord>;
  texte: Maybe<CagnotteModelTexteField>;
  titre: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Appel ?? contribution !  (cagnotte) */
export type CagnotteRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

export enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['Date']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's less than the one specified */
  lt: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['Date']>;
  /** Exclude records with an exact match */
  neq: InputMaybe<Scalars['Date']>;
};

export type FaqModelFilter = {
  OR: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  createdAt: InputMaybe<CreatedAtFilter>;
  id: InputMaybe<ItemIdFilter>;
  question: InputMaybe<StringFilter>;
  reponse: InputMaybe<StructuredTextFilter>;
  updatedAt: InputMaybe<UpdatedAtFilter>;
};

export enum FaqModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type FaqModelReponseField = {
  __typename?: 'FaqModelReponseField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Article FAQ (faq) */
export type FaqRecord = RecordInterface & {
  __typename?: 'FaqRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  question: Maybe<Scalars['String']>;
  reponse: Maybe<FaqModelReponseField>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Article FAQ (faq) */
export type FaqRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

export enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint: Maybe<FocalPoint>;
  format: Scalars['String'];
  height: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes: Maybe<Scalars['String']>;
  responsiveImage: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video: Maybe<UploadVideoField>;
  width: Maybe<Scalars['IntType']>;
};

export type FileFieldAltArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export type FileFieldBlurUpThumbArgs = {
  imgixParams: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type FileFieldCustomDataArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export type FileFieldFocalPointArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export type FileFieldResponsiveImageArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  imgixParams: InputMaybe<ImgixParams>;
  locale: InputMaybe<SiteLocale>;
  sizes: InputMaybe<Scalars['String']>;
};

export type FileFieldTitleArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export type FileFieldUrlArgs = {
  imgixParams: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb: Maybe<Scalars['String']>;
  blurhash: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint: Maybe<FocalPoint>;
  format: Scalars['String'];
  height: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes: Maybe<Scalars['String']>;
  responsiveImage: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video: Maybe<UploadVideoField>;
  width: Maybe<Scalars['IntType']>;
};

export type FileFieldInterfaceAltArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  imgixParams: InputMaybe<ImgixParams>;
  locale: InputMaybe<SiteLocale>;
  sizes: InputMaybe<Scalars['String']>;
};

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceUrlArgs = {
  imgixParams: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq: InputMaybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq: InputMaybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl: Maybe<Scalars['String']>;
  fallbackSeo: Maybe<SeoField>;
  siteName: Maybe<Scalars['String']>;
  titleSuffix: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/ar)
   */
  ar: InputMaybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/auto)
   */
  auto: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/bg)
   */
  bg: InputMaybe<Scalars['String']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend: InputMaybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor: InputMaybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY: InputMaybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur: InputMaybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border: InputMaybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom: InputMaybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft: InputMaybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius: InputMaybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner: InputMaybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight: InputMaybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop: InputMaybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri: InputMaybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/ch)
   */
  ch: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub: InputMaybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant: InputMaybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors: InputMaybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius: InputMaybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/crop)
   */
  crop: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/cs)
   */
  cs: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/dl)
   */
  dl: InputMaybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi: InputMaybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/dpr)
   */
  dpr: InputMaybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone: InputMaybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp: InputMaybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/expires)
   */
  expires: InputMaybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex: InputMaybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad: InputMaybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor: InputMaybe<Scalars['String']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/fit)
   */
  fit: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/fm)
   */
  fm: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug: InputMaybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ: InputMaybe<Scalars['FloatType']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam: InputMaybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors: InputMaybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize: InputMaybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/h)
   */
  h: InputMaybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high: InputMaybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn: InputMaybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue: InputMaybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert: InputMaybe<Scalars['BooleanType']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc: InputMaybe<ImgixParamsIptc>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless: InputMaybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark: InputMaybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase: InputMaybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/mask)
   */
  mask: InputMaybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg: InputMaybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH: InputMaybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW: InputMaybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome: InputMaybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr: InputMaybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs: InputMaybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient: InputMaybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop: InputMaybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/pdf/page)
   */
  page: InputMaybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation: InputMaybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix: InputMaybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/stylize/px)
   */
  px: InputMaybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/format/q)
   */
  q: InputMaybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/rect)
   */
  rect: InputMaybe<Scalars['String']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot: InputMaybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat: InputMaybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia: InputMaybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad: InputMaybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp: InputMaybe<Scalars['FloatType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor: InputMaybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad: InputMaybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol: InputMaybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt)
   */
  txt: InputMaybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor: InputMaybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont: InputMaybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead: InputMaybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor: InputMaybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad: InputMaybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad: InputMaybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize: InputMaybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack: InputMaybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth: InputMaybe<Scalars['IntType']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX: InputMaybe<Scalars['IntType']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad: InputMaybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib: InputMaybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference ??](https://docs.imgix.com/apis/url/size/w)
   */
  w: InputMaybe<Scalars['FloatType']>;
};

export enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top',
}

export enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top',
}

export enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale',
}

export enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  inherit = 'inherit',
}

export enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width',
}

export enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top',
}

export enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  blur = 'blur',
  solid = 'solid',
}

export enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale',
}

export enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v',
}

export enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp',
}

export enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block',
}

export enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top',
}

export enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale',
}

export enum ImgixParamsMarkTile {
  grid = 'grid',
}

export enum ImgixParamsPalette {
  css = 'css',
  json = 'json',
}

export enum ImgixParamsTransparency {
  grid = 'grid',
}

export enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color',
}

export enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top',
}

export enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start',
}

export enum ImgixParamsTxtFit {
  max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq: InputMaybe<Scalars['BooleanType']>;
};

export type InvestirModelCitationField = {
  __typename?: 'InvestirModelCitationField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type InvestirModelTexteInvestirField = {
  __typename?: 'InvestirModelTexteInvestirField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Investir (investir) */
export type InvestirRecord = RecordInterface & {
  __typename?: 'InvestirRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  auteurCitation: Maybe<Scalars['String']>;
  citation: Maybe<InvestirModelCitationField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  imageDeux: Maybe<FileField>;
  imageUn: Maybe<FileField>;
  texteInvestir: Maybe<InvestirModelTexteInvestirField>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Investir (investir) */
export type InvestirRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

export enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated',
}

export type LatLonField = {
  __typename?: 'LatLonField';
  latitude: Scalars['FloatType'];
  longitude: Scalars['FloatType'];
};

export type LexiqueModelDefinitionField = {
  __typename?: 'LexiqueModelDefinitionField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type LexiqueModelFilter = {
  OR: InputMaybe<Array<InputMaybe<LexiqueModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  createdAt: InputMaybe<CreatedAtFilter>;
  definition: InputMaybe<StructuredTextFilter>;
  id: InputMaybe<ItemIdFilter>;
  notion: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<UpdatedAtFilter>;
};

export enum LexiqueModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  notion_ASC = 'notion_ASC',
  notion_DESC = 'notion_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Article Lexique (lexique) */
export type LexiqueRecord = RecordInterface & {
  __typename?: 'LexiqueRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  definition: Maybe<LexiqueModelDefinitionField>;
  id: Scalars['ItemId'];
  notion: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Article Lexique (lexique) */
export type LexiqueRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png',
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq: InputMaybe<UploadOrientation>;
};

export type PageAccueilModelCitation1Field = {
  __typename?: 'PageAccueilModelCitation1Field';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageAccueilModelCitation2Field = {
  __typename?: 'PageAccueilModelCitation2Field';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageAccueilModelIntroApprofondirField = {
  __typename?: 'PageAccueilModelIntroApprofondirField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageAccueilModelIntroDecouvrirField = {
  __typename?: 'PageAccueilModelIntroDecouvrirField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageAccueilModelPresentationField = {
  __typename?: 'PageAccueilModelPresentationField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Page accueil (page_accueil) */
export type PageAccueilRecord = RecordInterface & {
  __typename?: 'PageAccueilRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  citation1: Maybe<PageAccueilModelCitation1Field>;
  citation1Auteur: Maybe<Scalars['String']>;
  citation2: Maybe<PageAccueilModelCitation2Field>;
  citation2Auteur: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image: Maybe<FileField>;
  imageDecouvrir: Maybe<FileField>;
  introApprofondir: Maybe<PageAccueilModelIntroApprofondirField>;
  introDecouvrir: Maybe<PageAccueilModelIntroDecouvrirField>;
  presentation: Maybe<PageAccueilModelPresentationField>;
  titrePrincipal: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Page accueil (page_accueil) */
export type PageAccueilRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

export type PageApprofondirModelCitationCombienField = {
  __typename?: 'PageApprofondirModelCitationCombienField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageApprofondirModelCitationGouvernanceField = {
  __typename?: 'PageApprofondirModelCitationGouvernanceField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageApprofondirModelTexteCollaborationField = {
  __typename?: 'PageApprofondirModelTexteCollaborationField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageApprofondirModelTexteCombienField = {
  __typename?: 'PageApprofondirModelTexteCombienField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageApprofondirModelTexteCopainsField = {
  __typename?: 'PageApprofondirModelTexteCopainsField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageApprofondirModelTexteGouvernanceField = {
  __typename?: 'PageApprofondirModelTexteGouvernanceField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageApprofondirModelTexteMontageField = {
  __typename?: 'PageApprofondirModelTexteMontageField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Page Approfondir (page_approfondir) */
export type PageApprofondirRecord = RecordInterface & {
  __typename?: 'PageApprofondirRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  auteurCitationCombien: Maybe<Scalars['String']>;
  auteurCitationGouvernance: Maybe<Scalars['String']>;
  citationCombien: Maybe<PageApprofondirModelCitationCombienField>;
  citationGouvernance: Maybe<PageApprofondirModelCitationGouvernanceField>;
  createdAt: Scalars['DateTime'];
  documentGouvernance1: Maybe<FileField>;
  documentGouvernance2: Maybe<FileField>;
  documentGouvernance3: Maybe<FileField>;
  documentMontage1: Maybe<FileField>;
  documentMontage2: Maybe<FileField>;
  documentMontage3: Maybe<FileField>;
  documentMontage4: Maybe<FileField>;
  id: Scalars['ItemId'];
  imageCombien: Maybe<FileField>;
  imageCopains: Maybe<FileField>;
  imagesCollaboration: Array<FileField>;
  texteCollaboration: Maybe<PageApprofondirModelTexteCollaborationField>;
  texteCombien: Maybe<PageApprofondirModelTexteCombienField>;
  texteCopains: Maybe<PageApprofondirModelTexteCopainsField>;
  texteGouvernance: Maybe<PageApprofondirModelTexteGouvernanceField>;
  texteMontage: Maybe<PageApprofondirModelTexteMontageField>;
  titreCollaboration: Maybe<Scalars['String']>;
  titreCombien: Maybe<Scalars['String']>;
  titreCopains: Maybe<Scalars['String']>;
  titreDocumentGouvernance1: Maybe<Scalars['String']>;
  titreDocumentGouvernance2: Maybe<Scalars['String']>;
  titreDocumentGouvernance3: Maybe<Scalars['String']>;
  titreDocumentMontage1: Maybe<Scalars['String']>;
  titreDocumentMontage2: Maybe<Scalars['String']>;
  titreDocumentMontage3: Maybe<Scalars['String']>;
  titreDocumentMontage4: Maybe<Scalars['String']>;
  titreFaq: Maybe<Scalars['String']>;
  titreGouvernance: Maybe<Scalars['String']>;
  titreLexique: Maybe<Scalars['String']>;
  titreMontage: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Page Approfondir (page_approfondir) */
export type PageApprofondirRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

export type PageDecouvrirModelCitationHistoriqueField = {
  __typename?: 'PageDecouvrirModelCitationHistoriqueField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageDecouvrirModelCitationIntroField = {
  __typename?: 'PageDecouvrirModelCitationIntroField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageDecouvrirModelTexteHistoriqueField = {
  __typename?: 'PageDecouvrirModelTexteHistoriqueField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageDecouvrirModelTexteIntroField = {
  __typename?: 'PageDecouvrirModelTexteIntroField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageDecouvrirModelTexteLieuEspritField = {
  __typename?: 'PageDecouvrirModelTexteLieuEspritField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageDecouvrirModelTexteLieuOuField = {
  __typename?: 'PageDecouvrirModelTexteLieuOuField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageDecouvrirModelTextePlanField = {
  __typename?: 'PageDecouvrirModelTextePlanField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Page D??couvrir (page_decouvrir) */
export type PageDecouvrirRecord = RecordInterface & {
  __typename?: 'PageDecouvrirRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  auteurCitationHistorique: Maybe<Scalars['String']>;
  auteurCitationIntro: Maybe<Scalars['String']>;
  citationHistorique: Maybe<PageDecouvrirModelCitationHistoriqueField>;
  citationIntro: Maybe<PageDecouvrirModelCitationIntroField>;
  createdAt: Scalars['DateTime'];
  gpsLieu: Maybe<LatLonField>;
  id: Scalars['ItemId'];
  imageHistorique: Maybe<FileField>;
  imageIntro: Maybe<FileField>;
  imageLieu: Maybe<FileField>;
  imagesGalerie: Array<FileField>;
  portraits: Array<PortraitRecord>;
  texteHistorique: Maybe<PageDecouvrirModelTexteHistoriqueField>;
  texteIntro: Maybe<PageDecouvrirModelTexteIntroField>;
  texteLieuEsprit: Maybe<PageDecouvrirModelTexteLieuEspritField>;
  texteLieuOu: Maybe<PageDecouvrirModelTexteLieuOuField>;
  textePlan: Maybe<PageDecouvrirModelTextePlanField>;
  titreGalerie: Maybe<Scalars['String']>;
  titreHistorique: Maybe<Scalars['String']>;
  titreIntro: Maybe<Scalars['String']>;
  titreLieu: Maybe<Scalars['String']>;
  titrePlan: Maybe<Scalars['String']>;
  titrePortraits: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  videoIntro: Maybe<VideoField>;
  videoLieu: Maybe<VideoField>;
};

/** Record of type Page D??couvrir (page_decouvrir) */
export type PageDecouvrirRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

/** Record of type Page FAQ/Lexique (page_faq_lexique) */
export type PageFaqLexiqueRecord = RecordInterface & {
  __typename?: 'PageFaqLexiqueRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  listeFaq: Array<FaqRecord>;
  listeLexique: Array<LexiqueRecord>;
  titreFaq: Maybe<Scalars['String']>;
  titreLexique: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Page FAQ/Lexique (page_faq_lexique) */
export type PageFaqLexiqueRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

export type PageMentionsContactModelTexteContactField = {
  __typename?: 'PageMentionsContactModelTexteContactField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageMentionsContactModelTexteMentionsField = {
  __typename?: 'PageMentionsContactModelTexteMentionsField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Page Mentions & contact (page_mentions_contact) */
export type PageMentionsContactRecord = RecordInterface & {
  __typename?: 'PageMentionsContactRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  imageContact: Maybe<FileField>;
  texteContact: Maybe<PageMentionsContactModelTexteContactField>;
  texteMentions: Maybe<PageMentionsContactModelTexteMentionsField>;
  titreContact: Maybe<Scalars['String']>;
  titreMentions: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Page Mentions & contact (page_mentions_contact) */
export type PageMentionsContactRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

export type PageNewsletterModelListeDeLienDesAnciennesNlField = {
  __typename?: 'PageNewsletterModelListeDeLienDesAnciennesNlField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageNewsletterModelTexteAbonnementField = {
  __typename?: 'PageNewsletterModelTexteAbonnementField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type PageNewsletterModelTexteDonneesField = {
  __typename?: 'PageNewsletterModelTexteDonneesField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Page Newsletter (page_newsletter) */
export type PageNewsletterRecord = RecordInterface & {
  __typename?: 'PageNewsletterRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  listeDeLienDesAnciennesNl: Maybe<PageNewsletterModelListeDeLienDesAnciennesNlField>;
  texteAbonnement: Maybe<PageNewsletterModelTexteAbonnementField>;
  texteDonnees: Maybe<PageNewsletterModelTexteDonneesField>;
  titreAbonnement: Maybe<Scalars['String']>;
  titreArchives: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Page Newsletter (page_newsletter) */
export type PageNewsletterRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

/** Block of type Palier (palier) */
export type PalierRecord = RecordInterface & {
  __typename?: 'PalierRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  description: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  montant: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};

/** Block of type Palier (palier) */
export type PalierRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

export type PortraitModelFilter = {
  OR: InputMaybe<Array<InputMaybe<PortraitModelFilter>>>;
  _createdAt: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt: InputMaybe<PublishedAtFilter>;
  _isValid: InputMaybe<BooleanFilter>;
  _publicationScheduledAt: InputMaybe<PublishedAtFilter>;
  _publishedAt: InputMaybe<PublishedAtFilter>;
  _status: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt: InputMaybe<PublishedAtFilter>;
  _updatedAt: InputMaybe<UpdatedAtFilter>;
  createdAt: InputMaybe<CreatedAtFilter>;
  id: InputMaybe<ItemIdFilter>;
  imagePortrait: InputMaybe<FileFilter>;
  nom: InputMaybe<StringFilter>;
  statutHabitantAutre: InputMaybe<StringFilter>;
  textePortrait: InputMaybe<StructuredTextFilter>;
  updatedAt: InputMaybe<UpdatedAtFilter>;
};

export enum PortraitModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  nom_ASC = 'nom_ASC',
  nom_DESC = 'nom_DESC',
  statutHabitantAutre_ASC = 'statutHabitantAutre_ASC',
  statutHabitantAutre_DESC = 'statutHabitantAutre_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
}

export type PortraitModelTextePortraitField = {
  __typename?: 'PortraitModelTextePortraitField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Portrait (portrait) */
export type PortraitRecord = RecordInterface & {
  __typename?: 'PortraitRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  imagePortrait: Maybe<FileField>;
  nom: Maybe<Scalars['String']>;
  statutHabitantAutre: Maybe<Scalars['String']>;
  textePortrait: Maybe<PortraitModelTextePortraitField>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Portrait (portrait) */
export type PortraitRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLexiquesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPortraitsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: Maybe<CollectionMetadata>;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allArticles: Array<ArticleRecord>;
  /** Returns a collection of records */
  allFaqs: Array<FaqRecord>;
  /** Returns a collection of records */
  allLexiques: Array<LexiqueRecord>;
  /** Returns a collection of records */
  allPortraits: Array<PortraitRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  article: Maybe<ArticleRecord>;
  /** Returns the single instance record */
  cagnotte: Maybe<CagnotteRecord>;
  /** Returns a specific record */
  faq: Maybe<FaqRecord>;
  /** Returns the single instance record */
  investir: Maybe<InvestirRecord>;
  /** Returns a specific record */
  lexique: Maybe<LexiqueRecord>;
  /** Returns the single instance record */
  pageAccueil: Maybe<PageAccueilRecord>;
  /** Returns the single instance record */
  pageApprofondir: Maybe<PageApprofondirRecord>;
  /** Returns the single instance record */
  pageDecouvrir: Maybe<PageDecouvrirRecord>;
  /** Returns the single instance record */
  pageFaqLexique: Maybe<PageFaqLexiqueRecord>;
  /** Returns the single instance record */
  pageMentionsContact: Maybe<PageMentionsContactRecord>;
  /** Returns the single instance record */
  pageNewsletter: Maybe<PageNewsletterRecord>;
  /** Returns a specific record */
  portrait: Maybe<PortraitRecord>;
  /** Returns the single instance record */
  reglage: Maybe<ReglageRecord>;
  /** Returns a specific asset */
  upload: Maybe<FileField>;
};

/** The query root for this schema */
export type Query_AllArticlesMetaArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ArticleModelFilter>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllFaqsMetaArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<FaqModelFilter>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllLexiquesMetaArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<LexiqueModelFilter>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPortraitsMetaArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<PortraitModelFilter>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter: InputMaybe<UploadFilter>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAllArticlesArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllFaqsArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<FaqModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllLexiquesArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<LexiqueModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LexiqueModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllPortraitsArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<PortraitModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PortraitModelOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryArticleArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<ArticleModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCagnotteArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryFaqArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<FaqModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryInvestirArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryLexiqueArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<LexiqueModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LexiqueModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryPageAccueilArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPageApprofondirArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPageDecouvrirArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPageFaqLexiqueArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPageMentionsContactArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPageNewsletterArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPortraitArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<PortraitModelFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PortraitModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryReglageArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  filter: InputMaybe<UploadFilter>;
  locale: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
};

export type RecordInterface_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

/** Record of type R??glages g??n??raux (reglage) */
export type ReglageRecord = RecordInterface & {
  __typename?: 'ReglageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt: Maybe<Scalars['DateTime']>;
  _publishedAt: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  accueil: Maybe<Scalars['String']>;
  actus: Maybe<Scalars['String']>;
  approfondir: Maybe<Scalars['String']>;
  couleur1: Maybe<ColorField>;
  couleur2: Maybe<ColorField>;
  couleur3: Maybe<ColorField>;
  createdAt: Scalars['DateTime'];
  decouvrir: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  facebook: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  investir: Maybe<Scalars['String']>;
  logo: Maybe<FileField>;
  newsletter: Maybe<Scalars['String']>;
  notreNewsletter: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type R??glages g??n??raux (reglage) */
export type ReglageRecord_SeoMetaTagsArgs = {
  locale: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64: Maybe<Scalars['String']>;
  bgColor: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

export type SeoField = {
  __typename?: 'SeoField';
  description: Maybe<Scalars['String']>;
  image: Maybe<FileField>;
  title: Maybe<Scalars['String']>;
  twitterCard: Maybe<Scalars['String']>;
};

export type Site = {
  __typename?: 'Site';
  favicon: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};

export type SiteGlobalSeoArgs = {
  fallbackLocales: InputMaybe<Array<SiteLocale>>;
  locale: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  fr_FR = 'fr_FR',
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq: InputMaybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq: InputMaybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter Structured Text fields */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes: Maybe<Scalars['MetaTagAttributes']>;
  content: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq: InputMaybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq: InputMaybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  OR: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt: InputMaybe<UploadUpdatedAtFilter>;
  alt: InputMaybe<UploadAltFilter>;
  author: InputMaybe<UploadAuthorFilter>;
  basename: InputMaybe<UploadBasenameFilter>;
  colors: InputMaybe<UploadColorsFilter>;
  copyright: InputMaybe<UploadCopyrightFilter>;
  filename: InputMaybe<UploadFilenameFilter>;
  format: InputMaybe<UploadFormatFilter>;
  height: InputMaybe<UploadHeightFilter>;
  id: InputMaybe<UploadIdFilter>;
  inUse: InputMaybe<InUseFilter>;
  md5: InputMaybe<UploadMd5Filter>;
  mimeType: InputMaybe<UploadMimeTypeFilter>;
  notes: InputMaybe<UploadNotesFilter>;
  orientation: InputMaybe<OrientationFilter>;
  resolution: InputMaybe<ResolutionFilter>;
  size: InputMaybe<UploadSizeFilter>;
  smartTags: InputMaybe<UploadTagsFilter>;
  tags: InputMaybe<UploadTagsFilter>;
  title: InputMaybe<UploadTitleFilter>;
  type: InputMaybe<TypeFilter>;
  width: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq: InputMaybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq: InputMaybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq: InputMaybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
}

export enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to the specified tag */
  contains: InputMaybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn: InputMaybe<Array<Scalars['String']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq: InputMaybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists: InputMaybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq: InputMaybe<Scalars['DateTime']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration: Maybe<Scalars['Int']>;
  framerate: Maybe<Scalars['Int']>;
  mp4Url: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type UploadVideoFieldMp4UrlArgs = {
  exactRes: InputMaybe<VideoMp4Res>;
  res: InputMaybe<VideoMp4Res>;
};

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq: InputMaybe<Scalars['IntType']>;
};

export type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType'];
  provider: Scalars['String'];
  providerUid: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['IntType'];
};

export enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium',
}

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};

export type GetAllArticlesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllArticlesQuery = {
  __typename?: 'Query';
  allArticles: Array<{
    __typename?: 'ArticleRecord';
    id: string;
    titre: string;
    date: string;
    auteurCitation: string;
    image: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    extrait: {
      __typename?: 'ArticleModelExtraitField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texte: {
      __typename?: 'ArticleModelTexteField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    galerie: Array<{
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    }>;
    citation: {
      __typename?: 'ArticleModelCitationField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
  }>;
};

export type GetArticleQueryVariables = Exact<{
  id: InputMaybe<Scalars['ItemId']>;
}>;

export type GetArticleQuery = {
  __typename?: 'Query';
  article: {
    __typename?: 'ArticleRecord';
    id: string;
    titre: string;
    date: string;
    auteurCitation: string;
    image: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    extrait: {
      __typename?: 'ArticleModelExtraitField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texte: {
      __typename?: 'ArticleModelTexteField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    galerie: Array<{
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    }>;
    citation: {
      __typename?: 'ArticleModelCitationField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
  };
};

export type GetCagnotteQueryVariables = Exact<{ [key: string]: never }>;

export type GetCagnotteQuery = {
  __typename?: 'Query';
  cagnotte: {
    __typename?: 'CagnotteRecord';
    titre: string;
    objectif: number;
    aujourdhui: number;
    texte: {
      __typename?: 'CagnotteModelTexteField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    paliers: Array<{ __typename?: 'PalierRecord'; montant: number; description: string }>;
  };
};

export type ImageFragment = {
  __typename?: 'FileField';
  responsiveImage: {
    __typename?: 'ResponsiveImage';
    src: string;
    height: number;
    width: number;
    aspectRatio: number;
    alt: string;
  };
};

export type ReglageFragment = {
  __typename?: 'ReglageRecord';
  accueil: string;
  decouvrir: string;
  approfondir: string;
  investir: string;
  actus: string;
  newsletter: string;
  facebook: string;
  email: string;
  notreNewsletter: string;
  couleur1: { __typename?: 'ColorField'; hex: string };
  couleur2: { __typename?: 'ColorField'; hex: string };
  couleur3: { __typename?: 'ColorField'; hex: string };
  logo: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
};

export type PageAccueilFragment = {
  __typename?: 'PageAccueilRecord';
  titrePrincipal: string;
  citation1Auteur: string;
  citation2Auteur: string;
  image: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  presentation: {
    __typename?: 'PageAccueilModelPresentationField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  introApprofondir: {
    __typename?: 'PageAccueilModelIntroApprofondirField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  imageDecouvrir: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  introDecouvrir: {
    __typename?: 'PageAccueilModelIntroDecouvrirField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  citation1: {
    __typename?: 'PageAccueilModelCitation1Field';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  citation2: {
    __typename?: 'PageAccueilModelCitation2Field';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
};

export type ArticleFragment = {
  __typename?: 'ArticleRecord';
  id: string;
  titre: string;
  date: string;
  auteurCitation: string;
  image: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  extrait: {
    __typename?: 'ArticleModelExtraitField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texte: {
    __typename?: 'ArticleModelTexteField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  galerie: Array<{
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  }>;
  citation: {
    __typename?: 'ArticleModelCitationField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
};

export type InvestirFragment = {
  __typename?: 'InvestirRecord';
  auteurCitation: string;
  citation: {
    __typename?: 'InvestirModelCitationField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteInvestir: {
    __typename?: 'InvestirModelTexteInvestirField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  imageUn: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  imageDeux: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
};

export type PalierFragment = { __typename?: 'PalierRecord'; montant: number; description: string };

export type CagnotteFragment = {
  __typename?: 'CagnotteRecord';
  titre: string;
  objectif: number;
  aujourdhui: number;
  texte: {
    __typename?: 'CagnotteModelTexteField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  paliers: Array<{ __typename?: 'PalierRecord'; montant: number; description: string }>;
};

export type PageApprofondirFragment = {
  __typename?: 'PageApprofondirRecord';
  auteurCitationGouvernance: string;
  auteurCitationCombien: string;
  titreCollaboration: string;
  titreCombien: string;
  titreCopains: string;
  titreDocumentGouvernance1: string;
  titreDocumentGouvernance2: string;
  titreDocumentGouvernance3: string;
  titreDocumentMontage1: string;
  titreDocumentMontage2: string;
  titreDocumentMontage3: string;
  titreDocumentMontage4: string;
  titreFaq: string;
  titreGouvernance: string;
  titreLexique: string;
  titreMontage: string;
  citationGouvernance: {
    __typename?: 'PageApprofondirModelCitationGouvernanceField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  citationCombien: {
    __typename?: 'PageApprofondirModelCitationCombienField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  documentGouvernance1: { __typename?: 'FileField'; url: string };
  documentGouvernance2: { __typename?: 'FileField'; url: string };
  documentGouvernance3: { __typename?: 'FileField'; url: string };
  documentMontage1: { __typename?: 'FileField'; url: string };
  documentMontage2: { __typename?: 'FileField'; url: string };
  documentMontage3: { __typename?: 'FileField'; url: string };
  documentMontage4: { __typename?: 'FileField'; url: string };
  imageCombien: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  imageCopains: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  imagesCollaboration: Array<{
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  }>;
  texteCollaboration: {
    __typename?: 'PageApprofondirModelTexteCollaborationField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteCombien: {
    __typename?: 'PageApprofondirModelTexteCombienField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteCopains: {
    __typename?: 'PageApprofondirModelTexteCopainsField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteGouvernance: {
    __typename?: 'PageApprofondirModelTexteGouvernanceField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteMontage: {
    __typename?: 'PageApprofondirModelTexteMontageField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
};

export type PageDecouvrirFragment = {
  __typename?: 'PageDecouvrirRecord';
  auteurCitationHistorique: string;
  auteurCitationIntro: string;
  titreGalerie: string;
  titreHistorique: string;
  titreIntro: string;
  titreLieu: string;
  titrePlan: string;
  titrePortraits: string;
  citationHistorique: {
    __typename?: 'PageDecouvrirModelCitationHistoriqueField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  citationIntro: {
    __typename?: 'PageDecouvrirModelCitationIntroField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  gpsLieu: { __typename?: 'LatLonField'; latitude: number; longitude: number };
  imageHistorique: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  imageLieu: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  imagesGalerie: Array<{
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  }>;
  imageIntro: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
  portraits: Array<{
    __typename?: 'PortraitRecord';
    nom: string;
    statutHabitantAutre: string;
    imagePortrait: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    textePortrait: {
      __typename?: 'PortraitModelTextePortraitField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
  }>;
  texteHistorique: {
    __typename?: 'PageDecouvrirModelTexteHistoriqueField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteIntro: {
    __typename?: 'PageDecouvrirModelTexteIntroField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteLieuEsprit: {
    __typename?: 'PageDecouvrirModelTexteLieuEspritField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteLieuOu: {
    __typename?: 'PageDecouvrirModelTexteLieuOuField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  textePlan: {
    __typename?: 'PageDecouvrirModelTextePlanField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  videoIntro: { __typename?: 'VideoField'; url: string };
  videoLieu: { __typename?: 'VideoField'; url: string };
};

export type PageNewsletterFragment = {
  __typename?: 'PageNewsletterRecord';
  titreAbonnement: string;
  titreArchives: string;
  listeDeLienDesAnciennesNl: {
    __typename?: 'PageNewsletterModelListeDeLienDesAnciennesNlField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteAbonnement: {
    __typename?: 'PageNewsletterModelTexteAbonnementField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  texteDonnees: {
    __typename?: 'PageNewsletterModelTexteDonneesField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
};

export type FaqFragment = {
  __typename?: 'FaqRecord';
  question: string;
  reponse: {
    __typename?: 'FaqModelReponseField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
};

export type LexiqueFragment = {
  __typename?: 'LexiqueRecord';
  notion: string;
  definition: {
    __typename?: 'LexiqueModelDefinitionField';
    blocks: Array<string>;
    value: Json;
    links: Array<string>;
  };
};

export type MentionsFragment = {
  __typename?: 'PageMentionsContactRecord';
  titreMentions: string;
  texteMentions: {
    __typename?: 'PageMentionsContactModelTexteMentionsField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
};

export type ContactFragment = {
  __typename?: 'PageMentionsContactRecord';
  titreContact: string;
  texteContact: {
    __typename?: 'PageMentionsContactModelTexteContactField';
    blocks: Array<string>;
    links: Array<string>;
    value: Json;
  };
  imageContact: {
    __typename?: 'FileField';
    responsiveImage: {
      __typename?: 'ResponsiveImage';
      src: string;
      height: number;
      width: number;
      aspectRatio: number;
      alt: string;
    };
  };
};

export type GetInvestirQueryVariables = Exact<{ [key: string]: never }>;

export type GetInvestirQuery = {
  __typename?: 'Query';
  investir: {
    __typename?: 'InvestirRecord';
    auteurCitation: string;
    citation: {
      __typename?: 'InvestirModelCitationField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteInvestir: {
      __typename?: 'InvestirModelTexteInvestirField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    imageUn: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    imageDeux: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
  };
};

export type GetPageAccueilQueryVariables = Exact<{ [key: string]: never }>;

export type GetPageAccueilQuery = {
  __typename?: 'Query';
  pageAccueil: {
    __typename?: 'PageAccueilRecord';
    titrePrincipal: string;
    citation1Auteur: string;
    citation2Auteur: string;
    image: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    presentation: {
      __typename?: 'PageAccueilModelPresentationField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    introApprofondir: {
      __typename?: 'PageAccueilModelIntroApprofondirField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    imageDecouvrir: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    introDecouvrir: {
      __typename?: 'PageAccueilModelIntroDecouvrirField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    citation1: {
      __typename?: 'PageAccueilModelCitation1Field';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    citation2: {
      __typename?: 'PageAccueilModelCitation2Field';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
  };
};

export type GetPageApprofondirQueryVariables = Exact<{ [key: string]: never }>;

export type GetPageApprofondirQuery = {
  __typename?: 'Query';
  pageApprofondir: {
    __typename?: 'PageApprofondirRecord';
    auteurCitationGouvernance: string;
    auteurCitationCombien: string;
    titreCollaboration: string;
    titreCombien: string;
    titreCopains: string;
    titreDocumentGouvernance1: string;
    titreDocumentGouvernance2: string;
    titreDocumentGouvernance3: string;
    titreDocumentMontage1: string;
    titreDocumentMontage2: string;
    titreDocumentMontage3: string;
    titreDocumentMontage4: string;
    titreFaq: string;
    titreGouvernance: string;
    titreLexique: string;
    titreMontage: string;
    citationGouvernance: {
      __typename?: 'PageApprofondirModelCitationGouvernanceField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    citationCombien: {
      __typename?: 'PageApprofondirModelCitationCombienField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    documentGouvernance1: { __typename?: 'FileField'; url: string };
    documentGouvernance2: { __typename?: 'FileField'; url: string };
    documentGouvernance3: { __typename?: 'FileField'; url: string };
    documentMontage1: { __typename?: 'FileField'; url: string };
    documentMontage2: { __typename?: 'FileField'; url: string };
    documentMontage3: { __typename?: 'FileField'; url: string };
    documentMontage4: { __typename?: 'FileField'; url: string };
    imageCombien: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    imageCopains: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    imagesCollaboration: Array<{
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    }>;
    texteCollaboration: {
      __typename?: 'PageApprofondirModelTexteCollaborationField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteCombien: {
      __typename?: 'PageApprofondirModelTexteCombienField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteCopains: {
      __typename?: 'PageApprofondirModelTexteCopainsField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteGouvernance: {
      __typename?: 'PageApprofondirModelTexteGouvernanceField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteMontage: {
      __typename?: 'PageApprofondirModelTexteMontageField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
  };
};

export type GetPageDecouvrirQueryVariables = Exact<{ [key: string]: never }>;

export type GetPageDecouvrirQuery = {
  __typename?: 'Query';
  pageDecouvrir: {
    __typename?: 'PageDecouvrirRecord';
    auteurCitationHistorique: string;
    auteurCitationIntro: string;
    titreGalerie: string;
    titreHistorique: string;
    titreIntro: string;
    titreLieu: string;
    titrePlan: string;
    titrePortraits: string;
    citationHistorique: {
      __typename?: 'PageDecouvrirModelCitationHistoriqueField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    citationIntro: {
      __typename?: 'PageDecouvrirModelCitationIntroField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    gpsLieu: { __typename?: 'LatLonField'; latitude: number; longitude: number };
    imageHistorique: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    imageLieu: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    imagesGalerie: Array<{
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    }>;
    imageIntro: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
    portraits: Array<{
      __typename?: 'PortraitRecord';
      nom: string;
      statutHabitantAutre: string;
      imagePortrait: {
        __typename?: 'FileField';
        responsiveImage: {
          __typename?: 'ResponsiveImage';
          src: string;
          height: number;
          width: number;
          aspectRatio: number;
          alt: string;
        };
      };
      textePortrait: {
        __typename?: 'PortraitModelTextePortraitField';
        blocks: Array<string>;
        links: Array<string>;
        value: Json;
      };
    }>;
    texteHistorique: {
      __typename?: 'PageDecouvrirModelTexteHistoriqueField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteIntro: {
      __typename?: 'PageDecouvrirModelTexteIntroField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteLieuEsprit: {
      __typename?: 'PageDecouvrirModelTexteLieuEspritField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteLieuOu: {
      __typename?: 'PageDecouvrirModelTexteLieuOuField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    textePlan: {
      __typename?: 'PageDecouvrirModelTextePlanField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    videoIntro: { __typename?: 'VideoField'; url: string };
    videoLieu: { __typename?: 'VideoField'; url: string };
  };
};

export type GetPageFaqLexiqueQueryVariables = Exact<{ [key: string]: never }>;

export type GetPageFaqLexiqueQuery = {
  __typename?: 'Query';
  pageFaqLexique: {
    __typename?: 'PageFaqLexiqueRecord';
    titreFaq: string;
    titreLexique: string;
    listeFaq: Array<{
      __typename?: 'FaqRecord';
      question: string;
      reponse: {
        __typename?: 'FaqModelReponseField';
        blocks: Array<string>;
        links: Array<string>;
        value: Json;
      };
    }>;
    listeLexique: Array<{
      __typename?: 'LexiqueRecord';
      notion: string;
      definition: {
        __typename?: 'LexiqueModelDefinitionField';
        blocks: Array<string>;
        value: Json;
        links: Array<string>;
      };
    }>;
  };
};

export type GetPageMentionsContactQueryVariables = Exact<{ [key: string]: never }>;

export type GetPageMentionsContactQuery = {
  __typename?: 'Query';
  pageMentionsContact: {
    __typename?: 'PageMentionsContactRecord';
    titreMentions: string;
    titreContact: string;
    texteMentions: {
      __typename?: 'PageMentionsContactModelTexteMentionsField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteContact: {
      __typename?: 'PageMentionsContactModelTexteContactField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    imageContact: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
  };
};

export type GetPageNewsletterQueryVariables = Exact<{ [key: string]: never }>;

export type GetPageNewsletterQuery = {
  __typename?: 'Query';
  pageNewsletter: {
    __typename?: 'PageNewsletterRecord';
    titreAbonnement: string;
    titreArchives: string;
    listeDeLienDesAnciennesNl: {
      __typename?: 'PageNewsletterModelListeDeLienDesAnciennesNlField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteAbonnement: {
      __typename?: 'PageNewsletterModelTexteAbonnementField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
    texteDonnees: {
      __typename?: 'PageNewsletterModelTexteDonneesField';
      blocks: Array<string>;
      links: Array<string>;
      value: Json;
    };
  };
};

export type GetReglageQueryVariables = Exact<{ [key: string]: never }>;

export type GetReglageQuery = {
  __typename?: 'Query';
  reglage: {
    __typename?: 'ReglageRecord';
    accueil: string;
    decouvrir: string;
    approfondir: string;
    investir: string;
    actus: string;
    newsletter: string;
    facebook: string;
    email: string;
    notreNewsletter: string;
    couleur1: { __typename?: 'ColorField'; hex: string };
    couleur2: { __typename?: 'ColorField'; hex: string };
    couleur3: { __typename?: 'ColorField'; hex: string };
    logo: {
      __typename?: 'FileField';
      responsiveImage: {
        __typename?: 'ResponsiveImage';
        src: string;
        height: number;
        width: number;
        aspectRatio: number;
        alt: string;
      };
    };
  };
};

export const ImageFragmentDoc = gql`
  fragment Image on FileField {
    responsiveImage {
      src
      height
      width
      aspectRatio
      alt
    }
  }
`;
export const ReglageFragmentDoc = gql`
  fragment Reglage on ReglageRecord {
    couleur1 {
      hex
    }
    couleur2 {
      hex
    }
    couleur3 {
      hex
    }
    logo {
      ...Image
    }
    accueil
    decouvrir
    approfondir
    investir
    actus
    newsletter
    facebook
    email
    notreNewsletter
  }
  ${ImageFragmentDoc}
`;
export const PageAccueilFragmentDoc = gql`
  fragment PageAccueil on PageAccueilRecord {
    image {
      ...Image
    }
    titrePrincipal
    presentation {
      blocks
      links
      value
    }
    introApprofondir {
      blocks
      links
      value
    }
    imageDecouvrir {
      ...Image
    }
    introDecouvrir {
      blocks
      links
      value
    }
    citation1 {
      blocks
      links
      value
    }
    citation1Auteur
    citation2 {
      blocks
      links
      value
    }
    citation2Auteur
  }
  ${ImageFragmentDoc}
`;
export const ArticleFragmentDoc = gql`
  fragment Article on ArticleRecord {
    id
    titre
    image {
      ...Image
    }
    date
    extrait {
      blocks
      links
      value
    }
    texte {
      blocks
      links
      value
    }
    galerie {
      ...Image
    }
    citation {
      blocks
      links
      value
    }
    auteurCitation
  }
  ${ImageFragmentDoc}
`;
export const InvestirFragmentDoc = gql`
  fragment Investir on InvestirRecord {
    auteurCitation
    citation {
      blocks
      links
      value
    }
    texteInvestir {
      blocks
      links
      value
    }
    imageUn {
      ...Image
    }
    imageDeux {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;
export const PalierFragmentDoc = gql`
  fragment Palier on PalierRecord {
    montant
    description
  }
`;
export const CagnotteFragmentDoc = gql`
  fragment Cagnotte on CagnotteRecord {
    titre
    objectif
    aujourdhui
    texte {
      blocks
      links
      value
    }
    paliers {
      ...Palier
    }
  }
  ${PalierFragmentDoc}
`;
export const PageApprofondirFragmentDoc = gql`
  fragment PageApprofondir on PageApprofondirRecord {
    auteurCitationGouvernance
    citationGouvernance {
      blocks
      links
      value
    }
    auteurCitationCombien
    citationCombien {
      blocks
      links
      value
    }
    documentGouvernance1 {
      url
    }
    documentGouvernance2 {
      url
    }
    documentGouvernance3 {
      url
    }
    documentMontage1 {
      url
    }
    documentMontage2 {
      url
    }
    documentMontage3 {
      url
    }
    documentMontage4 {
      url
    }
    imageCombien {
      ...Image
    }
    imageCopains {
      ...Image
    }
    imagesCollaboration {
      ...Image
    }
    texteCollaboration {
      blocks
      links
      value
    }
    texteCombien {
      blocks
      links
      value
    }
    texteCopains {
      blocks
      links
      value
    }
    texteGouvernance {
      blocks
      links
      value
    }
    texteMontage {
      blocks
      links
      value
    }
    titreCollaboration
    titreCombien
    titreCopains
    titreDocumentGouvernance1
    titreDocumentGouvernance2
    titreDocumentGouvernance3
    titreDocumentMontage1
    titreDocumentMontage2
    titreDocumentMontage3
    titreDocumentMontage4
    titreFaq
    titreGouvernance
    titreLexique
    titreMontage
  }
  ${ImageFragmentDoc}
`;
export const PageDecouvrirFragmentDoc = gql`
  fragment PageDecouvrir on PageDecouvrirRecord {
    auteurCitationHistorique
    auteurCitationIntro
    citationHistorique {
      blocks
      links
      value
    }
    citationIntro {
      blocks
      links
      value
    }
    gpsLieu {
      latitude
      longitude
    }
    imageHistorique {
      ...Image
    }
    imageLieu {
      ...Image
    }
    imagesGalerie {
      ...Image
    }
    imageIntro {
      ...Image
    }
    portraits {
      nom
      imagePortrait {
        ...Image
      }
      statutHabitantAutre
      textePortrait {
        blocks
        links
        value
      }
    }
    texteHistorique {
      blocks
      links
      value
    }
    texteIntro {
      blocks
      links
      value
    }
    texteLieuEsprit {
      blocks
      links
      value
    }
    texteLieuOu {
      blocks
      links
      value
    }
    textePlan {
      blocks
      links
      value
    }
    titreGalerie
    titreHistorique
    titreIntro
    titreLieu
    titrePlan
    titrePortraits
    videoIntro {
      url
    }
    videoLieu {
      url
    }
  }
  ${ImageFragmentDoc}
`;
export const PageNewsletterFragmentDoc = gql`
  fragment PageNewsletter on PageNewsletterRecord {
    listeDeLienDesAnciennesNl {
      blocks
      links
      value
    }
    texteAbonnement {
      blocks
      links
      value
    }
    texteDonnees {
      blocks
      links
      value
    }
    titreAbonnement
    titreArchives
  }
`;
export const FaqFragmentDoc = gql`
  fragment Faq on FaqRecord {
    question
    reponse {
      blocks
      links
      value
    }
  }
`;
export const LexiqueFragmentDoc = gql`
  fragment Lexique on LexiqueRecord {
    notion
    definition {
      blocks
      value
      links
    }
  }
`;
export const MentionsFragmentDoc = gql`
  fragment Mentions on PageMentionsContactRecord {
    titreMentions
    texteMentions {
      blocks
      links
      value
    }
  }
`;
export const ContactFragmentDoc = gql`
  fragment Contact on PageMentionsContactRecord {
    titreContact
    texteContact {
      blocks
      links
      value
    }
    imageContact {
      ...Image
    }
  }
  ${ImageFragmentDoc}
`;
export const GetAllArticlesDocument = gql`
  query getAllArticles {
    allArticles(orderBy: date_DESC) {
      ...Article
    }
  }
  ${ArticleFragmentDoc}
`;
export const GetArticleDocument = gql`
  query getArticle($id: ItemId) {
    article(filter: { id: { eq: $id } }) {
      ...Article
    }
  }
  ${ArticleFragmentDoc}
`;
export const GetCagnotteDocument = gql`
  query getCagnotte {
    cagnotte {
      ...Cagnotte
    }
  }
  ${CagnotteFragmentDoc}
`;
export const GetInvestirDocument = gql`
  query getInvestir {
    investir {
      ...Investir
    }
  }
  ${InvestirFragmentDoc}
`;
export const GetPageAccueilDocument = gql`
  query getPageAccueil {
    pageAccueil {
      ...PageAccueil
    }
  }
  ${PageAccueilFragmentDoc}
`;
export const GetPageApprofondirDocument = gql`
  query getPageApprofondir {
    pageApprofondir {
      ...PageApprofondir
    }
  }
  ${PageApprofondirFragmentDoc}
`;
export const GetPageDecouvrirDocument = gql`
  query getPageDecouvrir {
    pageDecouvrir {
      ...PageDecouvrir
    }
  }
  ${PageDecouvrirFragmentDoc}
`;
export const GetPageFaqLexiqueDocument = gql`
  query getPageFaqLexique {
    pageFaqLexique {
      titreFaq
      listeFaq {
        ...Faq
      }
      titreLexique
      listeLexique {
        ...Lexique
      }
    }
  }
  ${FaqFragmentDoc}
  ${LexiqueFragmentDoc}
`;
export const GetPageMentionsContactDocument = gql`
  query getPageMentionsContact {
    pageMentionsContact {
      ...Mentions
      ...Contact
    }
  }
  ${MentionsFragmentDoc}
  ${ContactFragmentDoc}
`;
export const GetPageNewsletterDocument = gql`
  query getPageNewsletter {
    pageNewsletter {
      ...PageNewsletter
    }
  }
  ${PageNewsletterFragmentDoc}
`;
export const GetReglageDocument = gql`
  query getReglage {
    reglage {
      ...Reglage
    }
  }
  ${ReglageFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllArticles(
      variables?: GetAllArticlesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetAllArticlesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAllArticlesQuery>(GetAllArticlesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getAllArticles',
        'query'
      );
    },
    getArticle(
      variables?: GetArticleQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetArticleQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetArticleQuery>(GetArticleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getArticle',
        'query'
      );
    },
    getCagnotte(
      variables?: GetCagnotteQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetCagnotteQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCagnotteQuery>(GetCagnotteDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getCagnotte',
        'query'
      );
    },
    getInvestir(
      variables?: GetInvestirQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetInvestirQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetInvestirQuery>(GetInvestirDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getInvestir',
        'query'
      );
    },
    getPageAccueil(
      variables?: GetPageAccueilQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetPageAccueilQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageAccueilQuery>(GetPageAccueilDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPageAccueil',
        'query'
      );
    },
    getPageApprofondir(
      variables?: GetPageApprofondirQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetPageApprofondirQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageApprofondirQuery>(GetPageApprofondirDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPageApprofondir',
        'query'
      );
    },
    getPageDecouvrir(
      variables?: GetPageDecouvrirQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetPageDecouvrirQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageDecouvrirQuery>(GetPageDecouvrirDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPageDecouvrir',
        'query'
      );
    },
    getPageFaqLexique(
      variables?: GetPageFaqLexiqueQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetPageFaqLexiqueQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageFaqLexiqueQuery>(GetPageFaqLexiqueDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPageFaqLexique',
        'query'
      );
    },
    getPageMentionsContact(
      variables?: GetPageMentionsContactQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetPageMentionsContactQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageMentionsContactQuery>(GetPageMentionsContactDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPageMentionsContact',
        'query'
      );
    },
    getPageNewsletter(
      variables?: GetPageNewsletterQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetPageNewsletterQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetPageNewsletterQuery>(GetPageNewsletterDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getPageNewsletter',
        'query'
      );
    },
    getReglage(
      variables?: GetReglageQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetReglageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetReglageQuery>(GetReglageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getReglage',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
