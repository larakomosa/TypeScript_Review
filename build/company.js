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
        console.log('Hi! I am a new Company!');
        // CREATE RANDOM EMPLOYEES!
        while (this.employees.length < this.NUM_OF_STARTING_EMPLOYEES) {
            this.createEmployee();
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
        var newEmployee = new employee_1.Employee('Scott', 'Bromander', 10000);
        this.employees.push(newEmployee);
    };
    return Company;
}());
exports.Company = Company;
