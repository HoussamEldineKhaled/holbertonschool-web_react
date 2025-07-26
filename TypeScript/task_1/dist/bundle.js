/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
;
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass({
    firstName: "John",
    lastName: "Doe"
});
console.log(student.displayName());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVdBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBS0QsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFjO0lBQzNCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixlQUFlLEVBQUUsRUFBRTtDQUNwQixDQUFDO0FBUUYsSUFBTSxZQUFZLEdBQXlCLFVBQUMsU0FBaUIsRUFBRSxRQUFnQjtJQUMzRSxPQUFPLFVBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLENBQUUsQ0FBQztBQUNqRCxDQUFDLENBQUM7QUFjRjtJQUlFLHNCQUFZLEVBQThDO1lBQTdDLFNBQVMsaUJBQUUsUUFBUTtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFpQixJQUFJLFlBQVksQ0FBQztJQUM3QyxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVye1xyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcclxuICAgIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlciA9IHtcclxuICBmaXJzdE5hbWU6ICdKb2huJyxcclxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcclxuICBsYXN0TmFtZTogJ0RvZScsXHJcbiAgbG9jYXRpb246ICdMb25kb24nLFxyXG4gIGNvbnRyYWN0OiBmYWxzZSxcclxufTtcclxuXHJcblxyXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlcntcclxuICAgIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgZGlyZWN0b3IxOiBEaXJlY3RvcnMgPSB7XHJcbiAgZmlyc3ROYW1lOiAnSm9obicsXHJcbiAgbGFzdE5hbWU6ICdEb2UnLFxyXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcclxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxyXG4gIG51bWJlck9mUmVwb3J0czogMTcsXHJcbn07XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbntcclxuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIDogc3RyaW5nID0+e1xyXG4gICAgcmV0dXJuIGAke2ZpcnN0TmFtZS5jaGFyQXQoMCl9LiAke2xhc3ROYW1lfWA7XHJcbn07XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBTdHVkZW50Q2xhc3NDb25zdHJ1Y3RvcntcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNle1xyXG4gIHdvcmtPbkhvbWV3b3JrKCk6IFN0cmluZztcclxuICBkaXNsYXlOYW1lKCk6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgU3R1ZGVudENsYXNze1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHtmaXJzdE5hbWUsIGxhc3ROYW1lfTogU3R1ZGVudENsYXNzQ29uc3RydWN0b3Ipe1xyXG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgfVxyXG5cclxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmd7XHJcbiAgICByZXR1cm4gXCJDdXJyZW50bHkgd29ya2luZ1wiO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheU5hbWUoKTogc3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3R1ZGVudDogU3R1ZGVudENsYXNzID0gbmV3IFN0dWRlbnRDbGFzcyh7XHJcbiAgZmlyc3ROYW1lOiBcIkpvaG5cIixcclxuICBsYXN0TmFtZTogXCJEb2VcIlxyXG59KTtcclxuXHJcbmNvbnNvbGUubG9nKHN0dWRlbnQuZGlzcGxheU5hbWUoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==