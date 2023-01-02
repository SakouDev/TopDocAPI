import { PlanningRepository } from '../../repository/planning.repository';
import { PlanningService } from '../../services/planning.service';
import { PlanningHandler } from '../planningHandler';

export const planningHandler = new PlanningHandler(new PlanningService(new PlanningRepository()));