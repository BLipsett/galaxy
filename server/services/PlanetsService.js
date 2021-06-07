import { dbContext } from '../db/DbContext'

class PlanetsService {
  async get() {
    let planets = await dbContext.Planets.find({})
    return planets
  }

  async create(data) {
    return await dbContext.Planets.create(data)
  }

  async getPlanetsByStarId(starId) {
    let planets = await dbContext.Planets.find({ starId }).populate('star', 'name')
    return planets
  }
}
export const planetsService = new PlanetsService()
