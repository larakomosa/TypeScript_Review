"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var employee_1 = require("./employee");
var Company = /** @class */ (function () {
    function Company() {
        this.NUM_OF_STARTING_EMPLOYEES = 10;
        this.employees = [];
        this.timerCount = 0;
        this.timer = {};
        this.init();
    }
    Company.prototype.init = function () {
        while (this.employees.length < this.NUM_OF_STARTING_EMPLOYEES) {
            this.employees.push(this.createEmployee());
        }
        console.log(this.employees);
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
    };
    Company.prototype.onTimerInterval = function () {
        this.timerCount++;
        this.randomEvent();
    };
    Company.prototype.randomEvent = function () { };
    Company.prototype.createEmployee = function () {
        var newEmployee = new employee_1.Employee();
        newEmployee.promote();
        newEmployee.promote();
        newEmployee.promote();
        return newEmployee;
    };
    return Company;
}());
exports.Company = Company;
