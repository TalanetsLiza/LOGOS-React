const getCount = (id) => (state) => {
    // console.log("selector");
    const busketItem = state.busket.data.find((item) => item.id === id);
    const count = busketItem?.count ?? 0;
    return count;
};

const busketSelectors = {
    getCount,
};

export default busketSelectors;
