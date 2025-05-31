import pool from './pool';
import { ResultSetHeader } from 'mysql2/promise';
import { CategoryDtoRequest, CategoryDtoResponse } from '../dto/categoryDto';

export const getUserCategories = async (userId: number): Promise<CategoryDtoResponse[]> => {
    try {
        const [rows] = await pool.query<CategoryDtoResponse[]>('SELECT * FROM categories WHERE owner_id = ?', [userId]);
        return rows as CategoryDtoResponse[];
    } catch (error) {
        throw new Error('Error occured while getting user categories: ' + error);
    }
};

export const createCategory = async (category: CategoryDtoRequest): Promise<ResultSetHeader> => {
    try {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO categories (name, owner_id) VALUES (?, ?)', [category.name, category.owner_id]);
        return result;
    } catch (error) {
        throw new Error('Error occured while creating category: ' + error);
    }
};