function studentMoreThanSixtyPercent() {
    var output = registeredStudents.filter(x => x.markPercent>60);
    console.log(output);
}