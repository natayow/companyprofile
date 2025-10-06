export interface BlogData {
  objectId: string;
  title: string;
  summary: string;
  body: string;
  author: string;
  blogdate: string;
  imgurl: string;
}

export interface BlogResponse {
  data: BlogData;
  error?: string;
  details?: string;
}

export interface BlogsResponse {
  data: BlogData[];
  error?: string;
}