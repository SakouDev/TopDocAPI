import { LocationDTO } from "../../types/DTO/location.dto";
import { LocationRepository } from "../../src/repository/location.repository";
import { LocationType } from "../../types/location";
import { Location } from "../../src/models/location";


describe('LocationRepository', () => {

    beforeEach(() => {
        jest.resetAllMocks()
    })

    describe('Find by ID', () => {
        it('retourne correctement les informations', async () => {

            const id = 1

            const FakeData: LocationType = {
                id: 1,
                zipCode: "62200",
                city: "Boulogne sur mer",
                address: "1 rue voltaire"
            }

            const Expected: LocationDTO = {
                zipCode: "62200",
                city: "Boulogne sur mer",
                address: "1 rue voltaire"
            }

            const repository = new LocationRepository()
            Location.findOne = jest.fn().mockResolvedValue(FakeData)

            const result = await repository.findById(id)

            expect(result).toEqual(Expected)
            expect(Location.findOne).toHaveBeenCalledTimes(1)
            expect(Location.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Create', () => {
        it("La création s'est bien dérouler", async () => {

            const FakeData: LocationDTO = {
                zipCode: "62200",
                city: "Boulogne sur mer",
                address: "1 rue voltaire"
            }

            const Expected: LocationDTO = {
                zipCode: "62200",
                city: "Boulogne sur mer",
                address: "1 rue voltaire"
            }

            const repository = new LocationRepository()
            Location.create = jest.fn().mockResolvedValue(FakeData)

            const result = await repository.create(FakeData)

            expect(result).toEqual(Expected)
            expect(Location.create).toHaveBeenCalledTimes(1)
        })
    })

})