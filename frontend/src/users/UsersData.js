
export const getUsers = () => {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : [];
};


export const saveUser = (userData) => {
    const usersData = getUsers();
    usersData.push(userData);
    localStorage.setItem('userData', JSON.stringify(usersData));
};

