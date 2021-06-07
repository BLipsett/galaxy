import BaseController from '../utils/BaseController'
import { galaxysService } from '../services/GalaxysService'

export class GalaxysController extends BaseController {
  constructor() {
    super('api/galaxys')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const galaxys = await galaxysService.getAll()
      return res.send(galaxys)
    } catch (error) {
      next(error)
    }s
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxysService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
