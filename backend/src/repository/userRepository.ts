import pool from './pool';
import { ResultSetHeader } from 'mysql2/promise';
import { UserDtoRequest, UserDtoResponse } from '../dto/userDto';

export const getAllUsers = async (): Promise<UserDtoResponse[]> => {
    try {
        const [rows] = await pool.query<UserDtoResponse[]>('SELECT * FROM users');
        return rows as UserDtoResponse[];
    } catch (error) {
        throw new Error('Error occured while getting all users: ' + error);
    }
};

export const getUserByEmail = async (email: string) => {
    try {
        const [rows] = await pool.query<UserDtoResponse[]>('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    } catch (error) {
        throw new Error('Error occured while getting user by email: ' + error);
    }
};

export const createUser = async (user: UserDtoRequest) => {
    try {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)', [user.username, user.email, user.password_hash]);
        return result;
    } catch (error) {
        throw new Error('Error occured while creating user: ' + error);
    }
};

export const deleteUserById = async (id: number) => {
    try {
        const [result] = await pool.query<ResultSetHeader>('DELETE FROM users WHERE id = ?', [id]);
        return result;
    } catch (error) {
        throw new Error('Error occured while deleting user by id: ' + error);
    }
};