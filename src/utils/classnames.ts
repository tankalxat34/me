/**
 * Возвращает соединенные пробелом строки
 * @param args Селекторы
 * @returns string
 */
const c = (...args: string[]) => {
  return [...args].join(" ");
};

export default c;
