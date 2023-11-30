import { generateCode } from "./utils";

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
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
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

  onAdd(el) {
    let newCart;
    if (el.count) {
      el.count += 1;
      newCart = this.state.cart.filter((item) => item.title !== el.title);
    } else {
      el.count = 1;
      newCart = this.state.cart;
    }

    this.setState({
      ...this.state,
      cart: [...newCart, el],
    });
  }

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    const el = this.state.cart.find((item) => item.code === code);
    let newCart;

    if (el.count > 1) {
      newCart = this.state.cart.map((item) => {
        if (item.code === code) {
          item.count -= 1;
        }
        return item;
      });
    } else {
      newCart = this.state.cart.filter((item) => item.code !== code);
    }

    this.setState({
      ...this.state,
      cart: [...newCart],
    });
  }
}

export default Store;
