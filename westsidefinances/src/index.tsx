import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelande de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createAt: new Date("2021-02-14 11:00:00"),
        },
        // {
        //   id: 3,
        //   title: "Compras do mês",
        //   type: "withdraw",
        //   category: "Compras",
        //   amount: 500,
        //   creatAt: new Date("2021-02-15 15:13:40"),
        // },
        // {
        //   id: 4,
        //   title: "Estagio Front-end",
        //   type: "deposit",
        //   category: "Salario",
        //   amount: 1400,
        //   creatAt: new Date("2021-02-15 16:00:00"),
        // },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    // this.post('/transactions', (schema, request) => {
    //   const data = JSON.parse(request.requestBody)

    //   return schema.create('transation', data)
    // })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return this.schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
