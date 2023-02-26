const Product = require('../models/products')

const getAllProducts = async (req, res)=>{
    const {featured, company, name, sort, fields, numericFilters}=req.query;
    const queryObject ={};
    if(featured){
        queryObject.featured = featured;
    }
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex: name, $options: 'i'};
    }

    //Numeric filters: 
    if (numericFilters) {
        const operatorMap = {
          '>': '$gt',
          '>=': '$gte',
          '=': '$eq',
          '<': '$lt',
          '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
          regEx,
          (match) => `-${operatorMap[match]}-`
        );
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
          const [field, operator, value] = item.split('-');
          if (options.includes(field)) {
            queryObject[field] = { [operator]: Number(value) };
          }
        });
      }



    let result = Product.find(queryObject);
    
    if(sort){
        const sortList = sort.split(',').join(' ');
        result=result.sort(sortList)
    }
    else
    {
        result=sort('createdAt')
    }

    if(fields){
        const fieldList = fields.split(',').join(' ');
        result=result.select(fieldList)
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page-1)*limit;
    result = result.skip(skip).limit(limit);
    const products = await result;
    //this errror is thrown by async express errors, and diverts it to our error handler middileware
    // throw new Error('testing async errors');
    res.status(200).json({products})
}
const getAllStaticProducts = async (req, res)=>{
    const products = await Product.find({}).sort({name: 1, price: -1})
    res.send(200).json({products})
}

module.exports ={
    getAllProducts,
    getAllStaticProducts
}