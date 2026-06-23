import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { resultados } from "../../db/schema.js";
import { eq } from "drizzle-orm";

export default async (req: Request) => {
  const url = new URL(req.url);
  const peito = url.searchParams.get("peito");

  if (!peito) {
    return Response.json(
      { erro: "Parâmetro 'peito' é obrigatório" },
      { status: 400 }
    );
  }

  const numeroPeito = parseInt(peito, 10);

  if (isNaN(numeroPeito) || numeroPeito <= 0) {
    return Response.json(
      { erro: "Número de peito inválido" },
      { status: 400 }
    );
  }

  const [resultado] = await db
    .select()
    .from(resultados)
    .where(eq(resultados.numeroPeito, numeroPeito));

  if (!resultado) {
    return Response.json(
      { erro: `Número de peito ${numeroPeito} não encontrado` },
      { status: 404 }
    );
  }

  return Response.json(resultado, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const config: Config = {
  path: "/api/resultado",
};
