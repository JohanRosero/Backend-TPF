import pg from "pg";
/* import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js"; */

export const pool = new pg.Pool({
  connectionString: 'postgresql://johan:ZILk4r35hom7dmO3B0XO9VEPSh3g8of0@dpg-ct28ntjqf0us73cjjpmg-a/turnos_5a9f'
});
