
import { dbContext } from '../db/DbContext'

class StarsService {
  async get(query = {}) {
    return await dbContext.Stars.find(query)
  }

  async create(data) {
    return await dbContext.Stars.create(data)
  }
}

export const starsService = new StarsService()
