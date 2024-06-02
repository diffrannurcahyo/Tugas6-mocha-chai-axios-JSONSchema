import chai from 'chai';
import chaiJsonSchemaAjv from 'chai-json-schema-ajv';
import axios from 'axios';
import { expect } from "chai";
import { productSchema } from "../schemas/product-schema.js";

chai.use(chaiJsonSchemaAjv);

describe('DELETE Product', function() {
    it('User menghapus produk', async function() {
      const res = await axios.delete('https://dummyjson.com/products/1');

      expect(res.status).to.equal(200);
      console.log(res.status)
    });
  });  