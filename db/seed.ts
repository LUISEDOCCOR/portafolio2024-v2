import { db, Certifications } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Certifications).values([
    {
      title: "Crea páginas web con HTML y CSS",
      content: "Curso sobre cómo crear y maquetar páginas usando HTML y CSS",
      link: "https://www.mastermind.ac/certificates/67103e6b5b66470480a38a5f773caed1",
    },
    {
      title: "¡Linux: de Noob a Pro en 9 horas!",
      content: "Sistemas operativos basados en Debian Linux.",
      link: "https://www.mastermind.ac/certificates/33290ab05fc14ed99e72c73613469b96",
    },
    {
      title: "Todo sobre la web con PHP",
      content: "Curso sobre cómo crear páginas usando PHP y MySQL",
      link: "https://www.mastermind.ac/certificates/5448a06270fa4afdb8da70dabe1f2ce8",
    },
    {
      title: "Frontend con HTML, CSS y JS",
      content: "Curso sobre cómo crear páginas usando HTML, CSS y JS",
      link: "https://www.mastermind.ac/certificates/551bc00405864777873a31006c8b55b5",
    },
    {
      title: "Master en Python: Aprender Python 3, Django, Flask y Tkinter",
      content: "Curso sobre backend con django",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-d39174ac-83e2-4138-925a-16d4458b585b.jpg?v=1703626184000",
    },
  ]);
}
