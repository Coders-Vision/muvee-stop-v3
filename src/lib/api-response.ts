export interface ResponseError {
  status_code: number;
  status_message: string;
  success: boolean;
}


export type ResponseSuccess<T = Record<string, any>> = T & {
};
// export interface ResponseSuccess<T extends {}> {}
