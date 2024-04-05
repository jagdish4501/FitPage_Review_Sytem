// Function to set cookie
function setCookie(res, token) {
    token = `token=${token}; path=/;secure=true`
    res.setHeader('Set-Cookie', token);
}
// Function to parse cookie
function parseCookies(req) {
    const cookieHeader = req.headers.cookie;
    if (!cookieHeader) {
        return {};
    }
    return cookieHeader.split(';').reduce((cookies, cookie) => {
        const index = cookie.indexOf('=');
        const name = cookie.substring(0, index).trim();
        const value = decodeURIComponent(cookie.substring(index + 1).trim());
        cookies[name] = value;
        return cookies;
    }, {});
}


export { setCookie, parseCookies }