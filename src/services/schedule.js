import { addScheduleItem } from "../api";

export class Scheduling {
  static async addSchedule(payload) {
    const data = await addScheduleItem(payload);
    return data;
  }

  static async editSchedule(payload) {
    const data = await editScheduleItem(payload);
    return data;
  }
}
