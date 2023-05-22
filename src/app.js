import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from './components/cart';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const [cart, setCart] = useState([])
  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow((show) => !show)
  }
  // const callbacks = {
  //   onDeleteItem: useCallback((code) => {
  //     store.deleteItem(code);
  //   }, [store]),

  //   onSelectItem: useCallback((code) => {
  //     store.selectItem(code);
  //   }, [store]),

  //   onAddItem: useCallback(() => {
  //     store.addItem();
  //   }, [store])
  // }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls {...{cart, setCart, toggleShow}} />
      <List {...{list, cart, setCart}} />
      {isShow && <Cart {...{cart, setCart, setIsShow, isShow}} />}
    </PageLayout>
  );
}

export default App;
