import React, { useCallback, useState } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */

function App({ store }) {
  const list = store.getState().list;
  const cart = store.getState().cart;

  const [show, setShow] = useState(false);

  const callbacks = {
    onAdd: useCallback(
      (code) => {
        store.onAdd(code);
      },
      [store]
    ),

    onDelete: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),
  };

  return (
    <PageLayout>
      <Head title="Приложение на чистом JS" />
      <Controls cart={cart} setShow={setShow} />
      <List list={list} onAdd={callbacks.onAdd} />
      {show && (
        <Modal cart={cart} setShow={setShow} onDelete={callbacks.onDelete} />
      )}
    </PageLayout>
  );
}

export default App;
