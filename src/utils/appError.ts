class AppError extends Error {
  errorCode: string;
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default AppError;
