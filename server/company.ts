import { Employee } from './employee';

export class Company {
  private readonly NUM_OF_STARTING_EMPLOYEES: number = 10;

  private employees: Employee[] = [];

  private timerCount: number = 0;
  private timer: Object = {};

  constructor() {
    this.init();
  }

  private init() {
    console.log('Hi! I am a new Company!');
    // CREATE RANDOM EMPLOYEES!

    while (this.employees.length < this.NUM_OF_STARTING_EMPLOYEES) {
      this.employees.push(this.createEmployee());
    }
    console.log(this.employees);

    this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
  }

  private onTimerInterval(): void {
    this.timerCount++;
    this.randomEvent();
  }

  private randomEvent(): void {}

  private createEmployee(): Employee {
    const newEmployee = new Employee('Scott', 'Bromander', 10000);
    return newEmployee;
  }
}
