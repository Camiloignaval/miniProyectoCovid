const logout = () => {
    document.getElementById('logout').addEventListener('click', () => {
        localStorage.clear();
        location.reload();

    })
}

export default logout;