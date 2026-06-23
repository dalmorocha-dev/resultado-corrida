CREATE TABLE "resultados" (
	"id" serial PRIMARY KEY,
	"posicao" integer NOT NULL,
	"numero_peito" integer NOT NULL UNIQUE,
	"nome" text NOT NULL,
	"genero" text NOT NULL,
	"idade" integer,
	"categoria" text,
	"posicao_categoria" text,
	"equipe" text,
	"distancia" text,
	"tempo_chip" text,
	"tempo_liquido" text
);
