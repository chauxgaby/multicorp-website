export const getServicesListServices = async () => {
    try {
        const response = await fetch('/api/data').then((response) => response.json())
        return response.categories
    } catch (error) {
        console.log('error:getServicesListCategories', error)
    }
}