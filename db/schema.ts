import { pgTable, serial, integer, text } from "drizzle-orm/pg-core";

export const resultados = pgTable("resultados", {
  id: serial().primaryKey(),
  posicao: integer("posicao").notNull(),
  numeroPeito: integer("numero_peito").notNull().unique(),
  nome: text("nome").notNull(),
  genero: text("genero").notNull(),
  idade: integer("idade"),
  categoria: text("categoria"),
  posicaoCategoria: text("posicao_categoria"),
  equipe: text("equipe"),
  distancia: text("distancia"),
  tempoChip: text("tempo_chip"),
  tempoLiquido: text("tempo_liquido"),
});
