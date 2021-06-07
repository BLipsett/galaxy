/* eslint-disable prefer-const */
import { dbContext } from '../db/DbContext'

class GalaxysService {
  async getAll() {
    const galaxys = await dbContext.Galaxys.find({})
    return galaxys
  }

  async create(data) {
    let galaxy = await dbContext.Galaxys.create(data)
    return galaxy
  }
}

export const galaxysService = new GalaxysService()
