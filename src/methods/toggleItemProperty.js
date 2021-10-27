const toggleItemProperty = (id, e) => {
  const { name } = e.currentTarget;
  this.setState(prevState => {
    let newItem = prevState.items.map(item =>
      item.id === id ? { ...item, [name]: !item[name] } : { ...item },
    );
    return { items: newItem };
  });
};
export default toggleItemProperty;
