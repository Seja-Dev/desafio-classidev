import createHandler from '../../../lib/middlewares/nextConnect'
import { createCard, getCards,deleteCard } from '../../../modules/card.service'; 
 import { createCardSchema,deleteCardSchema } from '../../../modules/card.schema';
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
router.get(async (req, res) => {
    try {
  
      const cards = await getCards()
      res.status(200).send(cards)
    } catch (err) {
      return res.status(500).send(err.message)
    }
  });
  router.delete(validation(deleteCardSchema), async (req, res) => {
    try {
      const deletedCard = await deleteCard(req.body.id)
      if (deletedCard)
        return res.status(200).send({ ok: true }) 

      return res.status(400).send('post not found')
    } catch (err) {
      return res.status(500).send(err.message)
    }
  });



export default router
