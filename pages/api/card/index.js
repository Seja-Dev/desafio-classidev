import createHandler from '../../../lib/middlewares/nextConnect'
import { createCard } from '../../../modules/card.service'; 
 import { createCardSchema } from '../../../modules/card.schema';
import validation from '../../../lib/middlewares/validation';

const router = createHandler();


router.post(validation({body:createCardSchema}), async (req, res) => {
    try {
        const newCard = await  createCard(req.body)
      res.status(201).send(newCard)
    } catch (err) {
        res.status(400).json(err.message);
    }
});

export default router
