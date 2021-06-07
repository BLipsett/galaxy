import BaseController from '../utils/BaseController'
import { starsService } from '../services/StarsService'
import { planetsService } from '../services/PlanetsService'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.get)
      .get('/:starId/planets', this.getPlanets)
      .post('', this.create)
  }

  async get(req, res, next) {
    try {
      let stars = await starsService.get()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      let planet = await planetsService.getPlanetsByStarId(req.params.starId)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let stars = await starsService.create(req.body)
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}
