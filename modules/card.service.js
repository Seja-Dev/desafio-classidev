import Anuncio from './card.model'



  export const createCard = async (body) => { 
    return await Anuncio.create({
      title: body.title,
      price: body.price,
      createdDate: new Date(),
      description: body.description,
      category: body.category
    })}
    export const getCards = async (limit = 10) => {
      return await Anuncio.find()
      .sort({createdDate: -1}) 
      .limit(limit)
    }
    export const deleteCard = async (id) => {
      return await Anuncio.findOneAndDelete({
        _id: id,
      })
    }
    export const editCard = async (body, user) => {
      return await Post.findOneAndUpdate({
        _id: body.id,
    
      },{
        title: body.title,
        price: body.price,
        description: body.description,
        category: body.category
      },{
        new: true // mongoBD vai manda pra nós o documento ja atualizado
      })
    }
  
 
