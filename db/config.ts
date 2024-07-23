import { defineDb, column, defineTable } from "astro:db";

const Project = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    content: column.text(),
    stack: column.json(),
    deploy: column.text(),
    github: column.text(),
  },
});

const Skills = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

const Certifications = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    content: column.text(),
    link: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Project,
    Skills,
    Certifications,
  },
});
