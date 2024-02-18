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
};


export type GetRelatedpostsByCategoryParams = {
  categoryId: string
  postId: string
  limit?: number
  page: number | string
}

export type DeletePostParams = {
  postId: string
}

export type GetAllPostsParams = {
  query: string
  category: string
  limit: number
  page: number
}