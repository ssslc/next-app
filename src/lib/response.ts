import { NextResponse } from 'next/server';

// 统一定义响应状态码
export enum ResultCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

// 统一响应结构接口
export interface IApiResponse<T = any> {
  code: number;
  message: string;
  data: T | null;
  success: boolean;
  timestamp: number;
}

/**
 * 统一响应处理类
 */
export class Result {
  /**
   * 成功响应
   * @param data 返回数据
   * @param message 消息提示
   * @param code 业务状态码，默认为 200
   */
  static success<T>(data: T, message: string = 'Success', code: number = ResultCode.SUCCESS) {
    const body: IApiResponse<T> = {
      code,
      message,
      data,
      success: true,
      timestamp: Date.now(),
    };
    return NextResponse.json(body, { status: 200 }); // HTTP 状态码统一为 200，业务状态码在 body.code 中
  }

  /**
   * 失败响应
   * @param message 错误消息
   * @param code 业务状态码，默认为 500
   * @param status HTTP 状态码，默认为 200 (有些规范也可能希望 HTTP 状态码与业务码保持一致，这里保持灵活)
   */
  static error(message: string = 'Internal Server Error', code: number = ResultCode.INTERNAL_SERVER_ERROR, status: number = 200) {
    const body: IApiResponse<null> = {
      code,
      message,
      data: null,
      success: false,
      timestamp: Date.now(),
    };
    return NextResponse.json(body, { status });
  }

  /**
   * 参数错误响应
   * @param message 错误消息
   */
  static badRequest(message: string = 'Bad Request') {
    return Result.error(message, ResultCode.BAD_REQUEST, 400);
  }

  /**
   * 未授权响应
   * @param message 错误消息
   */
  static unauthorized(message: string = 'Unauthorized') {
    return Result.error(message, ResultCode.UNAUTHORIZED, 401);
  }
}