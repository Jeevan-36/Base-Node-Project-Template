class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong") {
        super(message);
        this.statusCode = statusCode; 
        this.message = message;
        this.success = false;
    }

    toJSON() {
        return {
            statusCode: this.statusCode,
            message: this.message,
            success: this.success,
        };
    }
}

module.exports = ApiError;