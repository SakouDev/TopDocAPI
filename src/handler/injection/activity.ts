import { ActivityRepository } from '../../repository/activity.repository';
import { ActivityService } from '../../services/activity.service';
import { ActivityHandler } from "../activityHandler";

export const activityHandler = new ActivityHandler(new ActivityService(new ActivityRepository()));