import { CategoryDtoRequest, CategoryDtoResponse } from '../dto/categoryDto';
import { createCategory, getUserCategories } from '../repository/categoryRepository';
import { ResultSetHeader } from 'mysql2/promise';

export const getUserCategoriesService = async (userId: number): Promise<CategoryDtoResponse[]> => {
    try {
        return await getUserCategories(userId);
    } catch (error) {
        throw error;
    }
};

export const createCategoryService = async (category: CategoryDtoRequest): Promise<ResultSetHeader> => {
    try {
        return await createCategory(category);
    } catch (error) {
        throw error;
    }
};