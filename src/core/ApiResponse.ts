// export class ApiResponse<T> {
//   IsSuccess: boolean;
//   Data?: T;
//   Message?: string;
//   Status?: number;

//   constructor(IsSuccess: boolean, Data?: T, Message?: string, Status?: number) {
//     this.IsSuccess = IsSuccess;
//     this.Data = Data;
//     this.Message = Message;
//     this.Status = Status;
//   }
// }

export interface ApiResponse<T = any> {
  IsSuccess: boolean;
  Message?: string;
  Data?: T;
  Errors?: any;
}