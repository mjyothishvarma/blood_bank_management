const isLogin = (req, res, next) => {
    try {
        if (req.session.donor) {
            next(); 
        } else {
            console.error(`Unauthorized access attempt to ${req.originalUrl}`);
            return res.status(401).json({ message: "Please log in to continue." });
        }
    } catch (error) {
        console.error("Login check failed:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const isLogout = (req, res, next) => {
    try {
        if (req.session.donor) {
            console.error(`Attempt to access logout-protected route ${req.originalUrl}`);
            return res.status(403).json({ message: "You are already logged in." });
        } else {
            next(); 
        }
    } catch (error) {
        console.error("Logout check failed:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    isLogin,
    isLogout,
};
