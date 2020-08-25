import { Position } from './modules/enums/Position';
import * as data from './modules/data/names.json';
import { randomNumber } from './modules/utils/randomNumber';
import { MeritIncrease } from './modules/enums/MeritIncrease';

export class Employee {
  // ACCESS MODIFIER
  private firstName: string;
  private lastName: string;
  private salary: number;
  private position: Position;

  constructor(
    firstName?: string,
    lastName?: string,
    salary?: number,
    position?: Position
  ) {
    this.firstName = firstName ? firstName : this.generateFirstName();
    this.lastName = lastName ? lastName : this.generateLastName();
    this.salary = salary ? salary : 10000;
    this.position = position ? position : Position.ASSOCIATE;
  }

  private generateFirstName(): string {
    return data.first_names[randomNumber(0, data.first_names.length - 1)];
  }

  private generateLastName(): string {
    return data.last_names[randomNumber(0, data.last_names.length - 1)];
  }

  public promote(): void {
    switch (this.position) {
      case Position.ASSOCIATE:
        this.position = Position.ANALYST;
        this.salary = this.meritIncrease(MeritIncrease.ANALYST);
        break;
      case Position.ANALYST:
        this.position = Position.SENIOR_ANALYST;
        this.salary = this.meritIncrease(MeritIncrease.SENIOR_ANALYST);
        break;
      case Position.SENIOR_ANALYST:
        this.position = Position.MANAGER;
        this.salary = this.meritIncrease(MeritIncrease.MANAGER);
        break;
      case Position.MANAGER:
        this.position = Position.SENIOR_MANAGER;
        this.salary = this.meritIncrease(MeritIncrease.SENIOR_MANAGER);
        break;
      case Position.SENIOR_MANAGER:
        this.position = Position.DIRECTOR;
        this.salary = this.meritIncrease(MeritIncrease.DIRECTOR);
        break;
      case Position.DIRECTOR:
        this.position = Position.VICE_PRESIDENT;
        this.salary = this.meritIncrease(MeritIncrease.VICE_PRESIDENT);
        break;
      case Position.VICE_PRESIDENT:
        this.position = Position.SENIOR_VICE_PRESIDENT;
        this.salary = this.meritIncrease(MeritIncrease.SENIOR_VICE_PRESIDENT);
        break;
      case Position.SENIOR_VICE_PRESIDENT:
        this.position = Position.PRESIDENT;
        this.salary = this.meritIncrease(MeritIncrease.PRESIDENT);
        break;
    }
  }

  private meritIncrease(percentage: number): number {
    return this.salary * (1 + percentage);
  }

  // GETTERS AND SETTERS
  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getSalary(): number {
    return this.salary;
  }

  public setSalary(salary: number): void {
    this.salary = salary;
  }

  public getPosition(): Position {
    return this.position;
  }

  public setPosition(position: Position): void {
    this.position = position;
  }

  public getEmployeeInfo(): string {
    return `${this.firstName} ${this.lastName} - ${this.position} - ${this.salary}`;
  }
}
