export class HttpError extends Error {
    public code: number
    constructor(message, code) {
        super(message)
        this.code = code
    }
}
