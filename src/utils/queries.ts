import { useQuery } from "@tanstack/react-query"
import { getPosts, getPost } from '@/utils/api';

export const userPosts = () => {
    const query = useQuery({ queryKey: ['posts'], queryFn: getPosts })
    return query
}

export const usePost = (id: number) => useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id)
})