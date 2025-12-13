import { ProgressionRules } from './types';

export const progressionRules: ProgressionRules = {
  "xp_system": {
    "base_xp_per_question": 10,
    "streak_multiplier": 0.1,
    "lesson_completion_bonus": 50,
    "perfect_lesson_bonus": 20
  },
  "unlock_logic": {
    "require_previous_lesson": true,
    "min_accuracy_to_unlock": 0.7
  },
  "failure_handling": {
    "max_hearts": 5,
    "hearts_regen_time_minutes": 30
  },
  "mastery": {
    "threshold_gold": 1.0,
    "threshold_silver": 0.85,
    "threshold_bronze": 0.7
  }
};