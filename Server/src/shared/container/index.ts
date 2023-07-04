import { container } from "tsyringe";

import { Database } from "../../util/database";
import { UserService } from "../../services/user.service";
import { NavigationService } from "../../services/navigation.service";
import { FeedbackService } from "../../services/feedback.service";

container.registerSingleton("Database", Database);
container.registerSingleton("UserService", UserService);
container.registerSingleton("NavigationService", NavigationService);
container.registerSingleton("FeedbackService", FeedbackService);
