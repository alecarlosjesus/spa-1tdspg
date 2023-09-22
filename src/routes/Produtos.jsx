import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";

export default function Produtos() {
  document.title = "Produtos";

  const [novaListaProdutos, setNovaListaProdutos] = useState([{}]);

  useEffect(() => {
    setNovaListaProdutos(ListaProdutos);
    console.log("useEffect que renderiza apenas uma vez!");
  }, []);

  return (
    <>
      <div>
        <h1>PRODUTOS</h1>

        <table className={classes.tabelaProd}>
          <thead className={classes.tabelaCabecalho}>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>IMG</th>
              <th>
                <Editar /> / <Excluir />
              </th>
            </tr>
          </thead>
          <tbody className={classes.tabelaCorpo}>
            {novaListaProdutos.map((produto, indice) => (
              <tr key={indice}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.desc}</td>
                <td>{produto.preco}</td>
                <td>
                  <img
                    className={classes.tblImg}
                    src={`${produto.img}`}
                    alt={`${produto.desc}`}
                  />
                </td>
                <td>
                  {" "}
                  <Link to={`/editar/produto/${produto.id}`}>
                    <Editar />
                  </Link>{" "}
                  /{" "}
                  <Link to={`/excluir/produto/${produto.id}`}>
                    <Excluir />
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className={classes.tabelaRodape}>
            <tr>
              <td colSpan={6}>
                PRODUTOS INFORMÁTICOS - QTD = {novaListaProdutos.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
