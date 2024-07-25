import { defineDb, column, defineTable } from "astro:db";

const Projects = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    content: column.text(),
    stack: column.json(),
    preview: column.text(),
    github: column.text(),
    image: column.text(),
    isOpenSource: column.boolean({ default: false }),
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

const Images = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({ unique: true }),
    src: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Projects,
    Skills,
    Certifications,
    Images,
  },
});
