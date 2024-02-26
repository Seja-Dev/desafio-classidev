import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "o nome deve ter pelo menos 3 caracteres"),
  description: z
    .string()
    .min(30, "A descrição deve ter pelo menos 30 caracteres")
    .max(400, "A descrição deve ter menos de 400 caracteres"),
  categoryId: z.string(),
  price: z.string(),
  tel: z.string().min(8, "O telefone deve ter pelo menos 8 digitos"),
});
