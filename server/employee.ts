export class Employee {
  // ACCESS MODIFIER
  public firstName: string;
  public lastName: string;
  public salary: number;

  constructor(firstName: string, lastName: string, salary: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}
