
export type TApiResult<T> = {
  results: T[],
	next?: string
}


export interface TAuthorInfo {
	author_id: number;
	avatar: string;
}

export interface TChartImg {
	id: number;
	imgUrl: string;
	name: string;
	description: string;
}

export interface TChartPattern {
	id: number;
	name: string;
	author_info: TAuthorInfo;
	chart_imgs: TChartImg[];
	category: string;
	description: string;
}


export interface Blog {
	id: number;
	name: string;
}

export interface TAuthorInfo {
	author_id: number;
	avatar: string;
}

export interface TSeries {
	id: number;
	name: string;
	blogs: Blog[];
	created_at: string;
	author: string;
	author_info: TAuthorInfo;
	description: string;
}

export interface TAuthorInfo {
	author_id: number;
	avatar: string;
}

export interface TRelatedBlog {
	id: number;
	name: string;
}

export interface TAuthor {
	user: string;
	avatar: string;
}

export interface TReply {
	content: string;
	created_at: string;
	author: TAuthor;
}

export interface TBlog {
	id: number;
	created_at: string;
	status_type: number;
	author: string;
	author_info: TAuthorInfo;
	related_blog: TRelatedBlog[];
	thumbnail_image_url: string;
	description: string;
	html_string: string;
	name: string;
	sub_title: string;
	view_count: number;
	like_count: number;
	replies: TReply[];
}