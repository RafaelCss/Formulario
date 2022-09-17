import { Alert, Spin } from 'antd';
import React, { ReactElement } from 'react';
interface Visivel {
  ativo : boolean
}
const Loading= ({}) => (
  <Spin tip="Carregando..." >

  </Spin>
);

export default Loading;