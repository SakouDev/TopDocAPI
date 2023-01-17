import { PlanningTestRepository } from '../../repository/planningTest.repository';
import { PlanningTestService } from '../../services/planningTest.service';
import { PlanningHandler } from '../planningHandler';

export const planningHandler = new PlanningHandler(new PlanningTestService(new PlanningTestRepository()));