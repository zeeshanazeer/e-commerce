import { z } from "zod";

 const schema = z.object({
  productName: z.string().min(3, { message:"Requrid  minimum 3 characters " }).max(20),
  discription: z.string().min(1, { message:"Requrid  minimum 3 characters " }).max(1000),
  price: z.string().min(2, {  message:"Requrid  Price"}),
  stock: z.string().min(2, {message:"Requrid Product Quantiiy"  })
//   age: z.number().min(10),
});
export default schema