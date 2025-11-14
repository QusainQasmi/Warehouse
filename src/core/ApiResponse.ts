export class ApiResponse<T> {
  IsSuccess: boolean;
  Data?: T;
  Message?: string;
  Status?: number;

  constructor(IsSuccess: boolean, Data?: T, Message?: string, Status?: number) {
    this.IsSuccess = IsSuccess;
    this.Data = Data;
    this.Message = Message;
    this.Status = Status;
  }
}