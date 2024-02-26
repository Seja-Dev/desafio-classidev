export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

export type CreateCategoryParams = {
  categoryName: string;
};

export type CreatePostParams = {
  userId: string;
  post: {
    name: string;
    description: string;
    categoryId: string;
    price: string;
  };
  path: string;
};

export type GetRelatedpostsByCategoryParams = {
  categoryId: string;
  postId: string;
  limit?: number;
  page: number | string;
};

export type DeletePostParams = {
  postId: string;
  path: string;
};

export type GetAllPostsParams = {
  query?: string;
  category?: string;
  limit: number;
  page: number;
};

export type UpdatePostParams = {
  userId: string;
  post: {
    _id: string;
    name: string;
    description: string;
    categoryId: string;
    price: string;
  };

  path: string;
};

export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}


export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}