import express,{ Request, Response } from 'express';
import { createCategoryService, getUserCategoriesService } from '../service/categoryService';

const router = express.Router();

router.get('/categories', async (req: Request, res: Response) => {
    const userId = req.body.userId;
    try {
        const categories = await getUserCategoriesService(userId);
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get user categories: ' + error });
    }
});

router.post('/categories', async (req: Request, res: Response) => {
    const category = req.body;
    try {
        const result = await createCategoryService(category);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create category: ' + error });
    }
});