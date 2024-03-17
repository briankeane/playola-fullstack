import {Request, Response} from 'express';

export function index(req: Request, res: Response):void {
  res.status(200).json({ healthy: true });
}

export default {
  index,
};
