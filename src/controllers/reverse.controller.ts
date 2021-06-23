import { Request, Response } from 'express';
import { Service } from 'typedi';
import ReverseService from '../services/reverse.service';

@Service()
export default class ReverseController {

    constructor (
        private reverseService: ReverseService
    ) {}

    public getReversedData(req: Request, res: Response): Response {

        const data: string = req.params.urlParam as string;

        const processedData: string = this.reverseService.getProcessedParam(data);

        return res.status(200).json({ data: processedData });
    }
}