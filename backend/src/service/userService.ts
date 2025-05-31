import { 
    createUser as createUserRepository,
    getUserByEmail as getUserByEmailRepository, 
    deleteUserById as deleteUserByIdRepository,
} from '../repository/userRepository';
import { UserDtoRequest, UserDtoResponse } from '../dto/userDto';
import { ResultSetHeader } from 'mysql2/promise';
import bcrypt from 'bcrypt';

export const createUser = async (user: UserDtoRequest): Promise<ResultSetHeader> => {
    try {
        const result = await createUserRepository(user);
        return result;
    } catch (error) {
        throw error;
    }
};

export const getUserByEmail = async (email: string): Promise<UserDtoResponse> => {
    try {
        const result = await getUserByEmailRepository(email);
        return result;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id: number): Promise<ResultSetHeader> => {
    try {
        const result = await deleteUserByIdRepository(id);
        return result;
    } catch (error) {
        throw error;
    }
};

export const login = async (email: string, hashed_password: string): Promise<UserDtoResponse> => {
    try {
        const result = await getUserByEmail(email);
        if (!result) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(hashed_password, result.password_hash);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        return result;
    } catch (error) {
        throw error;
    }
};