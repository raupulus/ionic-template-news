export interface PostsCollection {
    status: string;
    results: number;
    total_results: number;
    data: Post[];
}

export interface CategoriesCollection {
    status: string;
    results: number;
    total_results: number;
    data: Category[];
}

export interface Post {
    id: number;
    parent_id?: number;
    position: number;
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    image_type: string;
    author: Author;
    categories?: Category[];
    source: Source;
    has_enabled_comments: boolean;
    n_comments: number;
    created_at: string;
    updated_at: string;
    published_at: string;
    slug: string;
}

export interface Author {
    id: number;
    name: string;
    username: string;
    email: string;
    web: string;
    url: string;
    registered_at: string;
}

export interface Category {
    id: number;
    slug: string;
    name: string;
    description: string;
    url: string;
}

export interface Source {
    domain: string;
    code: string;
    name: string;
    home: string;
    url: string;
    image: string;
    description: string;
    admin_email: string;
}
