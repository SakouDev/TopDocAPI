import { HolidayDTO } from "../DTO/holiday.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Holiday } from "../models/holiday"

export class HolidayService {

    private holidayRepository: IRepository<HolidayDTO>

    constructor(holidayRepository : IRepository<HolidayDTO>) {
        this.holidayRepository = holidayRepository
    }

    async HolidayFindAll(): Promise<Array<HolidayDTO> | null>{
        return this.holidayRepository.findAll().then((data) => {
            return data
        })
    }

    async HolidayFindById(id : number): Promise<HolidayDTO | null>{
        return this.holidayRepository.findById(id).then((data) => {
            return data
        })
    }
    
    async HolidayCreate(holidays : Holiday): Promise<HolidayDTO | null>{
        return this.holidayRepository.create(holidays).then((data) => {
            return data
        })
    }

    async HolidayDelete(id : number): Promise<boolean | number>{
        return this.holidayRepository.delete(id).then((data : boolean | number) => {
            return data
        })
    }

    async HolidayUpdate(holiday : Holiday, id : number): Promise<boolean | number>{
        return this.holidayRepository.update(holiday, id).then((data) => {
            return data
        })
    }
    
}