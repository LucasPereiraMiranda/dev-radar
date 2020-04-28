const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
    async index(request,response){ //busca no aplicativo
        const {latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs)

        console.log(techsArray);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray, //devs que trabalham com alguma das tecnologias informadas
            },
            location: {
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude,latitude],
                    },
                    $maxDistance: 10000, // 10km
                }
            },
        });

        // buscar todos devs num raio de 10 km
        //filtrar por tecnologias
        return response.json({ devs })
    }
}