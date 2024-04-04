// Function to set cookie
function setCookie(res, name, value, options) {
    const cookie = `${name}=${value};${options}`;
    res.setHeader('Cookie', cookie);
}

// Function to parse cookie
function parseCookies(req) {
    const cookieHeader = req.headers.cookie;
    if (!cookieHeader) {
        return {};
    }
    return cookieHeader.split(';').reduce((cookies, cookie) => {
        const [name, value] = cookie.trim().split('=').map(decodeURIComponent);
        cookies[name] = value;
        return cookies;
    }, {});
}


export { setCookie, parseCookies }