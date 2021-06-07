import BaseController from '../utils/BaseController'
import { planetsService } from '../services/PlanetsService'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.get)
      //.get('/:id', this.getPlanetByStarId)
      .post('', this.create)
  }

  async get(req, res, next) {
    try {
      let planets = await planetsService.get()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let planet = await planetsService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetByStarId(req, res, next) {
    try {
      let planet = await planetsService.getPlanetByStarId()
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}
