import chai from 'chai';
import chaiJsonSchemaAjv from 'chai-json-schema-ajv';
import axios from 'axios';
import { expect } from "chai";
import { productSchema } from "../schemas/product-schema.js";

chai.use(chaiJsonSchemaAjv);

describe('PUT Product', function() {
    it('User mengupdate produk', async function() {
        const updatedProduct = {
            title: "Produk Kecantikan",
            price: 17.99
          };
  
      const res = await axios.put('https://dummyjson.com/products/1', updatedProduct);
      expect(res.status).to.equal(200);
      console.log(res.status);
      expect(res.data).to.be.jsonSchema(productSchema);
      console.log(res.data)
    });
  });
  