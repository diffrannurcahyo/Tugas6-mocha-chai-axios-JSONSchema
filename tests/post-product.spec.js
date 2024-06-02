import chai from 'chai';
import chaiJsonSchemaAjv from 'chai-json-schema-ajv';
import axios from 'axios';
import { expect } from "chai";
import { productSchema } from "../schemas/product-schema.js";

chai.use(chaiJsonSchemaAjv);
describe('Product API POST Test', function() {
    it('should add a new product and return the added product', async function() {
        const newProduct = {
            title: "Basic Product",
            price: 15.99
        };
  
      const res = await axios.post('https://dummyjson.com/products/add', newProduct);
      expect(res.status).to.equal(201);
      console.log(res.status);
      expect(res.data).to.be.jsonSchema(productSchema);
      console.log(res.data)
    });
  });
  