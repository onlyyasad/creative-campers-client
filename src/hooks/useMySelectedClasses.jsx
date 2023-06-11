
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMySelectedClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/selectedClasses?email=${user?.email}`)
            return response.data
        }
    })

    return [selectedClasses, refetch]
};

export default useMySelectedClasses;