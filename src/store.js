import {generateCode} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      list: [...this.state.list, {code: generateCode(), title: 'Новая запись'}]
    })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? {...item, selected: false} : item;
      })
    })
  }
/**
   *  Добавление товара в корзину
   * @param code
   */

  addToCart(id){
    const currentProdcut = this.state.list.find(item => item.code === id)
    if(this.state.cart.some(item => item.code === currentProdcut.code)){
      this.setState({
          ...this.state,
          cart: [...this.state.cart.map(item => {
              if(item.code === currentProdcut.code){
                  return {
                      ...item,
                      count : item.count +1,
                      price: item.price + item.price/item.count,
                  }
              }
              return item
            })
          ],
          sumFromCart: this.state.cart.reduce((acumlyator, curentItem) => acumlyator + curentItem.price,0)
        })
    }else{
        this.setState({
          ...this.state,
          cart:  [...this.state.cart,
            {
                code: currentProdcut.code,
                title: currentProdcut.title,
                price: currentProdcut.price,
                count: 1
            }
          ],
          sumFromCart: this.state.cart.reduce((acumlyator, curentItem) => acumlyator + curentItem.price,0)
          })
    }
  }
  removeItem(id){
    this.setState({
      ...this.state,
      cart: [...this.state.cart.filter(item => item.code != id)]
    })
  }

}

export default Store;
