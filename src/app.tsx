import "./app.css";

import { createColumnHelper } from "@tanstack/react-table";
import Fuse, { type IFuseOptions } from "fuse.js";
import React from "react";

import { Table } from "./components/table.tsx";
import { enemies, type EnemyData } from "./data/enemies.ts";

const columnHelper = createColumnHelper<EnemyData>();
const columns = [
  columnHelper.accessor("id", { header: "ID" }),
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("dungeon", { header: "Habitat" }),
  columnHelper.accessor("drops", {
    header: "Materials",
    cell: (cell) => cell.getValue()?.join(", "),
  }),
];

const options: IFuseOptions<EnemyData> = {
  shouldSort: true,
  useExtendedSearch: true,
  keys: ["name", "location", "dungeon"],
};
const indexData = Fuse.createIndex(options.keys || [], enemies);
const fuse = new Fuse(enemies, options, indexData);

export const App = () => {
  const [value, setValue] = React.useState("");
  const filteredData = value.trim() ? fuse.search(value.trim()).map((i) => i.item) : enemies;

  return (
    <>
      <h1>YCTools</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      <Table<EnemyData> data={filteredData} columns={columns} />
    </>
  );
};
