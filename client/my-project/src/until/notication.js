import { message } from 'antd';

export function success (type)  {
  message.success(type);
};

export function errors (type)  {
  message.error(type);
};