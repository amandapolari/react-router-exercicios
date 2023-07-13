export const goToHome = (navegate) => {
    navegate('/');
};

export const goToProfile = (navegate, name) => {
    navegate(`/profile/${name}`);
};

export const goToBiscoito = (navegate) => {
    navegate('/biscoito');
};

export const goToProducts = (navegate, id) => {
    navegate(`/product/${id}`);
};
