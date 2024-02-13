import Anuncio from './card.model'



  export const createCard = async (body) => { 
    return await Anuncio.create({
      title: body.title,
      price: body.price,
      createdDate: new Date(),
      description: body.description,
      category: body.category
    })}

  
 
