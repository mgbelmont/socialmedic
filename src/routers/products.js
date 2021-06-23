
const express = require('express')
const router = express.Router()
const products = require('../usecases/products')

router.get('/',  async (request,response)=>{
    try{
        const allProducts= await products.getAll()
        response.json({ 
            success: true,
            message: 'All products',
            data: {
                products: allProducts
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at get all products',
            error:  error.message
            
        })
    }    
})

router.post('/', async (request,response)=>{
    try{
        const productCreated = await products.create(request.body)
        response.json({ 
            success: true,
            message: 'New Product created :D',
            data: {
                products: productCreated
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at Product creation',
            error:  error.message
            
        })
    }    
})

router.get('/:id',async (request,response)=>{
    try{
        const { id } = request.params
        const productById = await products.getById(id)
        response.json({ 
            success: true,
            message: 'Product Found',
            data: {
                products: productById            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at found product',
            error:  error.message
            
        })
    }    
})

router.patch('/:id', async (request, response)=>{
    try{
        const updatedProduct = await products.updateById(request.params.id, request.body)
        response.json({ 
            success: true,
            message: 'Product updated',
            data: {
                koders: updatedProduct
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at product update',
            error:  error.message
            
        })
    }
})

router.delete('/:id',async (request,response)=>{
    try{
        const { id } = request.params;
        const productDeleted = await products.deleteById(id);
        response.json({ 
            success: true,
            message: 'Product Deleted',
            data: {
                replies: productDeleted            
            }
        });

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at deleted product',
            error:  error.message    
        });
    }    
});

module.exports = router
