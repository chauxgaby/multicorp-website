
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useGetDataCategories = () => {
    const { data, error } = useSWR('/api/data', fetcher)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}