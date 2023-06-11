
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePaymentHistory = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: enrolledClasses = [], refetch } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/payments/enrolledClasses?email=${user?.email}`)
            return response.data
        }
    })
    return [enrolledClasses, refetch]
};

export default usePaymentHistory;