import { buscarProdutos } from "../../../libs/servicos/rotas/Produtos/cadastro";
import type { ColumnsType } from 'antd/es/table';
import { Table, TablePaginationConfig } from "antd";
import { useEffect, useState } from "react";
import { FilterValue } from "antd/lib/table/interface";
import { Produto } from "../../../libs/Interfaces";

interface DataType {
  descricao: string;
  email: number;
  nomeFornecedor: string;
  nomeProduto: string;
  telefone: string;
  tipo: number;
  valor: string
}

const colunas: ColumnsType<DataType> = [
  {
    title: 'Nome do Fornecedor',
    dataIndex: 'nomeFornecedor',
    key: 'nomeFornecedor'
  },
  {
    title: 'Nome do produto',
    dataIndex: 'nomeProduto',
    key: 'nomeProduto'
  },
  {
    title: 'Valor do produto',
    dataIndex: 'valor',
    key: 'valor'
  },
]

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}
function TabelaProdutos() {
  const [data, setData] = useState<Produto[]| any>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  async function buscarProdutos() {
    setLoading(true);
    const produtos = await  buscarProdutos().then(res => setData(res))
    if(produtos != null){
      setLoading(false)
    }
  }

  useEffect(()=>{
    buscarProdutos()
  },[])

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'c'}}>
      <Table
        columns={colunas}
        rowKey={(record) => record.nomeFornecedor}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
      />
    </div>
  )

}

export default TabelaProdutos