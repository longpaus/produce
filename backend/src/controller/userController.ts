import express,{ Request, Response } from 'express';
import { createUser, getUserByEmail, deleteUser, login } from '../service/userService';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello Worlddd' });
});

// Create a new user
router.post('/register', async (req: Request, res: Response) => {
    const user = req.body
    console.log(user);
    try {
        const result = await createUser(user);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user: ' + error });
    }
});

// Login route
router.post('/login', async (req: Request, res: Response) => {
    const { email, hashed_password } = req.body;
    try {
        const result = await login(email, hashed_password);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Login failed: ' + error });
    }
});

// Get a user by email
router.get('/users/:email', async (req: Request, res: Response) => {
    const email = req.params.email;
    try {
        const result = await getUserByEmail(email);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get user by email: ' + error });
    }
});

// Delete a user by id
router.delete('/users/:id', async (req: Request, res: Response) => {
    const id:number = parseInt(req.params.id);
    try {
        const result = await deleteUser(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user: ' + error });
    }
});


export default router;